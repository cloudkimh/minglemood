import styled from "styled-components";
import { SampleIco } from "../common/styles/Common";
import palette from "../../lib/styles/palette";

export type EmptyProps = {
    mainText: string;
    subText: string;
};

function Empty(props: EmptyProps) {
    const { mainText, subText } = props;

    return (
        <Block>
            <SampleIco />
            <MainText>{mainText}</MainText>
            <SubText>{subText}</SubText>
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
`;

const MainText = styled.strong`
    font-size: 18px;
    font-weight: 700;
    margin-top: 24px;
`;

const SubText = styled.p`
    font-size: 14px;
    color: ${palette.gray0};
    margin-top: 10px;
`;

export default Empty;
