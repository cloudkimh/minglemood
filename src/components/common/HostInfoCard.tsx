import styled from "styled-components";
import DeactiveHeartIcon from "../../assets/icon/CourseDetail/HeadSection/HostInfo/host-heart.png";
import ActiveHeartIcon from "../../assets/icon/CourseDetail/HeadSection/HostInfo/like-heart-active.svg";
import palette from "../../lib/styles/palette";
import useToggle from "../../lib/hooks/useToggle";
import ImageWithFallback from "../basics/ImageWithFallback";

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
                <img
                    alt="호스트 좋아요 버튼"
                    src={isLiked ? ActiveHeartIcon : DeactiveHeartIcon}
                />
            </LikeBtn>
        </Block>
    );
}

const AVATAR_SIZE = "50px";
const LIKE_BTN_SIZE = "24px";

const Block = styled.div`
    border: solid 1px ${palette.gray5};
    border-radius: 5px;
    display: grid;
    grid-template-columns: ${AVATAR_SIZE} 1fr ${LIKE_BTN_SIZE};
    column-gap: 20px;
    align-items: center;
    padding: 10px;
`;

const Avatar = styled(ImageWithFallback)`
    width: ${AVATAR_SIZE};
    height: ${AVATAR_SIZE};
    border-radius: 50%;
`;

const InfoBlock = styled.div``;

const Alias = styled.p`
    font-size: 16px;
    font-weight: 800;
`;

const Infos = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #c1c1c1;
    margin-top: 6px;

    span {
        margin: 0 7px;
    }
`;

const LikeBtn = styled.button`
    width: ${LIKE_BTN_SIZE};
    height: ${LIKE_BTN_SIZE};

    img {
        width: 100%;
        vertical-align: center;
    }
`;

export default HostInfoCard;
