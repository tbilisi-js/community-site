import { s3Friend } from "@src/core/data/s3";

export type Friend = {
    slug: string;
    name: string;
    img?: string;
    href: string;
};

export const friends: Friend[] = [
    {
        slug: "moscow-js",
        name: "Moscow JS",
        img: s3Friend("moscow-js"),
        href: "https://moscowjs.org/",
    },
    {
        slug: "moscow-css",
        name: "Moscow CSS",
        img: s3Friend("moscow-css"),
        href: "https://www.youtube.com/@moscowcss",
    },
    {
        slug: "doka",
        name: "Doka",
        img: s3Friend("doka"),
        href: "https://doka.guide/",
    },
    {
        slug: "spb-frontend",
        name: "SPB Frontend",
        img: s3Friend("spb-frontend"),
        href: "https://spb-frontend.ru/",
    },
    {
        slug: "senior-negroni",
        name: "Senior Negroni",
        img: s3Friend("senior-negroni"),
        href: "https://t.me/seniornegroni",
    },
];
