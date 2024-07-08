import styled from "styled-components";
import palette from "../../../lib/styles/palette";

export const TextInput = styled.input`
    font-size: 12px;
    border: 1px solid ${palette.gray4};
    border-radius: 5px;
    outline: none;
    padding: 13px 10px;

    &::placeholder {
        color: ${palette.gray4};
    }

    &:focus {
        border: 1px solid ${palette.red500};
    }
`;
