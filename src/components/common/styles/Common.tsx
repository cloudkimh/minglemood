import styled, { css } from "styled-components";
import Loader from "../../basics/Loader";
import {
    fadeIn,
    fadeInFromBottom,
    fadeOut,
} from "../../../lib/styles/animations";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import { withOpacity } from "../../../lib/styles/utils";
import ImageWithFallback from "../../basics/ImageWithFallback";

export const Avatar = styled(ImageWithFallback)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid ${palette.gray4}${withOpacity(0.5)};
`;

export const HorizontalBar = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${palette.gray5};
    border-radius: 0.5px;
`;

export const SectionDivider = styled(HorizontalBar)`
    height: 8px;
    background-color: ${palette.white3};
`;

export const VerticalBar = styled.div`
    width: 1px;
    height: 100%;
    background-color: ${palette.gray5};
    border-radius: 0.5px;
`;

export const ButtonLoader = styled.div`
    width: 32px;
    height: 32px;
    margin-top: -6px;
    margin-left: -4px;

    ${Loader.SpinnerBg} {
        width: 28px;
        height: 28px;
        margin: 4px;
        border: 3px solid ${palette.gray2};
    }

    ${Loader.Spinner} {
        width: 28px;
        height: 28px;
        margin: 4px;
        border: 3px solid ${palette.white0};
        border-color: ${palette.white0} transparent transparent transparent;
    }

    ${media.mobile} {
        width: 24px;
        height: 24px;
        margin-top: -4px;
        margin-left: -2px;

        ${Loader.SpinnerBg} {
            width: 20px;
            height: 20px;
            margin: 4px;
            border: 2px solid ${palette.gray2};
        }

        ${Loader.Spinner} {
            width: 20px;
            height: 20px;
            margin: 4px;
            border: 2px solid ${palette.white0};
            border-color: ${palette.white0} transparent transparent transparent;
        }
    }
`;

export const FadeInBlock = styled.div`
    opacity: 0;
    animation: ${fadeInFromBottom} 0.25s ease-in-out forwards;
`;

export const FadeInOutBlock = styled.div<{ startFadeOut: boolean }>`
    animation: ${fadeIn} 0.25s ease-in-out;

    ${(props) =>
        props.startFadeOut &&
        css`
            animation: ${fadeOut} 0.25s ease-in-out forwards;
        `}
`;

export const SampleIco = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${palette.red2};
`;
