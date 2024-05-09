import styled from "styled-components";
import Feed from "./Feed";
import SectionHeader from "../SectionHeader";

export type PhotoFeedsProps = {
    photos: Array<string>;
};

function PhotoFeeds(props: PhotoFeedsProps) {
    const { photos } = props;
    return (
        <Block>
            <SectionHeader title="후기 피드" />
            <Body>
                {photos.map((aPhoto) => (
                    <Feed photo={aPhoto} />
                ))}
            </Body>
        </Block>
    );
}

const Block = styled.div`
    padding: 0 20px;
`;

const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    margin-top: 30px;
`;

export default PhotoFeeds;
