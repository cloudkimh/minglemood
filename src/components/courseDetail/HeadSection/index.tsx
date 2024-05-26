import styled from "styled-components";
import CourseInfo from "./CourseInfo";
import HostInfo from "./HostInfo";
import Banner from "./Banner";
import { HorizontalBar } from "../../common/styles/Common";
import palette from "../../../lib/styles/palette";

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
                <HostInfo hostInfo={hostInfo} />
            </HeaderContainer>
            <StyledHorizontalBar />
        </>
    );
}

const HeaderContainer = styled.header`
    padding: 24px;
`;

const StyledHorizontalBar = styled(HorizontalBar)`
    height: 8px;
    background-color: ${palette.white3};
`;

export default HeadSection;
