import { CardContainer } from "../styles";
import { getSampleImage } from "../../../../lib/styles/utils";
import CanceledCard from "./CanceledCard";
import useToggle from "../../../../lib/hooks/useToggle";
import CardCount from "../CardCount";

const course = {
    timestamp: "2024.02.12",
    id: 17,
    thumbnail: getSampleImage(),
    title: "테스트 모임",
    location: "부산",
    time: "2024년 2월 12일",
    count: 3,
};
const sampleCourses = Array(5).fill(course);

function Canceled() {
    const [isAscendingOrder, toggleIsAscendingOrder] = useToggle(false);
    const courseCount = sampleCourses.length;

    const handleClickOrderBtn = () => toggleIsAscendingOrder();

    return (
        <>
            <CardCount
                count={courseCount}
                onClickOrderBtn={handleClickOrderBtn}
                isAscendingOrder={isAscendingOrder}
            />
            <CardContainer>
                {sampleCourses.map((aCourse) => (
                    <CanceledCard
                        timestamp={aCourse.timestamp}
                        id={aCourse.id}
                        thumbnail={aCourse.thumbnail}
                        title={aCourse.title}
                        location={aCourse.location}
                        time={aCourse.time}
                        count={aCourse.count}
                    />
                ))}
            </CardContainer>
        </>
    );
}

export default Canceled;
