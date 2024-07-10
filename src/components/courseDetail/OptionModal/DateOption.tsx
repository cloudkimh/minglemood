import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import { getDayString } from "../../../lib/utils";

export type DateOptionProps = {
    selectedDate: Date;
    onClickChangeDate: () => void;
};

function DateOption(props: DateOptionProps) {
    const { selectedDate, onClickChangeDate } = props;

    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const date = String(selectedDate.getDate()).padStart(2, "0");
    const day = getDayString(selectedDate.getDay());
    const dateString = `${month}월 ${date}일 (${day})`;

    return (
        <Block>
            <SelectedDate>{dateString}</SelectedDate>
            <ChangeDateBtn onClick={onClickChangeDate}>날짜 변경</ChangeDateBtn>
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    align-items: center;
    column-gap: 3px;
`;

const SelectedDate = styled.p`
    width: 100%;
    height: 35px;
    font-size: 12px;
    font-weight: 700;
    background-color: ${palette.white0};
    border: 1px solid ${palette.gray4};
    border-radius: 5px;
    padding: 11px;
`;

const ChangeDateBtn = styled.button`
    width: 70px;
    height: 35px;
    flex-shrink: 0;
    font-size: 12px;
    font-weight: 700;
    color: ${palette.white0};
    border-radius: 5px;
    background-color: ${palette.red500};
    padding: 11px 0;
`;

export default DateOption;
