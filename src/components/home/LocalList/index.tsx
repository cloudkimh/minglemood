import styled from "styled-components";
import CategoryItem from "../CategoryItem";
import { getSampleImage } from "../../../lib/styles/utils";
import SectionHeader from "../SectionHeader";

export type LocalListProps = {};

const photo = getSampleImage();

function LocalList(props: LocalListProps) {
    return (
        <Block>
            <SectionHeader title="로컬 찾기" />
            <Body>
                <List>
                    <CategoryItem image={photo} text="전국" inner />
                    <CategoryItem image={photo} text="부산" inner />
                    <CategoryItem image={photo} text="경남" inner />
                    <CategoryItem image={photo} text="경북" inner />
                    <CategoryItem image={photo} text="제주" inner />
                </List>
            </Body>
        </Block>
    );
}

const Block = styled.section`
    padding: 0 20px;
`;

const Body = styled.div`
    margin-top: 30px;
`;

const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default LocalList;
