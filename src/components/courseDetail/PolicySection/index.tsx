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
                        - 밍글무드는 프로필 자기소개서를 통한 호스트 승인제로 운영되고 있습니다.

                    </PolicyContent>
                    <PolicyContent>
                        - 결제 완료 시 결제 확인 메시지가 전송되오니, 반드시 확인해 주시기 바랍니다.
                    </PolicyContent>
                    <PolicyContent>
                        - 문의, 취소, 또는 환불 요청은 밍글무드 인스타그램 @minglemoodcity로 DM을 보내시거나, 밍글무드 카카오톡 채널을 통해 연락해 주시면 24시간 내에 도와드리겠습니다.
                    </PolicyContent>
                </PolicyItem>
                <PolicyItem name="환불정책">
                    <PolicyContent>[환불요건]</PolicyContent>
                    <PolicyContent>
                        - 행사 시작 7일 전까지는 100% 환불이 가능하며, 이후 7일 이내에는 환불이 불가합니다.
                    </PolicyContent>
                    <PolicyContent>
                        - 자세한 사항은 인스타그램 @minglemoodcity 또는 밍글무드 카카오톡 채널로 문의해 주세요.
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
