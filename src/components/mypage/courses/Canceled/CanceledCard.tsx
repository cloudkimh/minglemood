import Container from "../CourseCard/Container";
import Header from "../CourseCard/Header";
import ReservationInfo from "../CourseCard/ReservationInfo";

export type CanceledCardProps = {
    timestamp: string;
    id: number;
    thumbnail: string;
    title: string;
    location: string;
    time: string;
    count: number;
};

function CanceledCard(props: CanceledCardProps) {
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
                canceled
            />
        </Container>
    );
}

export default CanceledCard;
