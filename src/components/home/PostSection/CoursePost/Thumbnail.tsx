import { useState } from "react";
import styled from "styled-components";

export type ThumbnailProps = {
    thumbnail: string;
    isLiked: boolean;
};

function Thumbnail(props: ThumbnailProps) {
    const { thumbnail, isLiked } = props;
    const [liked, setLiked] = useState<boolean>(isLiked);

    const onButtonClick = () => {
        setLiked(!liked);
    };

    return (
        <Block>
            <ThumbnailImage src={thumbnail} alt="코스 썸네일" />
            <Button onClick={onButtonClick}>
                <img
                    alt="hear for like function"
                    src={
                        liked
                            ? "static/icon/like-heart-active.svg"
                            : "static/icon/like-heart.svg"
                    }
                />
            </Button>
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
    bottom: 10px;
    right: 10px;
    width: 18px;
    height: 18px;

    & img {
        width: 100%;
        vertical-align: middle;
    }
`;

export default Thumbnail;
