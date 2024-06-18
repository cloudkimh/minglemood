import styled from "styled-components";
import Empty from "./Empty";
import { getSampleImage } from "../../lib/styles/utils";
import HostInfoCard from "../common/HostInfoCard";
import { FadeInBlock } from "../common/styles/Common";
import { useNavigate } from "react-router-dom";

const photo = getSampleImage();
const hosts = Array(5).fill({
    avatar: photo,
    alias: "월하보이",
    courseCnt: 5,
    reviewCnt: 13,
    likes: 28,
});

function LikedHosts() {
    const navigate = useNavigate();
    const isEmpty = hosts.length === 0;

    const onRedirect = () => {
        navigate("/");
    };

    return (
        <Block>
            {isEmpty ? (
                <Empty
                    mainText="아직 찜한 호스트가 없어요."
                    subText="마음에 드는 호스트를 찜 해두면 빠르게 다시 찾아볼 수 있어요."
                    onRedirect={onRedirect}
                />
            ) : (
                <CardGrid>
                    {hosts.map((aHost) => (
                        <HostInfoCard
                            avatar={aHost.avatar}
                            alias={aHost.alias}
                            courseCnt={aHost.courseCnt}
                            reviewCnt={aHost.reviewCnt}
                            likes={aHost.likes}
                        />
                    ))}
                </CardGrid>
            )}
        </Block>
    );
}

const Block = styled(FadeInBlock)`
    padding: 20px 20px 100px;
`;

const CardGrid = styled.div`
    display: grid;
    row-gap: 20px;
`;

export default LikedHosts;
