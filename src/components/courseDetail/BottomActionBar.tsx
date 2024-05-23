import styled from "styled-components";
import FixedBarTemplate from "../common/FixedBarTemplate";
import palette from "../../lib/styles/palette";

export type BottomActionBarProps = {
    isLiked: boolean;
    likes: number;
    onSubmit: () => void;
};

function BottomActionBar(props: BottomActionBarProps) {
    const { isLiked, likes, onSubmit } = props;

    return (
        <FixedBarTemplate locate="bottom">
            <Block>
                <LikeBtn>
                    <LikeIco />
                    <Likes>{likes}</Likes>
                </LikeBtn>
                <SubmitBtn onClick={onSubmit}>참여하기</SubmitBtn>
            </Block>
        </FixedBarTemplate>
    );
}

const Block = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 32px 1fr;
    column-gap: 20px;
    background-color: ${palette.white0};
    box-shadow: rgba(0, 0, 0, 0.08) 0px -10px 30px -10px;
    padding: 12px 20px 24px;
`;

const LikeBtn = styled.button`
    display: grid;
    place-items: center;
`;

const LikeIco = styled.span`
    width: 32px;
    height: 32px;
    background-color: ${palette.red2};
`;

const Likes = styled.p`
    font-size: 12px;
    text-align: center;
`;

const SubmitBtn = styled.button`
    width: 100%;
    height: 56px;
    font-size: 15px;
    font-weight: 700;
    color: ${palette.white0};
    border-radius: 10px;
    background-color: ${palette.purple0};
    padding: 16px;
`;

export default BottomActionBar;
