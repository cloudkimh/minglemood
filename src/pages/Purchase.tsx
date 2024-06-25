import Header from "../components/purchase/Header";
import { getSampleImage } from "../lib/styles/utils";
import PaymentInfo from "../components/purchase/PaymentInfo";
import PaymentMethod from "../components/purchase/PaymentMethod";
import { SectionDivider } from "../components/common/styles/Common";
import { useState } from "react";
import Coupon from "../components/purchase/Coupon";
import Point from "../components/purchase/Point";
import Summary from "../components/purchase/Summary";
import PolicyAgreement from "../components/purchase/PolicyAgreement";
import BottomActionBar from "../components/purchase/BottomActionBar";
import ProductInfo from "../components/common/ProductInfo";
import styled from "styled-components";
import PageTemplatexxx from "../components/common/PageTemplatexxx";

export type PurchaseProps = {};

const samplePaymentInfo = {
    thumbnail: getSampleImage(),
    region: "부산",
    title: "하루만에 끝내는 스마트폰 사진 촬영과 보정법 (필터 공유)",
    rate: 4.9,
    reviewCnt: 128,
    date: "2024년 5월 7일 17시 0분",
    count: 2,
    price: 20000,
};

function Purchase(props: PurchaseProps) {
    const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
    const [discountByCoupon, setSetDiscountByCoupon] = useState<number>(0);
    const [discountByPoint, setSetDiscountByPoint] = useState<number>(0);
    const [totalPaymentAmount, setTotalPaymentAmount] = useState<number>(0);

    const handleSelectPaymentMethod = (value: string) => {
        setPaymentMethod(value);
    };

    return (
        <PageTemplatexxx>
            <Header />
            <InfoContainer>
                <ProductInfo
                    thumbnail={samplePaymentInfo.thumbnail}
                    region={samplePaymentInfo.region}
                    title={samplePaymentInfo.title}
                    rate={samplePaymentInfo.rate}
                    reviewCnt={samplePaymentInfo.reviewCnt}
                />
                <PaymentInfo
                    date={samplePaymentInfo.date}
                    count={samplePaymentInfo.count}
                    price={samplePaymentInfo.price}
                />
            </InfoContainer>
            <SectionDivider />
            <PaymentMethod
                currentValue={paymentMethod}
                handleChange={handleSelectPaymentMethod}
            />
            <SectionDivider />
            <Coupon />
            <SectionDivider />
            <Point />
            <SectionDivider />
            <Summary
                paymentAmount={samplePaymentInfo.price}
                discountByCoupon={discountByCoupon}
                discountByPoint={discountByPoint}
            />
            <SectionDivider />
            <PolicyAgreement />
            <BottomActionBar totalPaymentAmount={totalPaymentAmount} />
        </PageTemplatexxx>
    );
}

const InfoContainer = styled.div`
    display: grid;
    row-gap: 20px;
    padding: 20px 0 30px;
    margin-top: 50px;
`;

export default Purchase;
