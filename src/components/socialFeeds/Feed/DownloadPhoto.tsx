import styled, { css } from "styled-components";
import Swiper from "../../basics/Swiper";
import {
    SwiperPageBtnContainer,
    SwiperPageNextBtn,
    SwiperPagePrevBtn,
    SwiperPagination,
} from "../../basics/Swiper/styles";
import palette from "../../../lib/styles/palette";
import { withOpacity } from "../../../lib/styles/utils";
import ImageWithFallback from "../../basics/ImageWithFallback";
import { ReactComponent as PrevPageIco } from "../../../assets/icon/chevron-left-sm.svg";
import { ReactComponent as NextPageIco } from "../../../assets/icon/chevron-right-sm.svg";
import { useState } from "react";

export type DownloadPhotosProps = {
    photos: Array<string>;
    onClickClose: () => void;
};

function DownloadPhotos(props: DownloadPhotosProps) {
    const { photos, onClickClose } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const photoCount = photos.length;

    return (
        <Block>
            <Head>
                <CloseBtn onClick={onClickClose}>닫기</CloseBtn>
                <Page>
                    {currentPage} / {photoCount}
                </Page>
            </Head>
            <Main>
                <PhotosSwiper
                    hasBtns={true}
                    hasTrack={false}
                    options={{ type: "loop", gap: "20px" }}
                    onMove={(swiper, i) => {
                        setCurrentPage(swiper.index + 1);
                    }}
                >
                    <PhotosSwiperTrack>
                        {photos.map((aPhoto) => (
                            <FeedPhotoSlide>
                                <FeedPhoto src={aPhoto} alt="피드 사진" />
                            </FeedPhotoSlide>
                        ))}
                    </PhotosSwiperTrack>
                    <SwiperPageBtnContainer>
                        <NextPageBtn>
                            <NextPageIco />
                        </NextPageBtn>
                        <PrevPageBtn>
                            <PrevPageIco />
                        </PrevPageBtn>
                    </SwiperPageBtnContainer>
                    <FeedPhotoPagination />
                </PhotosSwiper>
                <BtnSection>
                    <OutlineBtn>일반 다운로드</OutlineBtn>
                    <FilledBtn>고화질 다운로드</FilledBtn>
                </BtnSection>
            </Main>
        </Block>
    );
}

const Block = styled.div`
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    max-width 768px;
    height: 100%;
    background-color: ${palette.black0}${withOpacity(0.85)};
    padding: 20px 20px 70px;
`;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CloseBtn = styled.button`
    font-size: 12px;
    font-weight: 700;
    color: ${palette.white0};
    padding: 5px;
`;

const Page = styled.p`
    font-size: 12px;
    font-weight: 700;
    color: ${palette.white0};
    padding: 5px;
`;

const Main = styled.div`
    display: grid;
    grid-template-rows: 1fr 40px;
    row-gap: 10px;
    height: 100%;
    padding-top: 35px;
`;

const PhotosSwiper = styled(Swiper)`
    position: relative;
    width: 100%;
    height: 100%;
`;

const PhotosSwiperTrack = styled(Swiper.Track)`
    width: 100%;
    height: 100%;
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

const FeedPhotoSlide = styled(Swiper.Slide)`
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
`;

const FeedPhoto = styled.img`
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 5px;
`;

const FeedPhotoPagination = styled(SwiperPagination)`
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

const BtnSection = styled.div`
    display: flex;
    column-gap: 6px;
    height: 40px;
    flex-shrink: 0;
`;

const OutlineBtn = styled.button`
    width: 100%;
    font-size: 13px;
    font-weight: 700;
    color: ${palette.red500};
    border: 1px solid ${palette.red500};
    border-radius: 5px;
    background-color: ${palette.white0};
    padding: 12px 0;
`;

const FilledBtn = styled.button`
    width: 100%;
    font-size: 13px;
    font-weight: 700;
    color: ${palette.white0};
    border-radius: 5px;
    background-color: ${palette.red500};
    padding: 12px 0;
`;

export default DownloadPhotos;
