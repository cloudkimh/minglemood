import styled from "styled-components";
import CourseInfo from "./CourseInfo";
import HostInfo from "./HostInfo";
import { HorizontalBar } from "../../common/styles/Common";
import palette from "../../../lib/styles/palette";
import Banner from "./Banner";

export type HeadSectionProps = {
    banners: Array<string>;
    title: string;
    region: string;
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
    const { banners, title, region, price, hostInfo } = props;

    return (
        <>
            <Banner banners={banners} />
            <HeaderContainer>
                <CourseInfo title={title} region={region} price={price} />
                <StyledHorizontalBar />
                <HostInfo hostInfo={hostInfo} />
            </HeaderContainer>
        </>
    );
}

const HeaderContainer = styled.header`
    padding: 24px;
    border-bottom: 1px solid ${palette.gray5};
`;

const StyledHorizontalBar = styled(HorizontalBar)`
    margin: 20px 0;
`;

export default HeadSection;
