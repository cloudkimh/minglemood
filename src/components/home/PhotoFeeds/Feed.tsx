import styled from "styled-components";
import ImageWithFallback from "../../basics/ImageWithFallback";

export type FeedProps = {
    photo: string;
};

function Feed(props: FeedProps) {
    const { photo } = props;

    return (
        <Block>
            <Inner>
                <Photo path={photo} alt="인스타 피드" />
            </Inner>
        </Block>
    );
}

const Block = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-bottom: 100%;
`;

const Inner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const Photo = styled(ImageWithFallback)`
    width: 100%;
    height: 100%;
`;

export default Feed;
