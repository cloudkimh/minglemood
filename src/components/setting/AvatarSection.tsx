import styled from "styled-components";
import ImageInput from "../basics/ImageInput";
import palette from "../../lib/styles/palette";
import { useState } from "react";
import ImageWithFallback from "../basics/ImageWithFallback";
import Icon from "../basics/Icon";

export type AvatarSectionProp = {
    avatar: string;
    onChangeAvatar: (avatar: string) => void;
};

function AvatarSection(props: AvatarSectionProp) {
    const { onChangeAvatar, avatar } = props;

    return (
        <Block>
            <ImageInput
                onChange={(nextImage) => {
                    onChangeAvatar(nextImage);
                }}
                defaultImage={avatar}
                render={({ openFinder }) => (
                    <AvatarWrapper>
                        <Avatar
                            path={avatar}
                            onClick={() => {
                                openFinder();
                            }}
                        />
                        <Chip
                            onClick={() => {
                                openFinder();
                            }}
                        >
                            <Icon name="camera" />
                        </Chip>
                    </AvatarWrapper>
                )}
            />
        </Block>
    );
}

const Block = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 80px;
`;

const AvatarWrapper = styled.div`
    position: relative;
    width: 70px;
    height: 70px;
`;

const Avatar = styled(ImageWithFallback)`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    cursor: pointer;
`;

const Chip = styled.span`
    position: absolute;
    right: -2px;
    bottom: -1px;
    display: grid;
    place-content: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid ${palette.white0};
    background-color: ${palette.red500};
`;

export default AvatarSection;
