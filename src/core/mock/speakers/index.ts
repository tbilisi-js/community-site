import { type StaticImageData } from "next/image";

import alexSavelyev from "./img/alexandr-savelyev.png";

export type Speaker = {
    slug: string;
    name: string;
    img?: StaticImageData;
};

export const speakers: Speaker[] = [
    {
        slug: "vadim-makeev",
        name: "Vadim Makeev",
    },
    {
        slug: "maxim-khalizov",
        name: "Maxim Khalizov",
    },
    {
        slug: "tanya-fokina",
        name: "Tanya Fokina",
    },
    {
        slug: "andrey-evdokov",
        name: "Andrey Evdokov",
    },
    {
        slug: "elona-sarkisova",
        name: "Elona Sarkisova",
    },
    {
        slug: "philip-baranovsky",
        name: "Philip Baranovsky",
    },
    {
        slug: "alex-savelyev",
        name: "Alex Savelyev",
        img: alexSavelyev,
    },
];
