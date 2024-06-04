import styled from "styled-components";
import BottomArrowIcon from "../../../assets/icon/CourseDetail/bottom-arrow.svg";
import React, { useState } from "react";

interface PolicyProps {
    header: string;
    children?: React.ReactNode;
}

function Policy(props: PolicyProps) {
    const { header, children } = props;
    const [isDescriptionOpened, setIsDescriptionOpen] =
        useState<boolean>(false);

    const onHeaderClick = () => {
        setIsDescriptionOpen(!isDescriptionOpened);
    };

    return (
        <Block>
            <Header onClick={onHeaderClick}>
                <span>{header}</span>
                <HeaderIcon
                    alt="header icon"
                    src={BottomArrowIcon}
                    isOpened={isDescriptionOpened}
                />
            </Header>
            <Description isActive={isDescriptionOpened}>{children}</Description>
        </Block>
    );
}

const Block = styled.div`
    position: relative;
    overflow: hidden;
    padding: 20px 0;

    & + & {
        border-top: solid 1px rgba(229, 299, 229, 1);
        border-opacity
    }
`;

const Header = styled.div`
    color: #000;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`;

const HeaderIcon = styled.img<{ isOpened: boolean }>`
    width: 12px;
    height: 12px;
    ${(props) => props.isOpened && "transform: rotate(180deg);"}
`;

const Description = styled.p<{ isActive: boolean }>`
    color: #bbb4b1;
    font-size: 11px;
    font-weight: 500;
    line-height: normal;
    position: absolute;
    transition: transform, ease 0.5;
    ${(props) =>
        props.isActive
            ? `
                position: static;
                transform: translateY(0);
                z-index: 1;
              `
            : `
                transform: translateY(-100%);
                z-index: -1;
              `}
`;

export default Policy;
