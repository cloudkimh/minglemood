import styled, { css } from "styled-components";
import palette from "../../../lib/styles/palette";

export const DefaultButton = styled.button<{
    styleType: "filled" | "outlined";
    color: string;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-weight: 700;

    ${(props) =>
        props.styleType === "filled"
            ? css`
                  background-color: ${props.color};
                  color: ${palette.white0};
              `
            : css`
                  background-color: ${palette.white0};
                  color: ${props.color};
                  border: 1px solid ${props.color};
              `}
`;
