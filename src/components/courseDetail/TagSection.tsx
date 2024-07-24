import styled, { css } from "styled-components";
import { SectionContainer } from "./styles";
import { SectionDivider } from "../common/styles/Common";
import palette from "../../lib/styles/palette";

export type TagsSectionProps = {
    tags: Array<string>;
};

const tagList1 = ["진행비", "와인", "핑거푸드", "장소대관", "식기류", "주차"];
const tagList2 = ["뒤풀이 비용"];
const tagList3 = ["신분", "활짝 열린 마음", "소개팅 룩"];

function TagsSection(props: TagsSectionProps) {
    const { tags } = props;

    return (
        <>
            <SectionContainer>
                <SectionRow>
                    <Header>준비물</Header>
                    <TagGrid>
                        {tagList3.map((aTag, i) => (
                            <Tag key={`tag-${i}`}>{aTag}</Tag>
                        ))}
                    </TagGrid>
                </SectionRow>
                <SectionRow>
                    <Header>포함 사항</Header>
                    <TagGrid>
                        {tagList1.map((aTag, i) => (
                            <Tag key={`tag-${i}`}>{aTag}</Tag>
                        ))}
                    </TagGrid>
                </SectionRow>
                <SectionRow>
                    <Header>불포함 사항</Header>
                    <TagGrid>
                        {tagList2.map((aTag, i) => (
                            <Tag key={`tag-${i}`} color="red">
                                {aTag}
                            </Tag>
                        ))}
                    </TagGrid>
                </SectionRow>
            </SectionContainer>
            <SectionDivider />
        </>
    );
}

const SectionRow = styled.div`
    & + & {
        margin-top: 25px;
    }
`;

const Header = styled.header`
    font-size: 12px;
    font-weight: 700;
    padding: 0 20px;
    margin-bottom: 7px;
`;

const TagGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 287px;
    column-gap: 5px;
    row-gap: 8px;
    padding: 0px 20px;
`;

const Tag = styled.div<{ color?: "red" }>`
    width: fit-content;
    font-size: 11px;
    color: ${palette.gray0};
    background-color: ${palette.gray5};
    border-radius: 15px;
    padding: 6px 10px 5px;

    ${(props) =>
        props.color === "red" &&
        css`
            color: ${palette.red500};
        `};
`;

export default TagsSection;
