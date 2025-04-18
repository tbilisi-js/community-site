import { type StaticImageData } from "next/image";

import allyUxDayImage from "./images/ally-ux-day.jpg";
import rustDayImage from "./images/rust-day.jpg";
import tjsConf1Image from "./images/tjs-conf-1.jpg";
import tjsMeetup1Image from "./images/tjs-meetup-1.jpg";
import tjsMeetup2Image from "./images/tjs-meetup-2.jpg";
import tjsMeetup3Image from "./images/tjs-meetup-3.jpg";
import tjsMeetup4Image from "./images/tjs-meetup-4.jpg";
import tjsMeetup5Image from "./images/tjs-meetup-5.jpg";
import webPerformanceDayImage from "./images/web-performance-day.jpg";

export type Event = {
    slug: string;
    name: string;
    date: string;
    attendees: number | undefined;
    talks: string[];
    image: StaticImageData;
    promo?: string;
    registration?: string;
    telegram: string;
    youtube: string;
};

export const events: Event[] = [
    {
        slug: "tbilisi-performance-day",
        name: "Tbilisi Performance Day",
        date: "2025-04-11T15:30:00.000Z",
        attendees: undefined,
        talks: [],
        image: webPerformanceDayImage,
        promo: "Exciting day dedicated to web performance\nJoin us for a day of learning and fun 🚀",
        registration: "https://forms.gle/L92w2VH1XkhCaEht6",
        telegram: "https://t.me/tbilisi_js_chat/19071",
        youtube: "https://www.youtube.com/embed/fSyWehFpGc4?si=mNYyYKvPl8D2YMdz",
    },
    {
        slug: "tbilisi-js-meetup-5",
        name: "Tbilisi JS Meetup #5",
        date: "2025-02-22T12:30:00.000Z",
        attendees: 200,
        talks: [],
        image: tjsMeetup5Image,
        promo: "Exciting program and lots of fun activities\njoin us for networking, discussions, and insightful talks",
        registration: "https://forms.gle/xBFjyup82pZoMnpQ9",
        telegram: "https://t.me/tbilisi_js_chat/15677",
        youtube: "https://www.youtube.com/embed/m8H-cObBEZY?si=HQrsYqZ-7Oaslxi_",
    },
    {
        slug: "tbilisi-js-meetup-4",
        name: "Tbilisi JS Meetup #4",
        date: "2024-12-14T13:30:00.000Z",
        attendees: 200,
        talks: [],
        image: tjsMeetup4Image,
        promo: "Celebrate 1 year together\nlet’s chat, chill and eat huge cake 🎂",
        telegram: "https://t.me/tbilisi_js_chat/13437",
        youtube: "",
    },
    {
        slug: "tbilisi-a11y-ux-day",
        name: "Tbilisi A11y & UX Day",
        date: "2024-11-02T12:30:00.000Z",
        attendees: 160,
        talks: [
            "greetings",
            "welcome-speech",
            "state-of-a11y",
            "accessibility-speedrun",
            "coffee-break",
            "accessibility-and-typography",
            "accessibility-as-a-decomposition-of-complexity",
            "coffee-break-2",
            "what-exactly-is-this-ux-of-yours",
            "accessibility-using-the-clay-pot-industry",
            "closing",
            "afterparty",
        ],
        image: allyUxDayImage,
        telegram: "https://t.me/tbilisi_js_chat/10441",
        youtube: "",
    },
    {
        slug: "tbilisi-js-meetup-3",
        name: "Tbilisi JS Meetup #3",
        date: "2024-10-31T17:30:00.000Z",
        attendees: 150,
        talks: [],
        image: tjsMeetup3Image,
        telegram: "https://t.me/tbilisi_js_chat/10306",
        youtube: "",
    },
    {
        slug: "tbilisi-rust-day",
        name: "Tbilisi Rust Day",
        date: "2024-09-26T17:30:00.000Z",
        attendees: 130,
        talks: [],
        image: rustDayImage,
        telegram: "https://t.me/tbilisi_js_chat/9490",
        youtube: "",
    },
    {
        slug: "tbilisi-js-conf-1",
        name: "Tbilisi JS Conf",
        date: "2024-06-01T12:30:00.000Z",
        attendees: 150,
        talks: [],
        image: tjsConf1Image,
        telegram: "https://t.me/tbilisi_js_chat/5632",
        youtube: "",
    },
    {
        slug: "tbilisi-js-meetup-2",
        name: "Tbilisi JS Meetup #2",
        date: "2024-03-28T16:30:00.000Z",
        attendees: 90,
        talks: [],
        image: tjsMeetup2Image,
        telegram: "https://t.me/tbilisi_js_chat/3545",
        youtube: "",
    },
    {
        slug: "tbilisi-js-meetup-1",
        name: "Tbilisi JS Meetup #1",
        date: "2024-01-25T16:30:00.000Z",
        attendees: 80,
        talks: [],
        image: tjsMeetup1Image,
        telegram: "https://t.me/tbilisi_js_chat/1182",
        youtube: "",
    },
];
