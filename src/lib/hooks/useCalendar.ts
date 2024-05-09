import { useEffect, useState } from "react";

export type UseCalendarParams = {
    year: number;
    month: number;
    date: number;
    period?: number;
};

export type SingleMonthData = Array<null | number>;

export type UseCalendarReturns = Array<SingleMonthData>;

function useCalendar(params: UseCalendarParams): UseCalendarReturns {
    const { year, month, date, period } = params;
    const [calendarData, setCalendarData] = useState<Array<SingleMonthData>>(
        []
    );

    useEffect(() => {
        const createMonthCalendar = (month: number) => {
            const calendarData: Array<null | number> = [];
            const firstDate = new Date(year, month - 1, date);
            const daysInMonth = new Date(year, month, 0).getDate();
            const firstDayIndex = firstDate.getDay();

            // Fill in the blank cells before the first day
            for (let i = 0; i < firstDayIndex; i++) {
                calendarData.push(null);
            }

            // Fill in the calendar days
            for (let day = date; day <= daysInMonth; day++) {
                calendarData.push(day);
            }

            return calendarData;
        };

        setCalendarData([]);
        if (period) {
            for (let i = 0; i < period; i++) {
                const targetMonth = month + i <= 12 ? month + i : i;
                const monthCalendar = createMonthCalendar(targetMonth);
                setCalendarData((prev) => [...prev, monthCalendar]);
            }
        } else {
            const monthCalendar = createMonthCalendar(month);
            setCalendarData([monthCalendar]);
        }
    }, [year, month, date, period]);

    return calendarData;
}

export default useCalendar;
