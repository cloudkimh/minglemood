import styled from "styled-components";
import Container from "../CourseCard/Container";
import Header from "../CourseCard/Header";
import ReservationInfo from "../CourseCard/ReservationInfo";
import { DefaultButton } from "../../../common/styles/Buttons";
import palette from "../../../../lib/styles/palette";
import { ReactComponent as WriteFeedIco } from "../../../../assets/icon/pencil.svg";
import { ReactComponent as PhotoIco } from "../../../../assets/icon/photo.svg";
import { Link } from "react-router-dom";

export type FinishedCardProps = {
    timestamp: string;
    id: number;
    thumbnail: string;
    title: string;
    location: string;
    time: string;
    count: number;
};

function FinishedCard(props: FinishedCardProps) {
    const { timestamp, id, thumbnail, title, location, time, count } = props;

    return (
        <Container>
            <Header timestamp={timestamp} id={id} />
            <ReservationInfo
                thumbnail={thumbnail}
                title={title}
                location={location}
                time={time}
                count={count}
            />
            <BtnContainer>
                <CardBtn
                    as={Link}
                    to={`/photo-gallery/${id}`}
                    styleType="outlined"
                    color={palette.red500}
                >
                    <PhotoIco />
                    모임 참여 사진
                </CardBtn>
                <CardBtn styleType="filled" color={palette.red500}>
                    <StyldWriteFeedIco />
                    피드 쓰기
                </CardBtn>
            </BtnContainer>
        </Container>
    );
}

const BtnContainer = styled.div`
    display: flex;
    column-gap: 6px;
`;

const CardBtn = styled(DefaultButton)`
    width: 100%;
    height: 30px;
    font-size: 11px;
    column-gap: 3px;
`;

const StyldWriteFeedIco = styled(WriteFeedIco)`
    width: 13px;
    height: 13px;
    margin-top: -2px;

    path {
        fill: ${palette.white0};
    }
`;

export default FinishedCard;
