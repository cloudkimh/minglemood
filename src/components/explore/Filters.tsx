import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { FILTERS_BAR_HEIGHT, MAX_COST, MIN_COST } from "./variables";
import { FilterSettings } from "./types";
import { ReactComponent as ResetIco } from "../../assets/icon/refresh.svg";

export type FiltersProps = {
    isFilterNotApplied: boolean;
    filterSettings: FilterSettings;
    onClickResetBtn: () => void;
};

function Filters(props: FiltersProps) {
    const { isFilterNotApplied, filterSettings, onClickResetBtn } = props;
    const hasLocationsFilter = filterSettings.locations.length > 0;
    const hasTypesFilter = filterSettings.types.length > 0;
    const hasCostFilter =
        filterSettings.cost.min > MIN_COST ||
        filterSettings.cost.max < MAX_COST;

    const costText = `${
        filterSettings.cost.min === 0 ? 0 : filterSettings.cost.min / 10000
    }만원 ~ ${filterSettings.cost.max / 10000}만원`;

    const formatLocationText = () =>
        filterSettings.locations.length > 1
            ? `${filterSettings.locations[0].name} 외 ${
                  filterSettings.locations.length - 1
              }곳`
            : filterSettings.locations[0].name;

    const formatTypesText = () =>
        filterSettings.types.length > 1
            ? `${filterSettings.types[0].name} 외 ${
                  filterSettings.types.length - 1
              }개`
            : filterSettings.types[0].name;

    return (
        <Block>
            {isFilterNotApplied ? (
                <FilterNotAppliedText>필터 없음</FilterNotAppliedText>
            ) : (
                <FilterChipsContainer>
                    {hasLocationsFilter && (
                        <ChipItem>{formatLocationText()}</ChipItem>
                    )}
                    {hasTypesFilter && <ChipItem>{formatTypesText()}</ChipItem>}
                    {hasCostFilter && <ChipItem>{costText}</ChipItem>}
                </FilterChipsContainer>
            )}
            <ResetBtn onClick={onClickResetBtn}>
                <StyledResetIco />
                초기화
            </ResetBtn>
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: ${FILTERS_BAR_HEIGHT};
    border-bottom: 1px solid ${palette.gray5};
    padding: 10px 20px;
`;

const FilterNotAppliedText = styled.p`
    font-size: 13px;
    color: ${palette.gray2};
`;

const FilterChipsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    width: 100%;
`;

const ChipItem = styled.div`
    width: fit-content;
    font-size: 11px;
    font-weight: 700;
    color: ${palette.red500};
    border-radius: 20px;
    background-color: ${palette.white0};
    border: 1px solid ${palette.red500};
    padding: 7px 10px 6px;
`;

const ResetBtn = styled.button`
    display: flex;
    align-items: center;
    height: fit-content;
    font-size: 12px;
    font-weight: 700;
    color: ${palette.gray2};
    flex-shrink: 0;
    padding: 4px;
`;

const StyledResetIco = styled(ResetIco)`
    margin-right: 2px;
`;

export default Filters;
