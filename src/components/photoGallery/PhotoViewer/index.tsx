import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import { withOpacity } from "../../../lib/styles/utils";
import Header from "./Header";
import { useEffect, useState } from "react";
import PhotoCarousel from "../../common/PhotoCarousel";

export type PhotoViewerProps = {
    onClose: () => void;
    photos: Array<string>;
    startIdx: number;
};

function PhotoViewer(props: PhotoViewerProps) {
    const { onClose, photos, startIdx } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const photoCnt = photos.length;

    useEffect(() => {
        setCurrentPage(startIdx + 1);
    }, [startIdx]);

    return (
        <Block>
            <Header
                onClose={onClose}
                pageText={`${currentPage} / ${photoCnt}`}
            />
            <PhotoCarouselWrapper>
                <PhotoCarousel
                    onMove={(_, i) => {
                        setCurrentPage(i + 1);
                    }}
                    startIndex={startIdx}
                >
                    {photos.map((aPhoto) => (
                        <PhotoSlide path={aPhoto} alt="모임 사진" />
                    ))}
                </PhotoCarousel>
            </PhotoCarouselWrapper>
        </Block>
    );
}

const Block = styled.div`
    position: fixed;
    top: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 100%;
    max-width: 768px;
    height: 100%;
    background-color: ${palette.black0}${withOpacity(0.85)};
    padding: 20px;
`;

const PhotoCarouselWrapper = styled.div`
    width: 100%;
    height: 100%;
    dipslay: grid;
    place-content: center;
`;

const PhotoSlide = styled(PhotoCarousel.Slide)`
    aspect-ratio: 280 / 380;
`;

export default PhotoViewer;
