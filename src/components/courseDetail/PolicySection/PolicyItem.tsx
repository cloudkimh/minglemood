import styled, { css } from "styled-components";
import React from "react";
import Icon from "../../basics/Icon";
import useToggle from "../../../lib/hooks/useToggle";
import palette from "../../../lib/styles/palette";

type PolicyItemProps = {
    name: string;
    children?: React.ReactNode;
};

function PolicyItem(props: PolicyItemProps) {
    const { name, children } = props;
    const [isDescriptionOpened, toggleIsDescriptionOpen] = useToggle(false);

    const onClickHeader = () => toggleIsDescriptionOpen();

    return (
        <Block>
            <Header onClick={onClickHeader}>
                <span>{name}</span>
                <ChevronIcon
                    name="chevron-down"
                    rotated={isDescriptionOpened}
                />
            </Header>
            <Description visible={isDescriptionOpened}>{children}</Description>
        </Block>
    );
}

const Block = styled.div`
    position: relative;
    overflow: hidden;
    padding: 20px 0;

    & + & {
        border-top: 1px solid ${palette.gray5};
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 700;
`;

const ChevronIcon = styled(Icon)<{ rotated: boolean }>`
    width: 12px;
    height: 12px;

    ${(props) =>
        props.rotated &&
        css`
            transform: rotate(180deg);
        `}
`;

const Description = styled.div<{ visible: boolean }>`
    display: ${(props) => (props.visible ? " block" : "none")};
    font-size: 11px;
    line-height: 14px;
    color: ${palette.gray2};
    margin-top: 15px;
`;

export default PolicyItem;
