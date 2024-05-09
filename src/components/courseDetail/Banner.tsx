import styled from "styled-components";
import palette from "../../lib/styles/palette";

export type BannerProps = {};

function Banner(props: BannerProps) {
    return (
        <Block>
            <></>
        </Block>
    );
}

const Block = styled.div`
    width: 100%;
    aspect-ratio: 1 / 1;
    background-color: ${palette.blue2};
`;

export default Banner;
