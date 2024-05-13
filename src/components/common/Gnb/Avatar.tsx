import styled from "styled-components";
import palette from "../../../lib/styles/palette";

export type AvatarProps = {};

function Avatar(props: AvatarProps) {
    return (
        <Block>
            <></>
        </Block>
    );
}

const Block = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${palette.red2};
`;

export default Avatar;
