type Paddings = {
    sm: string;
    lg: string;
};

type Sizes = {
    mobile: string;
    tablet: string;
};

type Devices = {
    mobile: string;
    tablet: string;
};

type Colors = {
    lightPurple: string;
    creamPurple: string;
    softPurple: string;
    purple: string;
    deepPurple: string;
    darkPurple: string;
    red: string;
    orange: string;
    trueWhite: string;
    white: string;
    creamWhite: string;
    whiteGray: string;
    lightGray: string;
    gray: string;
    deepGray: string;
    darkGray: string;
    black: string;
    deepBlack: string;
};

type Fonts = {
    weight: {
        light: number;
        regular: number;
        bold: number;
        exbold: number;
    };
};

const paddings: Paddings = {
    sm: "20px",
    lg: "40px",
};

const sizes: Sizes = {
    mobile: "768px",
    tablet: "1024px",
};

const devices: Devices = {
    mobile: `@media only screen and (max-width: ${sizes.mobile})`,
    tablet: `@media only screen and (max-width: ${sizes.tablet})`,
};

const colors: Colors = {
    creamPurple: "#e8e6f6",
    lightPurple: "#9986ff",
    softPurple: "#afa1f7",
    purple: "#785ffa",
    deepPurple: "#7c22d1",
    darkPurple: "#323040",
    red: "#fe5c5d",
    orange: "#ff9600",
    trueWhite: "#ffffff",
    white: "#fcf6f6fa",
    creamWhite: "#f4f4f4",
    whiteGray: "#eeeeee",
    lightGray: "#cccccc",
    gray: "#999999",
    deepGray: "#777777",
    darkGray: "#555555",
    black: "#333333",
    deepBlack: "#1d1d1b",
};

const fonts: Fonts = {
    weight: {
        light: 300,
        regular: 400,
        bold: 700,
        exbold: 800,
    },
};

export const defaultTheme = {
    paddings,
    devices,
    colors,
    fonts,
};
