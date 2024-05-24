import styled from "styled-components";
import CategoryItem from "../CategoryItem";
import { getSampleImage } from "../../../lib/styles/utils";

export type CategoriesProps = {};

const photo = getSampleImage();

function Categories(props: CategoriesProps) {
    return (
        <Block>
            <CategoryItem image={photo} text="슈퍼 호스트" />
            <CategoryItem image={photo} text="2~4시간" />
            <CategoryItem image={photo} text="4~8시간" />
            <CategoryItem image={photo} text="Top 30" />
            <CategoryItem image={photo} text="All Day" />
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    align-items: top;
    justify-content: space-between;
    padding: 0 20px;
`;

export default Categories;
