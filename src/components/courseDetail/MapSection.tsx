import styled from "styled-components";
import { SectionContainer, SectionHeader, SectionTitle } from "./styles";
import { useEffect } from "react";

export type MapSectionProps = {};

function MapSection(props: MapSectionProps) {
    useEffect(() => {
        // var map = new naver.maps.Map('map', {
        //     center: new naver.maps.LatLng(37.3595704, 127.105399),
        //     zoom: 10
        // });
    });

    return (
        <SectionContainer>
            <SectionHeader>
                <SectionTitle>진행하는 장소</SectionTitle>
            </SectionHeader>
            <MapCanvas id="map" />
        </SectionContainer>
    );
}

const MapCanvas = styled.div`
    width: 100%;
    height: 250px;
`;

export default MapSection;
