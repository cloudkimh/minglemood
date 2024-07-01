import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import { ReactComponent as DeleteIco } from "../../../assets/icon/cross.svg";
import { ReactComponent as UploadIco } from "../../../assets/icon/camera-add.svg";
import { useRef } from "react";
import { PostPhoto } from "../../../pages/SocialFeeds/Write";
import { hideScrollBar } from "../../../lib/styles/utils";
import { SectionHeader } from "./styles";

export type UploadPhotoProps = {
    photos: Array<PostPhoto>;
    onDeletePhoto: (idx: number) => void;
    onChangePhotoInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function UploadPhoto(props: UploadPhotoProps) {
    const { photos, onDeletePhoto, onChangePhotoInput } = props;
    const photoInputRef = useRef<HTMLInputElement>(null);
    const photoCnt = photos.length;

    const resetPhotoInput = () => {
        if (photoInputRef.current) {
            photoInputRef.current.value = "";
        }
    };

    const onClickPhotoUploader = () => {
        if (photoInputRef.current) {
            photoInputRef.current.click();
        }
    };

    return (
        <Block>
            <SectionHeader>사진 업로드</SectionHeader>
            <SubText>모임에 참여한 사진을 업로드 해주세요.</SubText>
            <Wrapper>
                <ItemContainer>
                    {photoCnt < 5 && (
                        <PhotoItem>
                            <PhotoUploader onClick={onClickPhotoUploader}>
                                <UploadIco />
                            </PhotoUploader>
                        </PhotoItem>
                    )}
                    {photos.map((aPhoto, i) => (
                        <PhotoItem key={`photo-item-${i}`}>
                            <PhotoImg src={aPhoto.url} />
                            <PhotoDeleteBtn
                                onClick={() => {
                                    onDeletePhoto(i);
                                    resetPhotoInput();
                                }}
                            >
                                <PhotoDeleteIco />
                            </PhotoDeleteBtn>
                        </PhotoItem>
                    ))}
                </ItemContainer>
            </Wrapper>
            <PhotoInput
                onChange={(e) => {
                    onChangePhotoInput(e);
                    resetPhotoInput();
                }}
                ref={photoInputRef}
                name="photos"
                type="file"
                accept="image/*"
            />
        </Block>
    );
}

const Block = styled.section`
    padding: 0 20px;
    margin-top: 30px;
`;

const SubText = styled.p`
    font-size: 11px;
    color: ${palette.gray2};
    margin-top: 7px;
`;

const Wrapper = styled.div`
    ${hideScrollBar}
    overflow-x: auto;
    overflow-y: hidden;
    height: fit-content;
    padding: 12px 0;
    margin-top: ;
`;

const ItemContainer = styled.div`
    display: flex;
    column-gap: 10px;
`;
const PhotoItem = styled.div`
    position: relative;
    width: 84px;
    height: 84px;
    flex-shrink: 0;
`;

const PhotoImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
`;

const PhotoDeleteBtn = styled.button`
    position: absolute;
    top: -8px;
    right: -8px;
    display: grid;
    place-content: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${palette.gray3};
`;

const PhotoDeleteIco = styled(DeleteIco)`
    width: 12px;
    height: 12px;

    path {
        stroke: ${palette.white0};
    }
`;

const PhotoUploader = styled.div`
    width: 84px;
    height: 84px;
    display: grid;
    place-content: center;
    border: 1px solid ${palette.gray5};
    border-radius: 5px;
    cursor: pointer;
`;

const PhotoInput = styled.input`
    display: none;
`;

export default UploadPhoto;
