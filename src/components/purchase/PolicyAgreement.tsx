import styled from "styled-components";
import { SectionContainer, SectionHeader } from "./styles";
import { ReactComponent as LinkIco } from "../../assets/icon/chevron-right.svg";
import CheckBox from "../common/CheckBox";
import palette from "../../lib/styles/palette";
import checkIco from "../../assets/icon/check.svg";

export type PolicyAgreementProps = {};

function PolicyAgreement(props: PolicyAgreementProps) {
    return (
        <SectionContainer>
            <SectionHeader>주문 내용 확인 및 결제 동의</SectionHeader>
            <PolicyList>
                <PolicyItem>
                    <PolicyName>[필수] 개인정보 제3자 제공동의</PolicyName>
                    <LinkIco />
                </PolicyItem>
                <PolicyItem>
                    <PolicyName>[필수] 결제 대행 서비스 이용약관</PolicyName>
                    <LinkIco />
                </PolicyItem>
            </PolicyList>
            <CheckBoxBlock>
                <PolicyCheckBox
                    type="checkbox"
                    name="policy"
                    value="policy"
                    id="policy"
                />
                <CheckBoxMessage htmlFor="policy">
                    위 내용을 모두 확인하였으며, 결제에 동의합니다.
                </CheckBoxMessage>
            </CheckBoxBlock>
        </SectionContainer>
    );
}

const PolicyList = styled.ul`
    margin-top: 15px;
`;

const PolicyItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    & + & {
        margin-top: 10px;
    }
`;

const PolicyName = styled.p`
    font-size: 11px;
`;

const CheckBoxBlock = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;

const PolicyCheckBox = styled(CheckBox)`
    margin-right: 8px;

    label {
        display: grid;
        place-content: center;
        width: 18px;
        height: 18px;
        border-radius: 3px;
        background-color: ${palette.gray4};
        background-image: url(${checkIco});
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
    }

    input:checked + label {
        background-color: ${palette.red500};
    }
`;

const CheckBoxMessage = styled.label`
    font-size: 11px;
    font-weight: 700;
    color: ${palette.black2};
    cursor: pointer;
`;

export default PolicyAgreement;
