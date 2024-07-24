import styled, { css } from "styled-components";
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
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: ${palette.gray2};
    }

    button.is-active {
        background-color: ${palette.white0};
    }
`;

export const SwiperCircleBtnPagination = styled.ul.attrs({
    className: ["splide__pagination", "splide__pagination--ltr"].join(" "),
})`
    ${swiperCirclePageBtnStyle}

    li + li {
        margin-left: 7px;
    }
`;
