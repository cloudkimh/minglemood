import styled from "styled-components";
import palette from "../../../../lib/styles/palette";
import ImageWithFallback from "../../../basics/ImageWithFallback";

export type HeaderProps = {
    timestamp: string;
    avatar: string;
    alias: string;
};

function Header(props: HeaderProps) {
    const { timestamp, avatar, alias } = props;

    return (
        <Block>
            <Avatar path={avatar} alt="유저 아바타" />
            <AliasBlock>
                <Alias>{alias}</Alias>
                <Timestamp>{timestamp}</Timestamp>
            </AliasBlock>
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    align-items: center;
`;

const Avatar = styled(ImageWithFallback)`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 8px;
`;

const AliasBlock = styled.div`
    display: grid;
    row-gap: 5px;
`;

const Alias = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: ${palette.gray0};
`;

const Timestamp = styled.p`
    font-size: 11px;
    color: ${palette.gray3};
`;

export default Header;
