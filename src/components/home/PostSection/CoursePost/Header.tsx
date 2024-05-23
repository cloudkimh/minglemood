import styled from "styled-components";
import palette from "../../../../lib/styles/palette";
import { multiLineEllipsis } from "../../../../lib/styles/utils";
import { Link } from "react-router-dom";

export type HeaderProps = {
    id: number;
    region: string;
    title: string;
    starScore: number;
    starCnt: number;
    heartCnt: number;
    price: number;
    discountRate?: number;
};

function Header(props: HeaderProps) {
    const {
        id,
        region,
        title,
        starScore,
        starCnt,
        heartCnt,
        price,
        discountRate,
    } = props;

    return (
        <Block as={Link} to={`course/${id}`}>
            <Region>{region}</Region>
            <Title>{title}</Title>
            <RatingBlock>
                <StarBlock>
                    <RatingIcon>
                        <img src="static/icon/star.png" alt="star icon" />
                    </RatingIcon>
                    <div>
                        {starScore}({starCnt})
                    </div>
                </StarBlock>
                <HeartBlock>
                    <RatingIcon>
                        <img src="static/icon/heart.png" alt="heart icon" />
                    </RatingIcon>
                    <div>{heartCnt <= 999 ? heartCnt : "999+"}</div>
                </HeartBlock>
            </RatingBlock>
            {/* <StyledHorizontalBar /> */}
            <Price>
                {discountRate && <DiscountRate>{discountRate}%</DiscountRate>}
                {price.toLocaleString()}원
            </Price>
        </Block>
    );
}

const Block = styled.div`
    margin-top: 7px;
`;

const Region = styled.p`
    font-size: 12px;
    color: ${palette.gray6};
    font-weight: 700;
    margin-bottom: 6px;
`;

const Title = styled.p`
    ${multiLineEllipsis(2)}
    font-size: 12px;
    font-weight: 700;
    line-height: normal;
    color: ${palette.black0};
    margin-bottom: 6px;
`;

const RatingBlock = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    font-size: 12px;
    font-weight: 500;
    color: ${palette.gray6};
`;

const StarBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    margin-right: 15px;
`;

const RatingIcon = styled.div`
    width: 14px;
    height: 14px;
    margin-right: 3px;

    & img {
        width: 100%;
        vertical-align: middle;
    }
`;

const HeartBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
`;

const DiscountRate = styled.span`
    color: #ff5816;
    margin-right: 5px;
`;

const Price = styled.p`
    font-size: 14px;
    font-weight: 700;
`;

export default Header;
