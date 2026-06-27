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
import tjsMeetup7Image from "./images/tjs-meetup-7.jpg";
import tjsMeetup8Image from "./images/tjs-meetup-8.png";
import xmasStream2025Image from "./images/tjs-xmas-stream-2025.jpg";
import webPerformanceDayImage from "./images/web-performance-day.jpg";

export type Event = {
    slug: string;
    name: string;
    date: string;
    attendees: number | undefined;
    talks: string[];
    image: StaticImageData;
    promo?: string;
    description?: string;
    registration?: string | false;
    telegram: string;
    youtube: string;
    gallerySource?: string;
    sponsor?: string;
};

export const events: Event[] = [
    {
        slug: "tbilisi-js-meetup-8",
        name: "Tbilisi JS Meetup #8",
        date: "2026-07-04T12:00:00.000Z",
        attendees: undefined,
        talks: [
            "how-not-to-lose-your-mind-in-a-world-where-browsers-ship-every-two-weeks",
            "why-design-belongs-to-engineers-too",
            "smart-nano-stores-or-how-we-made-web-development-simpler",
            "site-reliability-on-the-way-to-9999-uptime",
            "anatomy-of-a-messy-mockup-from-a-detached-component-to-clean-react-code",
        ],
        image: tjsMeetup8Image,
        promo: `Friends, it's been way too long, and we've missed you! 
And we know for a fact you've missed us too. We know you've been waiting. ❤️ 

So on July 4 we're finally back with a brand-new meetup — and trust us, it was worth the wait! 🚀

This time we're supported by the awesome folks at Salmon, a fintech company operating in the Philippines.`,
        description:
            "We're back, and we did not come back quietly! Vadim Makeev tackles a world where browsers ship every two weeks, Gigi Janelidze argues design systems belong to engineers too, Nina Torgunakova introduces tiny-but-mighty Nano Stores, Alexey Raldugin chases 99.99…% uptime, and Daria Kamyshina turns messy mockups into clean React code. Offline, free, and absolutely worth the wait. 🚀",
        sponsor: "salmon",
        registration: "https://forms.gle/jAgYr5DhUkaSbW8WA",
        telegram: "https://t.me/tbilisi_js/596",
        youtube: "https://www.youtube.com/embed/g-_by137JKE?si=XsWB_Qzh2iw9ytXL",
    },
    {
        slug: "tbilisi-js-xmas-stream-2025",
        name: "XMas Stream 2025",
        date: "2025-12-28T14:30:00.000Z",
        attendees: 150,
        talks: [
            "aaaaaaaaaaaaaaaaaaaaaaa-href",
            "what-if-css-if-function",
            "routing-as-the-foundation-of-correct-architecture",
            "3d-graphics-is-an-illusion",
        ],
        image: xmasStream2025Image,
        promo: "Let's discuss the events of the year, see what cool and not-so-cool (or completely uncool) 2025 brought to the frontend and the web in general, and at the same time celebrate 2 years of Tbilisi JS!",
        description:
            "Our cozy year-end stream — a look back at 2025 in frontend and a celebration of two years of Tbilisi JS. Ivan Akulov questioned router-based navigation and made the case for plain HTML links, Alyona Batitskaya explored CSS's new if() function, Artem Arutyunyan showed why routing is the foundation of good architecture, and Aleksander Korotaev returned with his fourth talk — a fun deep-dive into how 3D graphics fool our brains. The perfect way to wrap a great year. 🎄",
        registration: false,
        telegram: "https://t.me/tbilisi_js/567",
        youtube: "https://www.youtube-nocookie.com/embed/wgyoibJfDzY?si=gDJq-SxYkmcq8bDq",
    },
    {
        slug: "tbilisi-js-meetup-7",
        name: "Tbilisi JS Meetup #7",
        date: "2025-08-16T10:30:00.000Z",
        attendees: 150,
        talks: [
            "how-browsers-render-shadows-and-curves",
            "responsive-typography-in-web",
            "growing-as-a-developer-long-term",
            "writing-a-compiler-for-a-disappearing-framework",
            "microfrontends-business-vs-development",
        ],
        image: tjsMeetup7Image,
        promo:
            "Summer’s in full swing, brains are melting, but we’ve got the cure — gather in a cool spot, meet great people, and enjoy inspiring talks!" +
            "\n" +
            "A special thanks to the fantastic team at Exante for their support in making this event possible!",
        description:
            "A summer meetup to beat the heat. Aleksander Korotaev explained how browsers render shadows and curves, Tanya Fokina covered responsive typography, Anna Shiryaeva shared how to keep growing as a developer over the long run, Daniil Savitskii told the story of writing a compiler for a disappearing framework, and Nikita Potapov weighed microfrontends from both business and dev angles. Cool spot, great people, inspiring talks. ☀️",
        sponsor: "exante",
        registration: "https://forms.gle/eJ6kHR6AHapuB1tYA",
        telegram: "https://t.me/tbilisi_js_chat/22355",
        youtube: "https://www.youtube.com/embed/zuMoopst9Ls?si=m2-2Id0At7k0zi0T",
    },
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
        description:
            "A milestone night — our tenth event overall. Anton Nepsha demystified LangChain.js, Evgeny Doroshkevich explored how to animate the web in 2025, Sergey Levkovich introduced React 19's new form tools, Maxim Barinov dove into Voice AI, Hanna Kastrytsa applied D&D mechanics to prototyping voice assistants, and Azat Davliatshin made semantic versioning painless. Six speakers from across the map and a whole lot to celebrate. 😎",
        sponsor: "social-discovery-group",
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
        description:
            "A themed day for everyone obsessed with making the web fast. Daniil Savitskii returned with another intriguingly titled talk on shipping under time pressure, Eugene Korobko shared 14 years of financial-chart optimization from TradingView, Google Developer Expert Ivan Akulov revealed when performance optimizations backfire, and Anna Shiryaeva walked through the three stages of accepting the React Compiler. A full day of learning and fun. 🚀",
        registration: "https://forms.gle/L92w2VH1XkhCaEht6",
        telegram: "https://t.me/tbilisi_js_chat/19071",
        sponsor: "tradingview",
        youtube: "https://www.youtube.com/embed/fSyWehFpGc4?si=mNYyYKvPl8D2YMdz",
        // gallerySource: "https://tjs-photo.fra1.cdn.digitaloceanspaces.com/pd1/struct.json",
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
        description:
            "A lively start to 2025 with five talks and plenty of debate. Aleksander Korotaev turned algorithms into generative art, Alex Savelyev broke down React Server Components, Oleg Semichev shared tips for taming the mental overload of notifications, Daniil Savitskii made a spirited case for life beyond React, and Den Ilin told the story of going from frontend to a full-stack engineering team. Inspiring talks, fun activities, and great networking.",
        registration: "https://forms.gle/xBFjyup82pZoMnpQ9",
        telegram: "https://t.me/tbilisi_js_chat/15677",
        sponsor: "tradingview",
        youtube: "https://www.youtube.com/embed/m8H-cObBEZY?si=HQrsYqZ-7Oaslxi_",
        // gallerySource: "https://tjs-photo.fra1.cdn.digitaloceanspaces.com/m5/struct.json",
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
        sponsor: "jettycloud",
        description: `Our first birthday! We celebrated one year together with cake, good company, and four talks. Hanna Kastrytsa explored bias in generative AI through her "Echoes of Exclusion" installation, Ivan Zatravkin made the case for the browser as a platform for heavy applications, Valeriya Yakovleva taught how to write interface texts without a UX writer, and Kirill Kazakov explained writing infrastructure as TypeScript. One year down, and we were just getting started. 🎂`,
        telegram: "https://t.me/tbilisi_js_chat/13437",
        youtube: "",
        // gallerySource: "https://tjs-photo.fra1.cdn.digitaloceanspaces.com/m4/struct.json",
    },
    {
        slug: "tbilisi-a11y-ux-day",
        name: "Tbilisi A11y & UX Day",
        date: "2024-11-02T12:30:00.000Z",
        attendees: 160,
        talks: [
            "state-of-a11y",
            "speedrun-through-accessibility",
            "accessibility-and-typography",
            "accessibility-as-a-decomposition-of-complexity",
            "what-is-this-ux-thing-anyway",
            "accessibility-in-the-clay-pot-industry",
        ],
        image: allyUxDayImage,
        description:
            "A themed day devoted entirely to accessibility and UX, opened by our special guest Vadim Makeev. Vadim Makeev shared the state of a11y, Maksim Khalizov ran a speedrun through accessibility, Tanya Fokina connected typography and access, Andrey Evdokov framed accessibility as decomposing complexity, Elona Sarkisova unpacked what UX really is, and Philipp Baranovskii closed it out. A warm, thoughtful day about building for everyone.",
        telegram: "https://t.me/tbilisi_js_chat/10441",
        youtube: "",
        // gallerySource: "https://tjs-photo.fra1.cdn.digitaloceanspaces.com/a11y1/struct.json",
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
        description:
            "A Halloween-edition meetup packed with range. Nikita Dubko demystified the DevTools Performance tab, Egor Nechaev argued that a design system is really about interaction, Vic Istomin told the wild story of managing an industrial battery fleet with a React SPA, and Timur Gafiulin shared how a developer can help their team lead grow. Performance, architecture, hardware, and leadership — all in one night.",
        sponsor: "lightspeed",
        telegram: "https://t.me/tbilisi_js_chat/10306",
        youtube: "",
        // gallerySource: "https://tjs-photo.fra1.cdn.digitaloceanspaces.com/m3/struct.json",
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
        description:
            "We stepped outside the JS bubble for a themed day all about Rust. Aleksander Zelik opened with the basics of Rust and safe memory management, then returned to show how Rust powers frontend apps via WebAssembly and Yew, while Aleksander Dmitriev covered building high-performance backend services with Actix-web. Proof that our community is curious about way more than just one language.",
        telegram: "https://t.me/tbilisi_js_chat/9490",
        youtube: "",
        // gallerySource: "https://tjs-photo.fra1.cdn.digitaloceanspaces.com/r1/struct.json",
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
        description: `Our first big one — a full-blown conference that ran from afternoon till past midnight with eleven talks and 150+ people. Highlights spanned serverless with Philipp Baranovskii, mentorship with Timur Gafiulin, the second part of Azat Davliatshin's "Dial M for Maintainability," frontend across borders with Viktor Shcheglov, and a whole run of talks on WebGL, Storybook, testing, writing, and why we build communities at all. A marathon of knowledge and a milestone we're still proud of. 🚀`,
        telegram: "https://t.me/tbilisi_js_chat/5632",
        youtube: "",
        // gallerySource: "https://tjs-photo.fra1.cdn.digitaloceanspaces.com/c1/struct.json",
    },
    {
        slug: "tbilisi-js-meetup-2",
        name: "Tbilisi JS Meetup #2",
        date: "2024-03-28T16:30:00.000Z",
        attendees: 90,
        talks: ["modern-ui-kit-libraries", "dynamic-environments-in-frontend", "another-way-to-localise-websites"],
        image: tjsMeetup2Image,
        description:
            "Round two, still online, and already hitting its stride. Aleksander Popov took us into the world of modern UI-kit libraries, Irakli Bakhtadze explained how dynamic environments streamline frontend workflows on AWS, and Dmitry Shmakov — organizer of MoscowJS — showed a fresh take on localizing websites through cultural differences. Three talks, lots of practical takeaways, and a growing crowd of friendly faces.",
        telegram: "https://t.me/tbilisi_js_chat/3545",
        youtube: "",
        // gallerySource: "https://tjs-photo.fra1.cdn.digitaloceanspaces.com/m2/struct.json",
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
        description:
            "The one that started it all! Our very first meetup, fully online, with four talks to set the tone. Azat Davliatshin kicked things off with a talk on code maintainability, Maria Kondaurova shared why frontend matters in biotech and antibody development, Anton Pavlov made the case for serverless in frontend, and Tanya Fokina showed how to contribute to the open-source knowledge base Doka. A cozy start to what became a whole community. ❤️",
        telegram: "https://t.me/tbilisi_js_chat/1182",
        youtube: "",
        // gallerySource: "https://tjs-photo.fra1.cdn.digitaloceanspaces.com/m1/struct.json",
    },
];
