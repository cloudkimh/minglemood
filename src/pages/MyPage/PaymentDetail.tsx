import styled from "styled-components";
import PageTemplatexxx from "../../components/basics/PageTemplatexxx";
import ProductInfo from "../../components/common/ProductInfo";
import PaymentInfo from "../../components/purchase/PaymentInfo";
import { getSampleImage } from "../../lib/styles/utils";

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

function PaymentDetail() {
    return (
        <PageTemplatexxx>
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
        </PageTemplatexxx>
    );
}

const InfoContainer = styled.div`
    display: grid;
    row-gap: 20px;
    padding: 20px 0 30px;
    margin-top: 50px;
`;

export default PaymentDetail;
