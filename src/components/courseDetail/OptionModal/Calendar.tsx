import { useState } from "react";
import styled, { css } from "styled-components";
import palette from "../../../lib/styles/palette";
import Icon from "../../basics/Icon";

export type CalendarProps = {
    visible: boolean;
    selectedDate: Date;
    onSelectDate: (date: Date) => void;
};

const DAY_NAMES = ["일", "월", "화", "수", "목", "금", "토"];

function Calendar(props: CalendarProps) {
    const { visible, selectedDate, onSelectDate } = props;
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(new Date());

    const onClickPrevMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        );
    };

    const onClickNextMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        );
    };

    const isSameDate = (date1: Date, date2: Date): boolean => {
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        );
    };

    const renderDays = () => {
        const days = [];
        const startOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            1
        );
        const endOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0
        );
        const startDayOfWeek = startOfMonth.getDay();

        for (let i = 0; i < startDayOfWeek; i++) {
            days.push(<div key={`empty-${i}`} />);
        }

        for (let i = 1; i <= endOfMonth.getDate(); i++) {
            const date = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                i
            );
            const isSelected = isSameDate(selectedDate, date);
            const isPast = date < new Date(today.setHours(0, 0, 0, 0));

            days.push(
                <DateItem
                    key={i}
                    selected={isSelected}
                    disabled={isPast}
                    onClick={() => {
                        onSelectDate(date);
                    }}
                >
                    {i}
                </DateItem>
            );
        }
        return days;
    };

    if (!visible) return null;

    return (
        <Block>
            <Header>
                <Button onClick={onClickPrevMonth}>
                    <Chevron name="chevron-left-sm" />
                </Button>
                <Month>
                    {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
                </Month>
                <Button onClick={onClickNextMonth}>
                    <Chevron name="chevron-right-sm" />
                </Button>
            </Header>
            <Body>
                {DAY_NAMES.map((day) => (
                    <DayName key={day}>{day}</DayName>
                ))}
                {renderDays()}
            </Body>
        </Block>
    );
}

const Block = styled.div`
    position: absolute;
    top: 33px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${palette.white0};
    padding: 0 20px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

const Month = styled.span`
    font-size: 14px;
    font-weight: 700;
`;

const Button = styled.button`
    display: grid;
    place-content: center;
    width: 28px;
    height: 28px;
`;

const Chevron = styled(Icon)`
    path {
        stroke: ${palette.black2};
    }
`;

const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    place-items: center;
`;

const DayName = styled.div`
    font-size: 12px;
    padding: 10px 0;
`;

const DateItem = styled.div<{ disabled: boolean; selected: boolean }>`
    display: grid;
    place-content: center;
    width: 40px;
    height: 40px;
    font-size: 14px;
    font-weight: 700;
    padding-top: 2px;

    ${(props) =>
        props.disabled
            ? css`
                  cursor: default;
                  color: ${palette.gray3};
              `
            : css`
                  cursor: pointer;
                  color: ${palette.black2};
              `}

    ${(props) =>
        props.selected &&
        css`
            border-radius: 50%;
            background-color: ${palette.red500};
            color: ${palette.white0};
        `}
`;

export default Calendar;
