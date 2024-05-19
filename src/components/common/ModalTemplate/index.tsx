import { ReactNode, useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import { fadeIn, fadeOut } from "../../../lib/styles/animations";
import palette from "../../../lib/styles/palette";
import { withOpacity } from "../../../lib/styles/utils";
import { setPreventScroll } from "../../../lib/utils";
import useDisappearingAnimation from "../../../lib/hooks/useDisappearingAnimation";

export type ModalTemplateProp = {
    handleLayerClick?: Function;
    visible: boolean;
    children: ReactNode;
    className?: string;
};

function ModalTemplate(props: ModalTemplateProp) {
    const { className, visible, children, handleLayerClick } = props;
    const modalWrapperRef = useRef<HTMLDivElement>(null);
    const [disappeared] = useDisappearingAnimation({
        startDisappearing: !visible,
        animationTime: 200,
    });

    const lockScroll = () => {
        setPreventScroll(true);
    };

    const unlockScroll = () => {
        setPreventScroll(false);
    };

    const onLayerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (handleLayerClick && e.target === e.currentTarget) {
            handleLayerClick();
        }
    };

    useEffect(() => {
        if (visible) {
            lockScroll();

            if (modalWrapperRef.current) {
                modalWrapperRef.current.focus();
            }
        } else {
            unlockScroll();
        }
    }, [visible]);

    useEffect(() => {
        return () => {
            unlockScroll();
        };
    }, []);

    if (disappeared) return null;

    return (
        <Block className={className}>
            <BackgroundLayer visible={visible} />
            <ModalWrapper
                ref={modalWrapperRef}
                visible={visible}
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
    max-width: 768px;
    width: 100%;
    height: 100%;
    z-index: 1000;
`;

const BackgroundLayer = styled.div<{ visible: boolean }>`
    position: fixed;
    top: 0;
    max-width: 768px;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
    background-color: ${palette.black0}${withOpacity(0.85)};

    ${({ visible }) => {
        if (visible) {
            return css`
                animation: ${fadeIn} 0.3s ease-in-out forwards;
            `;
        } else {
            return css`
                animation: ${fadeOut} 0.3s ease-in-out forwards;
            `;
        }
    }}
`;

const appear = keyframes`
    0% {
        transform: translateY(100vh);
    }
    100% {
        transform: translateY(0);
    }
`;

const disappear = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(100vh);
    }
`;

const ModalWrapper = styled.div<{ visible: boolean }>`
    display: grid;
    place-items: end;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    width: 100%;
    height: 100%;

    ${({ visible }) => {
        if (visible) {
            return css`
                animation: ${appear} 0.3s ease-in-out forwards;
            `;
        } else {
            return css`
                animation: ${disappear} 0.3s ease-in-out forwards;
            `;
        }
    }}
`;

ModalTemplate.BackgroundLayer = BackgroundLayer;
ModalTemplate.ModalWrapper = ModalWrapper;

export default ModalTemplate;
