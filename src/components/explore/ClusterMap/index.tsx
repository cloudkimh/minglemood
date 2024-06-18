import { useEffect, useRef } from "react";
import styled from "styled-components";
import { MarkerClustering } from "../../../lib/static/MarkerClustering.js";
import { sampleMarkerData } from "../../../lib/data/sampleMarkerData";
import clusterMarker1 from "../../../assets/img/cluster-marker-1.png";
import clusterMarker2 from "../../../assets/img/cluster-marker-2.png";
import clusterMarker3 from "../../../assets/img/cluster-marker-3.png";
import clusterMarker4 from "../../../assets/img/cluster-marker-4.png";
import clusterMarker5 from "../../../assets/img/cluster-marker-5.png";
import { FILTERS_BAR_HEIGHT, SEARCH_BAR_HEIGHT } from "../variables";

export type ClusterMapProps = {
    centerLocation: {
        lat: number;
        lng: number;
    };
};

function ClusterMap(props: ClusterMapProps) {
    const { centerLocation } = props;
    const mapRef = useRef(null);
    const mapInstance = useRef<naver.maps.Map | null>(null);

    useEffect(() => {
        if (mapRef.current) {
            const map = new naver.maps.Map(mapRef.current, {
                zoom: 15,
                center: new naver.maps.LatLng(
                    centerLocation.lat,
                    centerLocation.lng
                ),
                zoomControl: false,
            });
            const markers = [];
            const data = sampleMarkerData;

            for (let i = 0, ii = data.length; i < ii; i++) {
                const spot = data[i],
                    latlng = new naver.maps.LatLng(spot.lat, spot.lng),
                    marker = new naver.maps.Marker({
                        position: latlng,
                        draggable: true,
                    });

                markers.push(marker);
            }

            const htmlMarker1 = {
                    content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(${clusterMarker1});background-size:contain;"></div>`,
                    size: new naver.maps.Size(40, 40),
                    anchor: new naver.maps.Point(20, 20),
                },
                htmlMarker2 = {
                    content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(${clusterMarker2});background-size:contain;"></div>`,
                    size: new naver.maps.Size(40, 40),
                    anchor: new naver.maps.Point(20, 20),
                },
                htmlMarker3 = {
                    content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(${clusterMarker3});background-size:contain;"></div>`,
                    size: new naver.maps.Size(40, 40),
                    anchor: new naver.maps.Point(20, 20),
                },
                htmlMarker4 = {
                    content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(${clusterMarker4});background-size:contain;"></div>`,
                    size: new naver.maps.Size(40, 40),
                    anchor: new naver.maps.Point(20, 20),
                },
                htmlMarker5 = {
                    content: `<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(${clusterMarker5});background-size:contain;"></div>`,
                    size: new naver.maps.Size(40, 40),
                    anchor: new naver.maps.Point(20, 20),
                };

            new MarkerClustering({
                minClusterSize: 2,
                maxZoom: 13,
                map: map,
                markers: markers,
                disableClickZoom: false,
                gridSize: 120,
                icons: [
                    htmlMarker1,
                    htmlMarker2,
                    htmlMarker3,
                    htmlMarker4,
                    htmlMarker5,
                ],
                indexGenerator: [10, 100, 200, 500, 1000],
                stylingFunction: (clusterMarker: any, count: any) => {
                    clusterMarker
                        .getElement()
                        .querySelector("div:first-child").innerText = count;
                },
            });

            mapInstance.current = map;
        }
    }, []);

    useEffect(() => {
        if (mapInstance.current) {
            const targetLocation = new naver.maps.LatLng(
                centerLocation.lat,
                centerLocation.lng
            );
            mapInstance.current.setCenter(targetLocation);
            mapInstance.current.setZoom(15);
        }
    }, [centerLocation.lat, centerLocation.lng]);

    return <MapCanvas ref={mapRef} />;
}

const MapCanvas = styled.div`
    width: 100%;
    height: calc(100vh - ${FILTERS_BAR_HEIGHT} - ${SEARCH_BAR_HEIGHT});
`;

export default ClusterMap;
