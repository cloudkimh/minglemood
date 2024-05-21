import PageTemplate from "../components/common/PageTemplate";
import ClusterMap from "../components/explore/ClusterMap";
import SearchSBar from "../components/explore/SearchBar";
import Filters from "../components/explore/Filters";
import { useState } from "react";
import useToggle from "../lib/hooks/useToggle";
import SearchModal from "../components/explore/SearchModal";
import { Location } from "../components/explore/types";

export type ExploreProps = {};

function Explore(props: ExploreProps) {
    const [currentLocation, setCurrentLocation] = useState({
        name: "부산 대연",
        lat: 35.12995,
        lng: 129.098074,
    });
    const [searchModalOpened, toggleSearchModalOpened] = useToggle(false);

    const handleSelectSearchResult = (result: Location) => {
        setCurrentLocation(result);
    };

    return (
        <PageTemplate>
            <SearchSBar
                currentLocation={currentLocation.name}
                handleSearchBtnClick={() => {
                    toggleSearchModalOpened();
                }}
            />
            <Filters />
            <ClusterMap lat={currentLocation.lat} lng={currentLocation.lng} />
            <SearchModal
                visible={searchModalOpened}
                handleClose={toggleSearchModalOpened}
                handleSelectSearchResult={handleSelectSearchResult}
            />
        </PageTemplate>
    );
}

export default Explore;
