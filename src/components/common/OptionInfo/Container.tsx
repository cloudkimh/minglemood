import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import { ReactNode } from "react";

export type ContainerProps = {
    title: string;
    children: ReactNode;
};

function Container(props: ContainerProps) {
    const { title, children } = props;

    return (
        <Block>
            <Wrapper>
                <Header>{title}</Header>
                <InfoContainer>{children}</InfoContainer>
            </Wrapper>
        </Block>
    );
}

const Block = styled.div`
    padding: 0 20px;
`;

const Wrapper = styled.div`
    border-radius: 5px;
    background-color: ${palette.white1};
    padding: 15px 10px;
`;

const Header = styled.p`
    font-size: 13px;
    font-weight: 700;
`;

const InfoContainer = styled.ul`
    display: grid;
    row-gap: 6px;
    margin-top: 10px;
`;

export default Container;
