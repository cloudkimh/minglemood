import styled from "styled-components";
import PhotoCarousel from "../../../common/PhotoCarousel";

export type PhotosProps = {
    photos: Array<string>;
    onClickPhoto: () => void;
};

function Photos(props: PhotosProps) {
    const { photos, onClickPhoto } = props;

    return (
        <Block>
            <PhotoCarousel>
                {photos.map((aPhoto) => (
                    <PhotoCarousel.Slide
                        path={aPhoto}
                        alt="피드사진"
                        onClick={onClickPhoto}
                    />
                ))}
            </PhotoCarousel>
        </Block>
    );
}

const Block = styled.div`
    margin-top: 20px;
`;

export default Photos;
