export const mediaQuery = (maxWidth: number) =>
    `@media (max-width: ${maxWidth}px)`;

const media = {
    tablet: mediaQuery(1024),
    mobile: mediaQuery(768),
};

export default media;
