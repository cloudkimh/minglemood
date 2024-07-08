import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { ReactComponent as Logo } from "../../assets/img/minglemood-logo.svg";
import { animation, fadeInFromLeft } from "../../lib/styles/animations";
import { BottomBtn } from "./styles";
import { useNavigate } from "react-router-dom";

export type SucceedProps = {
    name: string;
    visible: boolean;
};

function Succeed(props: SucceedProps) {
    const { name, visible } = props;
    const navigate = useNavigate();

    const onClickToHomeBtn = () => {
        navigate("/");
    };

    if (!visible) return null;

    return (
        <Block>
            <TextContainer>
                <Logo />
                <MainText>환영합니다. {name}님!</MainText>
                <SubText>회원가입이 완료 되었어요.</SubText>
            </TextContainer>
            <ToHomeBtn onClick={onClickToHomeBtn}>홈으로</ToHomeBtn>
        </Block>
    );
}

const Block = styled.div`
    ${animation(fadeInFromLeft, 0.3)}
    display: grid;
    grid-template-rows: 1fr 40px;
    place-items: center;
    height: 100%;
    padding: 20px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
`;

const MainText = styled.p`
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin-top: 35px;
`;

const SubText = styled.p`
    font-size: 15px;
    color: ${palette.gray2};
    text-align: center;
    margin-top: 10px;
`;

const ToHomeBtn = styled(BottomBtn)``;

export default Succeed;
