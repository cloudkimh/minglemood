import { ReactNode, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { fadeIn, popup } from "../../lib/styles/animations";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import {
    focusOnLastTriggerElement,
    setLastTriggerElement,
} from "../../lib/utils";

export type PopupProp = {
    open: boolean;
    content: ReactNode;
    buttons?: ReactNode;
    responsive?: boolean;
    className?: string;
};

function Popup(props: PopupProp) {
    const { open, content, buttons, responsive, className } = props;
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (open) {
            if (popupRef.current) {
                popupRef.current.focus();
            }
        }

        return () => {
            focusOnLastTriggerElement();
            setLastTriggerElement(null);
        };
    }, [open]);

    if (!open) {
        return null;
    }

    return (
        <BackgroundLayer responsive={!!responsive}>
            <Block
                className={className}
                ref={popupRef}
                role="dialog"
                tabIndex={-1}
                responsive={!!responsive}
            >
                <ContentContainer responsive={!!responsive}>
                    {content}
                </ContentContainer>
                {buttons && (
                    <ButtonContainer responsive={!!responsive}>
                        {buttons}
                    </ButtonContainer>
                )}
            </Block>
        </BackgroundLayer>
    );
}

const BackgroundLayer = styled.div<{ responsive: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: #333333d9;
    animation: ${fadeIn} 0.1s ease-in-out forwards;
`;

const Block = styled.div<{ responsive: boolean }>`
    opacity: 0;
    background-color: ${palette.white2};
    box-shadow: 0 0 12px #33333333;
    animation: ${popup} 0.2s forwards;

    ${(props) =>
        props.responsive
            ? css`
                  width: 530px;
                  border-radius: 28px;

                  ${media.mobile} {
                      width: 320px;
                      border-radius: 12px;
                  }
              `
            : css`
                  width: 320px;
                  border-radius: 12px;
              `}
`;

const ContentContainer = styled.div<{ responsive: boolean }>`
    ${(props) =>
        props.responsive
            ? css`
                  padding: 68px 48px 60px;

                  ${media.mobile} {
                      padding: 44px 28px 36px;
                  }
              `
            : css`
                  width: 100%;
                  padding: 44px 28px 36px;
              `}
`;

const ButtonContainer = styled.div<{ responsive: boolean }>`
    width: 100%;
    border: 1px solid ${palette.purple0};
    overflow: hidden;

    ${(props) =>
        props.responsive
            ? css`
                  height: 68px;
                  border-bottom-left-radius: 28px;
                  border-bottom-right-radius: 28px;

                  ${media.mobile} {
                      height: 52px;
                      border-bottom-left-radius: 12px;
                      border-bottom-right-radius: 12px;
                  }
              `
            : css`
                  height: 52px;
                  border-bottom-left-radius: 12px;
                  border-bottom-right-radius: 12px;
              `}
`;

const FullSizeBtn = styled.button<{ responsive?: boolean }>`
    width: 100%;
    height: 100%;
    font-weight: ${fonts.weight.bold};
    text-align: center;
    background-color: ${palette.purple0};
    color: ${palette.white0};

    ${(props) =>
        props.responsive
            ? css`
                  ${fonts.size.scale20}
                  padding: 23px 0;

                  ${media.mobile} {
                      padding: 17px 0;
                  }
              `
            : css`
                  font-size: 15px;
                  padding: 17px 0;
              `}
`;

const HalfSizeOutlineBtn = styled(FullSizeBtn)`
    width: 50%;
    background-color: ${palette.white2};
    color: ${palette.purple0};
`;

const HalfSizeMainBtn = styled(FullSizeBtn)`
    width: 50%;
    background-color: ${palette.purple0};
    color: ${palette.white0};
`;

Popup.BackgroundLayer = BackgroundLayer;
Popup.ContentContainer = ContentContainer;
Popup.ButtonContainer = ButtonContainer;
Popup.FullSizeBtn = FullSizeBtn;
Popup.HalfSizeOutlineBtn = HalfSizeOutlineBtn;
Popup.HalfSizeMainBtn = HalfSizeMainBtn;

export default Popup;
