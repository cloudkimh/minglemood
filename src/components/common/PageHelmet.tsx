import { Helmet } from "react-helmet-async";
import { ReactNode } from "react";

export type PageHelmetProps = {
    title?: string;
    description?: string;
    keywords?: string;
    imgSrc?: string;
    url?: string;
    children?: ReactNode;
};

function PageHelmet(props: PageHelmetProps) {
    const { title, description, keywords, imgSrc, url, children } = props;

    return (
        <Helmet>
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            {title && <meta property="og:title" content={title} />}
            {title && <meta property="og:site_name" content={title} />}
            {description && (
                <meta property="og:description" content={description} />
            )}
            {imgSrc && <meta property="og:image" content={imgSrc} />}
            {url && <meta property="og:url" content={url} />}
            {title && <meta name="twitter:title" content={title} />}
            {description && (
                <meta name="twitter:description" content={description} />
            )}
            {imgSrc && <meta name="twitter:image" content={imgSrc} />}
            <link rel="canonical" href={url} />
            {children}
        </Helmet>
    );
}

export default PageHelmet;
