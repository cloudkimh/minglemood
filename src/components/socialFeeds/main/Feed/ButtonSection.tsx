import styled, { css } from "styled-components";
import useToggle from "../../../../lib/hooks/useToggle";
import Icon from "../../../basics/Icon";

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
        comments,
        isLiked: initialIsLiked,
    } = props;
    const [isLiked, toggleIsLiked] = useToggle(initialIsLiked);

    const onClickComments = () => {
        handleClickComments();
    };

    const onClickLike = () => {
        handleClickLike();
        toggleIsLiked();
    };

    return (
        <Block>
            <LikeBtn onClick={onClickLike}>
                {isLiked ? (
                    <Icon name="heart-filled" />
                ) : (
                    <Icon name="heart-outlined" />
                )}
                {likes}
            </LikeBtn>
            <CommentBtn onClick={onClickComments}>
                <Icon name="speech-bubble" />
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
