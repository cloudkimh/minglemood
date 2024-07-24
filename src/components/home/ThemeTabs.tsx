import styled from "styled-components";
import CategoryTab from "./CategoryTab";
import { getSampleImage } from "../../lib/styles/utils";

const photo = getSampleImage();

function ThemeTabs() {
    return (
        <Block>
            <TabBlock>
                <CategoryTab image={photo} />
                <TabName>슈퍼 호스트</TabName>
            </TabBlock>
            <TabBlock>
                <CategoryTab image={photo} />
                <TabName>2~4시간</TabName>
            </TabBlock>
            <TabBlock>
                <CategoryTab image={photo} />
                <TabName>4~8시간</TabName>
            </TabBlock>
            <TabBlock>
                <CategoryTab image={photo} />
                <TabName>Top 30</TabName>
            </TabBlock>
            <TabBlock>
                <CategoryTab image={photo} />
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
