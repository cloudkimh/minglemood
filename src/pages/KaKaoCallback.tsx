import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const KakaoCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get("code");

        if (code) {
            // 백엔드에 authorization code를 보내서 JWT 토큰을 받음
            axios.post(""+process.env.REACT_APP_KAKAO_HOST, { authorizationCode: code })
                .then(response => {
                    const { accessToken, refreshToken } = response.data;
                    localStorage.setItem("login-token", accessToken);  // JWT를 로컬 스토리지에 저장
                    localStorage.setItem("refresh-token", refreshToken); // Refresh Token도 저장
                    navigate("/");  // 메인 페이지로 리디렉트
                })
                .catch(error => {
                    console.error("로그인 실패", error);
                });
        }
    }, [navigate]);

    return <div>카카오 로그인 중...</div>;
};

export default KakaoCallback;