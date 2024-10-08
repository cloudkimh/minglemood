import ClusterMap from "../components/explore/ClusterMap";
import SearchBar from "../components/explore/SearchBar";
import Filters from "../components/explore/Filters";
import { useEffect, useState } from "react";
import useToggle from "../lib/hooks/useToggle";
import SearchModal from "../components/explore/SearchModal";
import { FilterSettings, Location } from "../components/explore/types";
import FilterModal from "../components/explore/FilterModal";
import { MAX_COST, MIN_COST } from "../components/explore/variables";
import SearchedPostsModal from "../components/explore/SearchedPostsModal";
import PageTemplate from "../components/basics/PageTemplate";
import styled from "styled-components";
import palette from "../lib/styles/palette";
import { ReactComponent as ListIco } from "../assets/icon/bulleted-list.svg";
import { getSampleImage } from "../lib/styles/utils";

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

const photo = getSampleImage();
const samplePosts = Array(8).fill({
    id: 1,
    thumbnail: photo,
    region: "부산",
    title: "테스트 제목 테스트 제목 테스트 제목 테스트 제목 테스트 제목 테스트 제목 테스트 제목 테스트 제목  ",
    starScore: 4.5,
    starCnt: 1000,
    heartCnt: 2000,
    price: 33000,
    discountRate: undefined,
    isLiked: true,
});

function Explore() {
    const [filterSettings, setFilterSettings] =
        useState<FilterSettings>(initFilterSettings);
    const [currentLocation, setCurrentLocation] = useState(initLocation);
    const [searchModalOpened, toggleSearchModalOpened] = useToggle(false);
    const [filterModalOpened, toggleFilterModalOpened] = useToggle(false);
    const [searchedPostsModalOpened, toggleSearchedPostsModalOpened] =
        useToggle(false);
    const [posts, setPosts] = useState<
        Array<{
            [key: string]: any;
        }>
    >([]);
    const [nearPosts, setNearPosts] = useState([{
        id: 1,
        thumbnail: photo,
        region: "부산",
        title: "테스트 제목 테스트 제목 테스트 제목 테스트 제목 테스트 제목 테스트 제목 테스트 제목 테스트 제목  ",
        rating: 4.5,
        reviewCnt: 1000,
        likeCnt: 2000,
        price: 33000,
        discountRate: undefined,
        isLiked: true,
    }])

    const handleCurrentLocation = async () => {
        await new Promise((r) => setTimeout(r, 1000));
        const response = await fetch(
            process.env.REACT_APP_HOST + "/program/explore",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.status === 200) {
            const result = await response.json();
            setNearPosts(result); // 유저 정보 상태에 저장
        } else {
            alert("알수 없는 오류, 고객센터에 문의 주시기 바랍니다.");
        }

    };


    useEffect(() => {
        const getPostsInCurrentLocation = (lat: number, lng: number) => {
            // do async
            return samplePosts;
        };

        handleCurrentLocation();

        const response = getPostsInCurrentLocation(
            currentLocation.lat,
            currentLocation.lng
        );
        setPosts(response);
    }, [currentLocation]);

    const getIsFilterNotApplied = () =>
        filterSettings.locations.length === 0 &&
        filterSettings.types.length === 0 &&
        filterSettings.cost.min === MIN_COST &&
        filterSettings.cost.max === MAX_COST;

    const handleClickResetBtn = () => setFilterSettings(initFilterSettings);

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
                onClickSearchBtn={toggleSearchModalOpened}
                onClickFilterBtn={toggleFilterModalOpened}
            />
            <Filters
                isFilterNotApplied={getIsFilterNotApplied()}
                filterSettings={filterSettings}
                onClickResetBtn={handleClickResetBtn}
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
            <SearchedPostsModal
                visible={searchedPostsModalOpened}
                onClose={toggleSearchedPostsModalOpened}
                posts={nearPosts}
            />
            <FloatBtn onClick={toggleSearchedPostsModalOpened}>
                <ListIco />
                모임 {nearPosts.length}개 보기
            </FloatBtn>
        </PageTemplate>
    );
}

const FloatBtn = styled.button`
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    column-gap: 5px;
    height: 35px;
    font-size: 11px;
    font-weight: 700;
    color: ${palette.white0};
    border-radius: 36px;
    background-color: ${palette.red500};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 0 20px;
`;

export default Explore;
