import BottomActionBar from "../components/courseDetail/BottomActionBar";
import DescriptionSection from "../components/courseDetail/DescriptionSection";
import MapSection from "../components/courseDetail/MapSection";
import ReviewSection from "../components/courseDetail/ReviewSection";
import TagsSection from "../components/courseDetail/TagSection";
import PageTemplate from "../components/basics/PageTemplate";
import { getSampleImage } from "../lib/styles/utils";
import OptionModal from "../components/courseDetail/OptionModal";
import useToggle from "../lib/hooks/useToggle";
import PolicySection from "../components/courseDetail/PolicySection";
import { copyToClipboard } from "../lib/utils";
import Banner from "../components/courseDetail/Banner";
import HeaderSection from "../components/courseDetail/HeaderSection";

const photo = getSampleImage();
const course = {
    id: 10,
    thumbnail: photo,
    banners: Array(4).fill(photo),
    title: "오감으로 맛보고 느끼는 힐링, 월하보이 차와 함께 계절 다회",
    region: "부산",
    discountRate: 15,
    price: 50000,
    isLiked: true,
    likes: 281,
    hostInfo: {
        avatar: photo,
        alias: "월하보이",
        courseCnt: 5,
        reviewCnt: 13,
        likes: 28,
    },
    rating: 4.8,
    reviewCnt: 127,
    reviews: [
        {
            photo: photo,
            avatar: photo,
            alias: "프립대원",
            review: "새로운 경험을 해보고 싶어서 우연히 알게된 월하보이 티클래스 수업을 듣게 되었는데 정말 두시간이 어떻게 테스트 테스트 테스트 테스트",
        },
        {
            photo: photo,
            avatar: photo,
            alias: "프립인",
            review: "이때까지 막 마셨던 차였으나 이번 다회를 통해 많은 정보와 내용을 알 수 있어서 뜻깊은 시간 이였습니다 테스트 테스트 테스트 테스트",
        },
        {
            photo: photo,
            avatar: photo,
            alias: "semmm_i",
            review: "차에 대해 잘 모르는 상태로 방문했는데 정말 유익한 시간이었어요. 설명도 정말 잘해주시고 흥미로운 이야 테스트 테스트 테스트 테스트",
        },
        {
            photo: photo,
            avatar: photo,
            alias: "프립대원",
            review: "추워진 날씨에 어울리는 차와 함께 기분 좋은 힐링되는 토요일이었어요 좋은 수업 감사합니다 🙂 테스트 테스트 테스트 테스트",
        },
    ],
    place: {
        name: "월하보이",
        address: "서울 종로구 북촌로5길 26, 1층",
        lat: 37.3595704,
        lng: 127.105399,
    },
    option: {
        name: "성별",
        data: [
            {
                id: 1,
                name: "[부산] 남 (정가)",
                price: 49000,
                count: 12,
            },
            {
                id: 2,
                name: "[부산] 여 (정가)",
                price: 49000,
                count: 12,
            },
            {
                id: 3,
                name: "[부산] 남 (리뷰 이벤트)",
                price: 49000,
                count: 12,
            },
            {
                id: 4,
                name: "[부산] 여 (리뷰 이벤트)",
                price: 49000,
                count: 12,
            },
        ],
    },
};

function CourseDetail() {
    const [optionModalOpened, toggleOptionModalOpened] = useToggle(false);

    const {
        id,
        thumbnail,
        banners,
        title,
        region,
        discountRate,
        price,
        isLiked,
        hostInfo,
        rating,
        reviewCnt,
        reviews,
        place,
        option,
    } = course;

    const submitData = {
        id,
        thumbnail,
        region,
        title,
        rating,
        reviewCnt,
    };

    const onClickApply = () => {
        toggleOptionModalOpened();
    };

    const handleShare = () => {
        const url = document.location.href;
        copyToClipboard(url);
    };

    return (
        <PageTemplate>
            <Banner onClickShare={handleShare} banners={banners} />
            <HeaderSection
                title={title}
                region={region}
                discountRate={discountRate}
                price={price}
                hostInfo={hostInfo}
            />
            <ReviewSection reviewCnt={reviewCnt} reviews={reviews} />
            <DescriptionSection />
            <TagsSection tags={[]} />
            <MapSection
                lat={place.lat}
                lng={place.lng}
                name={place.name}
                address={place.address}
            />
            <PolicySection />
            <OptionModal
                submitData={submitData}
                optionName={option.name}
                optionData={option.data}
                visible={optionModalOpened}
                handleClose={toggleOptionModalOpened}
            />
            <BottomActionBar
                isLiked={isLiked}
                onClickApply={onClickApply}
                onClickShare={handleShare}
            />
        </PageTemplate>
    );
}

export default CourseDetail;
