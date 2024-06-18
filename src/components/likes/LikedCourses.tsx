import styled from "styled-components";
import Empty from "./Empty";
import { getSampleImage } from "../../lib/styles/utils";
import CoursePost from "../common/CoursePost";
import { FadeInBlock } from "../common/styles/Common";
import { useNavigate } from "react-router-dom";

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
    const isEmpty = courses.length === 0;

    const onRedirect = () => {
        navigate("/");
    };

    return (
        <Block>
            {isEmpty ? (
                <Empty
                    mainText="아직 찜한 프로그램이 없어요."
                    subText="마음에 드는 프로그램를 찜 해두면 빠르게 다시 찾아볼 수 있어요."
                    onRedirect={onRedirect}
                />
            ) : (
                <PostGrid>
                    {courses.map((aCourse, i) => (
                        <CoursePost
                            key={`post-${i}`}
                            id={aCourse.id}
                            thumbnail={aCourse.thumbnail}
                            region={aCourse.region}
                            title={aCourse.title}
                            starScore={aCourse.starScore}
                            starCnt={aCourse.starCnt}
                            heartCnt={aCourse.heartCnt}
                            price={aCourse.price}
                            isLiked={aCourse.isLiked}
                            discountRate={aCourse.discountRate}
                        />
                    ))}
                </PostGrid>
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
