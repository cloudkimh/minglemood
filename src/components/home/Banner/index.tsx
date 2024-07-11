import styled from "styled-components";
import Swiper from "../../basics/Swiper";
import palette from "../../../lib/styles/palette";
import { withOpacity } from "../../../lib/styles/utils";
import { useState } from "react";
import Silde from "./Silde";
import LineBreakText from "../../basics/LineBreakText";

export type BannerProps = {
    banners: Array<{
        image: string;
        title: string;
    }>;
};

function Banner(props: BannerProps) {
    const { banners } = props;
    const [currentBannerPage, setCurrentBannerPage] = useState(1);
    const bannerCnt = banners.length;

    return (
        <Block>
            <BannerSwiper
                hasTrack={false}
                options={{ type: "loop" }}
                onMove={(_, i) => {
                    setCurrentBannerPage(i + 1);
                }}
            >
                <Swiper.Track>
                    {banners.map((aBanner, index) => (
                        <Silde
                            image={aBanner.image}
                            titleElem={<LineBreakText text={aBanner.title} />}
                        />
                    ))}
                </Swiper.Track>
            </BannerSwiper>
            <PageBlock>
                <Page>
                    <span>{String(currentBannerPage).padStart(2, "0")}</span> /{" "}
                    {String(bannerCnt).padStart(2, "0")}
                </Page>
            </PageBlock>
        </Block>
    );
}

const Block = styled.div`
    position: relative;
`;

const BannerSwiper = styled(Swiper)`
    width: 100%;
`;

const PageBlock = styled.div`
    position: absolute;
    right: 20px;
    bottom: 20px;
    padding: 5px 8px;
    border-radius: 14px;
    background-color: ${palette.black2}${withOpacity(0.3)};
`;

const Page = styled.p`
    font-size: 10px;
    color: ${palette.gray3};

    span {
        color: ${palette.white0};
    }
`;

export default Banner;
