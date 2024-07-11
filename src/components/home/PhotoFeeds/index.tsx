import styled from "styled-components";
import Feed from "./Feed";
import SectionHeader from "../SectionHeader";
import palette from "../../../lib/styles/palette";
import { Link } from "react-router-dom";

export type PhotoFeedsProps = {
    photos: Array<string>;
};

function PhotoFeeds(props: PhotoFeedsProps) {
    const { photos } = props;
    return (
        <Block>
            <SectionHeader
                title="후기 피드"
                button={
                    <HeaderBtn as={Link} to="/social-feeds">
                        더보기
                    </HeaderBtn>
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

const HeaderBtn = styled.button`
    font-size: 13px;
    font-weight: 600;
    color: ${palette.gray6};
`;

const FeedGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    margin-top: 15px;
`;

export default PhotoFeeds;
