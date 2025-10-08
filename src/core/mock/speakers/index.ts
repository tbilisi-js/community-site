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
import hannaKastrytsa from "./img/hanna-kastrytsa.jpg";
import valeriyaYakovleva from "./img/valeriya-yakovleva.jpg";
import kirillKazakov from "./img/kirill-kazakov.jpg";
import ivanZatravkin from "./img/ivan-zatravkin.jpg";
import elonaSarkisova from "./img/elona-sarkisova.jpg";
import vadimMakeev from "./img/vadim-makeev.jpeg";
import philippBaranovskii from "./img/philipp-baranovskii.jpg";
import maksimKhalizov from "./img/maksim-khalizov.jpg";
import andreyEvdokov from "./img/andrey-evdokov.jpg";
import aleksanderDmitriev from "./img/aleksander-dmitriev.jpg";
import aleksanderZelik from "./img/aleksander-zelik.jpg";
import tanyaFokina from "./img/tanya-fokina.jpg";
import antonNepsha from "./img/anton-nepsha.jpg";
import evgenyDoroshkevich from "./img/evgeny-doroshkevich.png";
import sergeyLevkovich from "./img/sergey-levkovich.jpeg";
import maximBarinov from "./img/max-barinov.jpg";
import azatDavliatshin from "./img/azat-davliatshin.jpg";
import antonPavlov from "./img/anton-pavlov.jpg";
import mariaKondaurova from "./img/maria-kondaurova.jpg";
import dmitryShmakov from "./img/dmitry-shmakov.jpg";
import irakliBakhtadze from "./img/irakli-bakhtadze.jpg";
import aleksanderPopov from "./img/aleksander-popov.jpg";
import viktorShcheglov from "./img/viktor-shcheglov.jpg";
import mikhailGarbuzov from "./img/mikhail-garbuzov.jpeg";
import aleksanderKomlev from "./img/aleksander-komlev.jpg";
import pavelMelnikov from "./img/pavel-melnikov.jpg";
import mikhailPokryshchenko from "./img/mikhail-pokryshchenko.jpg";
import marselAkhmetshin from "./img/marsel-akhmetshin.jpg";
import nikitaPotapov from "./img/nikita-potapov.png";

export type Speaker = {
    slug: string;
    name: string;
    img?: StaticImageData;
    company?: string;
    role?: string;
    location?: string;
    hasSocial?: boolean;
};

