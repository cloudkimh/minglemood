import styled from "styled-components";
import CourseInfo from "./CourseInfo";
import HostInfoCard from "../../common/HostInfoCard";
import { SectionDivider } from "../../common/styles/Common";

export type HeaderSectionProps = {
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

function HeaderSection(props: HeaderSectionProps) {
    const { title, region, discountRate, price, hostInfo } = props;

    return (
        <>
            <Block>
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
            </Block>
            <SectionDivider />
        </>
    );
}

const Block = styled.header`
    padding: 15px 20px 20px;
`;

export default HeaderSection;
