import styled from "styled-components";
import { SectionContainer, SectionTitle } from "./styles";
import { useEffect, useRef } from "react";
import palette from "../../lib/styles/palette";
import { copyToClipboard } from "../../lib/utils";
import { SectionDivider } from "../common/styles/Common";
import Icon from "../basics/Icon";

export type MapSectionProps = {
    lat: number;
    lng: number;
    name: string;
    address: string;
};

function MapSection(props: MapSectionProps) {
    const { lat, lng, name, address } = props;
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) {
            const center = new naver.maps.LatLng(lat, lng);
            const map = new naver.maps.Map(mapRef.current, {
                center: center,
                zoom: 16,
            });
            new naver.maps.Marker({
                position: new naver.maps.LatLng(lat, lng),
                map: map,
            });
        }
    }, []);

    const onClickCopyBtn = () => {
        copyToClipboard(address, "클립보드에 주소를 복사했습니다.");
    };

    return (
        <>
            <SectionContainer>
                <Header>
                    <SectionTitle>장소</SectionTitle>
                </Header>
                <MapCanvas ref={mapRef} />
                <PlaceInfo>
                    <CopyBtn onClick={onClickCopyBtn}>
                        <Icon name="copy" />
                        주소복사
                    </CopyBtn>
                    <Address>{address}</Address>
                </PlaceInfo>
            </SectionContainer>
            <SectionDivider />
        </>
    );
}

const Header = styled.header`
    padding: 0 20px;
    margin-bottom: 10px;
`;

const MapCanvas = styled.div`
    width: calc(100% - 40px);
    aspect-ratio: 1/ 0.8;
    margin: 0 auto;
`;

const PlaceInfo = styled.div`
    margin-top: 10px;
    padding: 0 20px;
`;

const CopyBtn = styled.button`
    display: flex;
    align-items: center;
    column-gap: 3px;
    font-size: 11px;
    color: ${palette.gray2};
    padding: 3px;
`;

const Address = styled.p`
    margin-top: 5px;
    font-size: 12px;
    font-weight: 600;
`;

export default MapSection;
