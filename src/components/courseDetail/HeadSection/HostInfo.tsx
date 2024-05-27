import styled from "styled-components";
import DeactiveHeartIcon from "../../../assets/icon/CourseDetail/HeadSection/HostInfo/host-heart.png";
import ActiveHeartIcon from "../../../assets/icon/CourseDetail/HeadSection/HostInfo/like-heart-active.svg";
import { useState } from "react";

export type HostInfoProps = {
    hostInfo: {
        avatar: string;
        alias: string;
        courseCnt: number;
        reviewCnt: number;
        likes: number;
    };
};

function HostInfo(props: HostInfoProps) {
    const { hostInfo } = props;
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const onLikeBtnClick = () => setIsLiked(!isLiked);

    return (
        <Block>
            <Avatar src={hostInfo.avatar} alt="호스트 아바타" />
            <InfoBlock>
                <Alias>{hostInfo.alias}</Alias>
                <Infos>
                    모임 {hostInfo.courseCnt} <span>|</span>
                    후기 {hostInfo.reviewCnt} <span>|</span>찜 {hostInfo.likes}
                </Infos>
            </InfoBlock>
            <LikeBtn onClick={onLikeBtnClick}>
                <img
                    alt="heart for host"
                    src={isLiked ? ActiveHeartIcon : DeactiveHeartIcon}
                />
            </LikeBtn>
        </Block>
    );
}

const AVATAR_SIZE = "50px";
const LIKE_BTN_SIZE = "24px";

const Block = styled.div`
    margin-top: 20px;
    padding: 10px;
    border: solid 1px #e5e5e5;
    border-radius: 5px;
    display: grid;
    grid-template-columns: ${AVATAR_SIZE} 1fr ${LIKE_BTN_SIZE};
    column-gap: 20px;
    align-items: center;
`;

const Avatar = styled.img`
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

    & img {
        width: 100%;
        vertical-align: center;
    }
`;

export default HostInfo;
