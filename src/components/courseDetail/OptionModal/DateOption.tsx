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
    justify-content: space-between;
    width: 100%;
    height: 50px;
    background-color: ${palette.white1};
    border: 1px solid ${palette.gray5};
    border-radius: 5px;
    padding: 0 7px 0 17px;
`;

const SelectedDate = styled.p`
    font-size: 15px;
    font-weight: 800;
`;

const ChangeDateBtn = styled.button`
    font-size: 12px;
    font-weight: 700;
    color: ${palette.white0};
    border-radius: 5px;
    background-color: ${palette.black1};
    padding: 10px 12px 11px;
`;

export default DateOption;
