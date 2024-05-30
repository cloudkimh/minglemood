import styled from "styled-components";
import ImageInput from "../common/ImageInput";
import palette from "../../lib/styles/palette";
import { useState } from "react";
import { getSampleUser } from "../../lib/data/sampleUserData";

export type AvatarSectionProp = {};

function AvatarSection(props: AvatarSectionProp) {
    const user = getSampleUser();
    const [image, setImage] = useState(user.avatar);

    return (
        <Block>
            <ImageInput
                onChange={(nextImage) => {
                    setImage(nextImage);
                }}
                defaultImage={user.avatar}
                render={({ openFinder }) => (
                    <AvatarWrapper>
                        <Avatar
                            src={image}
                            onClick={() => {
                                openFinder();
                            }}
                        />
                        <Chip />
                    </AvatarWrapper>
                )}
            />
        </Block>
    );
}

const Block = styled.section`
    display: flex;
    justify-content: center;
    padding: 0 20px;
    margin-top: 30px;
`;

const AvatarWrapper = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
`;

const Avatar = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    cursor: pointer;
`;

const Chip = styled.span`
    position: absolute;
    right: -5px;
    bottom: -3px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${palette.black0};
`;

export default AvatarSection;
