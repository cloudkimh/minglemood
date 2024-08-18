import styled from "styled-components";
import Feed from "../../components/socialFeeds/main/Feed";
import PageTemplate from "../../components/basics/PageTemplate";
import { ReactComponent as EditIco } from "../../assets/icon/pencil.svg";
import { getSampleImage } from "../../lib/styles/utils";
import PageHeader from "../../components/common/PageHeader";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import useToggle from "../../lib/hooks/useToggle";

const photo1 = getSampleImage();
const photo2 = getSampleImage();
const photo3 = getSampleImage();
const photo4 = getSampleImage();
const photo5 = getSampleImage();
const photos = [photo1, photo2, photo3, photo4, photo5];

function Main() {
    const [feed, setFeed] = useState([{
        id: 10,
        timestamp: "1시간 전",
        avatar: photo1,
        imgUrl: "",
        nickname: "밍글무드",
        programId: "10",
        title: "프로그램 이름",
        content: "후기",
        likes: 21,
        isLiked: false,
        comments: 12,
    }]);

    const handleMain = async () => {
        await new Promise((r) => setTimeout(r, 1000));
        const response = await fetch(
            process.env.REACT_APP_HOST + "/review/social",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.status === 200) {
            const result = await response.json();
            setFeed(result); // 유저 정보 상태에 저장
        } else {
            alert("알수 없는 오류, 고객센터에 문의 주시기 바랍니다.");
        }

    };

    useEffect(() => {
        handleMain(); // 컴포넌트가 마운트될 때 유저 정보 불러오기
    }, []);

    return (
        <PageTemplate>
            <PageHeader
                title="모임 피드"
                rightSlot={
                    <Link to="/social-feeds/write">
                        <EditBtn>
                            <EditIco />
                        </EditBtn>
                    </Link>
                }
            />
            <FeedContainer>
                {feed.map((aFeed) => (
                    <Feed
                        id={aFeed.id}
                        photos={aFeed.imgUrl}
                        timestamp={aFeed.timestamp}
                        avatar={aFeed.avatar}
                        alias={aFeed.nickname}
                        url={"/course/" + aFeed.programId}
                        name={aFeed.title}
                        text={aFeed.content}
                        likes={aFeed.likes}
                        isLiked={aFeed.isLiked}
                        comments={aFeed.comments}
                    />
                ))}
            </FeedContainer>
        </PageTemplate>
    );
}

const EditBtn = styled.button`
    display: block;
    width: 24px;
    height: 24px;
    margin-left: auto;
`;

const FeedContainer = styled.div`
    display: grid;
    row-gap: 35px;
    padding: 20px 0 35px;
    margin-top: 70px;
`;

export default Main;
