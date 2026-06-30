import { s3Cover } from "@src/core/data/s3";

export type Event = {
    slug: string;
    s3Prefix: string;
    name: string;
    date: string;
    attendees: number | undefined;
    talks: string[];
    image: string;
    promo?: string;
    description?: string;
    registration?: string | false;
    telegram: string;
    youtube: string;
    gallerySource?: string;
    sponsor?: string;
    youtubePlaylist?: string;
};

export const events: Event[] = [
    {
        slug: "tbilisi-js-meetup-8",
        s3Prefix: "m8",
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
        image: s3Cover("m8"),
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
        s3Prefix: "s1",
        name: "XMas Stream 2025",
        date: "2025-12-28T14:30:00.000Z",
        attendees: 150,
        talks: [
            "aaaaaaaaaaaaaaaaaaaaaaa-href",
            "what-if-css-if-function",
            "routing-as-the-foundation-of-correct-architecture",
            "3d-graphics-is-an-illusion",
        ],
        image: s3Cover("s1"),
        promo: "Let's discuss the events of the year, see what cool and not-so-cool (or completely uncool) 2025 brought to the frontend and the web in general, and at the same time celebrate 2 years of Tbilisi JS!",
        description:
            "Our cozy year-end stream — a look back at 2025 in frontend and a celebration of two years of Tbilisi JS. Ivan Akulov questioned router-based navigation and made the case for plain HTML links, Alyona Batitskaya explored CSS's new if() function, Artem Arutyunyan showed why routing is the foundation of good architecture, and Aleksander Korotaev returned with his fourth talk — a fun deep-dive into how 3D graphics fool our brains. The perfect way to wrap a great year. 🎄",
        registration: false,
        telegram: "https://t.me/tbilisi_js/567",
        youtube: "https://www.youtube-nocookie.com/embed/wgyoibJfDzY?si=gDJq-SxYkmcq8bDq",
        youtubePlaylist: "https://youtube.com/playlist?list=PLduqjbnjNUvfcKM0ihc9ecvLDnaTRRXqI&si=4lCMJjCl8bJImGTP",
    },
    {
        slug: "tbilisi-js-meetup-7",
        s3Prefix: "m7",
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
        image: s3Cover("m7"),
        promo:
            "Summer's in full swing, brains are melting, but we've got the cure — gather in a cool spot, meet great people, and enjoy inspiring talks!" +
            "\n" +
            "A special thanks to the fantastic team at Exante for their support in making this event possible!",
        description:
            "A summer meetup to beat the heat. Aleksander Korotaev explained how browsers render shadows and curves, Tanya Fokina covered responsive typography, Anna Shiryaeva shared how to keep growing as a developer over the long run, Daniil Savitskii told the story of writing a compiler for a disappearing framework, and Nikita Potapov weighed microfrontends from both business and dev angles. Cool spot, great people, inspiring talks. ☀️",
        sponsor: "exante",
        registration: "https://forms.gle/eJ6kHR6AHapuB1tYA",
        telegram: "https://t.me/tbilisi_js_chat/22355",
        youtube: "https://www.youtube.com/embed/zuMoopst9Ls?si=m2-2Id0At7k0zi0T",
        youtubePlaylist: "https://youtube.com/playlist?list=PLduqjbnjNUvfTTAs2agRvYPLKf_EbLvQY&si=0KFOxrllhLq74wrH",
        gallerySource: "https://tjs-photo.fra1.cdn.digitaloceanspaces.com/m7/struct.json",
    },
    {
        slug: "tbilisi-js-meetup-6",
        s3Prefix: "m6",
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
        image: s3Cover("m6"),
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
        youtubePlaylist: "https://youtube.com/playlist?list=PLduqjbnjNUvdhTSARs6y9grynaRKoic8n&si=yq8fEVQhv2zqqx0S",
        gallerySource: "https://tjs-photo.fra1.cdn.digitaloceanspaces.com/m6/struct.json",
    },
    {
        slug: "tbilisi-performance-day",
        s3Prefix: "pd1",
        name: "Tbilisi Performance Day",
        date: "2025-04-11T00:00:00.000Z",
        attendees: 100,
        talks: [
            "9-and-a-half-weeks-before-release",
            "practice-of-the-financial-chart-optimization",
            "when-performance-optimizations-backfire",
            "three-stages-of-accepting-react-compiler",
        ],
        image: s3Cover("pd1"),
        promo: "Exciting day dedicated to web performance\nJoin us for a day of learning and fun 🚀",
        description:
            "A themed day for everyone obsessed with making the web fast. Daniil Savitskii returned with another intriguingly titled talk on shipping under time pressure, Eugene Korobko shared 14 years of financial-chart optimization from TradingView, Google Developer Expert Ivan Akulov revealed when performance optimizations backfire, and Anna Shiryaeva walked through the three stages of accepting the React Compiler. A full day of learning and fun. 🚀",
        registration: "https://forms.gle/L92w2VH1XkhCaEht6",
        telegram: "https://t.me/tbilisi_js_chat/19071",
        sponsor: "tradingview",
        youtube: "https://www.youtube.com/embed/fSyWehFpGc4?si=mNYyYKvPl8D2YMdz",
        youtubePlaylist: "https://youtube.com/playlist?list=PLduqjbnjNUvf7XYIge0XieSPA42aB4hbD&si=t0KzPwY_Rgk92PPa",
        gallerySource: "https://tjs-photo.fra1.cdn.digitaloceanspaces.com/pd1/struct.json",
    },
    {
        slug: "tbilisi-js-meetup-5",
        s3Prefix: "m5",
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
        image: s3Cover("m5"),
        promo: "Exciting program and lots of fun activities\njoin us for networking, discussions, and insightful talks",
        description:
            "A lively start to 2025 with five talks and plenty of debate. Aleksander Korotaev turned algorithms into generative art, Alex Savelyev broke down React Server Components, Oleg Semichev shared tips for taming the mental overload of notifications, Daniil Savitskii made a spirited case for life beyond React, and Den Ilin told the story of going from frontend to a full-stack engineering team. Inspiring talks, fun activities, and great networking.",
        registration: "https://forms.gle/xBFjyup82pZoMnpQ9",
        telegram: "https://t.me/tbilisi_js_chat/15677",
        sponsor: "tradingview",
        youtube: "https://www.youtube.com/embed/m8H-cObBEZY?si=HQrsYqZ-7Oaslxi_",
        youtubePlaylist: "https://youtube.com/playlist?list=PLduqjbnjNUvc6Xs6JeGVb40yj0EO2XsPt&si=TmC5c_b6oQm04jbe",
        gallerySource: "https://tjs-photo.fra1.cdn.digitaloceanspaces.com/m5/struct.json",
    },
    {
        slug: "tbilisi-js-meetup-4",
        s3Prefix: "m4",
        name: "Tbilisi JS Meetup #4",
        date: "2024-12-14T13:30:00.000Z",
        attendees: 200,
        talks: [
            "echoes-of-exclusion-bias-in-generative-ai",
            "the-browser-as-a-platform-for-heavy-applications",
            "how-to-write-interface-texts-without-ux-writer",
            "infrastructure-as-typescript",
        ],
        image: s3Cover("m4"),
        promo: "Celebrate 1 year together\nlet's chat, chill and eat huge cake 🎂",
        sponsor: "jettycloud",
        description: `Our first birthday! We celebrated one year together with cake, good company, and four talks. Hanna Kastrytsa explored bias in generative AI through her "Echoes of Exclusion" installation, Ivan Zatravkin made the case for the browser as a platform for heavy applications, Valeriya Yakovleva taught how to write interface texts without a UX writer, and Kirill Kazakov explained writing infrastructure as TypeScript. One year down, and we were just getting started. 🎂`,
        telegram: "https://t.me/tbilisi_js_chat/13437",
        youtube: "",
        youtubePlaylist: "https://youtube.com/playlist?list=PLduqjbnjNUvcqCnXTUJkao2Ut7ArX6QDh&si=ccVifGxjqZWftk32",
        gallerySource: "https://tjs-photo.fra1.cdn.digitaloceanspaces.com/m4/struct.json",
    },
    {
        slug: "tbilisi-a11y-ux-day",
        s3Prefix: "a11y1",
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
        image: s3Cover("a11y1"),
        description:
            "A themed day devoted entirely to accessibility and UX, opened by our special guest Vadim Makeev. Vadim Makeev shared the state of a11y, Maksim Khalizov ran a speedrun through accessibility, Tanya Fokina connected typography and access, Andrey Evdokov framed accessibility as decomposing complexity, Elona Sarkisova unpacked what UX really is, and Philipp Baranovskii closed it out. A warm, thoughtful day about building for everyone.",
        telegram: "https://t.me/tbilisi_js_chat/10441",
        youtube: "",
        youtubePlaylist: "https://youtube.com/playlist?list=PLduqjbnjNUvexNfKtYxPaZWSGP4M9uA81&si=ZKMcvC4ZllTtBvKR",
        gallerySource: "https://tjs-photo.fra1.cdn.digitaloceanspaces.com/a11y1/struct.json",
    },
    {
        slug: "tbilisi-js-meetup-3",
        s3Prefix: "m3",
        name: "Tbilisi JS Meetup #3",
        date: "2024-10-31T17:30:00.000Z",
        attendees: 150,
        talks: [
            "debugging-page-performance-with-browser-tools",
            "design-system-is-not-about-design-its-about-interaction",
            "managing-an-industrial-battery-fleet-using-react-spa",
            "how-a-developer-can-help-their-team-lead-grow",
        ],
        image: s3Cover("m3"),
        description:
            "A Halloween-edition meetup packed with range. Nikita Dubko demystified the DevTools Performance tab, Egor Nechaev argued that a design system is really about interaction, Vic Istomin told the wild story of managing an industrial battery fleet with a React SPA, and Timur Gafiulin shared how a developer can help their team lead grow. Performance, architecture, hardware, and leadership — all in one night.",
        sponsor: "lightspeed",
        telegram: "https://t.me/tbilisi_js_chat/10306",
        youtube: "",
        youtubePlaylist: "https://youtube.com/playlist?list=PLduqjbnjNUvd0LmFiMG30orojP_kTalhL&si=GSDUrAoZ4kV0NtE1",
        gallerySource: "https://tjs-photo.fra1.cdn.digitaloceanspaces.com/m3/struct.json",
    },
    {
        slug: "tbilisi-rust-day",
        s3Prefix: "r1",
        name: "Tbilisi Rust Day",
        date: "2024-09-26T17:30:00.000Z",
        attendees: 130,
        talks: [
            "introduction-rust-and-its-basic-concepts",
            "rust-as-a-tool-for-developing-backend-services",
            "rust-as-a-tool-for-developing-frontend-applications",
        ],
        image: s3Cover("r1"),
        description:
            "We stepped outside the JS bubble for a themed day all about Rust. Aleksander Zelik opened with the basics of Rust and safe memory management, then returned to show how Rust powers frontend apps via WebAssembly and Yew, while Aleksander Dmitriev covered building high-performance backend services with Actix-web. Proof that our community is curious about way more than just one language.",
        telegram: "https://t.me/tbilisi_js_chat/9490",
        youtube: "",
        youtubePlaylist: "https://youtube.com/playlist?list=PLduqjbnjNUvfq6mtudKHN_ZEtXVhmPRax&si=QcwgHRJ-8LdifGrQ",
        gallerySource: "https://tjs-photo.fra1.cdn.digitaloceanspaces.com/r1/struct.json",
    },
    {
        slug: "tbilisi-js-conf-2024",
        s3Prefix: "c1",
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
        image: s3Cover("c1"),
        description: `Our first big one — a full-blown conference that ran from afternoon till past midnight with eleven talks and 150+ people. Highlights spanned serverless with Philipp Baranovskii, mentorship with Timur Gafiulin, the second part of Azat Davliatshin's "Dial M for Maintainability," frontend across borders with Viktor Shcheglov, and a whole run of talks on WebGL, Storybook, testing, writing, and why we build communities at all. A marathon of knowledge and a milestone we're still proud of. 🚀`,
        telegram: "https://t.me/tbilisi_js_chat/5632",
        youtube: "",
        youtubePlaylist: "https://youtube.com/playlist?list=PLduqjbnjNUvc3usYK9ixCP_jK0tOswZGn&si=fn6p7f8BSG_S6fVM",
        gallerySource: "https://tjs-photo.fra1.cdn.digitaloceanspaces.com/c1/struct.json",
    },
    {
        slug: "tbilisi-js-meetup-2",
        s3Prefix: "m2",
        name: "Tbilisi JS Meetup #2",
        date: "2024-03-28T16:30:00.000Z",
        attendees: 90,
        talks: ["modern-ui-kit-libraries", "dynamic-environments-in-frontend", "another-way-to-localise-websites"],
        image: s3Cover("m2"),
        description:
            "Round two, still online, and already hitting its stride. Aleksander Popov took us into the world of modern UI-kit libraries, Irakli Bakhtadze explained how dynamic environments streamline frontend workflows on AWS, and Dmitry Shmakov — organizer of MoscowJS — showed a fresh take on localizing websites through cultural differences. Three talks, lots of practical takeaways, and a growing crowd of friendly faces.",
        telegram: "https://t.me/tbilisi_js_chat/3545",
        youtube: "",
        youtubePlaylist: "https://youtube.com/playlist?list=PLduqjbnjNUvfOTw356-fiYJILYFm9VfmL&si=PGREzrU0gxNy_qLI",
        gallerySource: "https://tjs-photo.fra1.cdn.digitaloceanspaces.com/m2/struct.json",
    },
    {
        slug: "tbilisi-js-meetup-1",
        s3Prefix: "m1",
        name: "Tbilisi JS Meetup #1",
        date: "2024-01-25T16:30:00.000Z",
        attendees: 80,
        talks: [
            "dial-m-for-maintainability-part-1",
            "frontend-in-biotech",
            "cloud-serverless-for-frontend",
            "contributing-to-doka",
        ],
        image: s3Cover("m1"),
        description:
            "The one that started it all! Our very first meetup, fully online, with four talks to set the tone. Azat Davliatshin kicked things off with a talk on code maintainability, Maria Kondaurova shared why frontend matters in biotech and antibody development, Anton Pavlov made the case for serverless in frontend, and Tanya Fokina showed how to contribute to the open-source knowledge base Doka. A cozy start to what became a whole community. ❤️",
        telegram: "https://t.me/tbilisi_js_chat/1182",
        youtube: "",
        youtubePlaylist: "https://youtube.com/playlist?list=PLduqjbnjNUvfT3dBvG-1kXk11raKlMxlH&si=h3AECytOm683HGqW",
        gallerySource: "https://tjs-photo.fra1.cdn.digitaloceanspaces.com/m1/struct.json",
    },
];
