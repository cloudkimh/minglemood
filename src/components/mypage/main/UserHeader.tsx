import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import { withOpacity } from "../../../lib/styles/utils";
import ImageWithFallback from "../../basics/ImageWithFallback";
import { ReactComponent as AvatarIco } from "../../../assets/icon/avatar.svg";
import { Link } from "react-router-dom";

export type UserHeaderProps = {
    alias: string;
    avatar: string;
};

function UserHeader(props: UserHeaderProps) {
    const { alias, avatar } = props;

    return (
        <Block>
            <AvatarBlock>
                <Avatar alt="유저 아바타" path={avatar} />
                <Alias>{alias}</Alias>
            </AvatarBlock>
            <Link to="/setting">
                <ProfileBtn>
                    프로필
                    <AvatarIco />
                </ProfileBtn>
            </Link>
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin: 80px 0 20px;
`;

const AvatarBlock = styled.div`
    display: flex;
    align-items: center;
    column-gap: 8px;
`;

const Avatar = styled(ImageWithFallback)`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid ${palette.black2}${withOpacity(0.1)};
`;

const Alias = styled.p`
    font-size: 14px;
    font-weight: 700;
`;

const ProfileBtn = styled.button`
    display: flex;
    align-items: center;
    column-gap: 3px;
    font-size: 12px;
    font-weight: 700;
    color: ${palette.gray2};
    border: 1px solid ${palette.gray5};
    border-radius: 15px;
    padding: 7px 10px;
`;

export default UserHeader;
