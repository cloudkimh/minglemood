import styled from "styled-components";
import PhotoCarousel from "../../../common/PhotoCarousel";

export type PhotosProps = {
    photos: string; // 여러장 지원시 Array<string>
    onClickPhoto: () => void;
};

function Photos(props: PhotosProps) {
    const { photos, onClickPhoto } = props;

    return (
        <Block>
            <PhotoCarousel>
                <PhotoCarousel.Slide
                    path={photos}
                    alt="피드사진"
                    onClick={onClickPhoto}
                />
            </PhotoCarousel>
        </Block>
    );
}
/*
 {photos.map((aPhoto) => (
                    <PhotoCarousel.Slide
                        path={aPhoto}
                        alt="피드사진"
                        onClick={onClickPhoto}
                    />
                ))}
 */
const Block = styled.div`
    margin-top: 20px;
`;

export default Photos;
