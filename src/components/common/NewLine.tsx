import styled, { css } from "styled-components";
import media from "../../lib/styles/media";

type Device = "DESKTOP" | "TABLET" | "MOBILE";

const NewLine = styled.span<{ device: Array<Device> }>`
    ${(props) =>
        props.device.includes("DESKTOP")
            ? css`
                  display: block;
              `
            : css`
                  display: none;
              `}

    ${media.tablet} {
        ${(props) =>
            props.device.includes("TABLET")
                ? css`
                      display: block;
                  `
                : css`
                      display: none;
                  `}
    }

    ${media.mobile} {
        ${(props) =>
            props.device.includes("MOBILE")
                ? css`
                      display: block;
                  `
                : css`
                      display: none;
                  `}
    }
`;

export default NewLine;
