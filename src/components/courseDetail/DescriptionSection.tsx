import styled, { css } from "styled-components";
import { SectionContainer, SectionTitle } from "./styles";
import palette from "../../lib/styles/palette";
import useToggle from "../../lib/hooks/useToggle";
import { SectionDivider } from "../common/styles/Common";
import Icon from "../basics/Icon";
import {useEffect} from "react";

export type DescriptionSectionProps = {
    courseInfo : string
};

function DescriptionSection(props: DescriptionSectionProps) {
    const [showContentsAll, toggleShowContentsAll] = useToggle(false);
    const {courseInfo} = props;

    const onClickShowContentsBtn = () => toggleShowContentsAll();

    return (
        <>
            <SectionContainer>
                <Header>
                    <SectionTitle>소개</SectionTitle>
                </Header>
                <Contents contentVisible={showContentsAll}>
                    <Content dangerouslySetInnerHTML={ {__html: courseInfo} }>
                    </Content>
                </Contents>
                <BtnWrapper>
                    <ShowContentsBtn onClick={onClickShowContentsBtn}>
                        {showContentsAll ? "간략히" : "상세정보 더보기"}
                        <ChevronIco
                            name="chevron-down"
                            rotated={showContentsAll}
                        />
                    </ShowContentsBtn>
                </BtnWrapper>
            </SectionContainer>
            <SectionDivider />
        </>
    );
}

const Header = styled.header`
    padding: 0 20px;
`;

const Contents = styled.div<{ contentVisible: boolean }>`
    overflow: hidden;
    padding: 20px 20px 30px;

    ${(props) =>
        props.contentVisible
            ? css`
                  height: 100%;
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

const Content = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${palette.white1};

    & + & {
        margin-top: 20px;
    }
`;

const BtnWrapper = styled.div`
    padding: 0 20px;
    margin-top: 20px;
`;

const ShowContentsBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 5px;
    width: 100%;
    font-weight: 700;
    border: 1px solid ${palette.black0};
    padding: 20px 0 19px;
`;

const ChevronIco = styled(Icon)<{ rotated: boolean }>`
    width: 14px;
    height: 14px;

    ${(props) =>
        props.rotated &&
        css`
            transform: rotate(180deg);
        `}
`;

export default DescriptionSection;
