import styled from "styled-components";
import PageTemplatexxx from "../../components/basics/PageTemplatexxx";
import ProductInfo from "../../components/common/ProductInfo";
import { getSampleImage } from "../../lib/styles/utils";
import PageHeader from "../../components/common/PageHeader";
import { SectionDivider } from "../../components/common/styles/Common";
import PaymentInfoSection from "../../components/mypage/paymentDetail/PaymentInfoSection";
import { DefaultButton } from "../../components/common/styles/Buttons";
import palette from "../../lib/styles/palette";
import OptionInfo from "../../components/common/OptionInfo";

const samplePaymentInfo = {
    thumbnail: getSampleImage(),
    region: "부산",
    title: "하루만에 끝내는 스마트폰 사진 촬영과 보정법 (필터 공유)",
    rating: 4.9,
    reviewCnt: 128,
    date: "2024년 5월 7일 17시 0분",
    count: 2,
    price: 20000,
    paymentAmount: 40000,
    paymentMethod: "카카오페이",
};

function PaymentDetail() {
    return (
        <PageTemplatexxx>
            <PageHeader title="예약 상세" />
            <ProductInfoSection>
                <ProductInfo
                    thumbnail={samplePaymentInfo.thumbnail}
                    region={samplePaymentInfo.region}
                    title={samplePaymentInfo.title}
                    rating={samplePaymentInfo.rating}
                    reviewCnt={samplePaymentInfo.reviewCnt}
                />
                <OptionInfo
                    title="옵션정보"
                    optionList={[
                        {
                            label: "일정",
                            value: samplePaymentInfo.date,
                        },
                        {
                            label: "인원",
                            value: `${samplePaymentInfo.count}인`,
                        },
                        {
                            label: "가격",
                            value: `${samplePaymentInfo.price.toLocaleString()}원`,
                        },
                    ]}
                />
            </ProductInfoSection>
            <SectionDivider />
            <PaymentInfoSection
                paymentAmount={samplePaymentInfo.paymentAmount}
                paymentMethod={samplePaymentInfo.paymentMethod}
            />
            <BtnWrapper>
                <CancelBtn styleType="filled" color={palette.red500}>
                    예약 취소
                </CancelBtn>
            </BtnWrapper>
        </PageTemplatexxx>
    );
}

const ProductInfoSection = styled.section`
    display: grid;
    row-gap: 20px;
    padding: 20px 0 30px;
    margin-top: 50px;
`;

const BtnWrapper = styled.div`
    margin-top: 80px;
    padding: 0 20px;
`;

const CancelBtn = styled(DefaultButton)`
    width: 100%;
    height: 40px;
    font-size: 13px;
`;

export default PaymentDetail;
