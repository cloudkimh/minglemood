import styled, { css } from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";

export const PopupContentContainer = styled.div<{ responsive: boolean }>`
    ${(props) =>
        props.responsive
            ? css`
                  padding: 68px 48px 60px;

                  ${media.mobile} {
                      padding: 44px 28px 36px;
                  }
              `
            : css`
                  width: 100%;
                  padding: 44px 28px 36px;
              `}
`;

export const PopupButtonContainer = styled.div<{ responsive: boolean }>`
    width: 100%;
    border: 1px solid ${palette.purple0};
    overflow: hidden;

    ${(props) =>
        props.responsive
            ? css`
                  height: 68px;
                  border-bottom-left-radius: 28px;
                  border-bottom-right-radius: 28px;

                  ${media.mobile} {
                      height: 52px;
                      border-bottom-left-radius: 12px;
                      border-bottom-right-radius: 12px;
                  }
              `
            : css`
                  height: 52px;
                  border-bottom-left-radius: 12px;
                  border-bottom-right-radius: 12px;
              `}
`;

export const PopupFullSizeBtn = styled.button<{ responsive?: boolean }>`
    width: 100%;
    height: 100%;
    font-weight: ${fonts.weight.bold};
    text-align: center;
    background-color: ${palette.purple0};
    color: ${palette.white0};

    ${(props) =>
        props.responsive
            ? css`
                  ${fonts.size.scale20}
                  padding: 23px 0;

                  ${media.mobile} {
                      padding: 17px 0;
                  }
              `
            : css`
                  font-size: 15px;
                  padding: 17px 0;
              `}
`;

export const PopupHalfSizeOutlineBtn = styled(PopupFullSizeBtn)`
    width: 50%;
    background-color: ${palette.white2};
    color: ${palette.purple0};
`;

export const PopupHalfSizeMainBtn = styled(PopupFullSizeBtn)`
    width: 50%;
    background-color: ${palette.purple0};
    color: ${palette.white0};
`;
