import { type StaticImageData } from "next/image";

import allyUxDayImage from "./images/ally-ux-day.jpg";
import rustDayImage from "./images/rust-day.jpg";
import tjsConf1Image from "./images/tjs-conf-1.jpg";
import tjsMeetup1Image from "./images/tjs-meetup-1.jpg";
import tjsMeetup2Image from "./images/tjs-meetup-2.jpg";
import tjsMeetup3Image from "./images/tjs-meetup-3.jpg";
import tjsMeetup4Image from "./images/tjs-meetup-4.jpg";
import tjsMeetup5Image from "./images/tjs-meetup-5.jpg";
import tjsMeetup6Image from "./images/tbilisi-js-meetup-6.png";
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
        slug: "tbilisi-js-meetup-6",
        name: "Tbilisi JS Meetup #6",
        date: "2025-06-14T09:30:00.000Z",
        attendees: 150,
        talks: [
            "how-langchain-js-works-and-when-its-useful",
            "live-interfaces-how-and-with-what-to-animate-the-web-in-2025",
            "react-19-new-form-management-tools",
            "voice-ai",
            "gamified-prototyping-how-dnd-mechanics-help-to-design-an-llm-voice-assistant",
            "major-minor-patch-without-the-headache",
        ],
        image: tjsMeetup6Image,
        promo:
            "We are excited to announce our new meetup and celebrate the incredible milestone of hosting ten events overall! 😎\n" +
            "Since our first gathering in January 2024, we've successfully organized five classic meetups, three themed events, and one big conference! \n" +
            "\n" +
            "A special thanks to the fantastic team at Social Discovery Group for their support in making this event possible!",
        registration: "https://forms.gle/umSdTdJeeQGZPsw97",
        telegram: "https://t.me/tbilisi_js/415",
        youtube: "https://www.youtube.com/embed/_V03VmjQZvQ?si=HRuWPequbBCofZgK",
    },
    {
        slug: "tbilisi-performance-day",
        name: "Tbilisi Performance Day",
        date: "2025-04-11T00:00:00.000Z",
        attendees: 100,
        talks: [
            "9-and-a-half-weeks-before-release",
            "practice-of-the-financial-chart-optimization",
            "when-performance-optimizations-backfire",
            "three-stages-of-accepting-react-compiler",
        ],
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
        talks: [
            "generative-art-on-js",
            "react-server-components",
            "remember-everything",
            "an-easy-way-to-quit-react",
            "the-journey-from-frontend-to-fullstack-engineering-team",
        ],
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
        talks: [
            "echoes-of-exclusion-bias-in-generative-ai",
            "the-browser-as-a-platform-for-heavy-applications",
            "how-to-write-interface-texts-without-ux-writer",
            "infrastructure-as-typescript",
        ],
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
            "state-of-a11y",
            "accessibility-speedrun",
            "accessibility-and-typography",
            "accessibility-as-a-decomposition-of-complexity",
            "what-is-this-ux-thing-anyway",
            "accessibility-using-the-clay-pot-industry",
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
        talks: [
            "debugging-page-performance-with-browser-tools",
            "design-system-is-not-about-design-its-about-interaction",
            "managing-an-industrial-battery-fleet-using-react-spa",
            "how-a-developer-can-help-their-team-lead-grow",
        ],
        image: tjsMeetup3Image,
        telegram: "https://t.me/tbilisi_js_chat/10306",
        youtube: "",
    },
    {
        slug: "tbilisi-rust-day",
        name: "Tbilisi Rust Day",
        date: "2024-09-26T17:30:00.000Z",
        attendees: 130,
        talks: [
            "introduction-rust-and-its-basic-concepts",
            "rust-as-a-tool-for-developing-backend-services",
            "rust-as-a-tool-for-developing-frontend-applications",
        ],
        image: rustDayImage,
        telegram: "https://t.me/tbilisi_js_chat/9490",
        youtube: "",
    },
    {
        slug: "tbilisi-js-conf-2024",
        name: "Tbilisi JS Conf",
        date: "2024-06-01T12:30:00.000Z",
        attendees: 150,
        talks: [
            "serverless-your-first-lambda",
            "how-to-develop-through-mentorship",
            "dial-m-for-maintainability-part-2",
            "frontend-across-borders",
            "beyond-the-frontend",
            "tests-you-dont-need",
            "why-should-you-write",
            "getting-into-webgl",
            "storybook-the-cookbook",
            "why-do-we-create-communities",
        ],
        image: tjsConf1Image,
        telegram: "https://t.me/tbilisi_js_chat/5632",
        youtube: "",
    },
    {
        slug: "tbilisi-js-meetup-2",
        name: "Tbilisi JS Meetup #2",
        date: "2024-03-28T16:30:00.000Z",
        attendees: 90,
        talks: ["modern-ui-kit-libraries", "dynamic-environments-in-frontend", "another-way-to-localise-websites"],
        image: tjsMeetup2Image,
        telegram: "https://t.me/tbilisi_js_chat/3545",
        youtube: "",
    },
    {
        slug: "tbilisi-js-meetup-1",
        name: "Tbilisi JS Meetup #1",
        date: "2024-01-25T16:30:00.000Z",
        attendees: 80,
        talks: [
            "dial-m-for-maintainability-part-1",
            "frontend-in-biotech",
            "cloud-serverless-for-frontend",
            "contributing-to-doka",
        ],
        image: tjsMeetup1Image,
        telegram: "https://t.me/tbilisi_js_chat/1182",
        youtube: "",
    },
];
