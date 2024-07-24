import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/img/minglemood-logo.svg";
import palette from "../lib/styles/palette";
import { DefaultButton } from "../components/common/styles/Buttons";
import { VerticalBar } from "../components/common/styles/Common";
import naverBtnImg from "../assets/img/kakao.svg";
import kakaoBtnImg from "../assets/img/naver.svg";
import { useNavigate } from "react-router-dom";
import PageTemplate from "../components/basics/PageTemplate";

function Login() {
    const navigate = useNavigate();

    return (
        <PageTemplate>
            <LogoBlock>
                <Logo />
            </LogoBlock>
            <MainContainer>
                <MainText>
                    지금 밍글과 함께
                    <br />
                    여행을 시작해 보세요!
                </MainText>
                <AccountInputBlock>
                    <AccountInput type="text" placeholder="아이디(이메일)" />
                    <AccountInput type="password" placeholder="비밀번호" />
                </AccountInputBlock>
                <LoginBtn
                    onClick={() => {
                        navigate("/");
                    }}
                    color={palette.red500}
                    styleType="filled"
                >
                    로그인
                </LoginBtn>
                <ButtonGroup>
                    <TextBtn>아이디 찾기</TextBtn>
                    <StyledVerticalBar />
                    <TextBtn>비밀번호 찾기</TextBtn>
                    <StyledVerticalBar />
                    <TextBtn onClick={() => navigate("/sign-up")}>
                        회원가입
                    </TextBtn>
                </ButtonGroup>
                <SnsLoginText>SNS계정으로 로그인하기</SnsLoginText>
                <SnsLoginBtnBlock>
                    <SnsBtn img={kakaoBtnImg} />
                    <SnsBtn img={naverBtnImg} />
                </SnsLoginBtnBlock>
            </MainContainer>
        </PageTemplate>
    );
}

const LogoBlock = styled.div`
    padding: 30px 20px 0;
`;

const MainContainer = styled.div`
    padding: 0 20px;
`;

const MainText = styled.p`
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    margin-top: 45px;
`;

const AccountInputBlock = styled.div`
    display: grid;
    row-gap: 10px;
    margin-top: 15px;
`;

const AccountInput = styled.input`
    font-size: 12px;
    border: none;
    border-radius: 5px;
    background-color: ${palette.white2};
    outline: none;
    padding: 13px 10px;

    &::placeholder {
        color: ${palette.gray3};
    }
`;

const LoginBtn = styled(DefaultButton)`
    width: 100%;
    font-size: 13px;
    padding: 13px 0;
    margin-top: 20px;
`;

const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 0;
`;

const TextBtn = styled.button`
    font-size: 11px;
    font-weight: 700;
    color: ${palette.gray2};
`;

const StyledVerticalBar = styled(VerticalBar)`
    height: 10px;
    background-color: ${palette.gray2};
    margin: 0 5px;
`;

const SnsLoginText = styled.p`
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    margin-top: 60px;
`;

const SnsLoginBtnBlock = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 10px;
    margin-top: 15px;
`;

const SnsBtn = styled.button<{ img: string }>`
    width: 37px;
    height: 37px;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export default Login;
