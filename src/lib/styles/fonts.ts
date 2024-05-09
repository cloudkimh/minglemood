import { css } from "styled-components";
import media from "./media";

const fonts = {
    lineHeight: {
        scale36: css`
            line-height: 54px;

            ${media.mobile} {
                line-height: 32px;
            }
        `,
        scale32: css`
            line-height: 48px;

            ${media.mobile} {
                line-height: 32px;
            }
        `,
        scale28: css`
            line-height: 42px;

            ${media.mobile} {
                line-height: 30px;
            }
        `,
        scale26: css`
            line-height: 36px;

            ${media.mobile} {
                line-height: 28px;
            }
        `,
        scale22: css`
            line-height: 32px;

            ${media.mobile} {
                line-height: 26px;
            }
        `,
        scale20: css`
            line-height: 30px;

            ${media.mobile} {
                line-height: 24px;
            }
        `,
        scale18: css`
            line-height: 26px;

            ${media.mobile} {
                line-height: 22px;
            }
        `,
        scale16: css`
            line-height: 23px;

            ${media.mobile} {
                line-height: 20px;
            }
        `,
        scale14: css`
            line-height: 20px;

            ${media.mobile} {
                line-height: 18px;
            }
        `,
        scale12: css`
            line-height: 18px;

            ${media.mobile} {
                line-height: 16px;
            }
        `,
    },
    size: {
        scale36: css`
            font-size: 36px;

            ${media.mobile} {
                font-size: 22px;
            }
        `,
        scale32: css`
            font-size: 32px;

            ${media.mobile} {
                font-size: 20px;
            }
        `,
        scale28: css`
            font-size: 28px;

            ${media.mobile} {
                font-size: 18px;
            }
        `,
        scale26: css`
            font-size: 26px;

            ${media.mobile} {
                font-size: 17px;
            }
        `,
        scale22: css`
            font-size: 22px;

            ${media.mobile} {
                font-size: 16px;
            }
        `,
        scale20: css`
            font-size: 20px;

            ${media.mobile} {
                font-size: 15px;
            }
        `,
        scale18: css`
            font-size: 18px;

            ${media.mobile} {
                font-size: 14px;
            }
        `,
        scale16: css`
            font-size: 16px;

            ${media.mobile} {
                font-size: 13px;
            }
        `,
        scale14: css`
            font-size: 14px;

            ${media.mobile} {
                font-size: 12px;
            }
        `,
        scale12: css`
            font-size: 12px;

            ${media.mobile} {
                font-size: 10px;
            }
        `,
    },
    weight: {
        light: 300,
        regular: 400,
        bold: 700,
        exbold: 800,
    },
    weightxx: {
        light: css`
            font-weight: 300;
        `,
        regular: css`
            font-weight: 400;
        `,
        bold: css`
            font-weight: 700;
        `,
        exbold: css`
            font-weight: 800;
        `,
    },
};

export default fonts;
