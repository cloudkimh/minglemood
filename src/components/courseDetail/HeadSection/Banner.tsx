import styled from "styled-components";
import Swiper from "../../common/Swiper";
import ImageWithFallback from "../../common/ImageWithFallback";

export type BannerProps = {
    banners: Array<string>;
};

function Banner(props: BannerProps) {
    const { banners } = props;

    return (
        <Block>
            <Inner>
                <BannerSwiper
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

export default Banner;
