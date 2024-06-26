import { ReactNode } from "react";
import styled from "styled-components";
import media from "../../../lib/styles/media";

export type ModalHeaderProp = {
    left?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
    className?: string;
};

function ModalHeader(props: ModalHeaderProp) {
    const { className, left, center, right } = props;

    return (
        <Block className={className}>
            <div>{left}</div>
            <div>{center}</div>
            <div>{right}</div>
        </Block>
    );
}

const Block = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);

    div: nth-child(1) {
        grid-column: 1 / 2;
    }
    div: nth-child(2) {
        grid-column: 2 / 3;
    }
    div: nth-child(3) {
        grid-column: 3 / 4;
    }
    padding: 24px 16px 20px;

    ${media.mobile} {
        padding: 20px 16px 16px;
    }
`;

export default ModalHeader;
