import styled from "styled-components";
import Thumbnail from "./Thumbnail";
import Header from "./Header";

export type CoursePostProps = {
    thumbnail: string;
    region: string;
    title: string;
    rating: number;
    price: number;
};

function CoursePost(props: CoursePostProps) {
    const { thumbnail, region, title, rating, price } = props;

    return (
        <Block>
            <Thumbnail thumbnail={thumbnail} />
            <Header
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
