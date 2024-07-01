import styled from "styled-components";
import ImageWithFallback from "../basics/ImageWithFallback";

export type PhotosProps = {
    photos: Array<string>;
    onClickPhoto: (idx: number) => void;
};

function Photos(props: PhotosProps) {
    const { photos, onClickPhoto } = props;

    return (
        <Block>
            {photos.map((aPhoto, i) => (
                <Photo
                    key={`photo-${i}`}
                    onClick={() => onClickPhoto(i)}
                    path={aPhoto}
                    alt="모임 사진"
                />
            ))}
        </Block>
    );
}

const Block = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    padding: 0 20px 100px;
    margin-top: 70px;
`;

const Photo = styled(ImageWithFallback)`
    width: 100%;
    aspect-ratio: 1 / 1;
`;

export default Photos;
