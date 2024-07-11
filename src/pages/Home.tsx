import styled from "styled-components";
import PageTemplate from "../components/basics/PageTemplate";
import Banner from "../components/home/Banner";
import { getSampleImage } from "../lib/styles/utils";
import PostSection from "../components/home/PostSection";
import PhotoFeeds from "../components/home/PhotoFeeds";
import palette from "../lib/styles/palette";
import LocalTabs from "../components/home/LocalTabs";
import ThemeTabs from "../components/home/ThemeTabs";
import { SectionDivider } from "../components/common/styles/Common";

const photo = getSampleImage();
const photos = Array(9).fill(photo);
const banners = Array(4).fill({
    image: photo,
    title: "따스한 4월!\n여기로 꽃구경 어때요?",
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
];

function Home() {
    return (
        <PageTemplate>
            <Banner banners={banners} />
            <MainContainer>
                <ThemeTabs />
                <LocalTabs />
                <StyledSectionDivider />
                <PostSection
                    title="주간 인기 Best"
                    highlight="Best"
                    headerButton={<SectionButton>더보기</SectionButton>}
                    posts={bestPosts}
                />
                <PostSection
                    title="최근 본 모임"
                    headerButton={<SectionButton>더보기</SectionButton>}
                    posts={bestPosts}
                />
                <PostSection
                    title="함께 참여 가능 모임"
                    headerButton={<SectionButton>더보기</SectionButton>}
                    posts={bestPosts}
                />
                <PostSection
                    title="혼자 참여 가능 모임"
                    headerButton={<SectionButton>더보기</SectionButton>}
                    posts={bestPosts}
                />
                <StyledSectionDivider />
                <PhotoFeeds photos={photos} />
            </MainContainer>
        </PageTemplate>
    );
}

const MainContainer = styled.main`
    padding: 24px 0;
`;

const SectionButton = styled.button`
    font-size: 13px;
    font-weight: 700;
    color: ${palette.gray6};
`;

const StyledSectionDivider = styled(SectionDivider)`
    margin-top: 35px;
`;

export default Home;
