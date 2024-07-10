import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import { HorizontalBar } from "../../common/styles/Common";

export type SummaryBarProps = {
    visible: boolean;
    totalPrice: number;
    totalCount: number;
    onSubmit: () => void;
};

function SummaryBar(props: SummaryBarProps) {
    const { visible, totalPrice, totalCount, onSubmit } = props;

    return (
        <Block visible={visible}>
            <HorizontalBar />
            <PriceBlock>
                <TotalCount>총 {totalCount}개</TotalCount>
                <TotalPrice>{totalPrice.toLocaleString()}원</TotalPrice>
            </PriceBlock>
            <SubmitBtn onClick={onSubmit}>참여하기</SubmitBtn>
        </Block>
    );
}

const Block = styled.div<{ visible: boolean }>`
    position: fixed;
    left: 50%;
    bottom: 0px;
    width: 100%;
    max-width: 100%;
    min-height: 120px;
    visibility: ${(props) => (props.visible ? "visible" : "hidden")};
    background-color: ${palette.white0};
    transform: translateX(-50%);
    padding: 20px 20px;
`;

const PriceBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`;

const TotalCount = styled.p`
    font-size: 13px;
    font-weight: 700;
`;

const TotalPrice = styled.p`
    font-size: 13px;
    font-weight: 800;
    color: ${palette.purple0};
`;

const SubmitBtn = styled.button`
    width: 100%;
    height: 40px;
    font-size: 13px;
    font-weight: 800;
    color: ${palette.white0};
    background-color: ${palette.red500};
    border-radius: 5px;
    padding: 12px 0 11px;
    margin-top: 20px;
`;

export default SummaryBar;
