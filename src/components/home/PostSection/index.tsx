import styled from "styled-components";
import CoursePost from "./CoursePost";
import { ReactElement } from "react";
import SectionHeader from "../SectionHeader";

export type PostSectionProps = {
    className?: string;
    title: string;
    highlight?: string;
    headerButton?: ReactElement;
    posts: Array<{
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
    const { className, title, headerButton, posts, highlight } = props;

    return (
        <Block className={className}>
            <SectionHeader
                title={title}
                button={headerButton}
                highlight={highlight}
            />
            <Body>
                <PostGrid>
                    {posts.map((aPost, i) => (
                        <CoursePost
                            key={i}
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
