import styled from "styled-components";

export type SectionBannerProps = {
    mainText: string;
    subText: string;
};

function SectionBanner(props: SectionBannerProps) {
    const { mainText, subText } = props;

    return (
        <Block>
            <MainText>{mainText}</MainText>
            <SubText>{subText}</SubText>
        </Block>
    );
}

const Block = styled.div`
    padding: 40px 30px;
    background-color: #b19dff;
`;

const MainText = styled.p`
    font-size: 28px;
    font-weight: 800;
`;

const SubText = styled.p`
    font-size: 14px;
    font-weight: 700;
    margin-top: 10px;
`;

export default SectionBanner;
