import styled from "styled-components";
import Header from "./Header";
import Photos from "./Photos";
import CourseTag from "./CourseTag";
import TextSection from "./TextSection";
import ButtonSection from "./ButtonSection";
import CommentModal from "./CommentModal";
import useToggle from "../../../../lib/hooks/useToggle";
import DownloadPhotos from "./DownloadPhoto";

export type FeedProps = {
    id: number;
    photos: Array<string>;
    timestamp: string;
    avatar: string;
    alias: string;
    url: string;
    name: string;
    text: string;
    likes: number;
    isLiked: boolean;
    comments: number;
};

function Feed(props: FeedProps) {
    const {
        id,
        photos,
        timestamp,
        avatar,
        alias,
        url,
        name,
        text,
        likes,
        isLiked,
        comments,
    } = props;
    const [commentModalOpened, toggleCommentModalOpened] = useToggle(false);
    const [downloadPhotoOpened, toggleDownloadPhotoOpened] = useToggle(false);

    const handleClickLike = () => {};

    const handleClickComments = () => toggleCommentModalOpened();

    const handleClickPhotos = () => toggleDownloadPhotoOpened();

    return (
        <>
            <Block>
                <Wrapper>
                    <Header
                        timestamp={timestamp}
                        avatar={avatar}
                        alias={alias}
                    />
                    <Photos photos={photos} onClickPhoto={handleClickPhotos} />
                    <CourseTag url={url} name={name} />
                    <TextSection text={text} />
                    <ButtonSection
                        handleClickLike={handleClickLike}
                        handleClickComments={handleClickComments}
                        id={id}
                        likes={likes}
                        isLiked={isLiked}
                        comments={comments}
                    />
                </Wrapper>
            </Block>
            <CommentModal
                visible={commentModalOpened}
                handleClose={toggleCommentModalOpened}
            />
            {downloadPhotoOpened && (
                <DownloadPhotos
                    photos={photos}
                    onClickClose={toggleDownloadPhotoOpened}
                />
            )}
        </>
    );
}

const Block = styled.div`
    padding: 0 20px;
`;

const Wrapper = styled.div`
    max-width: 500px;
`;

export default Feed;
