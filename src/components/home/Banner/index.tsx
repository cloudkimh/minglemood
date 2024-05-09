import styled from "styled-components";
import Swiper from "../../common/Swiper";
import palette from "../../../lib/styles/palette";
import { withOpacity } from "../../../lib/styles/utils";
import { useState } from "react";

export type BannerProps = {
    bannerImages: Array<string>;
};

function Banner(props: BannerProps) {
    const { bannerImages } = props;
    const [currentBannerPage, setCurrentBannerPage] = useState(1);
    const bannerCnt = bannerImages.length;

    return (
        <BannerSwiper
            hasTrack={false}
            options={{ type: "loop" }}
            onMove={(_, i) => {
                setCurrentBannerPage(i + 1);
            }}
        >
            <Swiper.Track>
                {bannerImages.map((aBanner) => (
                    <BannerSlide>
                        <BannerImg src={aBanner} alt="배너 이미지" />
                    </BannerSlide>
                ))}
            </Swiper.Track>
            <PageBlock>
                <Page>
                    <span>{currentBannerPage}</span> / {bannerCnt}
                </Page>
            </PageBlock>
        </BannerSwiper>
    );
}

const BannerSwiper = styled(Swiper)`
    position: relative;
    width: 100%;
    height: 180px;
`;

const BannerSlide = styled(Swiper.Slide)`
    width: 100%;
    height: 180px;
`;

const BannerImg = styled.img`
    width: 100%;
    height: 100%;
`;

const PageBlock = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
    padding: 6px 10px;
    border-radius: 14px;
    background-color: ${palette.black0}${withOpacity(0.4)};
`;

const Page = styled.p`
    font-size: 12px;
    color: ${palette.gray3};

    span {
        color: ${palette.white0};
    }
`;

export default Banner;
