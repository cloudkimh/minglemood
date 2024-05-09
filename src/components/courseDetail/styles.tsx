import styled from "styled-components";
import palette from "../../lib/styles/palette";

export const SectionContainer = styled.section`
    padding: 40px 0;
    border-bottom: 1px solid ${palette.gray5};
`;

export const SectionHeader = styled.header`
    padding: 0 20px;
    margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
    font-size: 17px;
    font-weight: 800;
`;
