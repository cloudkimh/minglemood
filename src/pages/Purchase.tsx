import { getSampleImage } from "../lib/styles/utils";
import PaymentMethod from "../components/purchase/PaymentMethod";
import { SectionDivider } from "../components/common/styles/Common";
import { useEffect, useState } from "react";
import Coupon from "../components/purchase/Coupon";
import Point from "../components/purchase/Point";
import Summary from "../components/purchase/Summary";
import PolicyAgreement from "../components/purchase/PolicyAgreement";
import BottomActionBar from "../components/purchase/BottomActionBar";
import ProductInfo from "../components/common/ProductInfo";
import styled from "styled-components";
import PageTemplatexxx from "../components/basics/PageTemplatexxx";
import PageHeader from "../components/common/PageHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PhotoCarousel from "../components/common/PhotoCarousel";
import OptionInfo from "../components/common/OptionInfo";

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

function Purchase() {
    const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state as {
        productType: string;
        productInfo?: {
            [key: string]: any;
        };
    };

    useEffect(() => {
        if (!data) {
            navigate("/");
        }
    }, []);

    const handleSelectPaymentMethod = (value: string) => {
        setPaymentMethod(value);
    };

    if (!data) {
        toast.error("잘못된 경로로 접근했습니다. 다시 시도 해주세요");
        return null;
    }

    return (
        <PageTemplatexxx>
            <PageHeader title="결제" />
            <InfoContainer>
                {data.productType === "photo" ? (
                    <>
                        <PhotoCarouselWrapper>
                            <PhotoCarousel>
                                {data.productInfo?.photos.map(
                                    (aPhoto: string) => (
                                        <PhotoCarousel.Slide path={aPhoto} />
                                    )
                                )}
                            </PhotoCarousel>
                        </PhotoCarouselWrapper>
                        <OptionInfo
                            title="사진정보"
                            optionList={[
                                {
                                    label: "작가명",
                                    value: data.productInfo?.photographer,
                                },
                                {
                                    label: "파일 종류",
                                    value: data.productInfo?.fileType,
                                },
                                {
                                    label: "파일 크기",
                                    value: data.productInfo?.size,
                                },
                                {
                                    label: "라이선스",
                                    value: data.productInfo?.license,
                                },
                            ]}
                        />
                    </>
                ) : (
                    <>
                        <ProductInfo
                            thumbnail={samplePaymentInfo.thumbnail}
                            region={samplePaymentInfo.region}
                            title={samplePaymentInfo.title}
                            rate={samplePaymentInfo.rate}
                            reviewCnt={samplePaymentInfo.reviewCnt}
                        />
                        <OptionInfo
                            title="결제정보"
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
                    </>
                )}
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
            <Summary paymentAmount={samplePaymentInfo.price} />
            <SectionDivider />
            <PolicyAgreement />
            <BottomActionBar totalPaymentAmount={samplePaymentInfo.price} />
        </PageTemplatexxx>
    );
}

const InfoContainer = styled.div`
    display: grid;
    row-gap: 20px;
    padding: 20px 0 30px;
    margin-top: 50px;
`;

const PhotoCarouselWrapper = styled.div`
    padding: 0 20px;
`;

export default Purchase;
