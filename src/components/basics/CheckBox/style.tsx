import styled from "styled-components";
import palette from "../../../lib/styles/palette";

export const ChipCheckBox = styled.div`
    label {
        display: block;
        font-size: 11px;
        font-weight: 700;
        border-radius: 20px;
        color: ${palette.gray2};
        background-color: ${palette.white0};
        border: 1px solid ${palette.gray5};
        padding: 7px 10px 6px;
    }

    input:checked + label {
        color: ${palette.red500};
        background-color: ${palette.white0};
        border: 1px solid ${palette.red500};
    }
`;
