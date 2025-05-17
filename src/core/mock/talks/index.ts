import { type StaticImageData } from "next/image";

import reactServerComponents from "./img/react-server-components.jpg";
import debuggingPerformance from "./img/debugging-performance.jpg";
import designSystem from "./img/design-system.jpg";
import batteryFleet from "./img/battery-fleet.jpg";
import howToHelpTeamLeadGrow from "./img/how-to-help-teamlead-grow.jpg";

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
        slug: "debugging-page-performance-with-browser-tools",
        speaker: "nikita-dubko",
        name: "Debugging Page Performance with Browser Tools",
        description: `<p>The first time I opened the Performance tab in DevTools, I clicked on different elements, didn’t understand a thing, and closed it. But in fact, it’s a very useful tool with a lot of capabilities.</p><br/><p> Over the years, I’ve figured out what all those buttons and links actually mean, so in this talk, I’ll explain how to use this tab and impress your colleagues with quick problem-solving.</p>`,
        labels: ["performance", "devtools"],
        type: "talk",
        youtube: "https://www.youtube.com/embed/CBi-ycq3tuo?si=rzRXM1Jj5vT1dpLj",
        preview: debuggingPerformance,
        start: "2025-04-10T18:00:00.000Z",
        end: "2025-04-10T18:30:00.000Z",
    },
    {
        slug: "design-system-is-not-about-design-its-about-interaction",
        speaker: "egor-nechaev",
        name: "Design System is Not About Design, It’s About Interaction",
        description: `<p>Is a design system a must-have or a devil’s trap? How do you avoid letting a design system limit you? What do design and architecture have in common, and why is it important for designers to develop an engineering mindset? </p><br/><p>We’ll hear the answers to these and other questions from Egor Nechaev, a system designer at Lightspeed. As you can guess from my job title, Egor creates and develops web design systems, sets up processes, and advocates for perfectionism and quality. Somehow, wherever Egor has worked, he has always done this, so he has much to share!</p>`,
        labels: ["design-system", "interaction"],
        youtube: "https://www.youtube.com/embed/mu2KOGv-sus?si=vNEA7_r9yJ73VD7J",
        preview: designSystem,
        type: "talk",
        start: "2025-04-10T18:40:00.000Z",
        end: "2025-04-10T19:10:00.000Z",
    },
    {
        slug: "managing-an-industrial-battery-fleet-using-react-spa",
        speaker: "vic-istomin",
        name: "Managing an Industrial Battery Fleet Using React SPA",
        description: `<p>Imagine this — you join a project, and at first glance, it seems like a straightforward app for managing and monitoring parameters of large lithium-ion batteries. Sure, the domain is unusual (Battery Management Systems aren’t something you encounter every day), but after getting acquainted with the simple API, you quickly realize it’s not that simple: the app works entirely talk, there’s no centralized server, and it communicates directly with battery microcontrollers over a local network. These batteries are installed on industrial forklifts in giant warehouses!</p><br/><p>As requirements grew, we added support for different battery generations with incompatible APIs, subnet scanning to auto-discover batteries in secure modes, and even client-side processing of millions of log entries to draw telemetry graphs — all bundled into a single file to send by email!</p>`,
        labels: ["react", "iiot", "talk-first"],
        type: "talk",
        youtube: "https://www.youtube.com/embed/O9Rid_RNJPE?si=rE_wK6yc0ZSDwJLn",
        preview: batteryFleet,
        start: "2025-04-10T19:20:00.000Z",
        end: "2025-04-10T19:50:00.000Z",
    },
    {
        slug: "state-of-a11y",
        speaker: "vadim-makeev",
        name: "State of a11y",
        description:
            "Our special guest, Vadim Makeev, a tech writer at MDN, host and producer of Web Standards, will open Tbilisi A11y & UX Day and talk about how the community's attitude towards accessibility is changing (or not changing).",
        labels: ["a11y"],
        type: "talk",
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
        slug: "what-exactly-is-this-ux-of-yours",
        speaker: "ilona-sarkisova",
        name: "What Exactly Is This UX of Yours",
        description: "https://t.me/tbilisi_js_chat/10677",
        labels: ["a11y", "UX"],
        type: "talk",
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
        slug: "react-server-components",
        name: "React Server Components: What, How, and Most Importantly, Why?",
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
    {
        slug: "how-a-developer-can-help-their-team-lead-grow",
        speaker: "timur-gafiulin",
        name: "How a Developer Can Help Their Team Lead Grow",
        description: `<p>Timur Gafiulin, developer and author of the <a href='https://t.me/tatarinfrontend' target="_blank">Telegram channel TatarinFrontend</a>, will share his experience as a developer who actively contributes to his team lead’s professional and personal growth.</p> <p>He’ll discuss practical steps, strategies, and methods — from reverse mentoring to collaborative learning — that create a supportive environment for leadership development.</p>`,
        labels: ["mentoring", "leadership"],
        type: "talk",
        youtube: "https://www.youtube.com/embed/qEELxhmZT6k?si=3tzZ_o3XKZDYz2yR",
        preview: howToHelpTeamLeadGrow,
        start: "2025-04-10T20:00:00.000Z",
        end: "2025-04-10T20:30:00.000Z",
    },
    {
        slug: "speedrun-through-accessibility",
        speaker: "maksim-khalizov",
        name: "Speedrun through Accessibility",
        description:
            'Let’s try to speed up the entire path of accessibility in 30 minutes. Starting with "What is accessibility and why it’s important?" and ending with "Now I know how to create accessible components."',
        labels: ["accessibility", "a11y"],
        type: "talk",
        start: "2025-05-20T17:00:00.000Z",
        end: "2025-05-20T17:30:00.000Z",
    },
    {
        slug: "accessibility-and-typography",
        speaker: "tanya-fokina",
        name: "Accessibility and Typography",
        description:
            "Have you ever wondered how to work with fonts in a way that cares for users and their eyes? In this talk, you’ll learn the basics of typography and its impact on the accessibility and usability of web interfaces.",
        labels: ["accessibility", "typography"],
        type: "talk",
        start: "2025-05-20T17:40:00.000Z",
        end: "2025-05-20T18:10:00.000Z",
    },
    {
        slug: "the-process-of-accessibility-in-a-clay-pot-industry",
        speaker: "philipp-baranovskii",
        name: "The Process of Accessibility in a Clay Pot Industry",
        description:
            "Filipp will demonstrate when people start focusing on accessibility, at what point it becomes important, who it becomes important to, and for what reasons in the context of the clay pot industry.",
        labels: ["accessibility", "process"],
        type: "talk",
        start: "2025-05-20T18:20:00.000Z",
        end: "2025-05-20T18:50:00.000Z",
    },
    {
        slug: "what-is-this-ux-thing-anyway",
        speaker: "elona-sarkisova",
        name: "What Is This UX Thing Anyway?",
        description:
            'Ilona Sarkisova will talk about what UX is and how it relates to UX design, the interface design process and "the Figma operators", what designers should and shouldn’t do on a product team, the top 5 ways to annoy an interface designer, and how to build collaborative work without toxicity.',
        labels: ["ux", "design"],
        type: "talk",
        start: "2025-05-20T19:00:00.000Z",
        end: "2025-05-20T19:30:00.000Z",
    },
    {
        slug: "very-interesting-but-nothing-is-clear-accessibility-as-a-decomposition-of-complexity",
        speaker: "andrey-evdokov",
        name: "Very Interesting, but Nothing Is Clear: Accessibility as a Decomposition of Complexity",
        description:
            "Talk about accessibility as the decomposition of complexity and interface design as a translation into human language. Why and how we strive to create user-friendly tool-based software for biotech.",
        labels: ["accessibility", "complexity"],
        type: "talk",
        start: "2025-05-20T19:40:00.000Z",
        end: "2025-05-20T20:10:00.000Z",
    },
    {
        slug: "how-to-write-interface-texts-without-ux-writer",
        speaker: "valeriya-yakovleva",
        name: "How to Write Interface Texts Without a UX Writer",
        description:
            "Only some companies have a dedicated UX writer, so specialists often write interface texts without professional writing experience. Valeriya will share basic principles for writing simple and clear text and explain why this is so important.",
        labels: ["ux-writing", "copywriting"],
        type: "talk",
        start: "2025-12-14T18:00:00.000Z",
        end: "2025-12-14T18:30:00.000Z",
    },
    {
        slug: "the-browser-as-a-platform-for-heavy-applications",
        speaker: "ivan-zatravkin",
        name: "The Browser as a Platform for Heavy Applications",
        description:
            "Browsers now offer a wide range of advanced capabilities: multithreading, GPU computation, 3D rendering, low-level code execution with WebAssembly, and more. Ivan will share insights on how these technologies enable work with datasets of tens or hundreds of thousands of molecules, optimization techniques, what worked and what didn’t, and what the future holds.",
        labels: ["webassembly", "performance", "wasm"],
        type: "talk",
        start: "2025-12-14T18:40:00.000Z",
        end: "2025-12-14T19:10:00.000Z",
    },
    {
        slug: "echoes-of-exclusion-bias-in-generative-ai",
        speaker: "hanna-kastrytsa",
        name: "Echoes of Exclusion: from the Research of Bias in Generative AI to Tangible Installation",
        description:
            "This talk addresses the pressing issue of bias and stereotyping in images generated by Generative AI. It explores how generative AI often interprets descriptions incorrectly, leading to biased perspectives in the image creation process, and showcases the “Echoes of Exclusion” installation developed to demonstrate this issue to the public.",
        labels: ["bias", "generative-ai", "ux-research"],
        type: "talk",
        start: "2025-12-14T19:20:00.000Z",
        end: "2025-12-14T19:50:00.000Z",
    },
    {
        slug: "infrastructure-as-typescript",
        speaker: "kirill-kazakov",
        name: "Infrastructure as TypeScript",
        description:
            "With countless cloud providers offering easy-to-click solutions, why do SREs insist on writing infrastructure in code and committing it to repositories? Kirill will explain why his team chose TypeScript over Terraform and how this approach improved reliability and developer experience.",
        labels: ["infrastructure", "typescript", "sre"],
        type: "talk",
        start: "2025-12-14T20:00:00.000Z",
        end: "2025-12-14T20:30:00.000Z",
    },
    {
        slug: "generative-art-on-js",
        speaker: "alexander-korotaev",
        name: "Generative art on JS",
        description:
            "Alexander Korotaev, Frontend Developer, speaker, and member of the Holy.js program committee, will talk about how generative art can become a source of inspiration and a practical tool for learning. Interface developers can adopt approaches to using algorithms to create adaptive animations, unique visual elements, and interactive effects. This is not just a demonstration of technical capabilities — it is an immersion into the creative process that will help the audience expand their horizons and see algorithms as a means of expression rather than just a problem-solving tool.",
        labels: ["generative-art", "algorithms", "creative"],
        type: "talk",
        start: "2026-02-22T18:00:00.000Z",
        end: "2026-02-22T18:30:00.000Z",
    },
    {
        slug: "remember-everything",
        speaker: "oleg-semichev",
        name: "Remember Everything",
        description:
            "Another work overload? Did you forget to reply to your manager again? Tired of endless, unmanageable notification dots in your inbox, task manager, or corporate messenger? Oleg Semichev, Frontend Team Lead at TradingView, will share his thoughts on the constant mental stack overflow and practical tips on handling it—(almost) without resorting to fancy acronyms.",
        labels: ["productivity", "mental-health"],
        type: "talk",
        start: "2026-02-22T18:40:00.000Z",
        end: "2026-02-22T19:10:00.000Z",
    },
    {
        slug: "an-easy-way-to-quit-react",
        speaker: "daniil-savitsky",
        name: "An Easy Way to Quit React",
        description:
            "Daniil Savitsky, Senior Software Engineer and functional-programming enthusiast, will talk about life beyond React. Expect a heated debate!",
        labels: ["react", "functional-programming"],
        type: "talk",
        start: "2026-02-22T20:00:00.000Z",
        end: "2026-02-22T20:30:00.000Z",
    },
    {
        slug: "the-journey-from-frontend-to-full-stack-engineering-team",
        speaker: "denis-ilyin",
        name: "The Journey from Frontend to a Full-Stack Engineering Team",
        description:
            "Denis Ilyin, Technical Leader at Chill House, will share how his team replaced non-frontend development with cloud technologies, saving time and money. He’ll discuss their approaches and details of implementing serverless solutions.",
        labels: ["full-stack", "serverless", "cloud"],
        type: "talk",
        start: "2026-02-22T20:40:00.000Z",
        end: "2026-02-22T21:10:00.000Z",
    },
    {
        slug: "three-stages-of-accepting-react-compiler",
        speaker: "anna-shiryaeva",
        name: "The Three Stages of Accepting React Compiler",
        description:
            "Anna Shiryaeva, Lead Software Engineer at Sibur Digital and organizer of MoscowJS, will walk us through the evolution of the React Compiler adoption process, from initial skepticism to full embrace—highlighting lessons learned at each stage.",
        labels: ["react", "compiler", "performance"],
        type: "talk",
        start: "2025-04-11T18:00:00.000Z",
        end: "2025-04-11T18:30:00.000Z",
    },
    {
        slug: "9-and-a-half-weeks-before-release",
        speaker: "daniil-savitsky",
        name: "9 ½ Weeks Before Release",
        description:
            "Daniil Savitsky, Senior Software Engineer at Quantori and self-described Clojurist, returns with an intriguing exploration of the critical 9½-week period before a major release—sharing simple, battle-tested strategies for keeping performance and stability on track.",
        labels: ["release", "performance", "timing"],
        type: "talk",
        start: "2025-04-11T18:40:00.000Z",
        end: "2025-04-11T19:10:00.000Z",
    },
    {
        slug: "tackling-canvas-performance-at-tradingview",
        speaker: "evgeniy-korobko",
        name: "Tackling Canvas Performance at TradingView",
        description:
            "Evgeniy Korobko, Lead Software Developer on the TradingView charting team and author of TradingView’s first line of code, will share 14 years of hard-won performance optimizations: from drawing massive datasets on Canvas to squeezing every millisecond out of complex charting workflows.",
        labels: ["canvas", "performance", "optimization"],
        type: "talk",
        start: "2025-04-11T19:20:00.000Z",
        end: "2025-04-11T19:50:00.000Z",
    },
    {
        slug: "when-performance-optimizations-backfire",
        speaker: "ivan-akulov",
        name: "When Performance Optimizations Backfire",
        description:
            "Ivan Akulov, Google Developer Expert and Web Performance Engineer at Framer, will reveal how common optimizations—like Google Fonts or lazy-loaded images—can actually slow you down, and what you need to do to avoid these anti-patterns.",
        labels: ["performance", "anti-patterns", "optimization"],
        type: "talk",
        start: "2025-04-11T20:00:00.000Z",
        end: "2025-04-11T20:30:00.000Z",
    },
    {
        slug: "introduction-rust-and-its-basic-concepts",
        speaker: "alexander-zelik",
        name: "Introduction: Rust and its Basic Concepts",
        description:
            "Rust is a programming language that helps write safe and fast code. In this talk, Alexander Zelik will explain how memory is managed to avoid errors and what tools make working with Rust convenient.",
        labels: ["rust", "basics"],
        type: "talk",
        start: "2025-06-15T18:00:00.000Z",
        end: "2025-06-15T18:30:00.000Z",
    },
    {
        slug: "rust-as-a-tool-for-developing-backend-services",
        speaker: "alexander-dmitriev",
        name: "Rust as a Tool for Developing Backend Services",
        description:
            "Rust is excellent for creating server applications. Alexander Dmitriev will show how to work safely with multithreading and asynchronous tasks, using Actix-web as an example to build high-performance web services.",
        labels: ["rust", "backend"],
        type: "talk",
        start: "2025-06-15T18:40:00.000Z",
        end: "2025-06-15T19:10:00.000Z",
    },
    {
        slug: "rust-as-a-tool-for-developing-frontend-applications",
        speaker: "alexander-zelik",
        name: "Rust as a Tool for Developing Frontend Applications",
        description:
            "Rust can also be used to create rich browser apps via WebAssembly. Alexander Zelik will cover how Rust compiles to Wasm and how frameworks like Yew enable building modern frontend applications.",
        labels: ["rust", "frontend", "webassembly"],
        type: "talk",
        start: "2025-06-15T19:20:00.000Z",
        end: "2025-06-15T19:50:00.000Z",
    },
    {
        slug: "dial-m-for-maintainability-part-1",
        speaker: "azat-davlyatshin",
        name: "Dial M for Maintainability (Part 1)",
        description:
            "Azat Davlyatshin, JS Engineer / SA at Quantori, will discuss “maintainability” using a simple problem example. He’ll explain what quality attributes are, share strategies for achieving code maintainability, and cover the “metrics” that indicate well-maintained code (and why “metrics” is in quotes).",
        labels: ["maintainability", "code-quality"],
        type: "talk",
        start: "2024-01-25T18:00:00.000Z",
        end: "2024-01-25T18:30:00.000Z",
    },
    {
        slug: "contributing-to-doka",
        speaker: "tanya-fokina",
        name: "Contributing to Doka",
        description:
            "Tanya Fokina, developer and editor of the accessibility and SVG sections at Doka and host of the Inclusive Pineapple podcast, will explain what Doka is, why it’s important, and how you can contribute to this open-source knowledge base.",
        labels: ["doka", "open-source"],
        type: "talk",
        start: "2024-01-25T18:40:00.000Z",
        end: "2024-01-25T19:10:00.000Z",
    },
    {
        slug: "frontend-in-biotech",
        speaker: "maria-kondaurova",
        name: "Why Frontend Matters in Biotech",
        description:
            "Maria Kondaurova, interface developer at BIOCAD and Holy.js speaker, will talk about the role of frontend in biotech: the goals it pursues, what modern antibody development looks like, and how developers contribute to the process.",
        labels: ["frontend", "biotech"],
        type: "talk",
        start: "2024-01-25T19:20:00.000Z",
        end: "2024-01-25T19:50:00.000Z",
    },
    {
        slug: "cloud-serverless-for-frontend",
        speaker: "anton-pavlov",
        name: "Cloud Serverless for Frontend",
        description:
            "Anton Pavlov, DevOps and SRE at ANNA Money, will explain why serverless (AWS Lambda & Google Cloud Functions) is useful for frontend development, how to set it up, and why it matters for modern web apps.",
        labels: ["serverless", "frontend", "aws", "gcp"],
        type: "talk",
        start: "2024-01-25T20:00:00.000Z",
        end: "2024-01-25T20:30:00.000Z",
    },
];
