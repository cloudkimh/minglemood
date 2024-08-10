import styled from "styled-components";
import Banner from "../components/home/Banner";
import { getSampleImage } from "../lib/styles/utils";
import PostSection from "../components/home/PostSection";
import PhotoFeeds from "../components/home/PhotoFeeds";
import LocalTabs from "../components/home/LocalTabs";
import ThemeTabs from "../components/home/ThemeTabs";
import { SectionDivider } from "../components/common/styles/Common";
import { SectionButton, SectionTitle } from "../components/home/styles";
import PageTemplate from "../components/basics/PageTemplate";
import {useEffect, useState} from "react";

const photo = getSampleImage();
const photos = Array(9).fill(photo);
/*const banners = Array(4).fill({
    image: photo,
    title: "따스한 4월!\n여기로 꽃구경 어때요?",
});*/
const banners = [{
        image: "https://i.ibb.co/j6QvyHk/banner01.png",
        title: "따스한 4월!\n여기로 꽃구경 어때요?",
    },
    {
        image: "https://i.ibb.co/BVM4nLf/banner02.png",
        title: "따스한 4월!\n여기로 꽃구경 어때요?",
    },
    {
        image: "https://i.ibb.co/ypS2XCG/banner03.png",
        title: "따스한 4월!\n여기로 꽃구경 어때요?",
    },
    {
        image: "https://i.ibb.co/txrPShZ/banner04.png",
        title: "따스한 4월!\n여기로 꽃구경 어때요?",
    }];

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
    const [content, setContent] = useState({
        best: [],
        latest: [],
        more1: [],
        more2: [],
        reviews:[],
    });
    const handleHome = async () => {
        await new Promise((r) => setTimeout(r, 1000));
        const response = await fetch(
            process.env.REACT_APP_HOST + "/program/main",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.status === 200) {
            const result = await response.json();
            setContent(result); // 유저 정보 상태에 저장
        } else {
            alert("알수 없는 오류, 고객센터에 문의 주시기 바랍니다.");
        }

    };

    useEffect(() => {
        handleHome(); // 컴포넌트가 마운트될 때 유저 정보 불러오기
    }, []);

    return (
        <PageTemplate gnbVisible scrollGnbTransition>
            <Banner banners={banners} />
            <MainContainer>
                <ThemeTabs />
                <LocalTabs />
                <StyledSectionDivider />
                <PostSection
                    title={
                        <SectionTitle>
                            주간 인기 <strong>Best</strong>
                        </SectionTitle>
                    }
                    headerButton={<SectionButton>더보기</SectionButton>}
                    posts={content.best}
                />
                <PostSection
                    title={<SectionTitle>최근 본 모임</SectionTitle>}
                    headerButton={<SectionButton>더보기</SectionButton>}
                    posts={content.latest}
                />
                <PostSection
                    title={<SectionTitle>함께 참여 가능 모임</SectionTitle>}
                    headerButton={<SectionButton>더보기</SectionButton>}
                    posts={content.more2}
                />
                <PostSection
                    title={<SectionTitle>혼자 참여 가능 모임</SectionTitle>}
                    headerButton={<SectionButton>더보기</SectionButton>}
                    posts={content.more1}
                />
                <StyledSectionDivider />
                <PhotoFeeds reviews={content.reviews} />
            </MainContainer>
        </PageTemplate>
    );
}

const MainContainer = styled.main`
    padding: 24px 0;
`;

const StyledSectionDivider = styled(SectionDivider)`
    margin-top: 35px;
`;

export default Home;
