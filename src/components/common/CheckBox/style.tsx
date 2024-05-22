import styled from "styled-components";
import palette from "../../../lib/styles/palette";

export const ChipCheckBox = styled.div`
    label {
        display: block;
        font-size: 13px;
        border-radius: 20px;
        color: ${palette.gray0};
        background-color: ${palette.white2};
        border: 1px solid ${palette.white2};
        padding: 7px 10px 6px;
    }

    input:checked + label {
        color: ${palette.red500};
        background-color: ${palette.red100};
        border: 1px solid ${palette.red500};
    }
`;
