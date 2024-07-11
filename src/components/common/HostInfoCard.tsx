import styled from "styled-components";
import palette from "../../lib/styles/palette";
import useToggle from "../../lib/hooks/useToggle";
import ImageWithFallback from "../basics/ImageWithFallback";
import Icon from "../basics/Icon";

export type HostInfoCardProps = {
    avatar: string;
    alias: string;
    courseCnt: number;
    reviewCnt: number;
    likes: number;
};

function HostInfoCard(props: HostInfoCardProps) {
    const { avatar, alias, courseCnt, reviewCnt, likes } = props;
    const [isLiked, toggleLiked] = useToggle(false);

    const onLikeBtnClick = () => {
        toggleLiked();
    };

    return (
        <Block>
            <Avatar path={avatar} alt="호스트 아바타" />
            <InfoBlock>
                <Alias>{alias}</Alias>
                <Infos>
                    모임 {courseCnt} <span>|</span>
                    후기 {reviewCnt} <span>|</span>찜 {likes}
                </Infos>
            </InfoBlock>
            <LikeBtn onClick={onLikeBtnClick}>
                {isLiked ? (
                    <LikeIco name="heart-filled" />
                ) : (
                    <LikeIco name="heart-outlined" />
                )}
            </LikeBtn>
        </Block>
    );
}

const AVATAR_SIZE = "40px";
const LIKE_BTN_SIZE = "24px";

const Block = styled.div`
    border: solid 1px ${palette.gray5};
    border-radius: 5px;
    display: grid;
    grid-template-columns: ${AVATAR_SIZE} 1fr ${LIKE_BTN_SIZE};
    column-gap: 15px;
    align-items: center;
    padding: 15px 10px;
`;

const Avatar = styled(ImageWithFallback)`
    width: ${AVATAR_SIZE};
    height: ${AVATAR_SIZE};
    border-radius: 50%;
`;

const InfoBlock = styled.div``;

const Alias = styled.p`
    font-size: 14px;
    font-weight: 700;
`;

const Infos = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    color: ${palette.gray3};
    margin-top: 6px;

    span {
        margin: 0 7px;
    }
`;

const LikeBtn = styled.button`
    width: ${LIKE_BTN_SIZE};
    height: ${LIKE_BTN_SIZE};
`;

const LikeIco = styled(Icon)`
    width: 24px;
    height: 24px;
`;

export default HostInfoCard;
