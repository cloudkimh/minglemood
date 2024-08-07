import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import { multiLineEllipsis } from "../../../lib/styles/utils";
import { Link } from "react-router-dom";
import Icon from "../../basics/Icon";

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
        <Block as={Link} to={`/course/${id}`}>
            <Region>{region}</Region>
            <Title>{title}</Title>
            <RatingBlock>
                <StarBlock>
                    <Icon name="star" />
                    {starScore}({starCnt})
                </StarBlock>
                <HeartBlock>
                    <HeartIco name="heart-filled" />
                    {heartCnt <= 999 ? heartCnt : "999+"}
                </HeartBlock>
            </RatingBlock>
            <Price>
                {discountRate && <DiscountRate>{discountRate}%</DiscountRate>}
                {price.toLocaleString()}원
            </Price>
        </Block>
    );
}

const Block = styled.div`
    display: block;
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
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
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
    align-items: center;
    column-gap: 3px;
    margin-right: 15px;
`;

const HeartBlock = styled.div`
    display: flex;
    align-items: center;
    column-gap: 3px;
    flex-wrap: wrap;
`;

const HeartIco = styled(Icon)`
    width: 14px;
    height: 14px;
`;

const DiscountRate = styled.span`
    color: #ff5816;
    margin-right: 5px;
`;

const Price = styled.p`
    color: #333;
    font-size: 14px;
    font-weight: 700;
`;

export default Header;
