import styled from "styled-components";
import { SectionContainer, SectionHeader, SectionTitle } from "./styles";
import { useEffect, useRef } from "react";
import palette from "../../lib/styles/palette";
import { copyToClipboard } from "../../lib/utils";
import CopyContentIcon from "../../assets/icon/CourseDetail/MapSection/copy-content.svg";
import { HorizontalBarThick } from "../common/styles/Common";

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
        <>
            <SectionContainer>
                <StyledSectionHeader>
                    <SectionTitle>장소</SectionTitle>
                </StyledSectionHeader>
                <MapCanvas ref={mapRef} />
                <PlaceInfo>
                    <AddressCopy onClick={onCopyBtnClick}>
                        <img alt="btn to copy address" src={CopyContentIcon} />{" "}
                        주소복사
                    </AddressCopy>
                    <Address>{address}</Address>
                </PlaceInfo>
            </SectionContainer>
            <HorizontalBarThick />
        </>
    );
}

const StyledSectionHeader = styled(SectionHeader)`
    margin-bottom: 11px;
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

const AddressCopy = styled.button`
    color: ${palette.gray2};
    font-size: 11px;
    font-weight: 500;
`;

const Address = styled.p`
    margin-top: 5px;
    font-size: 12px;
    font-weight: 600;
`;

export default MapSection;
