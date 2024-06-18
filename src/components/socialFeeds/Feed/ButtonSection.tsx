import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import useToggle from "../../../lib/hooks/useToggle";
import { ReactComponent as LikeIco } from "../../../assets/icon/like-heart-active.svg";
import { ReactComponent as CommentIco } from "../../../assets/icon/speech-bubble.svg";

export type ButtonSectionProps = {
    handleClickLike: () => void;
    id: number;
    likes: number;
    isLiked: boolean;
    comments: number;
};

function ButtonSection(props: ButtonSectionProps) {
    const { handleClickLike, id, likes, isLiked, comments } = props;
    const [currentIsLiked, toggleCurrentIsLiked] = useToggle(isLiked);
    const navigate = useNavigate();

    const onClickCommentBtn = () => {
        navigate(`/social-feeds/${id}/comments`);
    };

    const onLike = () => {
        toggleCurrentIsLiked();
        handleClickLike();
    };

    return (
        <Block>
            <LikeBtn onClick={onLike}>
                <LikeIco />
                {likes}
            </LikeBtn>
            <CommentBtn onClick={onClickCommentBtn}>
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
