import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { useState } from "react";
import { FixedBarContainer } from "../common/styles/Containers";
import Icon from "../basics/Icon";
import { withOpacity } from "../../lib/styles/utils";

export type BottomActionBarProps = {
    isLiked: boolean;
    onClickApply: () => void;
    onClickShare: () => void;
};

function BottomActionBar(props: BottomActionBarProps) {
    const { isLiked: initialIsLiked, onClickApply, onClickShare } = props;
    const [isLiked, setIsLiked] = useState<boolean>(initialIsLiked);
    const onLikeBtnClick = () => setIsLiked(!isLiked);

    return (
        <FixedBarContainer locate="bottom">
            <Block>
                <LikeBtn onClick={onLikeBtnClick}>
                    {isLiked ? (
                        <LikeIco name="heart-filled" />
                    ) : (
                        <LikeIco name="heart-outlined" />
                    )}
                </LikeBtn>
                <ShareBtn onClick={onClickShare}>공유하기</ShareBtn>
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
    box-shadow: 0px 0px 20px 0px ${palette.black2}${withOpacity(0.15)};
    padding: 10px 20px;
`;

const LikeBtn = styled.button`
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid ${palette.gray4};
    border-radius: 5px;
    background-color: ${palette.white0};
`;

const LikeIco = styled(Icon)`
    width: 24px;
    height: 24px;
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
