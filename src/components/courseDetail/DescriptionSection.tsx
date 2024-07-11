import styled, { css } from "styled-components";
import { SectionContainer, SectionHeader, SectionTitle } from "./styles";
import palette from "../../lib/styles/palette";
import useToggle from "../../lib/hooks/useToggle";
import { SectionDivider } from "../common/styles/Common";
import Icon from "../basics/Icon";

export type DescriptionSectionProps = {};

function DescriptionSection(props: DescriptionSectionProps) {
    const [showContentsAll, toggleShowContentsAll] = useToggle(false);

    const onClickShowContentsBtn = () => toggleShowContentsAll();

    return (
        <>
            <SectionContainer>
                <SectionHeader>
                    <SectionTitle>소개</SectionTitle>
                </SectionHeader>
                <DescriptionContents contentVisible={showContentsAll}>
                    <TestContent />
                    <TestContent />
                    <TestContent />
                    <TestContent />
                </DescriptionContents>
                <ShowContentsBtn onClick={onClickShowContentsBtn}>
                    {showContentsAll ? "간략히" : "상세정보 더보기"}
                    <ChevronIco name="chevron-down" rotated={showContentsAll} />
                </ShowContentsBtn>
            </SectionContainer>
            <SectionDivider />
        </>
    );
}

const DescriptionContents = styled.div<{ contentVisible: boolean }>`
    overflow: hidden;
    padding: 20px 20px 30px;

    ${(props) =>
        props.contentVisible
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

const ChevronIco = styled(Icon)<{ rotated: boolean }>`
    width: 14px;
    height: 14px;
    margin-left: 5px;

    ${(props) =>
        props.rotated &&
        css`
            transform: rotate(180deg);
        `}
`;

export default DescriptionSection;
