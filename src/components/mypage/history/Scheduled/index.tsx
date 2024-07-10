import { CardContainer } from "../styles";
import ScheduledCard from "./ScheduledCard";
import { getSampleImage } from "../../../../lib/styles/utils";
import useToggle from "../../../../lib/hooks/useToggle";
import CardCount from "../CardCount";
import EmptyMessage from "../EmptyMessage";

const course = {
    timestamp: "2024.02.12",
    id: 17,
    thumbnail: getSampleImage(),
    title: "테스트 모임",
    location: "부산",
    time: "2024년 2월 12일",
    count: 3,
};
const sampleCourses = Array(3).fill(course);

function Scheduled() {
    const [isAscendingOrder, toggleIsAscendingOrder] = useToggle(false);
    const courseCount = sampleCourses.length;

    const handleClickOrderBtn = () => toggleIsAscendingOrder();

    return courseCount > 0 ? (
        <>
            <CardCount
                count={courseCount}
                onClickOrderBtn={handleClickOrderBtn}
                isAscendingOrder={isAscendingOrder}
            />
            <CardContainer>
                {sampleCourses.map((aCourse) => (
                    <ScheduledCard
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
    ) : (
        <EmptyMessage
            mainText="예정된 모임이 없어요."
            subText="모임을 예약해보세요!"
        />
    );
}

export default Scheduled;
