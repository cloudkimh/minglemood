import styled from "styled-components";
import { getSampleImage } from "../../lib/styles/utils";
import SectionHeader from "./SectionHeader";
import palette from "../../lib/styles/palette";
import CategoryTab from "./CategoryTab";
import { SectionTitle } from "./styles";

export type LocalTabsProps = {};

const photo = getSampleImage();

function LocalTabs(props: LocalTabsProps) {
    return (
        <Block>
            <SectionHeader title={<SectionTitle>로컬 찾기</SectionTitle>} />
            <TabContainer>
                <CategoryTab image="https://i.ibb.co/3yvjDBW/country.jpg">
                    <TabName>전국</TabName>
                </CategoryTab>
                <CategoryTab image="https://i.ibb.co/sKpX2rM/busan.jpg">
                    <TabName>부산</TabName>
                </CategoryTab>
                <CategoryTab image="https://i.ibb.co/tLmmjyK/gyeongnam.jpg">
                    <TabName>경남</TabName>
                </CategoryTab>
                <CategoryTab image="https://i.ibb.co/HP9y39M/gyeongbuk.jpg">
                    <TabName>경북</TabName>
                </CategoryTab>
                <CategoryTab image="https://i.ibb.co/cvTGTt5/jeju.jpg">
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
