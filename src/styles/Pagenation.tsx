import styled from "styled-components";
import media from "../lib/styles/media";
import palette from "../lib/styles/palette";

export const PageBullet = styled.button<{ idx: number; curIdx: number }>`
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) =>
        props.idx === props.curIdx ? palette.purple0 : palette.gray2};

    ${media.mobile} {
        width: 6px;
        height: 6px;
    }
`;
