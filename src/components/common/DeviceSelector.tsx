import styled, { css } from "styled-components";

export type Device = "DESKTOP" | "TABLET" | "MOBILE";

const DeviceSelector = styled.div<{ device: Device[] }>`
    ${(props) => {
        return props.device.includes("DESKTOP")
            ? css`
                  display: block;
              `
            : css`
                  display: none;
              `;
    }};

    ${(props) => {
        const { tablet } = props.theme.devices;

        return props.device.includes("TABLET")
            ? css`
                  ${tablet} {
                      display: block;
                  }
              `
            : css`
                  ${tablet} {
                      display: none;
                  }
              `;
    }};

    ${(props) => {
        const { mobile } = props.theme.devices;

        return props.device.includes("MOBILE")
            ? css`
                  ${mobile} {
                      display: block;
                  }
              `
            : css`
                  ${mobile} {
                      display: none;
                  }
              `;
    }};
`;

export default DeviceSelector;
