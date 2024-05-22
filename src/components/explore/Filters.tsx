import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { FILTERS_HEIGHT } from "./variables";

export type FiltersProps = {
    handleFilterBtnClick: () => void;
};

function Filters(props: FiltersProps) {
    const { handleFilterBtnClick } = props;

    return (
        <Block>
            <FilterBtn onClick={handleFilterBtnClick}>필터</FilterBtn>
            <ChipItem>강서구</ChipItem>
            <ChipItem>요가</ChipItem>
            <ChipItem>4만원 ~ 10만원</ChipItem>
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    align-items: center;
    height: ${FILTERS_HEIGHT};
    border-bottom: 1px solid ${palette.gray5};
    padding: 0 20px;
`;

const FilterBtn = styled.button`
    width: 32px;
    height: 32px;
    background-color: ${palette.red2};
    margin-right: 12px;
`;

const ChipItem = styled.div`
    font-size: 13px;
    color: ${palette.red500};
    border-radius: 20px;
    background-color: ${palette.red100};
    border: 1px solid ${palette.red500};
    padding: 7px 10px 6px;

    & + & {
        margin-left: 8px;
    }
`;

export default Filters;
