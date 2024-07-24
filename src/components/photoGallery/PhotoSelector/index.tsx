import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import Header from "./Header";
import { useEffect, useState } from "react";
import Photos from "./Photos";
import ButtonSection from "./ButtonSection";
import { useNavigate } from "react-router-dom";

export type PhotoSelectorProps = {
    courseId: number;
    photos: Array<string>;
    onClose: () => void;
};

function PhotoSelector(props: PhotoSelectorProps) {
    const { courseId, photos, onClose } = props;
    const photoCnt = photos.length;
    const [photoCheckedList, setPhotoCheckedList] = useState<Array<boolean>>(
        Array(photoCnt).fill(false)
    );
    const [selectedPhotoCnt, setSelectedPhotoCnt] = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        const updateSelectedPhotoCnt = () => {
            let next = 0;
            photoCheckedList.forEach((item) => {
                if (item === true) ++next;
            });
            setSelectedPhotoCnt(next);
        };

        updateSelectedPhotoCnt();
    }, [photoCheckedList]);

    const handleNormalDownload = () => {};

    const handleHighQualityDownload = () => {
        const data = {
            paymentInfo: {
                price: 5000,
            },
            photoInfo: {
                photos: photos.filter((_, i) => photoCheckedList[i] === true),
                photographer: "테스트 이름",
                fileType: "JPEG",
                size: "300 X 400",
                license: "무료",
            },
        };
        navigate(`/purchase/${courseId}`, { state: data });
    };

    const handleSelectPhoto = (checked: boolean, idx: number) => {
        setPhotoCheckedList((prev) => {
            const next = [...prev];
            next[idx] = checked;
            return next;
        });
    };

    const handleSelectAll = () => {
        setPhotoCheckedList(() => {
            const next = Array(photoCnt).fill(true);
            return next;
        });
    };

    return (
        <Block>
            <Header
                photoCnt={photoCnt}
                selectedPhotoCnt={selectedPhotoCnt}
                onSelectAll={handleSelectAll}
                onCancel={onClose}
            />
            <Photos
                photos={photos}
                photoCheckedList={photoCheckedList}
                onSelectPhoto={handleSelectPhoto}
            />
            <ButtonSection
                onNormalDownload={handleNormalDownload}
                onHighQualityDownload={handleHighQualityDownload}
            />
        </Block>
    );
}

const Block = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 768px;
    height: 100%;
    background-color: ${palette.white0};
`;

export default PhotoSelector;
