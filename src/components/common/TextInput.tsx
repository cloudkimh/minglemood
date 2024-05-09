import styled, { css } from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

const TextInput = styled.input<{ error?: boolean }>`
    ${fonts.size.scale18}
    width: 100%;
    border-radius: 4px;
    background-color: ${palette.purple5};
    border: 1px solid ${palette.purple3};
    outline: none;
    transition: background-color 0.3s, border 0.3s;
    padding: 21px 20px;

    ${(props) =>
        props.error &&
        css`
            background-color: ${palette.red1};
            border: 1px solid ${palette.red0};
        `}

    ${media.mobile} {
        padding: 11px 12px;
    }
`;

export default TextInput;
