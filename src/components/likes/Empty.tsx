import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Icon from "../basics/Icon";

export type EmptyProps = {
    mainText: string;
    subText: string;
    onRedirect: () => void;
};

function Empty(props: EmptyProps) {
    const { mainText, subText, onRedirect } = props;

    return (
        <Block>
            <StyledHeartIco name="heart-outlined" />
            <MainText>{mainText}</MainText>
            <SubText>{subText}</SubText>
            <RedirectBtn onClick={onRedirect}>둘러보기</RedirectBtn>
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
`;

const StyledHeartIco = styled(Icon)`
    width: 60px;
    height: 60px;
`;

const MainText = styled.strong`
    font-size: 14px;
    font-weight: 700;
    margin-top: 24px;
`;

const SubText = styled.p`
    width: 200px;
    font-size: 12px;
    text-align: center;
    word-break: keep-all;
    line-height: 18px;
    color: ${palette.gray0};
    margin-top: 10px;
`;

const RedirectBtn = styled.button`
    width: 130px;
    font-size: 12px;
    font-weight: 700;
    color: ${palette.red500};
    border: 1px solid ${palette.red500};
    border-radius: 5px;
    padding: 8px 0;
    margin-top: 20px;
`;

export default Empty;
