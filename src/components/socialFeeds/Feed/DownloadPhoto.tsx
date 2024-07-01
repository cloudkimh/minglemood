import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import { withOpacity } from "../../../lib/styles/utils";
import { useState } from "react";
import PhotoCarousel from "../../common/PhotoCarousel";

export type DownloadPhotosProps = {
    photos: Array<string>;
    onClickClose: () => void;
};

function DownloadPhotos(props: DownloadPhotosProps) {
    const { photos, onClickClose } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const photoCount = photos.length;

    return (
        <Block>
            <Head>
                <CloseBtn onClick={onClickClose}>닫기</CloseBtn>
                <Page>
                    {currentPage} / {photoCount}
                </Page>
            </Head>
            <MainContainer>
                <PhotoCarousel
                    onMove={(_, i) => {
                        setCurrentPage(i + 1);
                    }}
                >
                    {photos.map((aPhoto) => (
                        <PhotoSlide path={aPhoto} alt="피드 사진" />
                    ))}
                </PhotoCarousel>
            </MainContainer>
        </Block>
    );
}

const Block = styled.div`
    position: fixed;
    top: 0;
    z-index: 11;
    width: 100%;
    max-width 768px;
    height: 100%;
    background-color: ${palette.black0}${withOpacity(0.85)};
    padding: 20px 20px 70px;
`;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CloseBtn = styled.button`
    font-size: 12px;
    font-weight: 700;
    color: ${palette.white0};
    padding: 5px;
`;

const Page = styled.p`
    font-size: 12px;
    font-weight: 700;
    color: ${palette.white0};
    padding: 5px;
`;

const MainContainer = styled.div`
    display: grid;
    place-items: center;
    height: 100%;
    padding-top: 35px;
`;

const PhotoSlide = styled(PhotoCarousel.Slide)`
    aspect-ratio: 280 / 380;
`;

export default DownloadPhotos;
