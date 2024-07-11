import styled, { css } from "styled-components";
import Swiper from "../basics/Swiper";
import ImageWithFallback from "../basics/ImageWithFallback";
import {
    SwiperPageBtnContainer,
    SwiperPageNextBtn,
    SwiperPagePrevBtn,
    SwiperPagination,
    swiperCirclePageBtnStyle,
} from "../basics/Swiper/styles";
import { useNavigate } from "react-router-dom";
import Icon from "../basics/Icon";
import palette from "../../lib/styles/palette";
import { withOpacity } from "../../lib/styles/utils";

export type BannerProps = {
    banners: Array<string>;
    onClickShare: () => void;
};

function Banner(props: BannerProps) {
    const { banners, onClickShare } = props;
    const navigate = useNavigate();

    const onClickPrevPage = () => {
        navigate(-1);
    };

    return (
        <Block>
            <Inner>
                <Header>
                    <PrevPageBtn onClick={onClickPrevPage}>
                        <ChevronLeft name="chevron-left" />
                    </PrevPageBtn>
                    <ShareBtn onClick={onClickShare}>
                        <Icon name="graph" />
                    </ShareBtn>
                </Header>
                <BannerSwiper
                    hasBtns
                    hasTrack={false}
                    options={{ type: "loop" }}
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
                            <Icon name="chevron-left-sm" />
                        </BannerPrevBtn>
                        <BannerNextBtn>
                            <Icon name="chevron-right-sm" />
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
    z-index: 1;
    padding: 0 20px;
`;

const PrevPageBtn = styled.button`
    width: 24px;
    height: 24px;
`;

const ShareBtn = styled.button`
    width: 24px;
    height: 24px;
`;

const ChevronLeft = styled(Icon)`
    path {
        stroke: ${palette.white0};
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

const bannerPageBtnStyle = css`
    display: flex;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: ${palette.black0}${withOpacity(0.4)};
    border-radius: 50%;
`;

const BannerPrevBtn = styled(SwiperPagePrevBtn)`
    ${bannerPageBtnStyle}
    padding-left: 4px;
`;

const BannerNextBtn = styled(SwiperPageNextBtn)`
    ${bannerPageBtnStyle}
    padding-left: 6px;
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
