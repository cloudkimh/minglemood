import styled from "styled-components";
import { HorizontalBarThick } from "../../common/styles/Common";
import { SectionContainer } from "../styles";
import Policy from "./Policy";

function PolicySection() {
    return (
        <>
            <StyledSectionContainer>
                <Policy header="유의사항">
                    [유의사항]
                    <LineBreaker />- 유의사항 내용입니다. 유의사항 내용입니다.
                    유의사항 내용입니다. 유의사항 내용입니다. 유의사항
                    내용입니다. 유의사항 내용입니다.
                    <LineBreaker />- 유의사항 내용입니다. 유의사항 내용입니다.
                    유의사항 내용입니다.
                    <LineBreaker />- 유의사항 내용입니다. 유의사항 내용입니다.
                </Policy>
                <Policy header="환불정책">
                    [유의사항]
                    <LineBreaker />- 유의사항 내용입니다. 유의사항 내용입니다.
                    유의사항 내용입니다. 유의사항 내용입니다. 유의사항
                    내용입니다. 유의사항 내용입니다.
                    <LineBreaker />- 유의사항 내용입니다. 유의사항 내용입니다.
                    유의사항 내용입니다.
                    <LineBreaker />- 유의사항 내용입니다. 유의사항 내용입니다.
                </Policy>
            </StyledSectionContainer>
            <HorizontalBarThick />
        </>
    );
}

const StyledSectionContainer = styled(SectionContainer)`
    padding: 10px 20px 0;
`;

const LineBreaker = styled.div`
    height: 5px;
`;

export default PolicySection;
