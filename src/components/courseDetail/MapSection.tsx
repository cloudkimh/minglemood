import styled from "styled-components";
import { SectionContainer, SectionHeader, SectionTitle } from "./styles";
import { useEffect, useRef } from "react";
import palette from "../../lib/styles/palette";
import { copyToClipboard } from "../../lib/utils";

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

    const onCopyBtnClick = () => {
        copyToClipboard(address, "클립보드에 주소를 복사했습니다.");
    };

    return (
        <SectionContainer>
            <SectionHeader>
                <SectionTitle>진행하는 장소</SectionTitle>
            </SectionHeader>
            <MapCanvas ref={mapRef} />
            <PlaceInfo>
                <Wrapper>
                    <Name>{name}</Name>
                    <Address>{address}</Address>
                </Wrapper>
                <CopyBtn onClick={onCopyBtnClick}>
                    <CopyIco />
                </CopyBtn>
            </PlaceInfo>
        </SectionContainer>
    );
}

const MapCanvas = styled.div`
    width: 100%;
    height: 250px;
    border-top: 1px solid ${palette.gray5};
    border-bottom: 1px solid ${palette.gray5};
`;

const PlaceInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${palette.gray5};
    padding: 20px;
`;

const Wrapper = styled.div``;

const Name = styled.p`
    font-size: 14px;
    font-weight: 700;
`;

const Address = styled.p`
    font-size: 14px;
    color: ${palette.gray1};
    margin-top: 10px;
`;

const CopyBtn = styled.button`
    display: grid;
    place-content: center;
    width: 56px;
    height: 56px;
    border-radius: 5px;
    border: 1px solid ${palette.gray5};
`;

const CopyIco = styled.div`
    width: 24px;
    height: 24px;
    background-color: ${palette.red2};
`;

export default MapSection;
