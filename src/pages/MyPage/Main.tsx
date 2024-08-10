import UserHeader from "../../components/mypage/main/UserHeader";
import UserMenu from "../../components/mypage/main/UserMenu";
import PageTemplate from "../../components/basics/PageTemplate";
import { getSampleUser } from "../../lib/data/sampleUserData";
import MenuItem from "../../components/mypage/main/UserMenu/MenuItem";
import { SectionDivider } from "../../components/common/styles/Common";
import Icon from "../../components/basics/Icon";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

// User 인터페이스 정의
interface User {
    id: number;
    username: string;
    nickname: string;
    address: string;
    phone: string;
    profileImg: string;
}

function Main() {
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);

    const handleMyPage = async () => {
        await new Promise((r) => setTimeout(r, 1000));

        const logintoken = localStorage.getItem('login-token');
        if (logintoken) {
            const response = await fetch(
                "https://api.minglemood.city/members/mypage",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${logintoken}`
                    }
                }
            );

            if (response.status === 200) {
                const result = await response.json();
                setUser(result); // 유저 정보 상태에 저장
            } else {
                alert("로그인이 필요한 페이지 입니다.");
                navigate("/login");
            }
        } else {
            alert("로그인이 필요한 페이지 입니다.");
            navigate("/login");
        }
    };

    useEffect(() => {
        handleMyPage(); // 컴포넌트가 마운트될 때 유저 정보 불러오기
    }, []);

    // @ts-ignore
    return (
        <PageTemplate gnbVisible>
            {user ? (
                <UserHeader alias={user.nickname} avatar="https://picsum.photos/200/300" />
            ) : (
                <div>Loading...</div>
            )}
            <UserMenu title="내 활동">
                <MenuItem
                    to="/mypage/history/scheduled"
                    icon={<Icon name="card" />}
                    text="결제내역"
                />
                <MenuItem
                    to="/likes/course"
                    icon={<Icon name="heart" />}
                    text="찜"
                />
            </UserMenu>
            <SectionDivider />
            <UserMenu title="호스트">
                <MenuItem
                    to="https://mango-marquess-cef.notion.site/9c5949afdc1a433f9f0df3e30bab0824?pvs=4"
                    icon={<Icon name="host" />}
                    text="호스트 관리자 페이지"
                />
            </UserMenu>
            <SectionDivider />
            <UserMenu title="고객센터">
                <MenuItem
                    to="/mypage"
                    icon={<Icon name="speaker" />}
                    text="공지사항"
                />
                <MenuItem
                    to="/mypage"
                    icon={<Icon name="headphone" />}
                    text="고객센터"
                />
                <MenuItem
                    to="/mypage"
                    icon={<Icon name="exit" />}
                    text="로그아웃"
                />
            </UserMenu>
        </PageTemplate>
    );
}

export default Main;
