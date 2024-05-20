import styled from "styled-components";
import Thumbnail from "./Thumbnail";
import Header from "./Header";

export type CoursePostProps = {
    id: number;
    thumbnail: string;
    region: string;
    title: string;
    rating: number;
    price: number;
};

function CoursePost(props: CoursePostProps) {
    const { id, thumbnail, region, title, rating, price } = props;

    return (
        <Block>
            <Thumbnail id={id} thumbnail={thumbnail} />
            <Header
                id={id}
                region={region}
                title={title}
                rating={rating}
                price={price}
            />
        </Block>
    );
}

const Block = styled.div``;

export default CoursePost;
