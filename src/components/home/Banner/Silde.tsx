import styled from "styled-components";
import Swiper from "../../basics/Swiper";
import ImageWithFallback from "../../basics/ImageWithFallback";
import palette from "../../../lib/styles/palette";
import { ReactElement } from "react";

export type SildeProps = {
    image: string;
    titleElem: ReactElement;
};

function Silde(props: SildeProps) {
    const { image, titleElem } = props;

    return (
        <BannerSlide>
            <Inner>
                <BackgroundImage path={image} alt="배너 이미지" />
                <Layer />
                <Title>{titleElem}</Title>
            </Inner>
        </BannerSlide>
    );
}

const BannerSlide = styled(Swiper.Slide)`
    position: relative;
    width: 100%;
    padding-bottom: 100%;
`;

const Inner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const BackgroundImage = styled(ImageWithFallback)`
    width: 100%;
    height: 100%;
`;

const Layer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #666 100%);
`;

const Title = styled.p`
    position: absolute;
    left: 20px;
    bottom: 20px;
    color: ${palette.white0};
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
`;

export default Silde;
