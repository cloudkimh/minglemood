import styled from "styled-components";
import Swiper from "../../basics/Swiper";
import ImageWithFallback from "../../basics/ImageWithFallback";
import { ImgHTMLAttributes } from "react";

export type SlideProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
    className?: string;
    path: string;
};

function Slide(props: SlideProps) {
    const { className, path, ...htmlProps } = props;

    return (
        <PhotoSlide className={className}>
            <Photo path={path} {...htmlProps} />
        </PhotoSlide>
    );
}

const PhotoSlide = styled(Swiper.Slide)`
    width: 100%;
    aspect-ratio: 1 / 1;
`;

const Photo = styled(ImageWithFallback)`
    width: 100%;
    height: 100%;
`;

export default Slide;
