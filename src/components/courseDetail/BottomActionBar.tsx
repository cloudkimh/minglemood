import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { useState } from "react";
import { FixedBarContainer } from "../common/styles/Containers";
import Icon from "../basics/Icon";

export type BottomActionBarProps = {
    isLiked: boolean;
    onClickApply: () => void;
};

function BottomActionBar(props: BottomActionBarProps) {
    const { isLiked: initialIsLiked, onClickApply } = props;
    const [isLiked, setIsLiked] = useState<boolean>(initialIsLiked);
    const onLikeBtnClick = () => setIsLiked(!isLiked);

    return (
        <FixedBarContainer locate="bottom">
            <Block>
                <LikeBtn onClick={onLikeBtnClick}>
                    {isLiked ? (
                        <Icon name="heart-filled" />
                    ) : (
                        <Icon name="heart-outlined" />
                    )}
                </LikeBtn>
                <ShareBtn>공유하기</ShareBtn>
                <SubmitBtn onClick={onClickApply}>참여하기</SubmitBtn>
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
    font-weight: 700;
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
    font-weight: 700;
    color: ${palette.white0};
    border-radius: 5px;
    background-color: ${palette.purple0};
    padding: 12px;
`;

export default BottomActionBar;
