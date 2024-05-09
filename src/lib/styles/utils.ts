import { css } from "styled-components";

export const ellipsis = css`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    overflow-y: hidden;
`;

export const nbsp = "\u00A0";

export const withOpacity = (opacity: number) =>
    Math.floor(opacity * 255)
        .toString(16)
        .padStart(2, "0");

export const getSampleImage = (sizes?: {
    width?: number;
    height?: number;
}): string => {
    // max: 1000, min: 200
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
