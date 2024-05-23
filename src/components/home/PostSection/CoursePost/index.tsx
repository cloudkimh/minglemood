import styled from "styled-components";
import Thumbnail from "./Thumbnail";
import Header from "./Header";

export type CoursePostProps = {
    id: number;
    thumbnail: string;
    region: string;
    title: string;
    starScore: number;
    starCnt: number;
    heartCnt: number;
    price: number;
    isLiked: boolean;
    discountRate?: number;
};

function CoursePost(props: CoursePostProps) {
    const {
        id,
        thumbnail,
        region,
        title,
        starScore,
        starCnt,
        heartCnt,
        price,
        isLiked,
        discountRate,
    } = props;

    return (
        <Block>
            <Thumbnail id={id} thumbnail={thumbnail} isLiked={isLiked} />
            <Header
                id={id}
                region={region}
                title={title}
                starScore={starScore}
                starCnt={starCnt}
                heartCnt={heartCnt}
                price={price}
                discountRate={discountRate}
            />
        </Block>
    );
}

const Block = styled.div``;

export default CoursePost;
