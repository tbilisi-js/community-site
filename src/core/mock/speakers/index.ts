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
        slug: "ilona-sarkisova",
        name: "Ilona Sarkisova",
    },
    {
        slug: "philip-baranovsky",
        name: "Philip Baranovsky",
    },
    {
        slug: "alexandr-savelyev",
        name: "Alexandr Savelyev",
        img: alexSavelyev,
    },
];
