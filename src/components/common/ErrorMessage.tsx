import styled from "styled-components";
import { fadeInFromBottom } from "../../lib/styles/animations";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

import errorIco from "../../static/icons/global/ico_alert_circle.svg";

const ErrorMessage = styled.p<{ error: boolean }>`
    ${fonts.size.scale18}
    ${fonts.lineHeight.scale18}
    display: ${(props) => (props.error ? "inline-flex" : "none")};
    align-items: center;
    color: ${palette.red0};
    animation: ${fadeInFromBottom} 0.3s ease-in-out forwards;
    background-image: url(${errorIco});
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: 0 4px;
    padding-top: 2px;
    padding-left: 26px;
    margin-top: 16px;

    ${media.mobile} {
        background-size: 14px;
        background-position: 0 6px;
        padding-left: 20px;
        margin-top: 10px;
    }
`;

export default ErrorMessage;
