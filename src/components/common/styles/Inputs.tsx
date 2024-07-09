import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import { hideSpinBtn } from "../../../lib/styles/utils";

export const TextInput = styled.input`
    ${hideSpinBtn}
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

export const TextArea = styled.textarea`
    width: 100%;
    height: 200px;
    font-size: 12px;
    line-height: 14px;
    border: 1px solid ${palette.gray4};
    border-radius: 5px;
    outline: none;
    resize: none;
    padding: 10px 10px;

    &::placeholder {
        color: ${palette.gray4};
    }

    &:focus {
        border: 1px solid ${palette.red500};
    }
`;
