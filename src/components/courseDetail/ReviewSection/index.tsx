import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import ReviewCard from "./ReviewCard";
import { hideScrollBar } from "../../../lib/styles/utils";
import { SectionDivider } from "../../common/styles/Common";

export type ReviewSectionProps = {
    reviewCnt: number;
    reviews: Array<{
        photo: string;
        imgUrl: string;
        nickname: string;
        content: string;
    }>;
};

function ReviewSection(props: ReviewSectionProps) {
    const { reviewCnt, reviews } = props;

    return (
        <>
            <Block>
                <Header>
                    <Title>
                        참여 후기 사진 <span>{reviewCnt}</span>
                    </Title>
                    <MoreBtn>더보기</MoreBtn>
                </Header>
                <ReviewCardContainer>
                    {reviews.map((aReview, i) => (
                        <ReviewCard
                            key={`review-card-${i}`}
                            photo={aReview.imgUrl}
                        />
                    ))}
                </ReviewCardContainer>
            </Block>
            <SectionDivider />
        </>
    );
}

const Block = styled.section`
    padding: 30px 20px;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`;

const Title = styled.h3`
    display: flex;
    font-size: 18px;
    font-weight: 700;

    span {
        font-weight: 700;
        color: ${palette.purple0};
        margin-left: 4px;
    }
`;

const MoreBtn = styled.button`
    color: ${palette.gray6};
    font-size: 13px;
`;

const ReviewCardContainer = styled.div`
    ${hideScrollBar}
    display: flex;
    width: 100%;
    overflow-x: auto;
`;

export default ReviewSection;
