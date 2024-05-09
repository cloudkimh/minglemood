import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import palette from "../../../lib/styles/palette";
import media from "../../../lib/styles/media";

import checkIco from "../../../static/icons/global/ico_check.svg";
import { fadeIn } from "../../../lib/styles/animations";

export const BasicCheckBox = styled.div`
    display: inline-block;

    input {
        position: absolute;
        left: -9999px;
        opacity: 0;
    }

    label {
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
            animation: ${fadeIn} 0.2s;
        }
    }

    input:checked + label {
        border: 1px solid ${palette.purple0};
        background-color: ${palette.purple0};

        &::before {
            display: inline-block;
        }
    }

    ${media.mobile} {
        label {
            width: 16px;
            height: 16px;

            &::before {
                width: 12px;
                height: 12px;
                background-size: 16px;
            }
        }
    }
`;

export const ImageBlockCheckBox = styled.div<{ bgImg: string }>`
    position: relative;
    width: 100%;
    background-image: url(${(props) => props.bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    overflow: hidden;
    padding-bottom: 100%;

    input {
        position: absolute;
        left: -9999px;
        opacity: 0;
    }

    label {
        ${fonts.size.scale18};
        position: absolute;
        top: 0;
        left: 0;
        display: grid;
        place-content: center;
        width: 100%;
        height: 100%;
        color: ${palette.white0};
        background-color: #33333380;
        transition: background-color 0.2s;
        cursor: pointer;

        &:hover {
            background-color: ${palette.purple0}33;
        }
    }

    input:checked + label {
        background-color: ${palette.purple0}80;
        border: 2px solid ${palette.purple0};
    }
`;
