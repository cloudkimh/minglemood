import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import Avatar from "./Avatar";

export type GnbProps = {};

function Gnb(props: GnbProps) {
    return (
        <Block>
            <Logo>밍글무드</Logo>
            <Container>
                <SearchBtn></SearchBtn>
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
    height: 80px;
    width: 100%;
    max-width: 768px;
    background-color: ${palette.white0};
    border-bottom: 1px solid ${palette.gray5};
    padding: 0 20px;
`;

const Logo = styled.div`
    width: 120px;
    height: 30px;
    background-color: ${palette.red2};
`;

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const SearchBtn = styled.button`
    width: 40px;
    height: 40px;
    background-color: ${palette.red2};
    margin-right: 10px;
`;

export default Gnb;
