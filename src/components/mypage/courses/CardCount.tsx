import styled, { css } from "styled-components";
import { ReactComponent as OrderIco } from "../../../assets/icon/arrow-up.svg";
import palette from "../../../lib/styles/palette";

export type CardCountProps = {
    count: number;
    onClickOrderBtn: () => void;
    isAscendingOrder: boolean;
};

function CardCount(props: CardCountProps) {
    const { count, onClickOrderBtn, isAscendingOrder } = props;

    return (
        <Block>
            <Count>총 {count}개</Count>
            <ToggleOrderBtn onClick={onClickOrderBtn}>
                날짜순
                <StyledOrderIco rotated={isAscendingOrder} />
            </ToggleOrderBtn>
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin-top: 25px;
`;

const Count = styled.p`
    font-size: 16px;
    font-weight: 700;
`;

const ToggleOrderBtn = styled.button`
    display: flex;
    align-items: center;
    column-gap: 2px;
    font-size: 11px;
    font-weight: 700;
    padding: 5px;
`;

const StyledOrderIco = styled(OrderIco)<{ rotated: boolean }>`
    width: 14px;
    height: 14px;

    path {
        fill: ${palette.red500};
    }

    ${(props) =>
        props.rotated &&
        css`
            transform: rotate(180deg);
        `}
`;

export default CardCount;
