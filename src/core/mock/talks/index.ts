import { type StaticImageData } from "next/image";

import reactServerComponents from "./img/react-server-components.jpg";

export type Talk = {
    slug: string;
    name: string;
    description: string;
    labels: string[];
    start: string;
    end: string;
    speaker?: string;
    type?: string;
    youtube?: string;
    preview?: StaticImageData | string;
};

export const talks: Talk[] = [
    {
        slug: "greetings",
        name: "Greetings",
        description: "Doors open, guest arrival, coffee.",
        labels: ["Free form"],
        type: "free-form",
        start: "2024-11-02T14:30:00.000Z",
        end: "2024-11-02T15:00:00.000Z",
    },
    {
        slug: "welcome-speech",
        name: "Welcome speech",
        description: "Program start, welcome speech from Tbilisi JS Team and Sative Space Team",
        labels: ["Free form"],
        type: "free-form",
        start: "2024-11-02T15:00:00.000Z",
        end: "2024-11-02T15:10:00.000Z",
    },
    {
        slug: "state-of-a11y",
        speaker: "vadim-makeev",
        name: "State of a11y",
        description:
            "Our special guest, Vadim Makeev, a tech writer at MDN, host and producer of Web Standards, will open Tbilisi A11y & UX Day and talk about how the community's attitude towards accessibility is changing (or not changing).",
        labels: ["a11y"],
        type: "online",
        start: "2024-11-02T15:10:00.000Z",
        end: "2024-11-02T15:40:00.000Z",
    },
    {
        slug: "accessibility-speedrun",
        speaker: "maxim-khalizov",
        name: "Accessibility Speedrun",
        description: "https://t.me/tbilisi_js_chat/11484",
        labels: ["a11y"],
        type: "talk",
        start: "2024-11-02T15:40:00.000Z",
        end: "2024-11-02T16:30:00.000Z",
    },
    {
        slug: "coffee-break",
        name: "Coffee break",
        description: "25-minute break, coffee, snacks 🍕",
        labels: ["Free form"],
        type: "free-form",
        start: "2024-11-02T16:30:00.000Z",
        end: "2024-11-02T17:00:00.000Z",
    },
    {
        slug: "accessibility-and-typography",
        speaker: "tanya-fokina",
        name: "Accessibility and Typography",
        description: "https://t.me/tbilisi_js_chat/10859",
        labels: ["a11y"],
        type: "talk",
        start: "2024-11-02T17:00:00.000Z",
        end: "2024-11-02T17:50:00.000Z",
    },
    {
        slug: "accessibility-as-a-decomposition-of-complexity",
        speaker: "andrey-evdokov",
        name: "Very Interesting, Completely Incomprehensible, or Accessibility as a Decomposition of Complexity",
        description: "https://t.me/tbilisi_js_chat/11413",
        labels: ["a11y"],
        type: "talk",
        start: "2024-11-02T17:50:00.000Z",
        end: "2024-11-02T18:35:00.000Z",
    },
    {
        slug: "coffee-break-2",
        name: "Coffee break",
        description: "20-minute break, coffee ☕️",
        labels: ["Free form"],
        type: "free-form",
        start: "2024-11-02T18:35:00.000Z",
        end: "2024-11-02T19:00:00.000Z",
    },
    {
        slug: "what-exactly-is-this-ux-of-yours",
        speaker: "ilona-sarkisova",
        name: "What Exactly Is This UX of Yours",
        description: "https://t.me/tbilisi_js_chat/10677",
        labels: ["a11y", "UX"],
        type: "online",
        start: "2024-11-02T19:00:00.000Z",
        end: "2024-11-02T19:40:00.000Z",
    },
    {
        slug: "accessibility-using-the-clay-pot-industry",
        speaker: "philip-baranovsky",
        name: "Accessibility Using the Clay Pot Industry as an Example",
        description: "https://t.me/tbilisi_js_chat/11245",
        labels: ["a11y"],
        type: "talk",
        start: "2024-11-02T19:40:00.000Z",
        end: "2024-11-02T20:30:00.000Z",
    },
    {
        slug: "closing",
        name: "Closing",
        description: "Closing remarks from Tbilisi JS Team",
        labels: ["Free form"],
        type: "free-form",
        start: "2024-11-02T20:30:00.000Z",
        end: "2024-11-02T20:40:00.000Z",
    },
    {
        slug: "afterparty",
        name: "Afterparty",
        description: "Afterparty kickoff 🍹",
        labels: ["Free form"],
        start: "2024-11-02T20:40:00.000Z",
        end: "2024-11-02T21:00:00.000Z",
    },
    {
        slug: "react-server-components",
        name: "React Server Components",
        description: `<p>Alexander Savelyev, Developer and Next.js Contributor, has been actively implementing React Server Components (RSC) in production projects over the past couple of years. He has also contributed to the ecosystem and shared his experience through articles.</p>
<p>In his talk, Alexander will cover:</p>
<ul><li>How server components actually work and what’s happening under the hood;</li>
<li>Key differences in framework implementations (Next.js, Remix, TanStack Router);</li>
<li>The new component architecture: composing server and client components, communication between them, and building component trees;</li>
<li>His personal experience, motivation, implementation process, and key takeaways.</li></ul>`,
        labels: ["react"],
        speaker: "alex-savelyev",
        youtube: "https://www.youtube.com/embed/m8H-cObBEZY?si=HWnVX2DLMLTRVQMn&amp;start=5817",
        preview: reactServerComponents,
        type: "talk",
        start: "2025-02-01T21:00:00.000Z",
        end: "2025-02-01T21:30:00.000Z",
    },
];
