import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";
import { DefaultButton } from "../common/styles/Buttons";

export const BottomBtn = styled(DefaultButton).attrs({
    color: palette.red500,
    styleType: "filled",
})`
    width: 100%;
    font-size: 13px;
    padding: 12px 0;

    ${(props) =>
        props.disabled &&
        css`
            background-color: ${palette.gray4};
        `}
`;
