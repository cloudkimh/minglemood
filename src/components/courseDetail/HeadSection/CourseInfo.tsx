import styled from "styled-components";
import palette from "../../../lib/styles/palette";

export type CourseInfoProps = {
    title: string;
    region: string;
    price: number;
};

function CourseInfo(props: CourseInfoProps) {
    const { title, region, price } = props;

    return (
        <Block>
            <Title>{title}</Title>
            <Region>{region}</Region>
            <Price>
                {price.toLocaleString()} <span>원</span>
            </Price>
        </Block>
    );
}

const Block = styled.div``;

const Title = styled.h1`
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    word-break: keep-all;
`;

const Region = styled.p`
    font-size: 14px;
    color: ${palette.gray1};
    margin-top: 10px;
`;

const Price = styled.p`
    font-size: 24px;
    font-weight: 800;
    margin-top: 10px;

    span {
        font-size: 14px;
        font-weight: 600;
    }
`;

export default CourseInfo;
