import styled from "styled-components";
import Swiper from "../../common/Swiper";
import ImageWithFallback from "../../common/ImageWithFallback";
import PrevIcon from "../../../assets/icon/left-arrow.png";
import ShareIcon from "../../../assets/icon/share.png";
import LeftArrowIcon from "../../../assets/icon/left-arrow-small.png";
import RightArrowIcon from "../../../assets/icon/right-arrow-small.png";
import {
    SwiperPageBtnContainer,
    SwiperPageNextBtn,
    SwiperPagePrevBtn,
    SwiperPagination,
    swiperCirclePageBtnStyle,
} from "../../common/Swiper/styles";
import { useNavigate } from "react-router-dom";

export type BannerProps = {
    banners: Array<string>;
};

function Banner(props: BannerProps) {
    const { banners } = props;
    const navigate = useNavigate();
    const onPrevBtnClick = () => {
        navigate(-1);
    };

    return (
        <Block>
            <Inner>
                <Header>
                    <HeaderBtn onClick={onPrevBtnClick}>
                        <img alt="prev button" src={PrevIcon} />
                    </HeaderBtn>
                    <HeaderBtn>
                        <img alt="share button" src={ShareIcon} />
                    </HeaderBtn>
                </Header>
                <BannerSwiper
                    hasBtns
                    hasTrack={false}
                    options={{ type: "loop" }}
                    onMove={(_, i) => {}}
                >
                    <BannerSwiperTrack>
                        {banners.map((aBanner, i) => (
                            <BannerSlide key={`banner-${i}`}>
                                <SlideImg path={aBanner} alt="배너 이미지" />
                            </BannerSlide>
                        ))}
                    </BannerSwiperTrack>
                    <BannerPageContainer>
                        <BannerPrevBtn>
                            <img alt="prev banner btn" src={LeftArrowIcon} />
                        </BannerPrevBtn>
                        <BannerNextBtn>
                            <img alt="next banner btn" src={RightArrowIcon} />
                        </BannerNextBtn>
                    </BannerPageContainer>
                    <BannerPagination />
                </BannerSwiper>
            </Inner>
        </Block>
    );
}

const Block = styled.div`
    position: relative;
    width: 100%;
    padding-top: 100%;
`;

const Inner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const Header = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: absolute;
    left: 0;
    top: 61px;
    z-index: 100;
    padding: 0 20px;
`;

const HeaderBtn = styled.button`
    width: 24px;
    height: 24px;
    background-color: transprent;

    & img {
        width: 100%;
        vertical-align: middle;
    }
`;

const BannerSwiperTrack = styled(Swiper.Track)`
    width: 100%;
    height: 100%;
`;

const BannerSwiper = styled(Swiper)`
    width: 100%;
    height: 100%;
`;

const BannerSlide = styled(Swiper.Slide)`
    width: 100%;
    height: 100%;
`;

const SlideImg = styled(ImageWithFallback)`
    width: 100%;
    height: 100%;
`;

const BannerPageContainer = styled(SwiperPageBtnContainer)`
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
`;

const BannerPrevBtn = styled(SwiperPagePrevBtn)`
    background-color: rgba(51, 51, 51, 0.4);
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 12px;
        height: 12px;
        opacity: 1;
    }
`;

const BannerNextBtn = styled(SwiperPageNextBtn)`
    background-color: rgba(51, 51, 51, 0.4);
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 12px;
        height: 12px;
        opacity: 1;
    }
`;

const BannerPagination = styled(SwiperPagination)`
    ${swiperCirclePageBtnStyle}
    position: absolute;
    left: 50%;
    bottom: 14px;
    transform: translateX(-50%);

    & li:not(:first-child) {
        margin-left: 7px;
    }
`;

export default Banner;
