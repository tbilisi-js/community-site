export type Talk = {
    slug: string;
    name: string;
    description: string;
    labels: string[];
    time: string;
    speaker?: string;
    type?: string;
};

export const talks: Talk[] = [
    {
        slug: "greetings",
        name: "Greetings",
        description: "Doors open, guest arrival, coffee.",
        labels: ["Free form"],
        time: "2:30 PM",
    },
    {
        slug: "welcome-speech",
        name: "Welcome speech",
        description: "Program start, welcome speech from Tbilisi JS Team and Sative Space Team",
        labels: ["Free form"],
        time: "3:00 PM",
    },
    {
        slug: "state-of-a11y",
        speaker: "vadim-makeev",
        name: "State of a11y",
        description: "https://t.me/tbilisi_js_chat/11494",
        labels: ["a11y"],
        type: "online",
        time: "3:10 PM",
    },
    {
        slug: "accessibility-speedrun",
        speaker: "maxim-khalizov",
        name: "Accessibility Speedrun",
        description: "https://t.me/tbilisi_js_chat/11484",
        labels: ["a11y"],
        time: "3:40 PM",
    },
    {
        slug: "coffee-break",
        name: "Coffee break",
        description: "25-minute break, coffee, snacks 🍕",
        labels: ["Free form"],
        time: "4:30 PM",
    },
    {
        slug: "accessibility-and-typography",
        speaker: "tanya-fokina",
        name: "Accessibility and Typography",
        description: "https://t.me/tbilisi_js_chat/10859",
        labels: ["a11y"],
        time: "5:00 PM",
    },
    {
        slug: "accessibility-as-a-decomposition-of-complexity",
        speaker: "andrey-evdokov",
        name: "Very Interesting, Completely Incomprehensible, or Accessibility as a Decomposition of Complexity",
        description: "https://t.me/tbilisi_js_chat/11413",
        labels: ["a11y"],
        time: "5:50 PM",
    },
    {
        slug: "coffee-break-2",
        name: "Coffee break",
        description: "20-minute break, coffee ☕️",
        labels: ["Free form"],
        time: "6:35 PM",
    },
    {
        slug: "what-exactly-is-this-ux-of-yours",
        speaker: "ilona-sarkisova",
        name: "What Exactly Is This UX of Yours",
        description: "https://t.me/tbilisi_js_chat/10677",
        labels: ["a11y", "UX"],
        type: "online",
        time: "7:00 PM",
    },
    {
        slug: "accessibility-using-the-clay-pot-industry",
        speaker: "philip-baranovsky",
        name: "Accessibility Using the Clay Pot Industry as an Example",
        description: "https://t.me/tbilisi_js_chat/11245",
        labels: ["a11y"],
        time: "7:40 PM",
    },
    {
        slug: "closing",
        name: "Closing",
        description: "Closing remarks from Tbilisi JS Team",
        labels: ["Free form"],
        time: "8:30 PM",
    },
    {
        slug: "afterparty",
        name: "Afterparty",
        description: "Afterparty kickoff 🍹",
        labels: ["Free form"],
        time: "8:40 PM",
    },
];
