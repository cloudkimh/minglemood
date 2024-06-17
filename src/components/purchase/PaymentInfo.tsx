import styled from "styled-components";
import palette from "../../lib/styles/palette";

export type PaymentInfoProps = {
    date: string;
    count: number;
    price: number;
};

function PaymentInfo(props: PaymentInfoProps) {
    const { date, count, price } = props;

    return (
        <Block>
            <Wrapper>
                <Header>옵션정보</Header>
                <InfoRow>
                    <Label>일정</Label>
                    <Value>{date}</Value>
                </InfoRow>
                <InfoRow>
                    <Label>인원</Label>
                    <Value>{count} 인</Value>
                </InfoRow>
                <InfoRow>
                    <Label>가격</Label>
                    <Value>{price.toLocaleString()} 원</Value>
                </InfoRow>
            </Wrapper>
        </Block>
    );
}

const Block = styled.div`
    margin-top: 20px;
    padding: 0 20px 30px;
`;

const Wrapper = styled.div`
    border-radius: 5px;
    background-color: ${palette.white1};
    padding: 15px 10px;
`;

const Header = styled.p`
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 10px;
`;

const InfoRow = styled.div`
    display: flex;
    justify-content: space-between;

    & + & {
        margin-top: 6px;
    }
`;

const Label = styled.p`
    color: ${palette.gray1};
    font-size: 12px;
`;

const Value = styled.p`
    font-size: 12px;
`;

export default PaymentInfo;
