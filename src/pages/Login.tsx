import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/img/minglemood-logo.svg";
import palette from "../lib/styles/palette";
import { DefaultButton } from "../components/common/styles/Buttons";
import { VerticalBar } from "../components/common/styles/Common";
import kakaoBtnImg from "../assets/img/kakao.svg";
import naverBtnImg from "../assets/img/naver.svg";
import { useNavigate } from "react-router-dom";
import PageTemplate from "../components/basics/PageTemplate";
import React, { useState } from "react";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        await new Promise((r) => setTimeout(r, 1000));

        const response = await fetch(
            process.env.REACT_APP_HOST + "/members/sign-in",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password : password
                }),
            }
        );

        const result = await response.json();
        if (response.status === 200) {
            if (result.accessToken) {
                localStorage.setItem('login-token', result.accessToken);
                localStorage.setItem('refresh-token', result.refreshToken);
            }
            navigate("/");
        }
    };

    const handleKaKaoLogin =  () => {
        const kakaoAuthUrl = "https://kauth.kakao.com/oauth/authorize?client_id="+process.env.REACT_APP_KAKAO_CP_CLIENT_ID+"&redirect_uri="+process.env.REACT_APP_KAKAO_CLIENT+"&response_type=code";
        window.location.href = kakaoAuthUrl;
    }

    const handleTest =  () => {
        const kakaoAuthUrl = "https://kauth.kakao.com/oauth/authorize?client_id="+process.env.REACT_APP_KAKAO_CP_CLIENT_ID+"&redirect_uri="+process.env.REACT_APP_KAKAO_CLIENT+"&response_type=code";
        window.location.href = kakaoAuthUrl;
    }

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
                    <AccountInput type="text" placeholder="아이디(이메일)" id="username"
                                  value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <AccountInput type="password" placeholder="비밀번호"  id="password"
                                  value={password} onChange={(e) => setPassword(e.target.value)}/>
                </AccountInputBlock>
                <LoginBtn
                    onClick={() => {
                        handleLogin();
                    }}
                    color={palette.red500}
                    styleType="filled"
                >
                    로그인
                </LoginBtn>
                <ButtonGroup>
                    <TextBtn>아이디 찾기</TextBtn>
                    <StyledVerticalBar />
                    <TextBtn onClick={() => navigate("/findPassword")}>비밀번호 찾기</TextBtn>
                    <StyledVerticalBar />
                    <TextBtn onClick={() => navigate("/sign-up")}>
                        회원가입
                    </TextBtn>
                </ButtonGroup>
                <SnsLoginText>SNS계정으로 로그인하기</SnsLoginText>
                <SnsLoginBtnBlock>
                    <SnsBtn img={kakaoBtnImg} onClick={handleKaKaoLogin}/>
                    <SnsBtn img={naverBtnImg} onClick={handleTest} />
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
    cursor:pointer;
    z-index:10;
`;

export default Login;
