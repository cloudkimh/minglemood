import styled from "styled-components";
import palette from "../../lib/styles/palette";

export const SectionTitle = styled.h2`
    font-size: 18px;
    font-weight: 800;

    strong {
        color: ${palette.red500};
    }
`;

export const SectionButton = styled.button`
    font-size: 13px;
    font-weight: 700;
    color: ${palette.gray6};
`;
