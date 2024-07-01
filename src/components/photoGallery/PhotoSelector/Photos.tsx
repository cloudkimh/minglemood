import styled from "styled-components";
import ImageWithFallback from "../../basics/ImageWithFallback";
import { hideScrollBar } from "../../../lib/styles/utils";
import CheckBox from "../../basics/CheckBox";
import palette from "../../../lib/styles/palette";
import checkIco from "../../../assets/icon/check.svg";

export type PhotosProps = {
    photos: Array<string>;
    photoCheckedList: Array<boolean>;
    onSelectPhoto: (checked: boolean, idx: number) => void;
};

function Photos(props: PhotosProps) {
    const { photos, photoCheckedList, onSelectPhoto } = props;

    return (
        <Block>
            <PhotoContainer>
                {photos.map((aPhoto, i) => (
                    <PhotoWrapper key={`photo-checkbox-${i}`}>
                        <Photo path={aPhoto} alt="모임 사진" />
                        <PhotoSelectLayer htmlFor={`photo-${i}`} />
                        <PhotoCheckBox
                            type="checkbox"
                            name="photo"
                            value={i}
                            id={`photo-${i}`}
                            checked={photoCheckedList[i]}
                            onChange={(e) => {
                                onSelectPhoto(e.currentTarget.checked, i);
                            }}
                        />
                    </PhotoWrapper>
                ))}
            </PhotoContainer>
        </Block>
    );
}

const Block = styled.div`
    ${hideScrollBar}
    width: 100%;
    height: 100%;
    overflow-y: auto;
`;

const PhotoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    width: 100%;
    height: fit-content;
    padding: 20px 20px 100px;
`;

const PhotoWrapper = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 100%;
`;

const Photo = styled(ImageWithFallback)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
`;

const PhotoSelectLayer = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
`;

const PhotoCheckBox = styled(CheckBox)`
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 2;

    label {
        display: block;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: ${palette.white0};
        border: 1px solid ${palette.gray3};
    }

    input:checked + label {
        border: 1px solid ${palette.red500};
        background-color: ${palette.red500};
        background-image: url(${checkIco});
        background-repeat: no-repeat;
        background-size: 13px 13px;
        background-position: center;
    }
`;

export default Photos;
