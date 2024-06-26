import styled from "styled-components";
import { SectionContainer, SectionHeader, SectionTitle } from "../styles";
import RoundTag from "./RoundTag";
import { SectionDivider } from "../../common/styles/Common";

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
                    <StyledSectionHeader>
                        <StyledSectionTitle>준비물</StyledSectionTitle>
                    </StyledSectionHeader>
                    <TagGrid>
                        {tagList3.map((aTag, i) => (
                            <StyledRoundTag key={`tag-${i}`} text={aTag} />
                        ))}
                    </TagGrid>
                </SectionRow>
                <SectionRow>
                    <StyledSectionHeader>
                        <StyledSectionTitle>포함 사항</StyledSectionTitle>
                    </StyledSectionHeader>
                    <TagGrid>
                        {tagList1.map((aTag, i) => (
                            <StyledRoundTag
                                key={`tag-${i}`}
                                // color="green"
                                text={aTag}
                            />
                        ))}
                    </TagGrid>
                </SectionRow>
                <SectionRow>
                    <StyledSectionHeader>
                        <StyledSectionTitle>불포함 사항</StyledSectionTitle>
                    </StyledSectionHeader>
                    <TagGrid>
                        {tagList2.map((aTag, i) => (
                            <StyledRoundTag
                                key={`tag-${i}`}
                                color="red"
                                text={aTag}
                            />
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

const StyledSectionHeader = styled(SectionHeader)`
    margin-bottom: 7px;
`;

const StyledSectionTitle = styled(SectionTitle)`
    font-size: 12px;
`;

const TagGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 287px;
    padding: 0px 20px;
    row-gap: 12px;
`;

const StyledRoundTag = styled(RoundTag)`
    margin-right: 9px;
`;

export default TagsSection;
