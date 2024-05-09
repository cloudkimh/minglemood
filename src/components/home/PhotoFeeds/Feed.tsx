import styled from "styled-components";

export type FeedProps = {
    photo: string;
};

function Feed(props: FeedProps) {
    const { photo } = props;

    return (
        <Block>
            <Photo src={photo} alt="인스타 피드" />
        </Block>
    );
}

const Block = styled.div`
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
`;

const Photo = styled.img`
    width: 100%;
    height: 100%;
`;

export default Feed;
