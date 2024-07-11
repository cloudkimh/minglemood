import styled from "styled-components";
import { getSampleImage } from "../../lib/styles/utils";
import SectionHeader from "./SectionHeader";
import palette from "../../lib/styles/palette";
import CategoryTab from "./CategoryTab";

export type LocalTabsProps = {};

const photo = getSampleImage();

function LocalTabs(props: LocalTabsProps) {
    return (
        <Block>
            <SectionHeader title="로컬 찾기" />
            <TabContainer>
                <CategoryTab image={photo}>
                    <TabName>전국</TabName>
                </CategoryTab>
                <CategoryTab image={photo}>
                    <TabName>부산</TabName>
                </CategoryTab>
                <CategoryTab image={photo}>
                    <TabName>경남</TabName>
                </CategoryTab>
                <CategoryTab image={photo}>
                    <TabName>경북</TabName>
                </CategoryTab>
                <CategoryTab image={photo}>
                    <TabName>제주</TabName>
                </CategoryTab>
            </TabContainer>
        </Block>
    );
}

const Block = styled.section`
    padding: 0 20px;
    margin-top: 30px;
`;

const TabContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 10px;
    margin-top: 10px;
`;

const TabName = styled.p`
    font-size: 11px;
    font-weight: 700;
    text-align: center;
    color: ${palette.white0};
`;

export default LocalTabs;
