import { getImageProps } from "next/image";

import catsPattern from "./img/cats-pattern.png";

import "./cats-pattern.scss";

/**
 * @link https://nextjs.org/docs/app/api-reference/components/image#background-css
 */
function getBackgroundImage(srcSet = "") {
    const imageSet = srcSet
        .split(", ")
        .map((str) => {
            const [url, dpi] = str.split(" ");
            return `url("${url}") ${dpi}`;
        })
        .join(", ");
    return `image-set(${imageSet})`;
}

export const CatsPattern = () => {
    const {
        props: { srcSet },
    } = getImageProps({ alt: "", width: 1608, height: 300, src: catsPattern.src });
    const backgroundImage = getBackgroundImage(srcSet);

    return <div className="cats-pattern" style={{ backgroundImage }} />;
};
