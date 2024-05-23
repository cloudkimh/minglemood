import styled from "styled-components";
import CoursePost from "./CoursePost";
import { ReactElement } from "react";
import SectionHeader from "../SectionHeader";

export type PostSectionProps = {
    className?: string;
    title: string;
    headerButton?: ReactElement;
    posts: Array<{
        id: number;
        thumbnail: string;
        region: string;
        title: string;
        rating: number;
        price: number;
    }>;
};

function PostSection(props: PostSectionProps) {
    const { className, title, headerButton, posts } = props;

    return (
        <Block className={className}>
            <SectionHeader title={title} button={headerButton} />
            <Body>
                <PostGrid>
                    {posts.map((aPost) => (
                        <CoursePost
                            id={aPost.id}
                            thumbnail={aPost.thumbnail}
                            region={aPost.region}
                            title={aPost.title}
                            rating={aPost.rating}
                            price={aPost.price}
                        />
                    ))}
                </PostGrid>
            </Body>
        </Block>
    );
}

const Block = styled.section`
    padding: 0 20px;
`;

const Body = styled.div`
    margin-top: 30px;
`;

const PostGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
    row-gap: 45px;
`;

export default PostSection;
