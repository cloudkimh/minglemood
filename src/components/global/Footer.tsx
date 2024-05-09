import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";

export type FooterProps = {};

function Footer(props: FooterProps) {
    return (
        <Block>
            <CompanyName>Mingle Mood</CompanyName>
            <CompanyInfo>
                (주)밍글무드 | 사업자 등록번호: 000-00-00000
                <br />
                통신판매업신고번호: 0000-부산금정-00000
                <br />
                대표 : 황다교
            </CompanyInfo>
            <Terms>
                <TermsLink to="/">이용약관</TermsLink> |{" "}
                <TermsLink to="/">개인정보 처리방침</TermsLink> |{" "}
                <TermsLink to="/">위치기반 서비스 이용약관</TermsLink>
            </Terms>
        </Block>
    );
}

const Block = styled.footer`
    width: 100%;
    background-color: ${palette.white2};
    padding: 40px 20px 40px;
`;

const CompanyName = styled.p`
    font-size: 16px;
    font-weight: 800;
`;

const CompanyInfo = styled.p`
    margin-top: 24px;
    font-size: 11px;
    line-height: 20px;
    color: ${palette.gray2};
`;

const Terms = styled.div`
    font-size: 12px;
    color: ${palette.gray2};
    margin-top: 20px;
`;

const TermsLink = styled(Link)`
    font-weight: 700;
    color: ${palette.black0};
`;

export default Footer;
