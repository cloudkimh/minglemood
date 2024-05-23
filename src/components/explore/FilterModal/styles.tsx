import styled from "styled-components";
import palette from "../../../lib/styles/palette";

export const SectionContainer = styled.div`
    padding: 24px 20px;
`;

export const SectionLabel = styled.p`
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 20px;
`;

export const SectionGap = styled.div`
    width: 100%;
    height: 8px;
    background-color: ${palette.white2};
`;
