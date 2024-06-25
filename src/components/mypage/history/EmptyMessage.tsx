import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import { DefaultButton } from "../../common/styles/Buttons";
import { Link } from "react-router-dom";

export type EmptyMessageProps = {
    mainText: string;
    subText: string;
};

function EmptyMessage(props: EmptyMessageProps) {
    const { mainText, subText } = props;

    return (
        <Block>
            <MainText>{mainText}</MainText>
            <SubText>{subText}</SubText>
            <Link to="/">
                <RedirectBtn styleType="outlined" color={palette.red500}>
                    프로그램 보러가기
                </RedirectBtn>
            </Link>
        </Block>
    );
}

const Block = styled.div`
    display: grid;
    place-items: center;
    margin: 90px auto 0;
`;

const MainText = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: ${palette.black0};
`;

const SubText = styled.p`
    font-size: 12px;
    color: ${palette.gray2};
    margin-top: 8px;
`;

const RedirectBtn = styled(DefaultButton)`
    width: 130px;
    height: 30px;
    font-size: 12px;
    margin-top: 37px;
`;

export default EmptyMessage;
