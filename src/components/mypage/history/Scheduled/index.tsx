import { CardContainer } from "../styles";
import ScheduledCard from "./ScheduledCard";
import { getSampleImage } from "../../../../lib/styles/utils";
import useToggle from "../../../../lib/hooks/useToggle";
import CardCount from "../CardCount";
import EmptyMessage from "../EmptyMessage";
import {useEffect, useState} from "react";

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
    const [payment, setPayment] = useState([{
        id: "",
        program: {
            regDate: "",
            id: 17,
            thumbnail: "",
            title: "",
            region: ""
        },
        specific: "",
        amount: 30000,
        username: "minglemood@gmail.com",
        status: "R",
        count : 1,
    }]);

    const logintoken = localStorage.getItem('login-token');

    const handleClickOrderBtn = () => toggleIsAscendingOrder();

    const handleSchedule = async () => {
        await new Promise((r) => setTimeout(r, 1000));
        const response = await fetch(
            process.env.REACT_APP_HOST + "/payment/reserve",
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
            setPayment(result); // 유저 정보 상태에 저장
        } else {
            alert("알수 없는 오류, 고객센터에 문의 주시기 바랍니다.");
        }

    };

    useEffect(() => {
        handleSchedule(); // 컴포넌트가 마운트될 때 유저 정보 불러오기
    }, []);

    return payment.length > 0 ? (
        <>
            <CardCount
                count={payment.length}
                onClickOrderBtn={handleClickOrderBtn}
                isAscendingOrder={isAscendingOrder}
            />
            <CardContainer>
                {payment.map((aCourse) => (
                    <ScheduledCard
                        timestamp={aCourse.program.regDate}
                        id={aCourse.program.id}
                        thumbnail={aCourse.program.thumbnail}
                        title={aCourse.program.title}
                        location={aCourse.program.region}
                        time={aCourse.program.regDate}
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
