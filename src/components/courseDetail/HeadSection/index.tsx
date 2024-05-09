import styled from "styled-components";
import CourseInfo from "./CourseInfo";
import HostInfo from "./HostInfo";
import { HorizontalBar } from "../../../styles/Common";
import palette from "../../../lib/styles/palette";

export type HeadSectionProps = {
    title: string;
    region: string;
    price: number;
    hostInfo: {
        avatar: string;
        alias: string;
        courseCnt: number;
        reviewCnt: number;
        likeCnt: number;
    };
};

function HeadSection(props: HeadSectionProps) {
    const { title, region, price, hostInfo } = props;

    return (
        <Block>
            <CourseInfo title={title} region={region} price={price} />
            <StyledHorizontalBar />
            <HostInfo hostInfo={hostInfo} />
        </Block>
    );
}

const Block = styled.header`
    padding: 24px;
    border-bottom: 1px solid ${palette.gray5};
`;

const StyledHorizontalBar = styled(HorizontalBar)`
    margin: 20px 0;
`;

export default HeadSection;
