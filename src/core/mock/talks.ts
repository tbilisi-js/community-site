export type Talk = {
    slug: string;
    name: string;
    description: string;
    labels: string[];
    start: string;
    end: string;
    speaker?: string;
    type?: string;
};

export const talks: Talk[] = [
    {
        slug: "greetings",
        name: "Greetings",
        description: "Doors open, guest arrival, coffee.",
        labels: ["Free form"],
        type: "free-form",
        start: "14:30",
        end: "15:00",
    },
    {
        slug: "welcome-speech",
        name: "Welcome speech",
        description: "Program start, welcome speech from Tbilisi JS Team and Sative Space Team",
        labels: ["Free form"],
        type: "free-form",
        start: "15:00",
        end: "15:10",
    },
    {
        slug: "state-of-a11y",
        speaker: "vadim-makeev",
        name: "State of a11y",
        description:
            "Our special guest, Vadim Makeev, a tech writer at MDN, host and producer of Web Standards, will open Tbilisi A11y & UX Day and talk about how the community's attitude towards accessibility is changing (or not changing).",
        labels: ["a11y"],
        type: "talk",
        start: "15:10",
        end: "15:40",
    },
    {
        slug: "accessibility-speedrun",
        speaker: "maxim-khalizov",
        name: "Accessibility Speedrun",
        description: "https://t.me/tbilisi_js_chat/11484",
        labels: ["a11y"],
        type: "talk",
        start: "15:40",
        end: "16:30",
    },
    {
        slug: "coffee-break",
        name: "Coffee break",
        description: "25-minute break, coffee, snacks 🍕",
        labels: ["Free form"],
        type: "free-form",
        start: "16:30",
        end: "17:00",
    },
    {
        slug: "accessibility-and-typography",
        speaker: "tanya-fokina",
        name: "Accessibility and Typography",
        description: "https://t.me/tbilisi_js_chat/10859",
        labels: ["a11y"],
        type: "talk",
        start: "17:00",
        end: "17:50",
    },
    {
        slug: "accessibility-as-a-decomposition-of-complexity",
        speaker: "andrey-evdokov",
        name: "Very Interesting, Completely Incomprehensible, or Accessibility as a Decomposition of Complexity",
        description: "https://t.me/tbilisi_js_chat/11413",
        labels: ["a11y"],
        type: "talk",
        start: "17:50",
        end: "18:35",
    },
    {
        slug: "coffee-break-2",
        name: "Coffee break",
        description: "20-minute break, coffee ☕️",
        labels: ["Free form"],
        type: "free-form",
        start: "18:35",
        end: "19:00",
    },
    {
        slug: "what-exactly-is-this-ux-of-yours",
        speaker: "ilona-sarkisova",
        name: "What Exactly Is This UX of Yours",
        description: "https://t.me/tbilisi_js_chat/10677",
        labels: ["a11y", "UX"],
        type: "talk",
        start: "19:00",
        end: "19:40",
    },
    {
        slug: "accessibility-using-the-clay-pot-industry",
        speaker: "philip-baranovsky",
        name: "Accessibility Using the Clay Pot Industry as an Example",
        description: "https://t.me/tbilisi_js_chat/11245",
        labels: ["a11y"],
        type: "talk",
        start: "19:40",
        end: "20:30",
    },
    {
        slug: "closing",
        name: "Closing",
        description: "Closing remarks from Tbilisi JS Team",
        labels: ["Free form"],
        type: "free-form",
        start: "20:30",
        end: "20:40",
    },
    {
        slug: "afterparty",
        name: "Afterparty",
        description: "Afterparty kickoff 🍹",
        labels: ["Free form"],
        type: "free-form",
        start: "20:40",
        end: "24:00",
    },
];
