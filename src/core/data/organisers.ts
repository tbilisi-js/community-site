import { s3Organiser } from "@src/core/data/s3";

export const organisers = [
    {
        avatarSrc: s3Organiser("volkova"),
        name: "Julia Volkova",
        id: "volkova",
        description: "Frontend Expert at Hyperskill and Mentor at HTML Academy",
        socialLink: "https://www.linkedin.com/in/julie-volkova/",
    },
    {
        avatarSrc: s3Organiser("pavlov"),
        name: "Anton Pavlov",
        id: "pavlov",
        description: "DevOps",
        socialLink: "https://www.linkedin.com/in/antonepavlov/",
    },
    {
        avatarSrc: s3Organiser("palamarchuk"),
        name: "Anastasia Palamarchuk",
        id: "palamarchuk",
        description: "Tech Recruiter",
        socialLink: "https://www.linkedin.com/in/palamarchelo/",
    },
    {
        avatarSrc: s3Organiser("korotaev"),
        name: "Aleksandr Korotaev",
        id: "korotaev",
        description: "Frontend Developer, SPB Frontend Organizer",
        socialLink: "https://www.linkedin.com/in/lekzd/",
    },
];
