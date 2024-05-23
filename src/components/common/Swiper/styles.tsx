import styled, { css } from "styled-components";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";

export const SwiperPageBtnContainer = styled.div.attrs({
    className: "splide__arrows",
})``;

export const SwiperPagePrevBtn = styled.button.attrs({
    className: "splide__arrow splide__arrow--prev",
})``;

export const SwiperPageNextBtn = styled.button.attrs({
    className: "splide__arrow splide__arrow--next",
})``;

export const SwiperPagination = styled.ul.attrs({
    className: ["splide__pagination", "splide__pagination--ltr"].join(" "),
})``;

export const swiperCirclePageBtnStyle = css`
    button {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${palette.white2};
    }

    button.is-active {
        background-color: ${palette.purple0};
    }

    ${media.mobile} {
        button {
            width: 6px;
            height: 6px;
        }
    }
`;

export const SwiperCircleBtnPagination = styled.ul.attrs({
    className: ["splide__pagination", "splide__pagination--ltr"].join(" "),
})`
    ${swiperCirclePageBtnStyle}

    li + li {
        margin-left: 12px;
    }

    ${media.mobile} {
        li + li {
            margin-left: 10px;
        }
    }
`;
