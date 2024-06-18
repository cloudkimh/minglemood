import styled from "styled-components";
import ModalTemplate from "../common/ModalTemplate";
import { ModalBody } from "../common/ModalTemplate/styles";
import palette from "../../lib/styles/palette";
import { useRef, useState } from "react";
import { Location } from "./types";
import { ReactComponent as SearchIco } from "../../assets/icon/magnifier.svg";

export type SearchModalProps = {
    visible: boolean;
    handleClose: () => void;
    handleSelectSearchResult: (result: {
        name: string;
        lat: number;
        lng: number;
    }) => void;
};

const sampleSearchResult = [
    {
        name: "부산 해운대",
        lat: 35.160283,
        lng: 129.160211,
    },
    {
        name: "부산 서면",
        lat: 35.157103,
        lng: 129.058739,
    },
    {
        name: "부산 광안리",
        lat: 35.152998,
        lng: 129.115429,
    },
    {
        name: "부산 영도",
        lat: 35.089393,
        lng: 129.045819,
    },
];

function SearchModal(props: SearchModalProps) {
    const { visible, handleClose, handleSelectSearchResult } = props;
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [searchResults, setSearchResults] = useState<Array<Location>>([]);
    const hasSearchResults = searchResults.length > 0;

    const resetStates = () => {
        if (searchInputRef.current) {
            searchInputRef.current.value = "";
        }
        setSearchResults([]);
    };

    const getSearchResults = () => {
        // do async
        return sampleSearchResult;
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;

        if (value) {
            const nextSearchReaults = getSearchResults();
            setSearchResults(nextSearchReaults);
        } else {
            setSearchResults([]);
        }
    };

    const onClose = () => {
        resetStates();
        handleClose();
    };

    const onSearchResultItemClick = (result: Location) => {
        handleSelectSearchResult(result);
        resetStates();
        handleClose();
    };

    return (
        <ModalTemplate visible={visible} handleClickLayer={onClose}>
            <StyledModalBody>
                <InputContainer>
                    <SearchInputBlock>
                        <SearchIco />
                        <SearchInput
                            ref={searchInputRef}
                            type="text"
                            placeholder="지역, 제목, 태그, 호스트 이름 검색"
                            onChange={onChange}
                        />
                    </SearchInputBlock>
                    <CloseBtn onClick={onClose}>닫기</CloseBtn>
                </InputContainer>
                <SearchResultsBlock>
                    {hasSearchResults ? (
                        <SearchResults>
                            {searchResults.map((aResult) => (
                                <SearchResultItem
                                    onClick={() => {
                                        onSearchResultItemClick(aResult);
                                    }}
                                >
                                    {aResult.name}
                                </SearchResultItem>
                            ))}
                        </SearchResults>
                    ) : (
                        <EmptyResult>
                            지역, 제목, 태그, 호스트 이름을 검색해
                            <br />
                            원하는 코스를 찾아 보세요!
                        </EmptyResult>
                    )}
                </SearchResultsBlock>
            </StyledModalBody>
        </ModalTemplate>
    );
}

const StyledModalBody = styled(ModalBody)`
    display: grid;
    grid-template-rows: 32px 1fr;
    row-gap: 20px;
    height: calc(100vh - 100px);
    padding: 24px 20px 24px;
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
`;

const SearchInputBlock = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 35px;
    border-radius: 18px;
    background-color: ${palette.white3};
    padding: 0 15px;
`;

const CloseBtn = styled.button`
    width: 32px;
    height: 32px;
    font-size: 12px;
    font-weight: 700;
    color: ${palette.gray2};
    flex-shrink: 0;
    margin-left: 10px;
`;

const SearchInput = styled.input`
    width: 100%;
    font-size: 12px;
    border: none;
    outline: none;
    padding: 8px 5px;
    background: none;

    &::placeholder {
        color: ${palette.gray3};
    }
`;

const SearchResultsBlock = styled.div`
    height: 100%;
`;

const SearchResults = styled.ul``;

const SearchResultItem = styled.li`
    font-size: 14px;
    cursor: pointer;
    padding: 15px 0;
`;

const EmptyResult = styled.div`
    font-size: 12px;
    color: ${palette.gray2};
    line-height: 20px;
    text-align: center;
    margin-top: 200px;
`;

export default SearchModal;
