import { ReactNode, useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import useDisapearingAnime from "../../lib/hooks/useDisapearingAnime";
import { fadeIn, fadeOut } from "../../lib/styles/animations";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { withOpacity } from "../../lib/styles/utils";
import { setPreventScroll } from "../../lib/utils";

export type ModalTemplateProp = {
    onClick?: Function;
    className?: string;
    children: ReactNode;
    isVisible: boolean;
};

function ModalTemplate(props: ModalTemplateProp) {
    const { className, isVisible, children, onClick } = props;
    const modalWrapperRef = useRef<HTMLDivElement>(null);
    const { isAnimated, isDisapeared } = useDisapearingAnime(isVisible, 200);
    const closed = !isAnimated && !isVisible && isDisapeared;

    const lockScroll = () => {
        setPreventScroll(true);
    };

    const unlockScroll = () => {
        setPreventScroll(false);
    };

    const onLayerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (onClick && e.target === e.currentTarget) {
            onClick();
        }
    };

    useEffect(() => {
        if (isVisible) {
            lockScroll();

            if (modalWrapperRef.current) {
                modalWrapperRef.current.focus();
            }
        } else {
            unlockScroll();
        }
    }, [isVisible]);

    useEffect(() => {
        return () => {
            unlockScroll();
        };
    }, []);

    if (closed) return null;

    return (
        <Block className={className}>
            <BackgroundLayer isVisible={isVisible} />
            <ModalWrapper
                ref={modalWrapperRef}
                isVisible={isVisible}
                onClick={onLayerClick}
            >
                {children}
            </ModalWrapper>
        </Block>
    );
}

const Block = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
`;

const BackgroundLayer = styled.div<{ isVisible: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
    background-color: ${palette.black0}${withOpacity(0.85)};

    ${({ isVisible }) => {
        if (isVisible) {
            return css`
                animation: ${fadeIn} 0.2s ease-in-out forwards;
            `;
        } else if (!isVisible) {
            return css`
                animation: ${fadeOut} 0.2s ease-in-out forwards;
            `;
        }
    }}
`;

const up = keyframes`
    0% {
        transform: translateY(200px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 100%;
    }

    ${media.mobile} {
        0% {
            transform: translateY(100px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 100%;
        }
    }
`;

const down = keyframes`
    0% {
        transform: translateY(0);
        opacity: 100%;
    }
    100% {
        transform: translateY(300px);
        opacity: 0;
    }

    ${media.mobile} {
        0% {
            transform: translateY(0);
            opacity: 100%;
        }
        100% {
            transform: translateY(200px);
            opacity: 0;
        }
    }
`;

const ModalWrapper = styled.div<{ isVisible: boolean }>`
    display: grid;
    place-items: center;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    width: 100%;
    height: 100%;
    padding: 48px 0;

    ${({ isVisible }) => {
        if (isVisible) {
            return css`
                animation: ${up} 0.2s ease-in-out forwards;
            `;
        } else if (!isVisible) {
            return css`
                animation: ${down} 0.2s ease-in-out forwards;
            `;
        }
    }}

    ${media.mobile} {
        padding: 60px 0 0;
    }
`;

ModalTemplate.BackgroundLayer = BackgroundLayer;
ModalTemplate.ModalWrapper = ModalWrapper;

export default ModalTemplate;
