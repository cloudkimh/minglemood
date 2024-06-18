import styled from "styled-components";
import palette from "../../../lib/styles/palette";

export const ModalBody = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 100%;
    background-color: ${palette.white0};
    border-radius: 16px 16px 0 0;

    &::before {
        content: "";
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        width: 35px;
        height: 3px;
        background-color: ${palette.gray4};
        border-radius: 2px;
    }
`;

export const ModalCloseBtn = styled.button`
    display: block;
    margin-left: auto;
`;
