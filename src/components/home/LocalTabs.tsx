import styled from "styled-components";
import { getSampleImage } from "../../lib/styles/utils";
import SectionHeader from "./SectionHeader";
import palette from "../../lib/styles/palette";
import CategoryTab from "./CategoryTab";
import { SectionTitle } from "./styles";
import {useNavigate} from "react-router-dom";


export type LocalTabsProps = {};

const photo = getSampleImage();

function LocalTabs(props: LocalTabsProps) {
    const navigate = useNavigate();
    const onDetailBtnClick = (category: string) => {
        navigate(`/Detail/${category}`);
    };
    return (
        <Block>
            <SectionHeader title={<SectionTitle>로컬 찾기</SectionTitle>} />
            <TabContainer>
                <TabBlock onClick={() => onDetailBtnClick('allregion')}>
                    <CategoryTab image="https://i.ibb.co/3yvjDBW/country.jpg" >
                        <TabName>전국</TabName>
                    </CategoryTab>
                </TabBlock>
                <TabBlock onClick={() => onDetailBtnClick('busan')}>
                    <CategoryTab image="https://i.ibb.co/sKpX2rM/busan.jpg">
                        <TabName>부산</TabName>
                    </CategoryTab>
                </TabBlock>
                <TabBlock onClick={() => onDetailBtnClick('gyeongnam')}>
                    <CategoryTab image="https://i.ibb.co/tLmmjyK/gyeongnam.jpg">
                        <TabName>경남</TabName>
                    </CategoryTab>
                </TabBlock>
                <TabBlock onClick={() => onDetailBtnClick('gyeongbuk')}>
                    <CategoryTab image="https://i.ibb.co/HP9y39M/gyeongbuk.jpg">
                        <TabName>경북</TabName>
                    </CategoryTab>
                </TabBlock>
                <TabBlock onClick={() => onDetailBtnClick('jeju')}>
                    <CategoryTab image="https://i.ibb.co/cvTGTt5/jeju.jpg">
                        <TabName>제주</TabName>
                    </CategoryTab>
                </TabBlock>
            </TabContainer>
        </Block>
    );
}

const Block = styled.section`
    padding: 0 20px;
    margin-top: 30px;
`;

const TabBlock = styled.div`
    width: 100%;
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
