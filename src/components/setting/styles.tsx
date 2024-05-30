import styled from "styled-components";
import palette from "../../lib/styles/palette";

export const InputLabel = styled.label`
    font-size: 14px;
    color: ${palette.gray1};
`;

export const TextInput = styled.input`
    width: 100%;
    border: 1px solid ${palette.gray5};
    box-sizing: border-box;
    border-radius: 5px;
    background-color: ${palette.white1};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.03em;
    text-align: left;
    padding: 14px 14px 12px;

    &::placeholder {
        color: ${palette.gray3};
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 200px;
    border: 1px solid ${palette.gray5};
    box-sizing: border-box;
    border-radius: 5px;
    background-color: ${palette.white1};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    resize: none;
    padding: 14px 14px 12px;

    &::placeholder {
        color: ${palette.gray3};
    }
`;
