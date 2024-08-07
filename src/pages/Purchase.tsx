import PaymentMethod from "../components/purchase/PaymentMethod";
import { SectionDivider } from "../components/common/styles/Common";
import { ChangeEvent, useEffect, useState } from "react";
import Coupon from "../components/purchase/Coupon";
import Point from "../components/purchase/Point";
import Summary from "../components/purchase/Summary";
import PolicyAgreement from "../components/purchase/PolicyAgreement";
import BottomActionBar from "../components/purchase/BottomActionBar";
import ProductInfo from "../components/common/ProductInfo";
import styled from "styled-components";
import PageTemplate from "../components/basics/PageTemplate";
import PageHeader from "../components/common/PageHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PhotoCarousel from "../components/common/PhotoCarousel";
import OptionInfo from "../components/common/OptionInfo";
import { getDayString } from "../lib/utils";
import { ProductOptionInfo } from "../components/courseDetail/types";

type PhotoTypeProductInfo = {
    photos: Array<string>;
    photographer: string;
    fileType: string;
    size: string;
    license: string;
};

type CourseTypeProductInfo = {
    options: Array<ProductOptionInfo>;
    date: Date;
    count: number;
    id: number;
    thumbnail: string;
    region: string;
    title: string;
    rating: number;
    reviewCnt: number;
};

function Purchase() {
    const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
    const [creditCard, setCreditCard] = useState<string | null>(null);
    const [policyChecked, setPolicyChecked] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state as {
        paymentInfo: {
            price: number;
        };
        photoInfo?: PhotoTypeProductInfo;
        courseInfo?: CourseTypeProductInfo;
    };

    useEffect(() => {
        if (!data) {
            navigate("/");
            toast.error("잘못된 경로로 접근했습니다. 다시 시도 해주세요");
        }
    }, []);

    const handleSelectPaymentMethod = (value: string) => {
        setPaymentMethod(value);
        setCreditCard(null);
    };

    const handleSelectCreditCard = (value: string) => {
        setCreditCard(value);
    };

    const onChangePolicy = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        setPolicyChecked(checked);
    };

    const formatDateText = (dateData: Date) => {
        const year = dateData.getFullYear();
        const month = dateData.getMonth() + 1;
        const date = dateData.getDate();
        const day = getDayString(dateData.getDay());
        return `${year}년 ${month}월 ${date}일 (${day})`;
    };

    const isSubmitBtnAvailable = () => {
        if (!paymentMethod) return false;
        if (paymentMethod === "creditcard" && !creditCard) return false;
        if (!policyChecked) return false;
        return true;
    };

    if (!data) {
        return null;
    }

    return (
        <PageTemplate>
            <PageHeader title="결제" />
            <InfoContainer>
                {data.photoInfo && (
                    <>
                        <PhotoCarouselWrapper>
                            <PhotoCarousel>
                                {data.photoInfo.photos.map((aPhoto: string) => (
                                    <PhotoCarousel.Slide path={aPhoto} />
                                ))}
                            </PhotoCarousel>
                        </PhotoCarouselWrapper>
                        <OptionInfo
                            title="사진정보"
                            optionList={[
                                {
                                    label: "작가명",
                                    value: data.photoInfo.photographer,
                                },
                                {
                                    label: "파일 종류",
                                    value: data.photoInfo.fileType,
                                },
                                {
                                    label: "파일 크기",
                                    value: data.photoInfo.size,
                                },
                                {
                                    label: "라이선스",
                                    value: data.photoInfo.license,
                                },
                            ]}
                        />
                    </>
                )}
                {data.courseInfo && (
                    <>
                        <ProductInfo
                            thumbnail={data.courseInfo.thumbnail}
                            region={data.courseInfo.region}
                            title={data.courseInfo.title}
                            rating={data.courseInfo.rating}
                            reviewCnt={data.courseInfo.reviewCnt}
                        />
                        <OptionInfo
                            title="결제정보"
                            optionList={[
                                {
                                    label: "일정",
                                    value: formatDateText(data.courseInfo.date),
                                },
                                {
                                    label: "인원",
                                    value: `${data.courseInfo.count}인`,
                                },
                                {
                                    label: "가격",
                                    value: `${data.paymentInfo.price.toLocaleString()}원`,
                                },
                            ]}
                        />
                    </>
                )}
            </InfoContainer>
            <SectionDivider />
            <PaymentMethod
                currentMethod={paymentMethod}
                currentCard={creditCard}
                handleSelectMethod={handleSelectPaymentMethod}
                handleSelectCreditCard={handleSelectCreditCard}
            />
            <SectionDivider />
            <Coupon />
            <SectionDivider />
            <Point />
            <SectionDivider />
            <Summary paymentAmount={data.paymentInfo.price} />
            <SectionDivider />
            <PolicyAgreement
                checked={policyChecked}
                onChange={onChangePolicy}
            />
            <BottomActionBar
                buttonAvailable={isSubmitBtnAvailable()}
                totalPaymentAmount={data.paymentInfo.price}
            />
        </PageTemplate>
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
