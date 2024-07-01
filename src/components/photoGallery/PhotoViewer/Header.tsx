import styled from "styled-components";
import palette from "../../../lib/styles/palette";

export type HeaderProps = {
    onClose: () => void;
    pageText: string;
};

function Header(props: HeaderProps) {
    const { onClose, pageText } = props;

    return (
        <Block>
            <CloseBtn onClick={onClose}>닫기</CloseBtn>
            <Page>{pageText}</Page>
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-shrink: 0;
`;

const CloseBtn = styled.button`
    font-size: 12px;
    font-weight: 700;
    color: ${palette.white0};
    padding: 5px 0;
`;

const Page = styled.p`
    font-size: 12px;
    font-weight: 700;
    color: ${palette.white0};
`;

export default Header;
