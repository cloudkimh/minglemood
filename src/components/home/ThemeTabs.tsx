import styled from "styled-components";
import CategoryTab from "./CategoryTab";
import {useNavigate} from "react-router-dom";
import { getSampleImage } from "../../lib/styles/utils";

const photo = getSampleImage();

function ThemeTabs() {
    const navigate = useNavigate();
    const onDetailBtnClick = (category: string) => {
        navigate(`/Detail/${category}`);
    };

    return (
        <Block>
            <TabBlock onClick={() => onDetailBtnClick('superhost')}>
                <CategoryTab image="https://i.ibb.co/MMKGgWp/superhost.jpg" />
                <TabName >슈퍼 호스트</TabName>
            </TabBlock>
            <TabBlock onClick={() => onDetailBtnClick('timeSearch2')}>
                <CategoryTab image="https://i.ibb.co/Jy4VHz1/2-4hours.jpg" />
                <TabName>2~4시간</TabName>
            </TabBlock>
            <TabBlock onClick={() => onDetailBtnClick('timeSearch4')}>
                <CategoryTab image="https://i.ibb.co/yY79gtM/4-8hours.jpg" />
                <TabName>4~8시간</TabName>
            </TabBlock>
            <TabBlock onClick={() => onDetailBtnClick('top30')}>
                <CategoryTab image="https://i.ibb.co/Bcddc63/TOP30.jpg" />
                <TabName>Top 30</TabName>
            </TabBlock>
            <TabBlock onClick={() => onDetailBtnClick('allday')}>
                <CategoryTab image="https://i.ibb.co/m6pNSqw/All-Day.jpg" />
                <TabName>All Day</TabName>
            </TabBlock>
        </Block>
    );
}

const Block = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 10px;
    margin-top: 10px;
    padding: 0 20px;
`;

const TabBlock = styled.div`
    width: 100%;
`;

const TabName = styled.p`
    font-size: 11px;
    line-height: 14px;
    text-align: center;
    word-break: keep-all;
    margin-top: 7px;
`;

export default ThemeTabs;
