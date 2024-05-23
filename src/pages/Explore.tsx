import PageTemplate from "../components/common/PageTemplate";
import ClusterMap from "../components/explore/ClusterMap";
import SearchBar from "../components/explore/SearchBar";
import Filters from "../components/explore/Filters";
import { useState } from "react";
import useToggle from "../lib/hooks/useToggle";
import SearchModal from "../components/explore/SearchModal";
import { FilterSettings, Location } from "../components/explore/types";
import FilterModal from "../components/explore/FilterModal";
import { MAX_COST, MIN_COST } from "../components/explore/variables";

const initFilterSettings = {
    locations: [],
    types: [],
    cost: {
        min: MIN_COST,
        max: MAX_COST,
    },
};

const initLocation = {
    name: "부산 대연",
    lat: 35.12995,
    lng: 129.098074,
};

function Explore() {
    const [filterSettings, setFilterSettings] =
        useState<FilterSettings>(initFilterSettings);
    const [currentLocation, setCurrentLocation] = useState(initLocation);
    const [searchModalOpened, toggleSearchModalOpened] = useToggle(false);
    const [filterModalOpened, toggleFilterModalOpened] = useToggle(false);

    const handleSelectSearchResult = (value: Location) => {
        setCurrentLocation(value);
    };

    const handleChangeFilter = (value: FilterSettings) => {
        setFilterSettings(value);
        toggleFilterModalOpened();
    };

    return (
        <PageTemplate>
            <SearchBar
                currentLocation={currentLocation.name}
                handleClickSearchBtn={() => {
                    toggleSearchModalOpened();
                }}
            />
            <Filters
                handleClickFilterBtn={toggleFilterModalOpened}
                filterSettings={filterSettings}
            />
            <ClusterMap centerLocation={currentLocation} />
            <SearchModal
                visible={searchModalOpened}
                handleClose={toggleSearchModalOpened}
                handleSelectSearchResult={handleSelectSearchResult}
            />
            <FilterModal
                values={filterSettings}
                visible={filterModalOpened}
                handleClose={toggleFilterModalOpened}
                handleSubmit={handleChangeFilter}
            />
        </PageTemplate>
    );
}

export default Explore;
