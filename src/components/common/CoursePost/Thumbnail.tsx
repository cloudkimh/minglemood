import styled from "styled-components";
import { Link } from "react-router-dom";
import ImageWithFallback from "../../basics/ImageWithFallback";
import useToggle from "../../../lib/hooks/useToggle";
import Icon from "../../basics/Icon";

export type ThumbnailProps = {
    id: number;
    thumbnail: string;
    isLiked: boolean;
};

function Thumbnail(props: ThumbnailProps) {
    const { id, thumbnail, isLiked: initialIsLiked } = props;
    const [isLiked, toggleIsLiked] = useToggle(initialIsLiked);

    const onClickLikeBtn = () => {
        toggleIsLiked();
    };

    return (
        <Block>
            <Link to={`/course/${id}`}>
                <ThumbnailImage path={thumbnail} alt="코스 썸네일" />
            </Link>
            <Button onClick={onClickLikeBtn}>
                {isLiked ? (
                    <Icon name="heart-filled" />
                ) : (
                    <Icon name="heart-outlined" />
                )}
            </Button>
        </Block>
    );
}

const Block = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 100%;
`;

const ThumbnailImage = styled(ImageWithFallback)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
`;

const Button = styled.button`
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 18px;
    height: 18px;

    img {
        width: 100%;
        vertical-align: middle;
    }
`;

export default Thumbnail;
