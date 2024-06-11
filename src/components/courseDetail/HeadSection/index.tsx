import styled from "styled-components";
import CourseInfo from "./CourseInfo";
import HostInfoCard from "../../common/HostInfoCard";
import Banner from "./Banner";
import { HorizontalBarThick } from "../../common/styles/Common";

export type HeadSectionProps = {
    banners: Array<string>;
    title: string;
    region: string;
    discountRate?: number;
    price: number;
    hostInfo: {
        avatar: string;
        alias: string;
        courseCnt: number;
        reviewCnt: number;
        likes: number;
    };
};

function HeadSection(props: HeadSectionProps) {
    const { banners, title, region, discountRate, price, hostInfo } = props;

    return (
        <>
            <Banner banners={banners} />
            <HeaderContainer>
                <CourseInfo
                    title={title}
                    region={region}
                    price={price}
                    discountRate={discountRate}
                />
                <HostInfoCard
                    avatar={hostInfo.avatar}
                    alias={hostInfo.alias}
                    courseCnt={hostInfo.courseCnt}
                    reviewCnt={hostInfo.reviewCnt}
                    likes={hostInfo.likes}
                />
            </HeaderContainer>
            <HorizontalBarThick />
        </>
    );
}

const HeaderContainer = styled.header`
    padding: 24px;
`;

export default HeadSection;
