import PaymentInfo from "../common/PaymentInfo";

export type SummaryProps = {
    paymentAmount: number;
};

function Summary(props: SummaryProps) {
    const { paymentAmount } = props;

    const formatPrice = (price: number) => `${price.toLocaleString()}`;

    return (
        <PaymentInfo title="결제 정보" paymentAmount={paymentAmount}>
            <PaymentInfo.InfoItem
                label="결제금액"
                value={`${formatPrice(paymentAmount)}원`}
            />
        </PaymentInfo>
    );
}

export default Summary;
