import styled, { css } from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import { fadeIn, fadeOut } from "../../../lib/styles/animations";

export const DropdownBasicTrigger = styled.div`
    ${fonts.size.scale16}
    ${fonts.weightxx.bold}
    display: flex;
    align-items: center;
    width: 160px;
    height: 52px;
    color: ${palette.gray0};
    border: 1px solid ${palette.gray4};
    border-radius: 4px;
    cursor: pointer;
    padding: 0 10px;

    ${media.mobile} {
        width: auto;
        height: 36px;
        padding: 8px 6px 8px 10px;
    }
`;

export const DropdownBasicMenu = styled.div<{ visible: boolean }>`
    position: absolute;
    top: 56px;
    left: 0;
    z-index: 1;
    width: 160px;
    max-height: 160px;
    overflow-y: auto;
    background-color: ${palette.white2};
    border: 1px solid ${palette.gray4};
    border-radius: 4px;
    box-shadow: 0 4px 4px ${palette.shadow1};
    padding: 4px 14px 4px 4px;

    ${(props) =>
        props.visible
            ? css`
                  animation: ${fadeIn} 0.15s ease-in forwards;
              `
            : css`
                  animation: ${fadeOut} 0.15s ease-in forwards;
              `}

    ${media.mobile} {
        position: fixed;
        top: unset;
        bottom: 0;
        display: grid;
        grid-template-rows: 64px 1fr;
        width: 100%;
        height: 372px;
        max-height: none;
        z-index: 1001;
        border-radius: 0;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        padding: 0;
    }
`;

export const DropdownBasicItem = styled.div<{ selected: boolean }>`
    ${fonts.size.scale16}
    cursor: pointer;
    transition: background-color 0.2s;
    border-radius: 4px;
    padding: 11px 14px 9px;

    &:hover {
        background-color: ${palette.purple5};
    }

    ${(props) =>
        props.selected
            ? css`
                  ${fonts.weightxx.bold}
                  color: ${palette.purple0};
              `
            : css`
                  ${fonts.weightxx.regular}
                  color: ${palette.gray0};
              `}

    ${media.mobile} {
        border-radius: 0;
        border-bottom: 1px solid ${palette.gray4};
        padding: 18px 12px;
    }
`;
