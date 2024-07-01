import styled, { css } from "styled-components";
import useToggle from "../../../../lib/hooks/useToggle";
import { ReactComponent as LikeIco } from "../../../../assets/icon/like-heart-active.svg";
import { ReactComponent as CommentIco } from "../../../../assets/icon/speech-bubble.svg";

export type ButtonSectionProps = {
    handleClickLike: () => void;
    handleClickComments: () => void;
    id: number;
    likes: number;
    isLiked: boolean;
    comments: number;
};

function ButtonSection(props: ButtonSectionProps) {
    const {
        handleClickLike,
        handleClickComments,
        id,
        likes,
        isLiked,
        comments,
    } = props;
    const [currentIsLiked, toggleCurrentIsLiked] = useToggle(isLiked);

    const onClickComments = () => {
        handleClickComments();
    };

    const onClickLike = () => {
        toggleCurrentIsLiked();
        handleClickLike();
    };

    return (
        <Block>
            <LikeBtn onClick={onClickLike}>
                <LikeIco />
                {likes}
            </LikeBtn>
            <CommentBtn onClick={onClickComments}>
                <CommentIco />
                {comments}
            </CommentBtn>
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    align-items: center;
    column-gap: 22px;
    margin-top: 15px;
`;

const buttonStyle = css`
    display: flex;
    align-items: center;
    column-gap: 4px;
    font-size: 13px;
    font-weight: 700;
`;

const LikeBtn = styled.button`
    ${buttonStyle}
`;

const CommentBtn = styled.button`
    ${buttonStyle}
`;

export default ButtonSection;
