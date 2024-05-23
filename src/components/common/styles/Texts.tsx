import styled, { css } from "styled-components";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import fonts from "../../../lib/styles/fonts";

import errorIco from "../static/icons/global/ico_alert_circle.svg";

export const HighLightText = styled.span`
    position: relative;
    z-index: 0;

    &::before {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        display: inline-block;
        width: 100%;
        height: 4px;
        border-radius: 4px;
        background-color: ${palette.purple5};
        z-index: -1;
    }

    ${media.mobile} {
        &::before {
            top: 0;
            width: 100%;
            height: 100%;
            border-radius: 0;
        }
    }
`;

export const UnderLineText = styled.span`
    position: relative;
    z-index: 0;

    &::before {
        content: "";
        position: absolute;
        bottom: 1px;
        left: 50%;
        transform: translateX(-50%);
        width: 105%;
        height: 3px;
        border-radius: 2px;
        background-color: ${palette.purple5};
        z-index: -1;
    }
`;

export const ErrorMessage = styled.p<{ error: boolean }>`
    ${fonts.size.scale18}
    ${fonts.lineHeight.scale18}
    position: relative;
    display: inline-flex;
    align-items: center;
    color: ${palette.red0};
    transition: transform 0.2s, opacity 0.2s;
    padding-top: 2px;
    padding-left: 26px;
    margin-top: 16px;

    ${(props) =>
        props.error
            ? css`
                  transform: translateY(0px);
                  opacity: 100%;

                  &:before {
                      transform: translateY(0px);
                      opacity: 100%;
                  }
              `
            : css`
                  transform: translateY(3px);
                  opacity: 0%;

                  &:before {
                      transform: translateY(3px);
                      opacity: 0%;
                  }
              `}

    &:before {
        position: absolute;
        top: 3px;
        left: 0;
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        transition: transform 0.2s, opacity 0.2s;
        background-image: url(${errorIco});
        background-repeat: no-repeat;
        background-size: 20px;
        background-position: center;
    }

    ${media.mobile} {
        padding-left: 20px;
        margin-top: 10px;

        &:before {
            top: 5px;
            width: 16px;
            height: 16px;
            background-size: 16px;
            background-position: center;
        }
    }
`;

export const ColorBgTag = styled.span<{ bgColor?: string; textColor?: string }>`
    color: ${(props) => (props.textColor ? props.textColor : palette.white0)};
    background-color: ${(props) =>
        props.bgColor ? props.bgColor : palette.purple0};
    border-radius: 0.25em;
    vertical-align: middle;
    padding: 0.25em 0.375em;
`;

export const StoryHeading1 = styled.h1<{ dark?: boolean }>`
    ${fonts.weightxx.exbold}
    ${fonts.size.scale20}

    ${(props) =>
        props.dark &&
        css`
            color: ${palette.white0};
        `}
`;

export default ErrorMessage;
