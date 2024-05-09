import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import { VerticalBar } from "../../../styles/Common";

export type HostInfoProps = {
    hostInfo: {
        avatar: string;
        alias: string;
        courseCnt: number;
        reviewCnt: number;
        likeCnt: number;
    };
};

function HostInfo(props: HostInfoProps) {
    const { hostInfo } = props;

    return (
        <Block>
            <Avatar src={hostInfo.avatar} alt="호스트 아바타" />
            <InfoBlock>
                <Alias>{hostInfo.alias}</Alias>
                <Infos>
                    개최모임 {hostInfo.courseCnt} <span>|</span>
                    후기 {hostInfo.reviewCnt} <span>|</span>찜{" "}
                    {hostInfo.likeCnt}
                </Infos>
            </InfoBlock>
            <LikeBtn />
        </Block>
    );
}

const AVATAR_SIZE = "56px";
const LIKE_BTN_SIZE = "32px";

const Block = styled.div`
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
    font-weight: 700;
`;

const Infos = styled.div`
    display: flex;
    align-items: center;
    font-size: 10px;
    color: ${palette.gray6};
    margin-top: 6px;

    span {
        margin: 0 7px;
    }
`;

const LikeBtn = styled.button`
    width: ${LIKE_BTN_SIZE};
    height: ${LIKE_BTN_SIZE};
    background-color: ${palette.red2};
`;

export default HostInfo;
