import styled, { css } from "styled-components";
import Swiper from "../../basics/Swiper";
import palette from "../../../lib/styles/palette";
import { withOpacity } from "../../../lib/styles/utils";
import {
    SwiperPageBtnContainer,
    SwiperPageNextBtn,
    SwiperPagePrevBtn,
    SwiperPagination,
} from "../../basics/Swiper/styles";
import { ReactComponent as PrevPageIco } from "../../../assets/icon/chevron-left-sm.svg";
import { ReactComponent as NextPageIco } from "../../../assets/icon/chevron-right-sm.svg";
import { Splide } from "@splidejs/splide";
import { ReactNode } from "react";
import Slide from "./Slide";

export type PhotoCarouselProps = {
    onMove?: (
        splide: Splide,
        index: number,
        prev: number,
        dest: number
    ) => void;
    startIndex?: number;
    children?: ReactNode;
};

function PhotoCarousel(props: PhotoCarouselProps) {
    const { onMove, startIndex, children } = props;

    return (
        <PhotoSwiper
            hasBtns={true}
            hasTrack={false}
            options={{ type: "loop", start: startIndex }}
            onMove={onMove}
        >
            <PhotoSwiperTrack>{children}</PhotoSwiperTrack>
            <SwiperPageBtnContainer>
                <NextPageBtn>
                    <NextPageIco />
                </NextPageBtn>
                <PrevPageBtn>
                    <PrevPageIco />
                </PrevPageBtn>
            </SwiperPageBtnContainer>
            <PhotoPagination />
        </PhotoSwiper>
    );
}

const PhotoSwiper = styled(Swiper)`
    position: relative;
    width: 100%;
    height: fit-content;
    border-radius: 5px;
    overflow: hidden;
`;

const PhotoSwiperTrack = styled(Swiper.Track)`
    width: 100%;
`;

const pageBtnStyle = css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: grid;
    place-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${palette.gray4}${withOpacity(0.45)};
`;

const NextPageBtn = styled(SwiperPageNextBtn)`
    ${pageBtnStyle}
    right: 10px;
`;

const PrevPageBtn = styled(SwiperPagePrevBtn)`
    ${pageBtnStyle}
    left: 10px;
`;

const PhotoPagination = styled(SwiperPagination)`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    width: 100%;

    button {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: ${palette.white0}${withOpacity(0.3)};
    }

    button.is-active {
        background-color: ${palette.white0};
    }

    li + li {
        margin-left: 4px;
    }
`;

PhotoCarousel.Slide = Slide;
export default PhotoCarousel;
