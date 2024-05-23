import PageTemplate from "../components/common/PageTemplate";
import ClusterMap from "../components/explore/ClusterMap";
import SearchSBar from "../components/explore/SearchBar";
import Filters from "../components/explore/Filters";
import { useState } from "react";
import useToggle from "../lib/hooks/useToggle";
import SearchModal from "../components/explore/SearchModal";
import { Location } from "../components/explore/types";
import FilterModal from "../components/explore/FilterModal";

export type ExploreProps = {};

function Explore(props: ExploreProps) {
    const [filterSetting, setFilterSetting] = useState({});
    const [currentLocation, setCurrentLocation] = useState({
        name: "부산 대연",
        lat: 35.12995,
        lng: 129.098074,
    });
    const [searchModalOpened, toggleSearchModalOpened] = useToggle(false);
    const [filterModalOpened, toggleFilterModalOpened] = useToggle(false);

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
            <Filters handleFilterBtnClick={toggleFilterModalOpened} />
            <ClusterMap centerLocation={currentLocation} />
            <SearchModal
                visible={searchModalOpened}
                handleClose={toggleSearchModalOpened}
                handleSelectSearchResult={handleSelectSearchResult}
            />
            <FilterModal
                visible={filterModalOpened}
                handleClose={toggleFilterModalOpened}
                handleFilterChange={() => {}}
            />
        </PageTemplate>
    );
}

export default Explore;
