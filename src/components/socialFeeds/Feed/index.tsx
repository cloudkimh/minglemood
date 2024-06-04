import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import Header from "./Header";
import { getSampleImage } from "../../../lib/styles/utils";
import Photos from "./Photos";
import CourseTag from "./CourseTag";
import TextSection from "./TextSection";
import ButtonSection from "./ButtonSection";

export type FeedProps = {};

const photo = getSampleImage();
const photos = Array(5).fill(photo);
const feed = {
    id: 10,
    timestamp: "1시간 전",
    avatar: photo,
    alias: "초코뮤직",
    url: "/course/10",
    name: "코스이름 코스이름 코스이름 코스이름 코스이름 코스이름 ",
    photos,
    text: "텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 ",
};

function Feed(props: FeedProps) {
    const onClickLike = () => {};

    return (
        <Block>
            <Wrapper>
                <Header
                    timestamp={feed.timestamp}
                    avatar={feed.avatar}
                    alias={feed.alias}
                />
                <Photos photos={feed.photos} />
                <CourseTag url={feed.url} name={feed.name} />
                <TextSection text={feed.text} />
                <ButtonSection onLike={onClickLike} id={feed.id} />
            </Wrapper>
        </Block>
    );
}

const Block = styled.div`
    border-bottom: 1px solid ${palette.gray5};
    padding: 30px 20px;
`;

const Wrapper = styled.div`
    max-width: 500px;
`;

export default Feed;
