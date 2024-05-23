import styled from "styled-components";
import palette from "../../../lib/styles/palette";

export const BasicBtn = styled.button<{
    textColor?: string;
    bgColor?: string;
    hoverColor?: string;
}>`
    display: grid;
    place-content: center;
    border-radius: 4px;
    background-color: ${({ bgColor }) => (bgColor ? bgColor : palette.purple0)};
    color: ${({ textColor }) => (textColor ? textColor : palette.white0)};
    transition: background-color 0.2s;

    &:hover {
        background-color: ${({ hoverColor }) =>
            hoverColor ? hoverColor : palette.purple3};
    }
`;

export const OutlineBtn = styled(BasicBtn)`
    background-color: ${({ bgColor }) => (bgColor ? bgColor : palette.white0)};
    border: 1px solid
        ${({ textColor }) => (textColor ? textColor : palette.purple0)};
    color: ${({ textColor }) => (textColor ? textColor : palette.purple0)};

    &:hover {
        background-color: ${({ hoverColor }) =>
            hoverColor ? hoverColor : palette.purple5};
    }
`;

export const UnderLineBtn = styled.button`
    color: ${palette.purple0};
    border-bottom: 1px solid ${palette.purple0};
    padding-bottom: 1.5px;
`;
