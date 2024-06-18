import styled from "styled-components";
import CoursePost from "../common/CoursePost";
import ModalTemplate from "../common/ModalTemplate";
import { ModalBody } from "../common/ModalTemplate/styles";

type SearchedPostsModalProps = {
    visible: boolean;
    posts: {
        [key: string]: any;
    };
    onClose: () => void;
};

function SearchedPostsModal(props: SearchedPostsModalProps) {
    const { visible, posts, onClose } = props;

    return (
        <ModalTemplate visible={visible} handleClickLayer={onClose}>
            <StyledModalBody>
                <PostsWrapper>
                    <PostGrid>
                        {posts.map((aPost: any, i: number) => (
                            <CoursePost
                                key={`post-${i}`}
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
                </PostsWrapper>
            </StyledModalBody>
        </ModalTemplate>
    );
}

const StyledModalBody = styled(ModalBody)`
    height: calc(100vh - 100px);
    padding: 33px 20px 0;
`;

const PostsWrapper = styled.div`
    height: 100%;
    overflow-y: auto;
    padding-bottom: 50px;
`;

const PostGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
    row-gap: 25px;
`;

export default SearchedPostsModal;
