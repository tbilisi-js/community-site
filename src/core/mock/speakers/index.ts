import { type StaticImageData } from "next/image";

import alexSavelyev from "./img/alexandr-savelyev.png";
import nikitaDubko from "./img/nikita-dubko.jpg";
import egorNechaev from "./img/egor-nechaev.png";
import vicIstomin from "./img/vic-istomin.jpeg";
import timurGafiulin from "./img/timur-gafiulin.jpg";

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
    {
        slug: "nikita-dubko",
        name: "Nikita Dubko",
        img: nikitaDubko,
    },
    {
        slug: "egor-nechaev",
        name: "Egor Nechaev",
        img: egorNechaev,
    },
    {
        slug: "vic-istomin",
        name: "Vic Istomin",
        img: vicIstomin,
    },
    {
        slug: "timur-gafiulin",
        name: "Timur Gafiulin",
        img: timurGafiulin,
    },
];
