import styled, { css } from "styled-components";
import media from "../lib/styles/media";
import palette from "../lib/styles/palette";

import searchIco from "../static/icons/global/ico_find.svg";
import checkIco from "../static/icons/global/ico_check.svg";

export const BasicInput = styled.input<{ error?: boolean }>`
    border-radius: 4px;
    outline: none;
    transition: background-color 0.2s, border 0.2s;
    background-color: ${palette.purple5};
    border: 1px solid ${palette.purple3};

    ${(props) =>
        props.error &&
        css`
            background-color: ${palette.red1};
            border: 1px solid ${palette.red0};
        `}
`;

export const SearchInput = styled(BasicInput)`
    background-image: url(${searchIco});
    background-repeat: no-repeat;
    background-position: bottom 14px right 12px;
    background-size: 40px;
    padding: 21px 52px 21px 20px;

    ${media.mobile} {
        background-position: bottom 7px right 10px;
        background-size: 24px;
        padding: 10px 34px 9px 12px;
    }
`;

export const checkboxStyle = css`
    display: inline-grid;
    place-content: center;
    width: 22px;
    height: 22px;
    border-radius: 2px;
    border: 1px solid ${palette.black0};
    background-color: ${palette.white0};
    cursor: pointer;

    &::before {
        content: "";
        display: none;
        width: 22px;
        height: 22px;
        background-image: url(${checkIco});
        background-repeat: no-repeat;
        background-size: 22px;
        background-position: center;
    }

    input:checked + & {
        border: 1px solid ${palette.purple0};
        background-color: ${palette.purple0};

        &::before {
            display: inline-block;
        }
    }

    ${media.mobile} {
        width: 16px;
        height: 16px;

        &::before {
            width: 12px;
            height: 12px;
            background-size: 16px;
        }
    }
`;
