import {
    Splide,
    SplideProps,
    SplideSlide,
    SplideTrack,
} from "@splidejs/react-splide";
import styled, { css } from "styled-components";

interface SwiperProps extends SplideProps {
    hasBtns?: boolean;
}

function Swiper(props: SwiperProps) {
    const { children, ...rest } = props;

    return <Block {...rest}>{children}</Block>;
}

const Block = styled(Splide)<{ hasBtns?: boolean }>`
    ${({ hasBtns }) =>
        !hasBtns &&
        css`
            .splide__arrows {
                display: none;
            }
        `}
`;

Swiper.Track = SplideTrack;
Swiper.Slide = SplideSlide;

export default Swiper;
