import styled from "styled-components";
import Empty from "./Empty";
import { getSampleImage } from "../../lib/styles/utils";
import CoursePost from "../common/CoursePost";
import { FadeInBlock } from "../common/styles/Common";
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";

export type LikedCoursesProps = {};

const photo = getSampleImage();
const courses = Array(8).fill({
    id: 1,
    thumbnail: photo,
    region: "부산",
    title: "테스트 제목 테스트 제목 테스트 제목 테스트 제목 테스트 제목 테스트 제목 테스트 제목 테스트 제목  ",
    starScore: 4.5,
    starCnt: 1000,
    heartCnt: 2000,
    price: 33000,
    discountRate: undefined,
    isLiked: true,
});

function LikedCourses(props: LikedCoursesProps) {
    const navigate = useNavigate();

    const [likes, setLikes] = useState([{
        id: "",
        program: {
            regDate: "",
            id: 17,
            thumbnail: "",
            title: "",
            region: "",
            rating: 0,
            reviewCnt: 0,
            likeCnt: 0,
            price: 0,
            discountRate: undefined,
            isLiked: true
        },
        member: {

        },
    }]);

    const logintoken = localStorage.getItem('login-token');

    const handleLikedCourses = async () => {
        await new Promise((r) => setTimeout(r, 1000));
        const response = await fetch(
            process.env.REACT_APP_HOST + "/favorite/likeCourse",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${logintoken}`
                },
            }
        );

        if (response.status === 200) {
            const result = await response.json();
            setLikes(result); // 유저 정보 상태에 저장
        } else {
            alert("알수 없는 오류, 고객센터에 문의 주시기 바랍니다.");
        }

    };

    useEffect(() => {
        handleLikedCourses(); // 컴포넌트가 마운트될 때 유저 정보 불러오기
    }, []);

    const onRedirect = () => {
        navigate("/");
    };

    return (
        <Block>
            {likes.length > 0 ?  (
                <PostGrid>
                    {likes.map((aCourse, i) => (
                        <CoursePost
                            key={`post-${i}`}
                            id={aCourse.program.id}
                            thumbnail={aCourse.program.thumbnail}
                            region={aCourse.program.region}
                            title={aCourse.program.title}
                            starScore={aCourse.program.rating}
                            starCnt={aCourse.program.reviewCnt}
                            heartCnt={aCourse.program.likeCnt}
                            price={aCourse.program.price}
                            isLiked={aCourse.program.isLiked}
                            discountRate={aCourse.program.discountRate}
                        />
                    ))}
                </PostGrid>
            ) : (
                <Empty
                    mainText="아직 찜한 프로그램이 없어요."
                    subText="마음에 드는 프로그램를 찜 해두면 빠르게 다시 찾아볼 수 있어요."
                    onRedirect={onRedirect}
                />
            )}
        </Block>
    );
}

const Block = styled(FadeInBlock)`
    padding: 20px 20px 100px;
`;

const PostGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
    row-gap: 25px;
`;

export default LikedCourses;
