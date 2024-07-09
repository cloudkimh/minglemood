import styled from "styled-components";
import palette from "../../../lib/styles/palette";

export type DateOptionProps = {
    selectedDate: string;
    onChangeBtnClick: () => void;
};

function DateOption(props: DateOptionProps) {
    const { selectedDate, onChangeBtnClick } = props;

    return (
        <Block>
            <SelectedDate>{selectedDate}</SelectedDate>
            <ChangeDateBtn onClick={onChangeBtnClick}>날짜 변경</ChangeDateBtn>
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
    font-size: 12px;
    font-weight: 700;
    background-color: ${palette.white0};
    border: 1px solid ${palette.gray4};
    border-radius: 5px;
    padding: 11px;
`;

const ChangeDateBtn = styled.button`
    width: 70px;
    flex-shrink: 0;
    font-size: 12px;
    font-weight: 700;
    color: ${palette.white0};
    border-radius: 5px;
    background-color: ${palette.red500};
    padding: 11px 0;
`;

export default DateOption;
