import styled from "styled-components";
import Feed from "../components/socialFeeds/Feed";
import PageTemplatexxx from "../components/basics/PageTemplatexxx";
import { ReactComponent as EditIco } from "../assets/icon/pencil.svg";
import { getSampleImage } from "../lib/styles/utils";

const photo1 = getSampleImage();
const photo2 = getSampleImage();
const photo3 = getSampleImage();
const photo4 = getSampleImage();
const photo5 = getSampleImage();
const photos = [photo1, photo2, photo3, photo4, photo5];
const feed = {
    id: 10,
    timestamp: "1시간 전",
    avatar: photo1,
    alias: "초코뮤직",
    url: "/course/10",
    name: "코스이름 코스이름 코스이름 코스이름 코스이름 코스이름 ",
    photos,
    text: "텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 ",
    likes: 21,
    isLiked: false,
    comments: 12,
};
const samplefeeds = Array(5).fill(feed);

function SocialFeeds() {
    return (
        <PageTemplatexxx>
            <Header>
                <Title>모임 피드</Title>
                <EditBtn>
                    <EditIco />
                </EditBtn>
            </Header>
            <FeedContainer>
                {samplefeeds.map((aFeed) => (
                    <Feed
                        id={aFeed.id}
                        photos={aFeed.photos}
                        timestamp={aFeed.timestamp}
                        avatar={aFeed.avatar}
                        alias={aFeed.alias}
                        url={aFeed.url}
                        name={aFeed.name}
                        text={aFeed.text}
                        likes={aFeed.likes}
                        isLiked={aFeed.isLiked}
                        comments={aFeed.comments}
                    />
                ))}
            </FeedContainer>
        </PageTemplatexxx>
    );
}

const Header = styled.header`
    display: grid;
    grid-template-areas: ". title edit";
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 50px;
    padding: 0 20px;
`;

const Title = styled.h1`
    grid-area: title;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
`;

const EditBtn = styled.button`
    grid-area: edit;
    display: block;
    width: 24px;
    height: 24px;
    margin-left: auto;
`;

const FeedContainer = styled.div`
    display: grid;
    row-gap: 35px;
    padding: 20px 0 35px;
`;

export default SocialFeeds;
