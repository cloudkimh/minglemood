import styled from "styled-components";
import palette from "../../../lib/styles/palette";

export type HeaderProps = {
    photoCnt: number;
    selectedPhotoCnt: number;
    onSelectAll: () => void;
    onCancel: () => void;
};

function Header(props: HeaderProps) {
    const { photoCnt, selectedPhotoCnt, onSelectAll, onCancel } = props;

    return (
        <Block>
            <SelectAllBtn onClick={onSelectAll}>전체선택</SelectAllBtn>
            <Title>
                모임 참여 사진 ({selectedPhotoCnt}/{photoCnt})
            </Title>
            <CancelBtn onClick={onCancel}>취소</CancelBtn>
        </Block>
    );
}

const Block = styled.div`
    display: grid;
    grid-template-columns: 70px 1fr 70px;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0 20px;
`;

const Title = styled.h1`
    font-size: 15px;
    font-weight: 700;
    text-align: center;
`;

const SelectAllBtn = styled.button`
    width: fit-content;
    font-size: 14px;
    font-weight: 700;
    color: ${palette.red500};
    padding: 5px;
`;

const CancelBtn = styled.button`
    display: block;
    font-size: 14px;
    font-weight: 700;
    color: ${palette.gray2};
    padding: 5px;
    margin-left: auto;
`;

export default Header;
