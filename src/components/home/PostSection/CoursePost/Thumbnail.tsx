import styled from "styled-components";
import palette from "../../../../lib/styles/palette";
import { Link } from "react-router-dom";

export type ThumbnailProps = {
    id: number;
    thumbnail: string;
};

function Thumbnail(props: ThumbnailProps) {
    const { id, thumbnail } = props;

    return (
        <Block>
            <Link to={`course/${id}`}>
                <ThumbnailImage src={thumbnail} alt="코스 썸네일" />
            </Link>
            <Button />
        </Block>
    );
}

const Block = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 100%;
`;

const ThumbnailImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
`;

const Button = styled.button`
    position: absolute;
    bottom: 6px;
    right: 4px;
    width: 32px;
    height: 32px;
    background-color: ${palette.red2};
`;

export default Thumbnail;