export const speakers: Speaker[] = [
    {
        slug: "vadim-makeev",
        name: "Vadim Makeev",
        img: vadimMakeev,
        company: "MDN",
        role: "Tech Writer",
        location: "Berlin",
        hasSocial: true,
    },
    {
        slug: "maksim-khalizov",
        name: "Maksim Khalizov",
        img: maksimKhalizov,
        company: "Devexperts",
        role: "Senior Accessibility Engineer",
        location: "Tbilisi",
        hasSocial: true,
    },
    {
        slug: "tanya-fokina",
        name: "Tanya Fokina",
        img: tanyaFokina,
        company: "Doka Guide",
        role: "Editor",
        location: "Tbilisi",
        hasSocial: true,
    },
    {
        slug: "andrey-evdokov",
        name: "Andrey Evdokov",
        img: andreyEvdokov,
        company: "BIOCAD",
        role: "UI / UX Designer",
        location: "Saint-Petersburg",
        hasSocial: true,
    },
    {
        slug: "elona-sarkisova",
        name: "Elona Sarkisova",
        img: elonaSarkisova,
        company: "VK",
        role: "Lead Designer",
        location: "Saint-Petersburg",
        hasSocial: true,
    },
    {
        slug: "philipp-baranovskii",
        name: "Philipp Baranovskii",
        img: philippBaranovskii,
        company: "EPAM Systems",
        role: "Accessibility Team Lead",
        location: "Tbilisi",
        hasSocial: true,
    },
    {
        slug: "alex-savelyev",
        name: "Alex Savelyev",
        img: alexSavelyev,
        company: "",
        role: "Senior Frontend Developer",
        location: "London",
        hasSocial: true,
    },
    {
        slug: "nikita-dubko",
        name: "Nikita Dubko",
        img: nikitaDubko,
        company: "Web Standards",
        role: "Speaker, Meetup Organizer",
        location: "Minsk",
        hasSocial: true,
    },
    {
        slug: "egor-nechaev",
        name: "Egor Nechaev",
        img: egorNechaev,
        company: "Lightspeed",
        role: "System Designer",
        location: "Tbilisi",
        hasSocial: true,
    },
    {
        slug: "vic-istomin",
        name: "Vic Istomin",
        img: vicIstomin,
        company: "JettyCloud",
        role: "Staff Frontend Developer",
        location: "Sofia",
        hasSocial: true,
    },
    {
        slug: "timur-gafiulin",
        name: "Timur Gafiulin",
        img: timurGafiulin,
        company: "",
        role: "Senior Frontend Developer, Meetup Organizer",
        location: "Moscow",
        hasSocial: true,
    },
    {
        slug: "anna-shiryaeva",
        name: "Anna Shiryaeva",
        img: annaShiryaeva,
        company: "Sibur Digital",
        role: "Lead Frontend Developer",
        location: "Moscow",
        hasSocial: true,
    },
    {
        slug: "daniil-savitskii",
        name: "Daniil Savitskii",
        img: daniilSavitskii,
        company: "Quantori",
        role: "Senior Software Engineer",
        location: "Tbilisi",
        hasSocial: true,
    },
    {
        slug: "eugene-korobko",
        name: "Eugene Korobko",
        img: eugeneKorobko,
        company: "TradingView",
        role: "Lead Software Developer",
        location: "Rostov",
        hasSocial: true,
    },
    {
        slug: "ivan-akulov",
        name: "Ivan Akulov",
        img: ivanAkulov,
        company: "Framer",
        role: "Performance Engineer, GDE",
        location: "Amsterdam",
        hasSocial: true,
    },
    {
        slug: "aleksander-korotaev",
        name: "Aleksander Korotaev",
        img: aleksandrKorotaev,
        company: "SPB Frontend",
        role: "Meetup Organizer, Speaker, Developer",
        location: "Saint-Petersburg",
        hasSocial: true,
    },
    {
        slug: "oleg-semichev",
        name: "Oleg Semichev",
        img: olegSemichev,
        company: "TradingView",
        role: "Frontend Team Lead",
        location: "Tbilisi",
        hasSocial: true,
    },
    {
        slug: "den-ilin",
        name: "Den Ilin",
        img: denIlin,
        company: "Chillhouse",
        role: "Technical Lead,",
        location: "Postov",
        hasSocial: true,
    },
    {
        slug: "hanna-kastrytsa",
        name: "Hanna Kastrytsa",
        img: hannaKastrytsa,
        company: "Lightspeed",
        role: "UX Researcher, UI Designer",
        location: "Tbilisi",
        hasSocial: true,
    },
    {
        slug: "valeriya-yakovleva",
        name: "Valeriya Yakovleva",
        img: valeriyaYakovleva,
        company: "Yandex Practicum",
        role: "UX Writer",
        location: "Tbilisi",
        hasSocial: true,
    },
    {
        slug: "kirill-kazakov",
        name: "Kirill Kazakov",
        img: kirillKazakov,
        company: "Lightspeed",
        role: "SRE Manager",
        location: "Tbilisi",
        hasSocial: true,
    },
    {
        slug: "ivan-zatravkin",
        name: "Ivan Zatravkin",
        img: ivanZatravkin,
        company: "Quantori",
        role: "Delivery / Engineering Manager",
        location: "London",
        hasSocial: true,
    },
    {
        slug: "aleksander-dmitriev",
        name: "Aleksander Dmitriev",
        img: aleksanderDmitriev,
        company: "",
        role: "Backend Developer",
        location: "Tbilisi",
        hasSocial: true,
    },
    {
        slug: "aleksander-zelik",
        name: "Aleksander Zelik",
        img: aleksanderZelik,
        company: "Zelkom LLC",
        role: "Developer / Project Manager",
        location: "Tbilisi",
        hasSocial: true,
    },
    {
        slug: "anton-nepsha",
        name: "Anton Nepsha",
        img: antonNepsha,
        company: "Sber",
        role: "Lead Frontend Developer",
        location: "Moscow",
        hasSocial: true,
    },
    {
        slug: "evgeny-doroshkevich",
        name: "Evgeny Doroshkevich",
        img: evgenyDoroshkevich,
        company: "Kodix",
        role: "Frontend Tech Lead",
        location: "Minsk",
        hasSocial: true,
    },
    {
        slug: "sergey-levkovich",
        name: "Sergey Levkovich",
        img: sergeyLevkovich,
        company: "Social Discovery Group",
        role: "Senior Frontend Developer",
        location: "Gdańsk",
        hasSocial: true,
    },
    {
        slug: "maxim-barinov",
        name: "Maxim Barinov",
        img: maximBarinov,
        company: "Vocao AI",
        role: "Founder, Founding Engineer",
        location: "Tbilisi",
        hasSocial: true,
    },
    {
        slug: "azat-davliatshin",
        name: "Azat Davliatshin",
        img: azatDavliatshin,
        company: "Quantori",
        role: "Solution / Software Architect",
        location: "Tbilisi",
        hasSocial: true,
    },
    {
        slug: "maria-kondaurova",
        name: "Maria Kondaurova",
        img: mariaKondaurova,
        company: "BIOCAD",
        role: "Senior Frontend Developer",
        location: "Saint-Petersburg",
        hasSocial: true,
    },
    {
        slug: "anton-pavlov",
        name: "Anton Pavlov",
        img: antonPavlov,
        company: "",
        role: "DevOps Team Lead",
        location: "Tbilisi",
        hasSocial: true,
    },
    {
        slug: "dmitry-shmakov",
        name: "Dmitry Shmakov",
        img: dmitryShmakov,
        company: "",
        role: "Senior Frontend Engineer",
        location: "Yerevan",
        hasSocial: true,
    },
    {
        slug: "irakli-bakhtadze",
        name: "Irakli Bakhtadze",
        img: irakliBakhtadze,
        company: "",
        role: "Senior DevOps Engineer",
        location: "Tbilisi",
        hasSocial: true,
    },
    {
        slug: "aleksander-popov",
        name: "Aleksander Popov",
        img: aleksanderPopov,
        company: "",
        role: "Senior Frontend Developer",
        location: "Tbilisi",
        hasSocial: true,
    },
    {
        slug: "viktor-shcheglov",
        name: "Viktor Shcheglov",
        img: viktorShcheglov,
        company: "Recraft",
        role: "Senior Frontend Engineer",
        location: "Tbilisi",
        hasSocial: true,
    },
    {
        slug: "mikhail-garbuzov",
        name: "Mikhail Garbuzov",
        img: mikhailGarbuzov,
        company: "JettyCloud",
        role: "Senior Backend Developer",
        location: "Sofia",
        hasSocial: true,
    },
    {
        slug: "aleksander-komlev",
        name: "Aleksander Komlev",
        img: aleksanderKomlev,
        company: "",
        role: "Senior Frontend Developer",
        location: "Batumi",
        hasSocial: true,
    },
    {
        slug: "pavel-melnikov",
        name: "Pavel Melnikov",
        img: pavelMelnikov,
        company: "",
        role: "WebGL Engineer",
        location: "Tbilisi",
        hasSocial: true,
    },
    {
        slug: "mikhail-pokryshchenko",
        name: "Mikhail Pokryshchenko",
        img: mikhailPokryshchenko,
        company: "Mundfish",
        role: "Senior DevOps Engineer",
        location: "Tbilisi",
        hasSocial: true,
    },
    {
        slug: "marsel-akhmetshin",
        name: "Marsel Akhmetshin",
        img: marselAkhmetshin,
        company: "",
        role: "Senior Frontend Developer",
        location: "London",
        hasSocial: true,
    },
    {
        slug: "nikita-potapov",
        name: "Nikita Potapov",
        img: nikitaPotapov,
        company: "Exante",
        role: "Frontend Lead",
        location: "Yekaterinburg",
        hasSocial: true,
    },
];
