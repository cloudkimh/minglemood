import styled from "styled-components";
import palette from "../../lib/styles/palette";
import LikeHeartDeactive from "../../assets/icon/CourseDetail/like-heart-deactive.svg";
import LikeHeartActive from "../../assets/icon/like-heart-active.svg";
import { useState } from "react";
import { FixedBarContainer } from "../common/styles/Containers";

export type BottomActionBarProps = {
    isLiked: boolean;
    likes: number;
    onSubmit: () => void;
};

function BottomActionBar(props: BottomActionBarProps) {
    const { isLiked, likes, onSubmit } = props;
    const [isLikedInner, setIsLikedInner] = useState<boolean>(isLiked);
    const onLikeBtnClick = () => setIsLikedInner(!isLikedInner);

    return (
        <FixedBarContainer locate="bottom">
            <Block>
                <LikeBtn onClick={onLikeBtnClick}>
                    <LikeIco
                        alt="icon for like feature"
                        src={isLikedInner ? LikeHeartActive : LikeHeartDeactive}
                    />
                </LikeBtn>
                <ShareBtn>공유하기</ShareBtn>
                <SubmitBtn onClick={onSubmit}>참여하기</SubmitBtn>
            </Block>
        </FixedBarContainer>
    );
}

const Block = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 40px 1fr 1fr;
    column-gap: 5px;
    background-color: ${palette.white0};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 20px 0px;
    padding: 5px 20px 20px;
`;

const LikeBtn = styled.button`
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid #ddd9d8;
    border-radius: 5px;
    background-color: ${palette.white0};
`;

const LikeIco = styled.img`
    width: 24px;
    height: 24px;
    vertical-align: middle;
`;

const ShareBtn = styled.button`
    width: 100%;
    height: 40px;
    font-size: 13px;
    font-weight: 500;
    border-radius: 5px;
    border: solid 1px ${palette.purple0};
    color: ${palette.purple0};
    background-color: ${palette.white0};
    padding: 12px;
`;

const SubmitBtn = styled.button`
    width: 100%;
    height: 40px;
    font-size: 13px;
    font-weight: 500;
    color: ${palette.white0};
    border-radius: 5px;
    background-color: ${palette.purple0};
    padding: 12px;
`;

export default BottomActionBar;
