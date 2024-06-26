import styled from "styled-components";
import { ReactNode } from "react";
import palette from "../../../lib/styles/palette";
import { HorizontalBar } from "../styles/Common";
import InfoItem from "./InfoItem";

export type PaymentInfoProps = {
    title: string;
    paymentAmount: number;
    children: ReactNode;
};

function PaymentInfo(props: PaymentInfoProps) {
    const { title, paymentAmount, children } = props;

    const formatPrice = (price: number) => `${price.toLocaleString()}`;

    return (
        <Block>
            <Header>{title}</Header>
            <InfoList>
                {/* InfoItems 삽입 */}
                {children}
            </InfoList>
            <StyledHorizontalBar />
            <TotalAmountBlock>
                <TotalAmountLabel>총 결제 금액</TotalAmountLabel>
                <TotalAmountValue>
                    {formatPrice(paymentAmount)}원
                </TotalAmountValue>
            </TotalAmountBlock>
        </Block>
    );
}

const Block = styled.section`
    padding: 30px 20px;
`;

const Header = styled.header`
    font-size: 15px;
    font-weight: 700;
    ${palette.black2};
`;

const InfoList = styled.ul`
    display: grid;
    row-gap: 10px;
    margin-top: 20px;
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

PaymentInfo.InfoItem = InfoItem;
export default PaymentInfo;
