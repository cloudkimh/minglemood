import styled from "styled-components";
import PageTemplate from "../components/basics/PageTemplate";
import PageHeader from "../components/common/PageHeader";
import palette from "../lib/styles/palette";
import { getSampleImage } from "../lib/styles/utils";
import Photos from "../components/photoGallery/Photos";
import PhotoViewer from "../components/photoGallery/PhotoViewer";
import PhotoSelector from "../components/photoGallery/PhotoSelector";
import useToggle from "../lib/hooks/useToggle";
import { useState } from "react";

const sampleCourseId = 12;
const photos = [
    getSampleImage(),
    getSampleImage(),
    getSampleImage(),
    getSampleImage(),
    getSampleImage(),
    getSampleImage(),
    getSampleImage(),
    getSampleImage(),
    getSampleImage(),
    getSampleImage(),
    getSampleImage(),
    getSampleImage(),
];

function PhotoGallery() {
    const [selectorOpened, toggleSelectorOpened] = useToggle(false);
    const [viewerOpened, toggleViewerOpened] = useToggle(false);
    const [viewerStartIdx, setViewerStartIdx] = useState(1);

    const onClickSelectionMode = () => toggleSelectorOpened();

    const onCloseSelector = () => toggleSelectorOpened();

    const onCloseViewer = () => toggleViewerOpened();

    const onClickPhoto = (idx: number) => {
        setViewerStartIdx(idx);
        toggleViewerOpened();
    };

    return (
        <PageTemplate>
            <PageHeader
                title="모임 참여 사진"
                rightSlot={
                    <SelectionModeBtn onClick={onClickSelectionMode}>
                        선택
                    </SelectionModeBtn>
                }
            />
            <Photos photos={photos} onClickPhoto={onClickPhoto} />
            {viewerOpened && (
                <PhotoViewer
                    onClose={onCloseViewer}
                    photos={photos}
                    startIdx={viewerStartIdx}
                />
            )}
            {selectorOpened && (
                <PhotoSelector
                    courseId={sampleCourseId}
                    photos={photos}
                    onClose={onCloseSelector}
                />
            )}
        </PageTemplate>
    );
}

const SelectionModeBtn = styled.button`
    display; block;
    font-size: 14px;
    font-weight: 700;
    color: ${palette.gray2};
    margin-left: auto;
`;

export default PhotoGallery;
