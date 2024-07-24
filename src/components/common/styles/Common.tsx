import styled, { css } from "styled-components";
import {
    fadeIn,
    fadeInFromBottom,
    fadeOut,
} from "../../../lib/styles/animations";
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
