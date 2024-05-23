import styled from "styled-components";
import palette from "../../../lib/styles/palette";

export const ModalBody = styled.div`
    width: 100%;
    height: 100%;
    max-height: 100%;
    background-color: ${palette.white0};
    border-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
`;

export const ModalCloseBtn = styled.button`
    display: block;
    margin-left: auto;
`;
