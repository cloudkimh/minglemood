import styled from "styled-components";
import Swiper from "../../common/Swiper";
import palette from "../../../lib/styles/palette";
import { withOpacity } from "../../../lib/styles/utils";
import React, { useState } from "react";

export type BannerProps = {
    banners: Array<{ image: string; title: Array<string> }>;
};

function Banner(props: BannerProps) {
    const { banners } = props;
    const [currentBannerPage, setCurrentBannerPage] = useState(1);
    const bannerCnt = banners.length;

    return (
        <BannerSwiper
            hasTrack={false}
            options={{ type: "loop" }}
            onMove={(_, i) => {
                setCurrentBannerPage(i + 1);
            }}
        >
            <Swiper.Track>
                {banners.map((aBanner, index) => (
                    <BannerSlide key={index}>
                        <BannerImg src={aBanner.image} alt="배너 이미지" />
                        <BannerTitle>
                            {aBanner.title.map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    {index < bannerCnt - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </BannerTitle>
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
`;

const BannerSlide = styled(Swiper.Slide)`
    display: flex;
    width: 100%;
    aspect-ratio: 1 / 0.97;
`;

const BannerImg = styled.img`
    width: 100%;
    height: 100%;
`;

const BannerTitle = styled.p`
    position: absolute;
    left: 20px;
    bottom: 20px;
    color: ${palette.white0};
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
`;

const PageBlock = styled.div`
    position: absolute;
    right: 12px;
    bottom: 28px;
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
