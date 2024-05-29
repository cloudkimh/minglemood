import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { withOpacity } from "../../lib/styles/utils";
import { getSampleUser } from "../../lib/data/sampleUserData";
import ImageWithFallback from "../common/ImageWithFallback";

export type UserHeaderProps = {};

function UserHeader(props: UserHeaderProps) {
    const user = getSampleUser();

    return (
        <Block>
            <Avatar alt="유저 아바타" path={user.avatar} />
            <AliasBlock>
                <Alias>{user.alias}</Alias>
                <SnsType>카카오톡 계정</SnsType>
            </AliasBlock>
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${palette.gray5};
    padding: 24px 20px 36px;
`;

const Avatar = styled(ImageWithFallback)`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    border: 1px solid ${palette.black2}${withOpacity(0.1)};
    margin-right: 16px;
`;

const AliasBlock = styled.div``;

const Alias = styled.p`
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 10px;
`;

const SnsType = styled.p`
    font-size: 12px;
    color: ${palette.gray2};
`;

export default UserHeader;
