import PaymentInfo from "../../common/PaymentInfo";

export type PaymentInfoSectionProps = {
    paymentAmount: number;
    paymentMethod: string;
};

function PaymentInfoSection(props: PaymentInfoSectionProps) {
    const { paymentAmount, paymentMethod } = props;

    return (
        <PaymentInfo title="결제 정보" paymentAmount={paymentAmount}>
            <PaymentInfo.InfoItem label="결제 수단" value={paymentMethod} />
            <PaymentInfo.InfoItem
                label="결제 금액"
                value={`${paymentAmount.toLocaleString()}원`}
            />
        </PaymentInfo>
    );
}

export default PaymentInfoSection;
