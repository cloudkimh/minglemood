import styled from "styled-components";
import Feed from "../../components/socialFeeds/Feed";
import PageTemplatexxx from "../../components/basics/PageTemplatexxx";
import { ReactComponent as EditIco } from "../../assets/icon/pencil.svg";
import { getSampleImage } from "../../lib/styles/utils";
import PageHeader from "../../components/common/PageHeader";

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

function Main() {
    return (
        <PageTemplatexxx>
            <PageHeader
                title="모임 피드"
                rightSlot={
                    <EditBtn>
                        <EditIco />
                    </EditBtn>
                }
            />
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

const EditBtn = styled.button`
    display: block;
    width: 24px;
    height: 24px;
    margin-left: auto;
`;

const FeedContainer = styled.div`
    display: grid;
    row-gap: 35px;
    padding: 20px 0 35px;
    margin-top: 70px;
`;

export default Main;
