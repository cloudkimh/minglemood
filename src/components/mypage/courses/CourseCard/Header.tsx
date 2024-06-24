import styled from "styled-components";
import palette from "../../../../lib/styles/palette";
import { ReactComponent as LinkIco } from "../../../../assets/icon/chevron-right.svg";
import { Link } from "react-router-dom";

export type HeaderProps = {
    timestamp: string;
    id: number;
};

function Header(props: HeaderProps) {
    const { timestamp, id } = props;

    return (
        <Block>
            <Timestamp>{timestamp}</Timestamp>
            <Link to={`../${id}`}>
                <DetailLinkBtn>
                    상세보기
                    <StyledLinkIco />
                </DetailLinkBtn>
            </Link>
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Timestamp = styled.p`
    font-size: 11px;
    font-weight: 700p;
    color: ${palette.gray2};
`;

const DetailLinkBtn = styled.button`
    display: flex;
    align-items: center;
    font-size: 11px;
    font-weight: 700;
    color: ${palette.gray2};
`;

const StyledLinkIco = styled(LinkIco)`
    width: 12px;
    height: 12px;

    path {
        stroke: ${palette.gray2};
    }
`;

export default Header;
