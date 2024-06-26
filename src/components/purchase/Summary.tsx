import PaymentInfo from "../common/PaymentInfo";

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
        <PaymentInfo title="결제 정보" paymentAmount={totalPaymentAmount}>
            <PaymentInfo.InfoItem
                label="결제금액"
                value={`${formatPrice(paymentAmount)}원`}
            />
            <PaymentInfo.InfoItem
                label="쿠폰"
                value={`${formatPrice(discountByCoupon)}원`}
            />
            <PaymentInfo.InfoItem
                label="포인트"
                value={`${discountByPoint}P`}
            />
        </PaymentInfo>
    );
}

export default Summary;
