import styled, { css } from "styled-components";
import palette from "../../../lib/styles/palette";
import { ReactComponent as ChevonIco } from "../../../assets/icon/chevron-up.svg";

export const basicDropdownTriggerStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    font-size: 12px;
    color: ${palette.black0};
    background-color: ${palette.white0};
    border: 1px solid ${palette.gray2};
    border-radius: 5px;
    cursor: pointer;
    padding: 13px 10px;
`;

export const basicDropdownMenuStyle = css`
    background-color: ${palette.white0};
    border: 1px solid ${palette.gray4};
    border-radius: 5px;
    padding: 10px;
`;

export const basicDropdownItemStyle = css`
    font-size: 12px;
    cursor: pointer;
    padding: 12px 0;
`;

export const DropdownIcon = styled(ChevonIco)<{ rotated: boolean }>`
    ${(props) =>
        props.rotated &&
        css`
            transform: rotate(180deg);
        `}
`;
