import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import ImageWithFallback from "../../common/ImageWithFallback";

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
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 10px;
`;

const AliasBlock = styled.div`
    display: grid;
    row-gap: 8px;
`;

const Alias = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: ${palette.gray0};
`;

const Timestamp = styled.p`
    font-size: 12px;
    color: ${palette.gray3};
`;

export default Header;
