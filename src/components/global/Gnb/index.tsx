import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import Avatar from "./Avatar";

export type GnbProps = {};

function Gnb(props: GnbProps) {
    return (
        <Block>
            <Logo>
                <LogoImg src="minglemood-logo.png" alt="minglemood logo" />
            </Logo>
            <Container>
                <SearchBtn></SearchBtn>
                <NotificationBtn></NotificationBtn>
                <Avatar />
            </Container>
        </Block>
    );
}

const Block = styled.nav`
    position: fixed;
    top: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 61px;
    width: 100%;
    max-width: 768px;
    padding: 0 20px;
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
    background: url("static/icon/search-white.png") center;
    background-size: cover;
`;

const NotificationBtn = styled.button`
    width: 22px;
    height: 22px;
    margin-right: 7px;
    background: url("static/icon/notification.png") center;
    background-size: cover;
`;

export default Gnb;
