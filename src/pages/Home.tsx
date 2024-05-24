import styled from "styled-components";
import PageTemplate from "../components/common/PageTemplate";
import Banner from "../components/home/Banner";
import Categories from "../components/home/Categories";
import LocalList from "../components/home/LocalList";
import { getSampleImage } from "../lib/styles/utils";
import PostSection from "../components/home/PostSection";
import SectionBanner from "../components/home/SectionBanner";
import PhotoFeeds from "../components/home/PhotoFeeds";
import palette from "../lib/styles/palette";

const photo = getSampleImage();

const photos = Array(9).fill(photo);
const banners = Array(4).fill({
    image: photo,
    title: ["따스한 4월!", "여기로 꽃구경 어때요?"],
});

const bestPosts = [
    {
        id: 1,
        thumbnail: photo,
        region: "부산",
        title: "테스트 제목 테스트 제목 테스트 제목 테스트 제목 테스트 제목 테스트 제목 테스트 제목 테스트 제목  ",
        starScore: 4.5,
        starCnt: 1000,
        heartCnt: 2000,
        price: 33000,
        discountRate: undefined,
        isLiked: true,
    },
    {
        id: 2,
        thumbnail: photo,
        region: "서울",
        title: "테스트 제목 테스트 제목 테스트 제목 테스트 제목 ",
        starScore: 4.5,
        starCnt: 1000,
        heartCnt: 2000,
        price: 33000,
        discountRate: 15,
        isLiked: false,
    },
    // {
    //     thumbnail: photo,
    //     region: "대구",
    //     title: "테스트 제목 테스트 제목 테스트 제목 테스트 제목 ",
    //     rating: 4,
    //     price: 33000,
    // },
    // {
    //     thumbnail: photo,
    //     region: "울산",
    //     title: "테스트 제목 테스트 제목 테스트 제목 테스트 제목 ",
    //     rating: 4,
    //     price: 33000,
    // },
];

function Home() {
    return (
        <PageTemplate>
            <Banner banners={banners} />
            <MainContainer>
                <Categories />
                <SectionMargin1 />
                <LocalList />
                <SectionMargin1 />
                <PostSection
                    title="주간 인기 Best"
                    highlight="Best"
                    headerButton={<SectionButton>더보기</SectionButton>}
                    posts={bestPosts}
                />
                <SectionMargin2 />
                <PostSection
                    title="최근 본 모임"
                    headerButton={<SectionButton>더보기</SectionButton>}
                    posts={bestPosts}
                />
                <SectionMargin2 />
                <PostSection
                    title="함께 참여 가능 모임"
                    headerButton={<SectionButton>더보기</SectionButton>}
                    posts={bestPosts}
                />
                <SectionMargin2 />
                <PostSection
                    title="혼자 참여 가능 모임"
                    headerButton={<SectionButton>더보기</SectionButton>}
                    posts={bestPosts}
                />
                <SectionMargin2 />
                <PhotoFeeds photos={photos} />
                <SectionMargin3 />
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
    margin: 35px 0;
    height: 8px;
    background-color: ${palette.white3};
`;

const SectionMargin3 = styled.div`
    margin-top: 39px;
`;

const SectionButton = styled.button`
    font-size: 13px;
    font-weight: 700;
    color: ${palette.gray6};
`;

export default Home;
