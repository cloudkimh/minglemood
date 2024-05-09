import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import ReviewCard from "./ReviewCard";
import { hideScrollBar } from "../../../lib/styles/utils";

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
        <Block>
            <Summary>
                <RatingBlock>
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <Rating>{rating}</Rating>
                </RatingBlock>
                <ReviewCount>• {reviewCnt}개 후기</ReviewCount>
            </Summary>
            <Reviews>
                {reviews.map((aReview) => (
                    <ReviewCard reviewInfo={aReview} />
                ))}
            </Reviews>
        </Block>
    );
}

const Block = styled.section``;

const Summary = styled.div`
    display: flex;
    align-items: center;
    padding: 32px 24px;
`;

const RatingBlock = styled.div`
    display: flex;
    align-items: center;
`;

const RatingStar = styled.span`
    width: 11px;
    height: 10px;
    background-color: ${palette.red2};

    & + & {
        margin-left: 1px;
    }
`;

const Rating = styled.p`
    font-size: 16px;
    font-weight: 800;
    margin-left: 9px;
`;

const ReviewCount = styled.p`
    font-size: 13px;
    color: ${palette.gray1};
    margin-left: 6px;
`;

const Reviews = styled.div`
    ${hideScrollBar}
    display: flex;
    width: 100%;
    overflow-x: auto;
    background-color: ${palette.white2};
    border-top: 1px solid ${palette.gray5};
    border-bottom: 1px solid ${palette.gray5};
    padding: 24px;
`;

export default ReviewSection;
