import styled from "styled-components";
import palette from "../../../../lib/styles/palette";
import { multiLineEllipsis } from "../../../../lib/styles/utils";
import { HorizontalBar } from "../../../common/styles/Common";

export type HeaderProps = {
    region: string;
    title: string;
    rating: number;
    price: number;
};

function Header(props: HeaderProps) {
    const { region, title, rating, price } = props;

    return (
        <Block>
            <Region>{region}</Region>
            <Title>{title}</Title>
            <RatingBlock>
                {Array(5)
                    .fill(null)
                    .map(() => (
                        <RatingStar />
                    ))}
            </RatingBlock>
            <StyledHorizontalBar />
            <Price>{price.toLocaleString()}원</Price>
        </Block>
    );
}

const Block = styled.div`
    padding: 12px;
`;

const Region = styled.p`
    font-size: 10px;
    color: ${palette.gray1};
`;

const Title = styled.p`
    ${multiLineEllipsis(2)}
    font-size: 12px;
    line-height: 18px;
    margin-top: 8px;
`;

const RatingBlock = styled.div`
    display: flex;
    align-items: center;
    margin-top: 12px;
`;

const RatingStar = styled.span`
    width: 11px;
    height: 10px;
    background-color: ${palette.red2};

    & + & {
        margin-left: 1px;
    }
`;

const StyledHorizontalBar = styled(HorizontalBar)`
    margin-top: 10px;
`;

const Price = styled.p`
    font-size: 14px;
    font-weight: 800;
    margin-top: 14px;
`;

export default Header;
