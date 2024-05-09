import styled from "styled-components";
import { multiLineEllipsis } from "../../../lib/styles/utils";

export type ReviewCardProps = {
    reviewInfo: {
        photo: string;
        alias: string;
        avatar: string;
        review: string;
    };
};

function ReviewCard(props: ReviewCardProps) {
    const { reviewInfo } = props;

    return (
        <Block>
            <Photo src={reviewInfo.photo} alt="리뷰 사진" />
            <Header>
                <Avatar src={reviewInfo.avatar} alt="유저 아바타" />
                <Alias>{reviewInfo.alias}</Alias>
            </Header>
            <Review>{reviewInfo.review}</Review>
        </Block>
    );
}

const Block = styled.div`
    width: 220px;
    flex-shrink: 0;

    & + & {
        margin-left: 12px;
    }
`;

const Photo = styled.img`
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 3px;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-top: 18px;
`;

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

const Alias = styled.p`
    font-size: 13px;
    font-weight: 700;
    margin-left: 9px;
`;

const Review = styled.p`
    ${multiLineEllipsis(3)}
    font-size: 15px;
    line-height: 24px;
    margin-top: 26px;
`;

export default ReviewCard;
