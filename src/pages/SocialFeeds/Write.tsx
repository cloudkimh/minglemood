import { useState } from "react";
import PageTemplatexxx from "../../components/basics/PageTemplatexxx";
import PageHeader from "../../components/common/PageHeader";
import UploadPhoto from "../../components/socialFeeds/write/UploadPhoto";
import Rating from "../../components/socialFeeds/write/Rating";
import { getSampleImage } from "../../lib/styles/utils";
import ReservationInfo from "../../components/common/ReservationInfo";
import styled from "styled-components";
import { SectionDivider } from "../../components/common/styles/Common";
import TextInput from "../../components/socialFeeds/write/TextInput";
import { DefaultButton } from "../../components/common/styles/Buttons";
import palette from "../../lib/styles/palette";

export type PostPhoto = {
    url: string;
    file: File;
};

const sampleCourse = {
    thumbnail: getSampleImage(),
    region: "울산",
    title: "하루만에 끝내는 스마트폰 사진 촬영과 보정법 (필터 공유)",
    time: "2024.06.13 (목)",
    count: 1,
};

function Write() {
    const [postText, setText] = useState<string>("");
    const [postPhotos, setPostPhotos] = useState<Array<PostPhoto>>([]);
    const [postRating, setPostRating] = useState<number>(10);

    const onDeletePhoto = (targetIdx: number) => {
        const nextPostPhotos = postPhotos.slice();
        nextPostPhotos.splice(targetIdx, 1);
        setPostPhotos(nextPostPhotos);
    };

    const onChangePhotoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const file = e.target.files[0];
        const url = URL.createObjectURL(file);
        const nextPostPhotos = postPhotos.concat([{ file, url }]);
        setPostPhotos(nextPostPhotos);
    };

    const onChangeRating = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostRating(Number(e.target.value));
    };

    const onChangeTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const onClickPost = () => {
        const formdata = new FormData();
        formdata.append("rating", postRating.toString());
        formdata.append("text", postText);
        postPhotos.map((aPhoto) => formdata.append("photoset", aPhoto.file));
        // do async
    };

    return (
        <PageTemplatexxx>
            <PageHeader title="피드 쓰기" />
            <MainContainer>
                <InfoSection>
                    <ReservationInfo
                        thumbnail={sampleCourse.thumbnail}
                        title={sampleCourse.title}
                        region={sampleCourse.region}
                        time={sampleCourse.time}
                        count={sampleCourse.count}
                    />
                </InfoSection>
                <SectionDivider />
                <Rating rating={postRating} onChange={onChangeRating} />
                <UploadPhoto
                    photos={postPhotos}
                    onDeletePhoto={onDeletePhoto}
                    onChangePhotoInput={onChangePhotoInput}
                />
                <TextInput text={postText} onChange={onChangeTextInput} />
            </MainContainer>
            <ButtonContainer>
                <PostBtn
                    onClick={onClickPost}
                    color={palette.red500}
                    styleType="filled"
                >
                    등록하기
                </PostBtn>
            </ButtonContainer>
        </PageTemplatexxx>
    );
}

const MainContainer = styled.div`
    margin-top: 70px;
    padding-bottom: 100px;
`;

const InfoSection = styled.section`
    padding: 0 20px 30px;
`;

const ButtonContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: ${palette.white0};
    padding: 10px 20px 20px;
`;

const PostBtn = styled(DefaultButton)`
    width: 100%;
    height: 40px;
    font-size: 13px;
    padding: 12px 0;
`;

export default Write;
