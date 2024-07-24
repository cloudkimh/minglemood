import {
    Splide,
    SplideProps,
    SplideSlide,
    SplideTrack,
} from "@splidejs/react-splide";
import styled, { css } from "styled-components";

interface SwiperProps extends SplideProps {
    hasPagination?: boolean;
    hasBtns?: boolean;
}

function Swiper(props: SwiperProps) {
    const { children, hasPagination, hasBtns, ...rest } = props;

    return (
        <Block paginationVisible={hasPagination} btnVisible={hasBtns} {...rest}>
            {children}
        </Block>
    );
}

const Block = styled(Splide)<{
    btnVisible?: boolean;
    paginationVisible?: boolean;
}>`
    ${({ btnVisible }) =>
        !btnVisible &&
        css`
            .splide__arrows {
                display: none;
            }
        `}

    ${({ paginationVisible }) =>
        !paginationVisible &&
        css`
            .splide__pagination {
                display: none;
            }
        `}
`;

Swiper.Track = SplideTrack;
Swiper.Slide = SplideSlide;

export default Swiper;
