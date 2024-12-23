export type Conference = {
    slug: string;
    name: string;
    date: string;
    attendees: number;
    talks: string[];
};

export const conferences: Conference[] = [
    {
        slug: "tbilisi-a11y-ux-day",
        name: "Tbilisi A11y & UX Day",
        date: "2024-11-02T16:30:00.000Z",
        attendees: 200,
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
    },
    {
        slug: "tbilisi-js-meetup-3",
        name: "Tbilisi JS Meetup #3",
        date: "2024-10-31T16:30:00.000Z",
        attendees: 150,
        talks: [],
    },
    { slug: "tbilisi-rust-day", name: "Tbilisi Rust Day", date: "2024-09-26T16:30:00.000Z", attendees: 150, talks: [] },
    { slug: "tbilisi-js-conf", name: "Tbilisi JS Conf", date: "2024-06-01T16:30:00.000Z", attendees: 100, talks: [] },
    {
        slug: "tbilisi-js-meetup-2",
        name: "Tbilisi JS Meetup #2",
        date: "2024-03-28T16:30:00.000Z",
        attendees: 90,
        talks: [],
    },
    {
        slug: "tbilisi-js-meetup-1",
        name: "Tbilisi JS Meetup #1",
        date: "2024-01-25T16:30:00.000Z",
        attendees: 80,
        talks: [],
    },
];
