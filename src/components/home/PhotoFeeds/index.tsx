import styled from "styled-components";
import Feed from "./Feed";
import SectionHeader from "../SectionHeader";
import palette from "../../../lib/styles/palette";

export type PhotoFeedsProps = {
    photos: Array<string>;
};

function PhotoFeeds(props: PhotoFeedsProps) {
    const { photos } = props;
    return (
        <Block>
            <SectionHeader
                title="후기 피드"
                button={<HeaderBtn>더보기</HeaderBtn>}
            />
            <Body>
                {photos.map((aPhoto, index) => (
                    <Feed photo={aPhoto} key={index} />
                ))}
            </Body>
        </Block>
    );
}

const HeaderBtn = styled.button`
    font-size: 13px;
    font-weight: 600;
    color: ${palette.gray6};
`;

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
