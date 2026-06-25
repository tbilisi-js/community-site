import { type StaticImageData } from "next/image";

import moscowJs from "./img/moscowjs.png";
import moscowCss from "./img/moscowcss.png";
import doka from "./img/doka.png";
import spbFrontend from "./img/spbfrontend.png";
import seniorNegroni from "./img/seniornegroni.png";

export type Friend = {
    slug: string;
    name: string;
    img?: StaticImageData;
    href: string;
};

export const friends: Friend[] = [
    {
        slug: "moscow-js",
        name: "Moscow JS",
        img: moscowJs,
        href: "https://moscowjs.org/",
    },
    {
        slug: "moscow-css",
        name: "Moscow CSS",
        img: moscowCss,
        href: "https://www.youtube.com/@moscowcss",
    },
    {
        slug: "doka",
        name: "Doka",
        img: doka,
        href: "https://doka.guide/",
    },
    {
        slug: "spb-frontend",
        name: "SPB Frontend",
        img: spbFrontend,
        href: "https://spb-frontend.ru/",
    },
    {
        slug: "senior-negroni",
        name: "Senior Negroni",
        img: seniorNegroni,
        href: "https://t.me/seniornegroni",
    },
];
