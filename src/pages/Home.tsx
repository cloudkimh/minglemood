import styled from "styled-components";
import PageTemplate from "../components/common/PageTemplate";
import Banner from "../components/home/Banner";
import Categories from "../components/home/Categories";
import LocalList from "../components/home/LocalList";
import { getSampleImage } from "../lib/styles/utils";
import PostSection from "../components/home/PostSection";
import SectionBanner from "../components/home/SectionBanner";
import PhotoFeeds from "../components/home/PhotoFeeds";

const photo = getSampleImage();

const photos = Array(9).fill(photo);
const banners = Array(4).fill(photo);

const bestPosts = [
    {
        thumbnail: photo,
        region: "부산",
        title: "테스트 제목 테스트 제목 테스트 제목 테스트 제목 ",
        rating: 4,
        price: 33000,
    },
    {
        thumbnail: photo,
        region: "서울",
        title: "테스트 제목 테스트 제목 테스트 제목 테스트 제목 ",
        rating: 4,
        price: 33000,
    },
    {
        thumbnail: photo,
        region: "대구",
        title: "테스트 제목 테스트 제목 테스트 제목 테스트 제목 ",
        rating: 4,
        price: 33000,
    },
    {
        thumbnail: photo,
        region: "울산",
        title: "테스트 제목 테스트 제목 테스트 제목 테스트 제목 ",
        rating: 4,
        price: 33000,
    },
];

function Home() {
    return (
        <PageTemplate>
            <Banner bannerImages={banners} />
            <MainContainer>
                <Categories />
                <SectionMargin1 />
                <LocalList />
                <SectionMargin1 />
                <PostSection
                    title="주간 인기 베스트"
                    headerButton={<SectionButton>전체보기</SectionButton>}
                    posts={bestPosts}
                />
                <SectionMargin2 />
                <PostSection
                    title="최근 본 모임"
                    headerButton={<SectionButton>전체보기</SectionButton>}
                    posts={bestPosts}
                />
                <SectionMargin2 />
                <PostSection
                    title="함께 참여 가능 모임"
                    headerButton={<SectionButton>전체보기</SectionButton>}
                    posts={bestPosts}
                />
                <SectionMargin2 />
                <PostSection
                    title="혼자 참여 가능 모임"
                    headerButton={<SectionButton>전체보기</SectionButton>}
                    posts={bestPosts}
                />
                <SectionMargin2 />
                <PhotoFeeds photos={photos} />
                <SectionMargin2 />
                <SectionBanner
                    mainText="호스트 지원하기"
                    subText="좋아하는 일 걱정 없이 하세요!"
                />
            </MainContainer>
        </PageTemplate>
    );
}

const MainContainer = styled.main`
    padding: 24px 0;
`;

const SectionMargin1 = styled.div`
    margin-top: 34px;
`;

const SectionMargin2 = styled.div`
    margin-top: 52px;
`;

const SectionButton = styled.button`
    font-size: 14px;
    font-weight: 700;
`;

export default Home;
