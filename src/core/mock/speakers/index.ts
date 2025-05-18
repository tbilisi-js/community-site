import { type StaticImageData } from "next/image";

import alexSavelyev from "./img/alexandr-savelyev.png";
import nikitaDubko from "./img/nikita-dubko.jpg";
import egorNechaev from "./img/egor-nechaev.png";
import vicIstomin from "./img/vic-istomin.jpeg";
import timurGafiulin from "./img/timur-gafiulin.jpg";
import annaShiryaeva from "./img/anna-shiryaeva.jpg";
import daniilSavitskii from "./img/daniil-savitskii.jpg";
import eugeneKorobko from "./img/eugene-korobko.jpg";
import ivanAkulov from "./img/ivan-akulov.png";
import aleksandrKorotaev from "./img/aleksandr-korotaev.png";
import olegSemichev from "./img/oleg-semichev.jpg";
import denIlin from "./img/den-ilin.png";
import hannaKastrytsa from "./img/hanna-kastrutsa.jpg";
import valeriyaYakovleva from "./img/valeriya-yakovleva.jpg";
import kirillKazakov from "./img/kirill-kazakov.jpg";
import ivanZatravkin from "./img/ivan-zatravkin.jpg";

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
    {
        slug: "anna-shiryaeva",
        name: "Anna Shiryaeva",
        img: annaShiryaeva,
    },
    {
        slug: "daniil-savitskii",
        name: "Daniil Savitskii",
        img: daniilSavitskii,
    },
    {
        slug: "eugene-korobko",
        name: "Eugene Korobko",
        img: eugeneKorobko,
    },
    {
        slug: "ivan-akulov",
        name: "Ivan Akulov",
        img: ivanAkulov,
    },
    {
        slug: "aleksander-korotaev",
        name: "Aleksander Korotaev",
        img: aleksandrKorotaev,
    },
    {
        slug: "oleg-semichev",
        name: "Oleg Semichev",
        img: olegSemichev,
    },
    {
        slug: "den-ilin",
        name: "Den Ilin",
        img: denIlin,
    },
    {
        slug: "hanna-kastrytsa",
        name: "Hanna Kastrytsa",
        img: hannaKastrytsa,
    },
    {
        slug: "valeriya-yakovleva",
        name: "Valeriya Yakovleva",
        img: valeriyaYakovleva,
    },
    {
        slug: "kirill-kazakov",
        name: "Kirill Kazakov",
        img: kirillKazakov,
    },
    {
        slug: "ivan-zatravkin",
        name: "Ivan Zatravkin",
        img: ivanZatravkin,
    },
];
