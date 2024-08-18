import styled, { css } from "styled-components";
import { ReactComponent as Logo } from "../../assets/img/minglemood-logo.svg";
import palette from "../../lib/styles/palette";
import {Link, useNavigate} from "react-router-dom";
import { getSampleUser } from "../../lib/data/sampleUserData";
import Icon from "../basics/Icon";
import ImageWithFallback from "../basics/ImageWithFallback";

export type GnbProps = { isTransparent: boolean };

function Gnb(props: GnbProps) {
    const { isTransparent } = props;
    const user = getSampleUser();
    const navigate = useNavigate();

    const onSearchBtnClick = () => {
        navigate("/explore");
    };

    return (
        <Block isTransparent={isTransparent}>
            <Link to="/">
                <Logo />
            </Link>
            <Container>
                <SearchBtn onClick={onSearchBtnClick}>
                    <SearchIco
                        name="magnifier"
                        color={isTransparent ? "white" : "black"}
                    />
                </SearchBtn>
                <NotificationBtn>
                    <NotificationIco
                        name="bell"
                        color={isTransparent ? "white" : "black"}
                    />
                </NotificationBtn>
                <AvatarLink to={"/mypage"}>
                    <Avatar path={user.avatar} alt="유저 아바타" />
                </AvatarLink>
            </Container>
        </Block>
    );
}

const Block = styled.nav<{ isTransparent: boolean }>`
    position: fixed;
    top: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    width: 100%;
    max-width: 768px;
    padding: 0 20px;
    transition: background-color 0.2s;

    ${(props) =>
        props.isTransparent
            ? css`
                  background-color: transparent;
                  border-bottom: none;
              `
            : css`
                  background-color: ${palette.white0};
                  border-bottom: 1px solid ${palette.gray5};
              `};
`;

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const SearchBtn = styled.button`
    width: 22px;
    height: 22px;
    margin-right: 7px;
`;

const SearchIco = styled(Icon)<{ color: "black" | "white" }>`
    width: 22px;
    height: 22px;

    path {
        stroke: ${(props) =>
            props.color === "black" ? palette.black2 : palette.white0};
        stroke-width: 1.5;
    }
`;

const NotificationBtn = styled.button`
    width: 22px;
    height: 22px;
    margin-right: 7px;
`;

const NotificationIco = styled(Icon)<{ color: "black" | "white" }>`
    width: 22px;
    height: 22px;

    path {
        fill: ${(props) =>
            props.color === "black" ? palette.black2 : palette.white0};
    }
`;

const AvatarLink = styled(Link)`
    width: 24px;
    height: 24px;
`;

const Avatar = styled(ImageWithFallback)`
    width: 24px;
    height: 24px;
    border-radius: 50%;
`;

export default Gnb;
