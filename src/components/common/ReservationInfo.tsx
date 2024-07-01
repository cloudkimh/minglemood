import styled from "styled-components";
import ImageWithFallback from "../basics/ImageWithFallback";
import palette from "../../lib/styles/palette";

export type ReservationInfoProps = {
    thumbnail: string;
    title: string;
    region: string;
    time: string;
    count: number;
};

function ReservationInfo(props: ReservationInfoProps) {
    const { thumbnail, title, region, time, count } = props;

    return (
        <Block>
            <Thumbnail path={thumbnail} alt="모임 썸네일" />
            <InfoBlock>
                <Title>{title}</Title>
                <Region>{region}</Region>
                <Reservation>
                    {time} ・ {count}명
                </Reservation>
            </InfoBlock>
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    column-gap: 10px;
`;

const Thumbnail = styled(ImageWithFallback)`
    width: 70px;
    height: 70px;
    border-radius: 5px;
    flex-shrink: 0;
`;

const InfoBlock = styled.div`
    display: grid;
    row-gap: 5px;
    height: fit-content;
    padding-top: 3px;
`;

const Title = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    color: ${palette.black0};
`;

const Region = styled.p`
    font-size: 10px;
    font-weight: 700;
    color: ${palette.gray6};
`;

const Reservation = styled.p`
    font-size: 11px;
    font-weight: 700;
    color: ${palette.red500};
`;

export default ReservationInfo;
