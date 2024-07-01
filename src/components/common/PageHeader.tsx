import styled from "styled-components";
import { ReactComponent as PrevPageIco } from "../../assets/icon/chevron-left.svg";
import { useNavigate } from "react-router-dom";
import palette from "../../lib/styles/palette";
import { ReactNode } from "react";

export type PageHeaderProps = {
    prevPageLink?: string;
    title: string;
    rightSlot?: ReactNode;
};

function PageHeader(props: PageHeaderProps) {
    const { prevPageLink, title, rightSlot } = props;
    const navigate = useNavigate();

    const onClickPrevPageBtn = () => {
        if (prevPageLink) {
            navigate(prevPageLink);
        } else {
            navigate(-1);
        }
    };

    return (
        <Block>
            <PrevPageBtn onClick={onClickPrevPageBtn}>
                <PrevPageIco />
            </PrevPageBtn>
            <Title>{title}</Title>
            {rightSlot}
        </Block>
    );
}

const Block = styled.header`
    position: fixed;
    top: 0;
    z-index: 10;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    width: 100%;
    max-width: 768px;
    height: 50px;
    background-color: ${palette.white0};
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

export default PageHeader;
