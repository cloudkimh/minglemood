import styled, { css } from "styled-components";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import { withOpacity } from "../../../lib/styles/utils";
import zIndexes from "../../../lib/styles/zIndexes";

export const BasicModalContainer = styled.div`
    width: 530px;
    height: 100%;
    max-height: calc(100vh - 96px);
    overflow-y: auto;
    background-color: ${palette.white2};
    border-radius: 12px;
    box-shadow: 0 0 4px ${palette.black0}${withOpacity(0.3)};

    ${media.mobile} {
        width: 100%;
        height: 100%;
        max-height: 100%;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
`;

export const ModalContainer = styled.div`
    width: 360px;
    height: 580px;
    background-color: ${palette.white2};
    border-radius: 12px;
    box-shadow: 0 0 4px ${palette.black0}${withOpacity(0.3)};
    padding: 40px 20px;

    ${media.mobile} {
        width: 100%;
        height: 100%;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        padding: 40px 20px 0;
    }
`;

export const FixedBarContainer = styled.div<{ locate: "top" | "bottom" }>`
    position: fixed;
    max-width: 768px;
    width: 100%;
    z-index: ${zIndexes.Gnb};

    ${({ locate }) => {
        return locate === "top"
            ? css`
                  top: 0px;
              `
            : css`
                  bottom: 0px;
              `;
    }}
`;
