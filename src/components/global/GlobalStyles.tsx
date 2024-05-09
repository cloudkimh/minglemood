import styled, { createGlobalStyle } from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import standards from "../../lib/styles/standards";

const GlobalStyles = createGlobalStyle`
    html, body, #root {
        height: 100%
    }

    body {
        overflow-y: overlay;
        color: ${palette.black0};
    }
`;

export const PageContainer = styled.div`
    max-width: 1440px;
    padding: 70px ${standards.padding.lg} 200px;
    margin: 0 auto;

    ${media.mobile} {
        padding: 40px ${standards.padding.sm} 120px;
    }
`;

export default GlobalStyles;
