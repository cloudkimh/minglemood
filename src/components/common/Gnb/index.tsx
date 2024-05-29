import styled, { css } from "styled-components";
import searchWhiteIcon from "../../../assets/icon/search-white.png";
import searchBlackIcon from "../../../assets/icon/search-black.svg";
import notificationWhiteIcon from "../../../assets/icon/notification.png";
import notificationBlackIcon from "../../../assets/icon/notification-black.png";
import Avatar from "./Avatar";
import MinglemoodLogoImg from "../../../assets/img/minglemood-logo.png";
import palette from "../../../lib/styles/palette";
import { Link } from "react-router-dom";

export type GnbProps = { isScrolled: boolean };

function Gnb(props: GnbProps) {
    const { isScrolled } = props;

    return (
        <Block isScrolled={isScrolled}>
            <Link to="/">
                <Logo>
                    <LogoImg src={MinglemoodLogoImg} alt="minglemood logo" />
                </Logo>
            </Link>
            <Container>
                <SearchBtn>
                    <img
                        alt="search icon"
                        src={
                            isScrolled
                                ? `${searchBlackIcon}`
                                : `${searchWhiteIcon}`
                        }
                    />
                </SearchBtn>
                <NotificationBtn>
                    <img
                        alt="notification icon"
                        src={
                            isScrolled
                                ? `${notificationBlackIcon}`
                                : `${notificationWhiteIcon}`
                        }
                    />
                </NotificationBtn>
                <Avatar />
            </Container>
        </Block>
    );
}

const Block = styled.nav<{ isScrolled: boolean }>`
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
    transition: background-color 0.2s, border-bottom 0.2s;

    ${(props) =>
        props.isScrolled
            ? css`
                  background-color: ${palette.white0};
                  border-bottom: 1px solid ${palette.gray5};
              `
            : css`
                  background-color: transparent;
                  border-bottom: none;
              `};
`;

const Logo = styled.div`
    width: 151px;
`;

const LogoImg = styled.img`
    width: 100%;
    vertical-align: middle;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const SearchBtn = styled.button`
    width: 18px;
    height: 18px;
    margin-right: 7px;

    & img {
        width: 100%;
        vertical-align: milddle;
    }
`;

const NotificationBtn = styled.button`
    width: 22px;
    height: 22px;
    margin-right: 7px;
    background-position: center;
    background-size: cover;

    & img {
        width: 100%;
        vertical-align: milddle;
    }
`;

export default Gnb;
