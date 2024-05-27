import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import ReviewCard from "./ReviewCard";
import { hideScrollBar } from "../../../lib/styles/utils";
import { HorizontalBarThick } from "../../common/styles/Common";

export type ReviewSectionProps = {
    rating: number;
    reviewCnt: number;
    reviews: Array<{
        photo: string;
        alias: string;
        avatar: string;
        review: string;
    }>;
};

function ReviewSection(props: ReviewSectionProps) {
    const { rating, reviewCnt, reviews } = props;

    return (
        <>
            <Block>
                <Summary>
                    <ReviewPhotos>
                        참여 후기 사진 <span>{reviewCnt}</span>
                    </ReviewPhotos>
                    <MoreBtn>더보기</MoreBtn>
                </Summary>
                <Reviews>
                    {reviews.map((aReview, i) => (
                        <ReviewCard
                            key={`review-card-${i}`}
                            reviewInfo={aReview}
                        />
                    ))}
                </Reviews>
            </Block>
            <HorizontalBarThick />
        </>
    );
}

const Block = styled.section`
    padding: 30px 20px;
`;

const Summary = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`;

const ReviewPhotos = styled.div`
    display: flex;
    font-size: 18px;
    font-weight: 700;
    line-height: normal;

    span {
        color: ${palette.purple0};
    }
`;

const MoreBtn = styled.button`
    color: ${palette.gray6};
    font-size: 13px;
    font-weight: 500;
    line-height: normal;
`;

const Reviews = styled.div`
    ${hideScrollBar}
    display: flex;
    width: 100%;
    overflow-x: auto;
`;

export default ReviewSection;
