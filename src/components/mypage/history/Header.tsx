import styled from "styled-components";
import { ReactComponent as PrevPageIco } from "../../../assets/icon/chevron-left.svg";

export type HeaderProps = {};

function Header(props: HeaderProps) {
    return (
        <Block>
            <PrevPageBtn>
                <PrevPageIco />
            </PrevPageBtn>
            <Title>모임 내역</Title>
        </Block>
    );
}

const Block = styled.header`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 50px;
    padding: 0 20px;
`;

const PrevPageBtn = styled.button`
    display: block;
    width: 24px;
    height: 24px;
`;

const Title = styled.h1`
    font-size: 15px;
    font-weight: 700;
    text-align: center;
`;

export default Header;
