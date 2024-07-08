import { css } from "styled-components";

export const ellipsis = css`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    overflow-y: hidden;
`;

export const withOpacity = (opacity: number) =>
    Math.floor(opacity * 255)
        .toString(16)
        .padStart(2, "0");

export const getSampleImage = (sizes?: {
    width?: number;
    height?: number;
}): string => {
    // 최대크기 1000px, 최소크기 200px
    const _width =
        sizes && sizes.width
            ? sizes.width
            : Math.floor(Math.random() * (1000 - 200) + 200);
    const _height =
        sizes && sizes.height
            ? sizes.height
            : Math.floor(Math.random() * (1000 - 200) + 200);
    return `https://picsum.photos/${_width}/${_height}`;
};

export const multiLineEllipsis = (lineNum: number) => css`
    display: -webkit-box;
    text-overflow: ellipsis;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${lineNum};
    overflow: hidden;
`;

export const hideScrollBar = css`
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const hideSpinBtn = css`
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type="number"] {
        -moz-appearance: textfield;
    }
`;
