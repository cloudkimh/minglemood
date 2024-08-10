import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";

export type FooterProps = {};

function Footer(props: FooterProps) {
    return (
        <Block>
            <CompanyName>Mingle Mood</CompanyName>
            <CompanyInfo>
                (주)밍글무드 | 사업자 등록번호: 612-52-00914
                <br />
                주소 : 부산광역시 영도구 봉래나루로 33
                <br />
                대표 : 황다교
            </CompanyInfo>
            <Terms>
                <TermsLink to="https://mango-marquess-cef.notion.site/dce28a6865b64eac9fda0e58f44f8207?pvs=4">이용약관</TermsLink> |{" "}
                <TermsLink to="https://mango-marquess-cef.notion.site/c71b67f8bf0d4cda9d665d265ef86867?pvs=4">개인정보 처리방침</TermsLink> |{" "}
                <TermsLink to="/https://mango-marquess-cef.notion.site/210b74f0a5b54a8ebb745701f866fd38">위치기반 서비스 이용약관</TermsLink>
            </Terms>
        </Block>
    );
}

const Block = styled.footer`
    width: 100%;
    background-color: ${palette.white2};
    padding: 40px 20px 100px;
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
