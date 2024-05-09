import OutsideClickHandler from "react-outside-click-handler";
import useDisapearingAnime from "../../../lib/hooks/useDisapearingAnime";
import styled, { css } from "styled-components";
import {
    fadeOut,
    fadeIn,
    moveUp,
    moveDown,
} from "../../../lib/styles/animations";
import { ModalCloseBtn, ModalCloseIco } from "../../../styles/Modal";
import ModalHeader from "../ModalHeader";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import { withOpacity } from "../../../lib/styles/utils";
import fonts from "../../../lib/styles/fonts";
import { DropdownBasicMenu } from "./styles";

export type ModalTypeMenuProps = {
    className?: string;
    children: React.ReactNode;
    isOpened: boolean;
    headerText?: string;
    onClose: Function;
};

function ModalTypeMenu(props: ModalTypeMenuProps) {
    const { children, className, isOpened, headerText, onClose } = props;
    const { isDisapeared } = useDisapearingAnime(isOpened, 150);

    if (isDisapeared) {
        return null;
    }

    return (
        <>
            <Layer visible={isOpened} />
            <OutsideClickHandler
                onOutsideClick={(e) => {
                    onClose();
                }}
            >
                <Menu className={className} visible={isOpened}>
                    <Header
                        center={<HeaderText>{headerText}</HeaderText>}
                        right={
                            <ModalCloseBtn
                                onClick={() => {
                                    onClose();
                                }}
                            >
                                <ModalCloseIco />
                            </ModalCloseBtn>
                        }
                    />
                    <Body>{children}</Body>
                </Menu>
            </OutsideClickHandler>
        </>
    );
}

const Layer = styled.div<{ visible: boolean }>`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${palette.black0}${withOpacity(0.5)};
    z-index: 1000;

    ${(props) =>
        props.visible
            ? css`
                  animation: ${fadeIn} 0.15s ease-in-out;
              `
            : css`
                  animation: ${fadeOut} 0.15s ease-in-out;
              `}

    ${media.mobile} {
        display: block;
    }
`;

const Menu = styled(DropdownBasicMenu)`
    ${(props) =>
        props.visible
            ? css`
                  animation: ${fadeIn} 0.15s ease-in forwards;
              `
            : css`
                  animation: ${fadeOut} 0.15s ease-in forwards;
              `}

    ${media.mobile} {
        height: 206px;

        ${(props) =>
            props.visible
                ? css`
                      animation: ${moveUp} 0.15s ease-in forwards;
                  `
                : css`
                      animation: ${moveDown} 0.15s ease-in forwards;
                  `}
    }
`;

const Header = styled(ModalHeader)`
    display: none;

    ${media.mobile} {
        display: grid;
        width: 100%;
        border-bottom: 1px solid ${palette.gray4};
    }
`;

const HeaderText = styled.p`
    ${fonts.weightxx.bold}
    font-size: 14px;
    text-align: center;
`;

const Body = styled.div`
    ${media.mobile} {
        height: 100%;
        overflow-y: auto;
        padding: 12px 20px;
    }
`;

ModalTypeMenu.Layer = Header;
ModalTypeMenu.Header = Header;
ModalTypeMenu.HeaderText = HeaderText;
ModalTypeMenu.Body = Body;

export default ModalTypeMenu;
