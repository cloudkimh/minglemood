import styled, { css } from "styled-components";
import ModalTemplate from "../basics/ModalTemplate";
import { ModalBody } from "../basics/ModalTemplate/styles";
import palette from "../../lib/styles/palette";
import { useState } from "react";
import { ReactComponent as CheckIco } from "../../assets/icon/check.svg";
import { DefaultButton } from "../common/styles/Buttons";
import { BottomBtn } from "./styles";

export type PolicyModalProps = {
    visible: boolean;
    onClickStartBtn: () => void;
};

function PolicyModal(props: PolicyModalProps) {
    const { visible, onClickStartBtn } = props;
    const [checkedList, setCheckedList] = useState(Array(3).fill(false));
    const isAllChecked = checkedList.every((aChecked) => aChecked === true);
    const btnAvailable = checkedList[0] && checkedList[1];

    const onClickSelectAll = () => {
        if (isAllChecked) {
            setCheckedList(Array(3).fill(false));
        } else {
            setCheckedList(Array(3).fill(true));
        }
    };

    const handleClickPolicyItem = (index: number) => {
        setCheckedList((prev) => {
            const next = [...prev];
            next[index] = !next[index];
            return next;
        });
    };

    return (
        <ModalTemplate visible={visible}>
            <StyledModalBody>
                <AgreeAllBtnBlock
                    onClick={onClickSelectAll}
                    checked={isAllChecked}
                >
                    <LargeCheckIco checked={isAllChecked} />
                    <AgreeAllLabel>모두 동의하기</AgreeAllLabel>
                </AgreeAllBtnBlock>
                <PolicyBlock>
                    <PolicyItem onClick={() => handleClickPolicyItem(0)}>
                        <SmallCheckIco checked={checkedList[0]} />
                        <PolicyLabel>
                            서비스 이용약관 <span>(필수)</span>
                        </PolicyLabel>
                    </PolicyItem>
                    <PolicyItem onClick={() => handleClickPolicyItem(1)}>
                        <SmallCheckIco checked={checkedList[1]} />
                        <PolicyLabel>
                            개인정보 수집 및 이용 동의 <span>(필수)</span>
                        </PolicyLabel>
                    </PolicyItem>
                    <PolicyItem onClick={() => handleClickPolicyItem(2)}>
                        <SmallCheckIco checked={checkedList[2]} />
                        <PolicyLabel>
                            서비스 혜택 정보 수신 <span>(선택)</span>
                        </PolicyLabel>
                    </PolicyItem>
                </PolicyBlock>
                <StartBtn onClick={onClickStartBtn} disabled={!btnAvailable}>
                    시작하기
                </StartBtn>
            </StyledModalBody>
        </ModalTemplate>
    );
}

const StyledModalBody = styled(ModalBody)`
    height: 260px;
    padding: 30px 20px 0;
`;

const AgreeAllBtnBlock = styled.div<{ checked: boolean }>`
    display: flex;
    align-items: center;
    column-gap: 19px;
    border: 1px solid
        ${(props) => (props.checked ? palette.red500 : palette.gray2)};
    border-radius: 5px;
    padding: 14px 10px;
`;

const LargeCheckIco = styled(CheckIco)<{ checked: boolean }>`
    width: 20px;
    height: 20px;

    path {
        stroke: ${(props) => (props.checked ? palette.red500 : palette.gray2)};
    }
`;

const AgreeAllLabel = styled.label`
    font-size: 14px;
    font-weight: 700;
`;

const PolicyBlock = styled.div`
    display: grid;
    row-gap: 13px;
    padding: 0 20px;
    margin-top: 20px;
`;

const PolicyItem = styled.div`
    display: flex;
    align-items: center;
    column-gap: 20px;
`;

const SmallCheckIco = styled(CheckIco)<{ checked: boolean }>`
    width: 14px;
    height: 14px;

    path {
        stroke: ${(props) => (props.checked ? palette.red500 : palette.gray2)};
    }
`;

const PolicyLabel = styled.label`
    font-size: 10px;

    span {
        color: ${palette.gray2};
        margin-left: 6px;
    }
`;

const StartBtn = styled(BottomBtn)`
    margin-top: 30px;
`;

export default PolicyModal;
