import styled from "styled-components";
import { ReactElement } from "react";
import SectionHeader from "./SectionHeader";
import CoursePost from "../common/CoursePost";

export type PostSectionProps = {
    className?: string;
    title: ReactElement;
    headerButton?: ReactElement;
    posts: Array<{
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
    }>;
};

function PostSection(props: PostSectionProps) {
    const { className, title, headerButton, posts } = props;

    return (
        <Block className={className}>
            <SectionHeader title={title} button={headerButton} />
            <PostGrid>
                {posts.map((aPost, i) => (
                    <CoursePost
                        key={i}
                        id={aPost.id}
                        thumbnail={aPost.thumbnail}
                        region={aPost.region}
                        title={aPost.title}
                        starScore={aPost.starScore}
                        starCnt={aPost.starCnt}
                        heartCnt={aPost.heartCnt}
                        price={aPost.price}
                        isLiked={aPost.isLiked}
                        discountRate={aPost.discountRate}
                    />
                ))}
            </PostGrid>
        </Block>
    );
}

const Block = styled.section`
    padding: 0 20px;
    margin-top: 35px;
`;

const PostGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
    row-gap: 45px;
    margin-top: 15px;
`;

export default PostSection;
