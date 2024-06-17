import styled from "styled-components";
import { SectionContainer, SectionHeader } from "./styles";
import palette from "../../lib/styles/palette";
import { HorizontalBar } from "../common/styles/Common";

export type SummaryProps = {
    paymentAmount: number;
    discountByCoupon: number;
    discountByPoint: number;
};

function Summary(props: SummaryProps) {
    const { paymentAmount, discountByCoupon, discountByPoint } = props;
    const totalPaymentAmount =
        paymentAmount - discountByCoupon - discountByPoint;

    const formatPrice = (price: number) => `${price.toLocaleString()}`;

    return (
        <SectionContainer>
            <SectionHeader>결제 정보</SectionHeader>
            <SummaryList>
                <SummaryItem>
                    <Label>결제금액</Label>
                    <Value>{formatPrice(paymentAmount)}원</Value>
                </SummaryItem>
                <SummaryItem>
                    <Label>쿠폰</Label>
                    <Value>{formatPrice(discountByCoupon)}원</Value>
                </SummaryItem>
                <SummaryItem>
                    <Label>포인트</Label>
                    <Value>{discountByPoint}P</Value>
                </SummaryItem>
            </SummaryList>
            <StyledHorizontalBar />
            <TotalAmountBlock>
                <TotalAmountLabel>총 결제 금액</TotalAmountLabel>
                <TotalAmountValue>
                    {formatPrice(totalPaymentAmount)}원
                </TotalAmountValue>
            </TotalAmountBlock>
        </SectionContainer>
    );
}

const SummaryList = styled.ul`
    margin-top: 20px;
`;

const SummaryItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + & {
        margin-top: 10px;
    }
`;

const Label = styled.p`
    font-size: 13px;
    color: ${palette.gray2};
`;

const Value = styled.p`
    font-size: 13px;
    color: ${palette.black2};
`;

const StyledHorizontalBar = styled(HorizontalBar)`
    margin: 15px 0;
`;

const TotalAmountBlock = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
`;

const TotalAmountLabel = styled.p`
    font-size: 13px;
`;

const TotalAmountValue = styled.p`
    font-size: 15px;
    font-weight: 700;
    color: ${palette.black2};
`;

export default Summary;
