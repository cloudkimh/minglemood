import styled from "styled-components";
import Feed from "./Feed";
import SectionHeader from "../SectionHeader";
import palette from "../../../lib/styles/palette";
import { Link } from "react-router-dom";
import { SectionButton, SectionTitle } from "../styles";

export type PhotoFeedsProps = {
    photos: Array<string>;
};

function PhotoFeeds(props: PhotoFeedsProps) {
    const { photos } = props;
    return (
        <Block>
            <SectionHeader
                title={<SectionTitle>후기피드</SectionTitle>}
                button={
                    <SectionButton as={Link} to="/social-feeds">
                        더보기
                    </SectionButton>
                }
            />
            <FeedGrid>
                {photos.map((aPhoto, index) => (
                    <Feed photo={aPhoto} key={index} />
                ))}
            </FeedGrid>
        </Block>
    );
}

const Block = styled.div`
    padding: 0 20px;
    margin-top: 35px;
`;

const FeedGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    margin-top: 15px;
`;

export default PhotoFeeds;
