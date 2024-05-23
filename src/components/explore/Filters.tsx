import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { FILTERS_HEIGHT, MAX_COST, MIN_COST } from "./variables";
import { FilterSettings } from "./types";

export type FiltersProps = {
    handleClickFilterBtn: () => void;
    filterSettings: FilterSettings;
};

function Filters(props: FiltersProps) {
    const { handleClickFilterBtn, filterSettings } = props;
    const hasLocationsFilter = filterSettings.locations.length > 0;
    const hasTypesFilter = filterSettings.types.length > 0;
    const hasCostFilter =
        filterSettings.cost.min > MIN_COST ||
        filterSettings.cost.max < MAX_COST;

    const costText = `${
        filterSettings.cost.min === 0 ? 0 : filterSettings.cost.min / 10000
    }만원 ~ ${filterSettings.cost.max / 10000}만원`;

    return (
        <Block>
            <FilterBtn onClick={handleClickFilterBtn}>필터</FilterBtn>
            {hasLocationsFilter && (
                <ChipItem>
                    {filterSettings.locations.length > 1
                        ? `${filterSettings.locations[0].name} 외 ${
                              filterSettings.locations.length - 1
                          }곳`
                        : filterSettings.locations[0].name}
                </ChipItem>
            )}
            {hasTypesFilter && (
                <ChipItem>
                    {filterSettings.types.length > 1
                        ? `${filterSettings.types[0].name} 외 ${
                              filterSettings.types.length - 1
                          }개`
                        : filterSettings.types[0].name}
                </ChipItem>
            )}
            {hasCostFilter && <ChipItem>{costText}</ChipItem>}
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    align-items: center;
    height: ${FILTERS_HEIGHT};
    border-bottom: 1px solid ${palette.gray5};
    padding: 0 20px;
`;

const FilterBtn = styled.button`
    width: 32px;
    height: 32px;
    background-color: ${palette.red2};
    margin-right: 12px;
`;

const ChipItem = styled.div`
    font-size: 13px;
    color: ${palette.red500};
    border-radius: 20px;
    background-color: ${palette.red100};
    border: 1px solid ${palette.red500};
    padding: 7px 10px 6px;

    & + & {
        margin-left: 8px;
    }
`;

export default Filters;
