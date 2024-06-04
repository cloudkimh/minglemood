import styled from "styled-components";
import Swiper from "../../common/Swiper";
import {
    SwiperPageBtnContainer,
    SwiperPageNextBtn,
    SwiperPagePrevBtn,
    SwiperPagination,
} from "../../common/Swiper/styles";
import palette from "../../../lib/styles/palette";
import { withOpacity } from "../../../lib/styles/utils";
import ImageWithFallback from "../../common/ImageWithFallback";

export type PhotosProps = {
    photos: Array<string>;
};

function Photos(props: PhotosProps) {
    const { photos } = props;

    return (
        <Block>
            <PhotosSwiper
                hasBtns={true}
                hasTrack={false}
                options={{ type: "loop" }}
                onMove={(_, i) => {}}
            >
                <PhotosSwiperTrack>
                    {photos.map((aPhoto) => (
                        <FeedPhotoSlide>
                            <FeedPhoto path={aPhoto} alt="피드 사진" />
                        </FeedPhotoSlide>
                    ))}
                </PhotosSwiperTrack>
                <SwiperPageBtnContainer>
                    <NextPageBtn></NextPageBtn>
                    <PrevPageBtn></PrevPageBtn>
                </SwiperPageBtnContainer>
                <FeedPhotoPagination />
            </PhotosSwiper>
        </Block>
    );
}

const Block = styled.div`
    margin-top: 20px;
`;

const PhotosSwiper = styled(Swiper)`
    position: relative;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
`;

const PhotosSwiperTrack = styled(Swiper.Track)`
    width: 100%;
`;

const NextPageBtn = styled(SwiperPageNextBtn)`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background-color: ${palette.red2};
`;

const PrevPageBtn = styled(SwiperPagePrevBtn)`
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background-color: ${palette.red2};
`;

const FeedPhotoSlide = styled(Swiper.Slide)`
    width: 100%;
    aspect-ratio: 1 / 1;
`;

const FeedPhoto = styled(ImageWithFallback)`
    width: 100%;
    height: 100%;
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

export default Photos;
