export type Location = {
    name: string;
    lat: number;
    lng: number;
};

export type Option = {
    id: number;
    name: string;
};

export type Cost = {
    min: number;
    max: number;
};

export type FilterSettings = {
    locations: Array<Option>;
    types: Array<Option>;
    cost: Cost;
};
