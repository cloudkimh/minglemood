import styled, { css } from "styled-components";
import { SectionContainer, SectionHeader, SectionTitle } from "./styles";
import palette from "../../lib/styles/palette";
import useToggle from "../../lib/hooks/useToggle";
import BottomArrowIcon from "../../assets/icon/CourseDetail/bottom-arrow.svg";
import { HorizontalBarThick } from "../common/styles/Common";

export type DescriptionSectionProps = {};

function DescriptionSection(props: DescriptionSectionProps) {
    const [showContentsAll, toggleShowContentsAll] = useToggle(false);

    const onShowContentsBtnClick = () => {
        toggleShowContentsAll();
    };

    return (
        <>
            <SectionContainer>
                <SectionHeader>
                    <SectionTitle>소개</SectionTitle>
                </SectionHeader>
                <DescriptionContents showAll={showContentsAll}>
                    <TestContent />
                    <TestContent />
                    <TestContent />
                    <TestContent />
                </DescriptionContents>
                <ShowContentsBtn onClick={onShowContentsBtnClick}>
                    {showContentsAll ? "간략히" : "상세정보 더보기"}
                    <MoreBtn showAll={showContentsAll}>
                        <img alt="more button icon" src={BottomArrowIcon} />
                    </MoreBtn>
                </ShowContentsBtn>
            </SectionContainer>
            <HorizontalBarThick />
        </>
    );
}

const DescriptionContents = styled.div<{ showAll: boolean }>`
    overflow: hidden;
    padding: 20px 20px 30px;

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
    width: calc(100% - 40px);
    border: 1px solid ${palette.black0};
    padding: 21px 0 19px;
    margin: 80px auto 0;
    font-size: 12px;
    font-weight: 600;
`;

const MoreBtn = styled.div<{ showAll: boolean }>`
    width: 14px;
    height: 14px;
    margin-left: 5px;

    ${(props) =>
        props.showAll &&
        css`
            transform: rotate(180deg);
        `}

    img {
        widght: 100%;
        vertical-align: middle;
    }
`;

export default DescriptionSection;
