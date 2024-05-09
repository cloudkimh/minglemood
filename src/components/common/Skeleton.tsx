import styled, { css, Keyframes } from "styled-components";
import palette from "../../lib/styles/palette";
import { light } from "../../lib/styles/animations";

export const SkelElem = styled.div<{
    idx: number;
    size?: "sm" | "lg";
    animation?: Keyframes;
}>`
    background-color: ${palette.gray5};
    animation: ${(props) => props.animation || light} 3s
        ${(props) => `0.${props.idx * 2}s`} ease-in-out infinite;

    ${(props) => {
        switch (props.size) {
            case "sm":
                return css`
                    border-radius: 4px;
                `;
            case "lg":
                return css`
                    border-radius: 8px;
                `;
            default:
                return;
        }
    }}
`;
