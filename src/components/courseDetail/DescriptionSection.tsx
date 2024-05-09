import styled, { css } from "styled-components";
import { SectionContainer, SectionHeader, SectionTitle } from "./styles";
import palette from "../../lib/styles/palette";
import useToggle from "../../lib/hooks/useToggle";

export type DescriptionSectionProps = {};

function DescriptionSection(props: DescriptionSectionProps) {
    const [showContentsAll, toggleShowContentsAll] = useToggle(false);

    const onShowContentsBtnClick = () => {
        toggleShowContentsAll();
    };

    return (
        <SectionContainer>
            <SectionHeader>
                <SectionTitle>코스 소개</SectionTitle>
            </SectionHeader>
            <DescriptionContents showAll={showContentsAll}>
                <TestContent />
                <TestContent />
                <TestContent />
                <TestContent />
            </DescriptionContents>
            <ShowContentsBtn onClick={onShowContentsBtnClick}>
                {showContentsAll ? "간략히" : "상세정보 더보기"}
            </ShowContentsBtn>
        </SectionContainer>
    );
}

const DescriptionContents = styled.div<{ showAll: boolean }>`
    overflow: hidden;

    ${(props) =>
        props.showAll
            ? css`
                  height: auto;
              `
            : css`
                  height: 400px;
              `}
`;

const TestContent = styled.div`
    width: 100%;
    height: 400px;
    background-color: ${palette.red2};

    & + & {
        margin-top: 20px;
    }
`;

const ShowContentsBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    border: 1px solid ${palette.black0};
    border-radius: 3px;
    padding: 21px 0 19px;
    margin: 80px auto 0;
`;

export default DescriptionSection;
