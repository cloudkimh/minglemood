import styled from "styled-components";
import { SectionDivider } from "../../common/styles/Common";
import { SectionContainer } from "../styles";
import PolicyItem from "./PolicyItem";

function PolicySection() {
    return (
        <>
            <StyledSectionContainer>
                <PolicyItem name="유의사항">
                    <PolicyContent>[유의사항]</PolicyContent>
                    <PolicyContent>
                        - 유의사항 내용입니다. 유의사항 내용입니다. 유의사항
                        내용입니다. 유의사항 내용입니다. 유의사항 내용입니다.
                        유의사항 내용입니다.
                    </PolicyContent>
                    <PolicyContent>
                        - 유의사항 내용입니다. 유의사항 내용입니다. 유의사항
                        내용입니다.
                    </PolicyContent>
                    <PolicyContent>
                        - 유의사항 내용입니다. 유의사항 내용입니다.
                    </PolicyContent>
                </PolicyItem>
                <PolicyItem name="환불정책">
                    <PolicyContent>[유의사항]</PolicyContent>
                    <PolicyContent>
                        - 유의사항 내용입니다. 유의사항 내용입니다. 유의사항
                        내용입니다. 유의사항 내용입니다. 유의사항 내용입니다.
                        유의사항 내용입니다.
                    </PolicyContent>
                    <PolicyContent>
                        - 유의사항 내용입니다. 유의사항 내용입니다. 유의사항
                        내용입니다.
                    </PolicyContent>
                    <PolicyContent>
                        - 유의사항 내용입니다. 유의사항 내용입니다.
                    </PolicyContent>
                </PolicyItem>
            </StyledSectionContainer>
            <SectionDivider />
        </>
    );
}

const StyledSectionContainer = styled(SectionContainer)`
    padding: 10px 20px;
`;

const PolicyContent = styled.p`
    & + & {
        margin-top: 5px;
    }
`;

export default PolicySection;
