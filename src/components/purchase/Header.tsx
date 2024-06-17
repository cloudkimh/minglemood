import styled from "styled-components";
import { ReactComponent as PrevPageIco } from "../../assets/icon/chevron-left.svg";
import palette from "../../lib/styles/palette";

function Header() {
    return (
        <Block>
            <PrevPageBtn>
                <PrevPageIco />
            </PrevPageBtn>
            <Title>결제</Title>
        </Block>
    );
}

const Block = styled.header`
    position: fixed;
    top: 0;
    max-width: 768px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 50px;
    background-color: ${palette.white0};
    border-bottom: 1px solid ${palette.gray5};
    padding: 0 20px;
    margin-top: 60px;
`;

const PrevPageBtn = styled.button`
    width: 24px;
    height: 24px;
`;

const Title = styled.h1`
    font-size: 15px;
    font-weight: 700;
    text-align: center;
`;

export default Header;
