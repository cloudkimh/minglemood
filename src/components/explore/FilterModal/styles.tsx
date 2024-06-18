import styled from "styled-components";

export const SectionContainer = styled.div`
    padding: 0 20px;

    & + & {
        margin-top: 30px;
    }
`;

export const SectionLabel = styled.p`
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 10px;
`;
