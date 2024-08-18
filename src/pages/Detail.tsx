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
import {useParams} from "react-router-dom";

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

function Detail() {
    const [content, setContent] = useState([]);
    const params = useParams();
    let queryParams = "";
    let fetchId = params.id;
    let title = "";

    if (params.id =="bestMore"){
        title = "주간 인기";
    } else if (params.id =="latestMore"){
        title = "최근 본 모임";
    } else if (params.id =="more2More"){
        title = "함께 참여 가능한 모임";
    } else if (params.id =="more1More"){
        title = "혼자 참여 가능 모임";
    } else if (params.id =="superhost"){
        title = "슈퍼호스트"
    } else if (params.id =="timeSearch2"){
        title = "2~4 시간"
        fetchId = "timeSearch";
        queryParams = "?minTime=120&maxTime=240";
    } else if (params.id =="timeSearch4"){
        title = "4~8 시간"
        fetchId = "timeSearch";
        queryParams = "?minTime=240&maxTime=480";
    } else if (params.id =="top30"){
        title = "Top30"
    } else if (params.id =="allday"){
        title = "All Day"
        queryParams = "?minTime=1440";
    } else if (params.id =="allregion") {
        title = "전국"
        fetchId="region"
        queryParams="?region=all"
    } else if (params.id == "busan"){
        title ="부산"
        fetchId="region"
        queryParams="?region=busan"
    } else if (params.id == "gyeongnam"){
        title ="경남"
        fetchId="region"
        queryParams="?region=gyeongnam"
    } else if (params.id == "gyeongbuk"){
        title ="경북"
        fetchId="region"
        queryParams="?region=gyeongbuk"
    } else if (params.id == "jeju"){
        title ="제주"
        fetchId="region"
        queryParams="?region=jeju"
    }

    const handleHome = async () => {
        await new Promise((r) => setTimeout(r, 1000));
        const response = await fetch(
            process.env.REACT_APP_HOST + "/program/"+ fetchId + queryParams,
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
    }, [params.id]);

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
                         {title}   더보기
                        </SectionTitle>
                    }
                    posts={content}
                />
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

export default Detail;
