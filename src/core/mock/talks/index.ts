import { type StaticImageData } from "next/image";

import reactServerComponents from "./img/react-server-components.jpg";
import debuggingPerformance from "./img/debugging-performance.jpg";
import designSystem from "./img/design-system.jpg";
import batteryFleet from "./img/battery-fleet.jpg";
import howToHelpTeamLeadGrow from "./img/how-to-help-teamlead-grow.jpg";
import acceptingReactCompiler from "./img/accepting-react-compiler.png";
import weeksUntilRelease from "./img/weeks-until-release.png";
import financialChartsOptimization from "./img/financial-charts-optimization.png";
import whenOptimizationBackfire from "./img/when-optimization-backfire.png";
import generativeArtOnJS from "./img/generative-art-with-js.jpg";
import rememberEverything from "./img/remember-everything.jpg";
import frontendToFullstack from "./img/frontend-to-fullstack.jpg";
import easyWayToQuitReact from "./img/easy-way-to-quit-react.jpg";
import echoesOfExclusion from "./img/echoes-of-exclusion.jpg";
import interfaceTextWithoutUxDesigner from "./img/interface-text-without-ux-designer.jpg";
import infrastructureAsTypescript from "./img/infrastructure-as-typescript.jpg";
import browserAsPlatformForHeavyApplications from "./img/browser-as-platform-for-heavy-applications.jpg";
import whatIsUx from "./img/what-is-ux.jpg";
import stateOfA11y from "./img/state-of-a11y.jpg";
import a11yAndTypography from "./img/a11y-and-typography.jpg";
import a11yInTheClayPotIndustry from "./img/a11y-in-the-clay-pot-industry.jpg";
import speedrunThroughA11y from "./img/speedrun-through-a11y.jpg";
import a11yAsDecompositionOfComplexity from "./img/a11y-as-decomposition-of-complexity.jpg";
import backendInRust from "./img/backend-in-rust.jpg";
import rustAndItsConcepts from "./img/rust-and-its-concepts.jpg";
import rustForFrontendDevelopment from "./img/rust-for-frontend-development.jpg";
import dialMForMaintainability1 from "./img/dial-m-for-maintainability-1.jpg";
import dialMForMaintainability2 from "./img/dial-m-for-maintainability-2.jpg";
import frontendInBiotech from "./img/frontend-in-biotech.jpg";
import dokaForEachOther from "./img/doka-for-each-other.jpg";
import serverlessForFrontend from "./img/serverless-for-frontend.jpg";
import dynamicEnviromentsInFrontend from "./img/dynamic-enviroments-in-frontend.jpg";
import anotherWayToLocaliseWebsites from "./img/another-way-to-localise-websites.jpg";
import modernUikitLibraries from "./img/modern-uikit-libraries.jpg";
import howLangchainjsWorks from "./img/how-langchain-js-works-and-when-uts-useful.png";
import serverlessYourFirstLambda from "./img/serverless-your-first-lambda.jpg";
import howToGrowThroughMentorship from "./img/how-to-grow-through-mentorship.jpg";
import frontendAcrossBorders from "./img/frontend-across-borders.jpg";
import beyondFrontend from "./img/beyond-frontend.jpg";
import testsYouDontNeed from "./img/tests-you-dont-need.jpg";
import whyShouldYouWrite from "./img/why-should-you-write.jpg";
import gettingIntoWebgl from "./img/getting-into-webgl.jpg";
import storybookTheCookbook from "./img/storybook-the-cookbook.jpg";
import whyDoWeCreateCommunities from "./img/why-do-we-create-communities.jpg";
import tjsMeetup6Image from "../images/tjs-meetup-6.png";
import tjsMeetup7Image from "../images/tjs-meetup-7.jpg";
import xmas2025WhatIf from "./img/xmas-2025-what-if.jpg";
import xmas2025AaaaHref from "./img/xmas-2025-aaaa-href.jpg";
import xmas2025RoutingAsFoundation from "./img/xmas-2025-routing-as-foundation.jpg";
import xmas2025Why3dGraphic from "./img/xmas-2025-why-3d-graphic.jpg";

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
        slug: "aaaaaaaaaaaaaaaaaaaaaaa-href",
        speaker: "ivan-akulov",
        name: "aaaaaaaaaaaaaaaaaaaaaaa (href)",
        description:
            "Meet Ivan Akulov — a React enthusiast focused on web performance, Google Developer Expert, and author of a Telegram channel. In this talk, Ivan questions modern router-based navigation in frameworks like Next.js, Nuxt.js, and @angular/router. He explores data preloading, fine-grained DOM updates, and state preservation, and explains when and why, even in 2026, plain old HTML links can outperform router navigation.",
        labels: ["html", "routing", "web-performance", "react", "frontend"],
        type: "talk",
        preview: xmas2025AaaaHref,
        youtube: "https://www.youtube.com/embed/wgyoibJfDzY?si=_vJWdon_IsUF1bRK",
        start: "2025-12-28T14:30:00.000Z",
        end: "2025-12-28T15:00:00.000Z",
    },
    {
        slug: "what-if-css-if-function",
        speaker: "alyona-batitskaya",
        name: "What? if()?",
        description:
            "Alyona Batitskaya, Senior Frontend Developer, Google Developer Expert for Web, editor at Doka Guide, speaker, educator, author, and translator, explores one of the most intriguing recent additions to CSS. In this talk, she takes a close look at the new if() function—its syntax, practical use cases, and how it fits into the emerging new paradigm of thinking about CSS.",
        labels: ["css", "web-standards", "frontend", "if-function"],
        type: "talk",
        preview: xmas2025WhatIf,
        youtube: "https://www.youtube.com/embed/wgyoibJfDzY?si=_vJWdon_IsUF1bRK",
        start: "2025-12-28T15:00:00.000Z",
        end: "2025-12-28T15:30:00.000Z",
    },
    {
        slug: "routing-as-the-foundation-of-correct-architecture",
        speaker: "artem-arutyunyan",
        name: "Routing as the Foundation of Correct Architecture",
        description:
            "Artem Arutyunyan, a developer with years of experience building libraries, frameworks, articles, and talks, shares practical insights into application architecture. In this talk, he explains why the router is a key architectural foundation and demonstrates how to make it smarter and more efficient using the computed factory pattern, with Reatom as a real-world example.",
        labels: ["routing", "architecture", "reatom", "frontend", "javascript"],
        type: "talk",
        preview: xmas2025RoutingAsFoundation,
        youtube: "https://www.youtube.com/embed/wgyoibJfDzY?si=_vJWdon_IsUF1bRK",
        start: "2025-12-28T15:30:00.000Z",
        end: "2025-12-28T16:00:00.000Z",
    },
    {
        slug: "3d-graphics-is-an-illusion",
        speaker: "aleksander-korotaev",
        name: "3D Graphics Is an Illusion",
        description:
            "Alexander Korotaev, a graphics effects, game, and animation developer known for his distinctive beard and sharp storytelling, returns with his fourth talk—this time about 3D graphics. He explains how graphics are not reality, but a collection of mathematical tricks that fool our brains into perceiving volume, light, and materials. From simple triangles to ray tracing, it is all deception—beautiful, intentional, and well-engineered. A down-to-earth explanation that cuts through the glossy surface of “physically accurate lighting” to show what is really solid and what is just drywall.",
        labels: ["3d-graphics", "computer-graphics", "rendering", "games", "animation"],
        type: "talk",
        preview: xmas2025Why3dGraphic,
        youtube: "https://www.youtube.com/embed/wgyoibJfDzY?si=_vJWdon_IsUF1bRK",
        start: "2025-12-28T16:00:00.000Z",
        end: "2025-12-28T16:30:00.000Z",
    },
    {
        slug: "how-langchain-js-works-and-when-its-useful",
        speaker: "anton-nepsha",
        name: "How LangChain.js Works and When It's Useful",
        description:
            "Anton Nepsha, Lead Frontend Developer at Sber and author of a popular Telegram channel, will demystify LangChain.js—showing how it works under the hood and highlighting real-world use cases where it can streamline conversational AI in your applications.",
        labels: ["langchain", "javascript", "ai"],
        type: "talk",
        preview: howLangchainjsWorks,
        youtube: "https://www.youtube.com/embed/_V03VmjQZvQ?si=HRuWPequbBCofZgK",
        start: "2025-06-14T09:30:00.000Z",
        end: "2025-06-14T09:30:00.000Z",
    },
    {
        slug: "live-interfaces-how-and-with-what-to-animate-the-web-in-2025",
        speaker: "evgeny-doroshkevich",
        name: "Live Interfaces: How (and with What) to Animate the Web in 2025?",
        description:
            "Evgeny Doroshkevich, Tech Lead Frontend at Kodix, will explore the latest animation techniques and libraries—from Web Animations API to real-time physics engines—and demonstrate how to bring truly interactive, high-performance motion to modern web applications.",
        labels: ["animation", "web", "performance"],
        type: "talk",
        preview: tjsMeetup6Image,
        youtube: "https://www.youtube.com/embed/_V03VmjQZvQ?si=HRuWPequbBCofZgK",
        start: "2025-06-14T09:30:00.000Z",
        end: "2025-06-14T09:30:00.000Z",
    },
    {
        slug: "react-19-new-form-management-tools",
        speaker: "sergey-levkovich",
        name: "React 19: New Form Management Tools",
        description:
            "Sergey Levkovich, Senior Frontend Developer at Social Discovery Group, will introduce the new form handling APIs in React 19—covering their motivation, syntax, and migration path—and show how they simplify validation, performance, and developer ergonomics.",
        labels: ["react", "forms", "react19"],
        type: "talk",
        preview: tjsMeetup6Image,
        youtube: "https://www.youtube.com/embed/_V03VmjQZvQ?si=HRuWPequbBCofZgK",
        start: "2025-06-14T09:30:00.000Z",
        end: "2025-06-14T09:30:00.000Z",
    },
    {
        slug: "voice-ai",
        speaker: "maxim-barinov",
        name: "Voice AI",
        description:
            "Maxim Barinov, Founder of vocao.ai and Founding Engineer at Workdone (YC X25), will guide us through the latest advances in Voice AI—from speech synthesis to real-time voice interfaces—and discuss how to integrate these technologies into web products.",
        labels: ["ai", "voice"],
        type: "talk",
        preview: tjsMeetup6Image,
        youtube: "https://www.youtube.com/embed/_V03VmjQZvQ?si=HRuWPequbBCofZgK",
        start: "2025-06-14T09:30:00.000Z",
        end: "2025-06-14T09:30:00.000Z",
    },
    {
        slug: "gamified-prototyping-how-dnd-mechanics-help-to-design-an-llm-voice-assistant",
        speaker: "hanna-kastrytsa",
        name: "Gamified Prototyping: how D&D Mechanics help to design an LLM Voice Assistant",
        description:
            "Hanna Kastrytsa, UX Researcher and Product Designer at Lightspeed Commerce, will show how game mechanics from Dungeons & Dragons can be applied to prototyping LLM-powered voice assistants—making design workshops more engaging and effective.",
        labels: ["prototyping", "gamification", "llm", "voice"],
        type: "talk",
        preview: tjsMeetup6Image,
        youtube: "https://www.youtube.com/embed/_V03VmjQZvQ?si=HRuWPequbBCofZgK",
        start: "2025-06-14T09:30:00.000Z",
        end: "2025-06-14T09:30:00.000Z",
    },
    {
        slug: "major-minor-patch-without-the-headache",
        speaker: "azat-davliatshin",
        name: "Major.Minor.Patch Without the Headache",
        description:
            "Azat Davliatshin, Lead Software Engineer / Software Architect at Quantori, will unravel the pain points of semantic versioning—sharing patterns and tools to automate 'major.minor.patch' workflows and keep your release process smooth.",
        labels: ["versioning", "semver"],
        type: "talk",
        preview: tjsMeetup6Image,
        youtube: "https://www.youtube.com/embed/_V03VmjQZvQ?si=HRuWPequbBCofZgK",
        start: "2025-06-14T09:30:00.000Z",
        end: "2025-06-14T09:30:00.000Z",
    },
    {
        slug: "debugging-page-performance-with-browser-tools",
        speaker: "nikita-dubko",
        name: "Debugging Page Performance with Browser Tools",
        description: `The first time I opened the Performance tab in DevTools, I clicked on different elements, didn’t understand a thing, and closed it. But in fact, it’s a very useful tool with a lot of capabilities.Over the years, I’ve figured out what all those buttons and links actually mean, so in this talk, I’ll explain how to use this tab and impress your colleagues with quick problem-solving.`,
        labels: ["performance", "devtools"],
        type: "talk",
        youtube: "https://www.youtube.com/embed/CBi-ycq3tuo?si=rzRXM1Jj5vT1dpLj",
        preview: debuggingPerformance,
        start: "2024-10-31T17:30:00.000Z",
        end: "2024-10-31T17:30:00.000Z",
    },
    {
        slug: "design-system-is-not-about-design-its-about-interaction",
        speaker: "egor-nechaev",
        name: "Design System is Not About Design, It’s About Interaction",
        description: `Is a design system a must-have or a devil’s trap? How do you avoid letting a design system limit you? What do design and architecture have in common, and why is it important for designers to develop an engineering mindset? We’ll hear the answers to these and other questions from Egor Nechaev, a system designer at Lightspeed. As you can guess from my job title, Egor creates and develops web design systems, sets up processes, and advocates for perfectionism and quality. Somehow, wherever Egor has worked, he has always done this, so he has much to share!`,
        labels: ["design-system", "interaction"],
        youtube: "https://www.youtube.com/embed/mu2KOGv-sus?si=vNEA7_r9yJ73VD7J",
        preview: designSystem,
        type: "talk",
        start: "2024-10-31T17:30:00.000Z",
        end: "2024-10-31T17:30:00.000Z",
    },
    {
        slug: "managing-an-industrial-battery-fleet-using-react-spa",
        speaker: "vic-istomin",
        name: "Managing an Industrial Battery Fleet Using React SPA",
        description: `Imagine this — you join a project, and at first glance, it seems like a straightforward app for managing and monitoring parameters of large lithium-ion batteries. Sure, the domain is unusual (Battery Management Systems aren’t something you encounter every day), but after getting acquainted with the simple API, you quickly realize it’s not that simple: the app works entirely talk, there’s no centralized server, and it communicates directly with battery microcontrollers over a local network. These batteries are installed on industrial forklifts in giant warehouses!As requirements grew, we added support for different battery generations with incompatible APIs, subnet scanning to auto-discover batteries in secure modes, and even client-side processing of millions of log entries to draw telemetry graphs — all bundled into a single file to send by email!`,
        labels: ["react", "iiot", "talk-first"],
        type: "talk",
        youtube: "https://www.youtube.com/embed/O9Rid_RNJPE?si=rE_wK6yc0ZSDwJLn",
        preview: batteryFleet,
        start: "2024-10-31T17:30:00.000Z",
        end: "2024-10-31T17:30:00.000Z",
    },
    {
        slug: "how-a-developer-can-help-their-team-lead-grow",
        speaker: "timur-gafiulin",
        name: "How a Developer Can Help Their Team Lead Grow",
        description: `Timur Gafiulin, developer and author of the <a href='https://t.me/tatarinfrontend' target="_blank">Telegram channel TatarinFrontend</a>, will share his experience as a developer who actively contributes to his team lead’s professional and personal growth. He’ll discuss practical steps, strategies, and methods — from reverse mentoring to collaborative learning — that create a supportive environment for leadership development.`,
        labels: ["mentoring", "leadership"],
        type: "talk",
        youtube: "https://www.youtube.com/embed/qEELxhmZT6k?si=3tzZ_o3XKZDYz2yR",
        preview: howToHelpTeamLeadGrow,
        start: "2024-10-31T17:30:00.000Z",
        end: "2024-10-31T17:30:00.000Z",
    },
    {
        slug: "state-of-a11y",
        speaker: "vadim-makeev",
        name: "State of a11y",
        description:
            "Our special guest, Vadim Makeev, a tech writer at MDN, host and producer of Web Standards, will open Tbilisi A11y & UX Day and talk about how the community's attitude towards accessibility is changing (or not changing).",
        labels: ["a11y"],
        type: "talk",
        preview: stateOfA11y,
        youtube: "https://www.youtube.com/embed/gMwS69xVmRE?si=P4FUtIM0hvB7uM1M",
        start: "2024-11-02T12:30:00.000Z",
        end: "2024-11-02T12:30:00.000Z",
    },
    {
        slug: "accessibility-as-a-decomposition-of-complexity",
        speaker: "andrey-evdokov",
        name: "Accessibility as a Decomposition of Complexity",
        description:
            "Talk about accessibility as the decomposition of complexity and interface design as a translation into human language. Why and how we strive to create user-friendly tool-based software for biotech.",
        labels: ["a11y"],
        preview: a11yAsDecompositionOfComplexity,
        youtube: "https://www.youtube.com/embed/IDGvUb9hZJ4?si=jqGF9Df1dBQVRRUg",
        type: "talk",
        start: "2024-11-02T12:30:00.000Z",
        end: "2024-11-02T12:30:00.000Z",
    },
    {
        slug: "accessibility-in-the-clay-pot-industry",
        speaker: "philipp-baranovskii",
        name: "Accessibility In the Clay Pot Industry",
        description: "https://t.me/tbilisi_js_chat/11245",
        labels: ["a11y"],
        type: "talk",
        preview: a11yInTheClayPotIndustry,
        youtube: "https://www.youtube.com/embed/IyyrhIX3Bxg?si=h9PkbH787frPhyW3",
        start: "2024-11-02T12:30:00.000Z",
        end: "2024-11-02T12:30:00.000Z",
    },
    {
        slug: "react-server-components",
        name: "React Server Components: What, How, and Most Importantly, Why?",
        description: `Alex Savelyev, Developer and Next.js Contributor, has been actively implementing React Server Components (RSC) in production projects over the past couple of years. He has also contributed to the ecosystem and shared his experience through articles.
In his talk, Alex will cover:
<ul><li>How server components actually work and what’s happening under the hood;</li>
<li>Key differences in framework implementations (Next.js, Remix, TanStack Router);</li>
<li>The new component architecture: composing server and client components, communication between them, and building component trees;</li>
<li>His personal experience, motivation, implementation process, and key takeaways.</li></ul>`,
        labels: ["react"],
        speaker: "alex-savelyev",
        youtube: "https://www.youtube.com/embed/m8H-cObBEZY?si=HWnVX2DLMLTRVQMn&amp;start=5817",
        preview: reactServerComponents,
        type: "talk",
        start: "2025-02-22T12:30:00.000Z",
        end: "2025-02-22T12:30:00.000Z",
    },
    {
        slug: "speedrun-through-accessibility",
        speaker: "maksim-khalizov",
        name: "Speedrun through Accessibility",
        description:
            'Let’s try to speed up the entire path of accessibility in 30 minutes. Starting with "What is accessibility and why it’s important?" and ending with "Now I know how to create accessible components."',
        labels: ["accessibility", "a11y"],
        type: "talk",
        preview: speedrunThroughA11y,
        youtube: "https://www.youtube.com/embed/QJz1uIO4QKk?si=nsceCxC0N6F5lB7z",
        start: "2024-11-02T12:30:00.000Z",
        end: "2024-11-02T12:30:00.000Z",
    },
    {
        slug: "accessibility-and-typography",
        speaker: "tanya-fokina",
        name: "Accessibility and Typography",
        description:
            "Have you ever wondered how to work with fonts in a way that cares for users and their eyes? In this talk, you’ll learn the basics of typography and its impact on the accessibility and usability of web interfaces.",
        labels: ["accessibility", "typography"],
        type: "talk",
        preview: a11yAndTypography,
        youtube: "https://www.youtube.com/embed/F64bGVrI4TY?si=j5Yi8_j0LAH2-ocA",
        start: "2024-11-02T12:30:00.000Z",
        end: "2024-11-02T12:30:00.000Z",
    },
    {
        slug: "what-is-this-ux-thing-anyway",
        speaker: "elona-sarkisova",
        name: "What Is All This UX Thing Anyway?",
        description: `Elona Sarkisova will talk about what UX is and how it relates to UX design, the interface design process and "the Figma operators", what designers should and shouldn’t do on a product team, the top 5 ways to annoy an interface designer, and how to build collaborative work without toxicity.`,
        labels: ["ux", "design"],
        type: "talk",
        preview: whatIsUx,
        youtube: "https://www.youtube.com/embed/SjWrAjTWVQI?si=EwGSgD1IndpW-6Q0",
        start: "2024-11-02T12:30:00.000Z",
        end: "2024-11-02T12:30:00.000Z",
    },
    {
        slug: "how-to-write-interface-texts-without-ux-writer",
        speaker: "valeriya-yakovleva",
        name: "How to Write Interface Texts Without a UX Writer",
        description:
            "Only some companies have a dedicated UX writer, so specialists often write interface texts without professional writing experience. Valeriya will share basic principles for writing simple and clear text and explain why this is so important.",
        labels: ["ux-writing", "copywriting"],
        type: "talk",
        preview: interfaceTextWithoutUxDesigner,
        youtube: "https://www.youtube.com/embed/f2_NFLtOmSo?si=v9y1wExSOCOEgFJL",
        start: "2024-12-14T20:00:00.000Z",
        end: "2024-12-14T20:00:00.000Z",
    },
    {
        slug: "the-browser-as-a-platform-for-heavy-applications",
        speaker: "ivan-zatravkin",
        name: "The Browser as a Platform for Heavy Applications",
        description:
            "Browsers now offer a wide range of advanced capabilities: multithreading, GPU computation, 3D rendering, low-level code execution with WebAssembly, and more. Ivan will share insights on how these technologies enable work with datasets of tens or hundreds of thousands of molecules, optimization techniques, what worked and what didn’t, and what the future holds.",
        labels: ["webassembly", "performance", "wasm"],
        type: "talk",
        preview: browserAsPlatformForHeavyApplications,
        youtube: "https://www.youtube.com/embed/Wl_LJFzmXwk?si=_sa4LzQV0WE0nLTR",
        start: "2024-12-14T20:00:00.000Z",
        end: "2024-12-14T20:00:00.000Z",
    },
    {
        slug: "echoes-of-exclusion-bias-in-generative-ai",
        speaker: "hanna-kastrytsa",
        name: "Echoes of Exclusion: from the Research of Bias in Generative AI to Tangible Installation",
        description:
            "This talk addresses the pressing issue of bias and stereotyping in images generated by Generative AI. It explores how generative AI often interprets descriptions incorrectly, leading to biased perspectives in the image creation process, and showcases the “Echoes of Exclusion” installation developed to demonstrate this issue to the public.",
        labels: ["bias", "generative-ai", "ux-research"],
        type: "talk",
        preview: echoesOfExclusion,
        youtube: "https://www.youtube.com/embed/ymr5AXlqPOI?si=Nd3AkLBXCWZ66tKw",
        start: "2024-12-14T20:00:00.000Z",
        end: "2024-12-14T20:00:00.000Z",
    },
    {
        slug: "infrastructure-as-typescript",
        speaker: "kirill-kazakov",
        name: "Infrastructure as TypeScript",
        description:
            "With countless cloud providers offering easy-to-click solutions, why do SREs insist on writing infrastructure in code and committing it to repositories? Kirill will explain why his team chose TypeScript over Terraform and how this approach improved reliability and developer experience.",
        labels: ["infrastructure", "typescript", "sre"],
        type: "talk",
        preview: infrastructureAsTypescript,
        youtube: "https://www.youtube.com/embed/uYJAA16EuQ4?si=YuXAlIGsp-z0ZbmL",
        start: "2024-12-14T20:00:00.000Z",
        end: "2024-12-14T20:30:00.000Z",
    },
    {
        slug: "generative-art-on-js",
        speaker: "aleksander-korotaev",
        name: "Generative art on JS",
        description: `Alexander Korotaev, Frontend Developer, speaker, and member of the Holy.js program committee, will talk about how generative art can become a source of inspiration and a practical tool for learning.Interface developers can adopt approaches to using algorithms to create adaptive animations, unique visual elements, and interactive effects. This is not just a demonstration of technical capabilities — it is an immersion into the creative process that will help the audience expand their horizons and see algorithms as a means of expression rather than just a problem-solving tool.`,
        labels: ["generative-art", "algorithms", "creative"],
        type: "talk",
        preview: generativeArtOnJS,
        youtube: "https://www.youtube.com/embed/JxBbe26uE-M?si=QPKiCfJzCI5cN4-X",
        start: "2025-02-22T12:30:00.000Z",
        end: "2025-02-22T12:30:00.000Z",
    },
    {
        slug: "remember-everything",
        speaker: "oleg-semichev",
        name: "Remember Everything",
        description: `Another work overload? Did you forget to reply to your manager again? Tired of endless, unmanageable notification dots in your inbox, task manager, or corporate messenger?Oleg Semichev, Frontend Team Lead at TradingView, will share his thoughts on the constant mental stack overflow and practical tips on handling it — (almost) without resorting to fancy acronyms.`,
        labels: ["productivity", "mental-health"],
        type: "talk",
        preview: rememberEverything,
        youtube: "https://www.youtube.com/embed/v3NcxJgEWlQ?si=mfDyBbyiRHqYSVYb",
        start: "2025-02-22T12:30:00.000Z",
        end: "2025-02-22T12:30:00.000Z",
    },
    {
        slug: "an-easy-way-to-quit-react",
        speaker: "daniil-savitskii",
        name: "An Easy Way to Quit React",
        description:
            "Daniil Savitskii, Senior Software Engineer and functional-programming enthusiast, will talk about life beyond React. Expect a heated debate!",
        labels: ["react", "functional-programming"],
        type: "talk",
        preview: easyWayToQuitReact,
        youtube: "https://www.youtube.com/embed/JAwk8ZBxAHk?si=HvxeWj6ZOsBm7jP0",
        start: "2025-02-22T12:30:00.000Z",
        end: "2025-02-22T12:30:00.000Z",
    },
    {
        slug: "the-journey-from-frontend-to-fullstack-engineering-team",
        speaker: "den-ilin",
        name: "The Journey from Frontend to a Full-Stack Engineering Team",
        description: `Denis Ilin, Technical Leader at Chill House, will share how his team replaced non-frontend development with cloud technologies, saving time and money.He’ll discuss their approaches and details of implementing serverless solutions.`,
        labels: ["full-stack", "serverless", "cloud"],
        type: "talk",
        preview: frontendToFullstack,
        youtube: "https://www.youtube.com/embed/uSmbI9Hq1eI?si=bQIDFhv03PnbVJtV",
        start: "2025-02-22T12:30:00.000Z",
        end: "2025-02-22T12:30:00.000Z",
    },
    {
        slug: "three-stages-of-accepting-react-compiler",
        speaker: "anna-shiryaeva",
        name: "The Three Stages of Accepting React Compiler",
        description: `Everything evolves, and new tools occasionally emerge that fundamentally change how we work. At these times, you might wonder, "How will this affect my code?".Some may become curious about how these new tools function, while others might broaden their perspective to consider the wider implications for the industry, often discovering whether the excitement surrounding the tool is truly justified.
Anna Shiryaeva, Lead Frontend Developer at Sibur Digital and organizer of MoscowJS, will deliver a talk about compilers, focusing on React Compiler. We'll examine the problems it solves and how it impacts current React mechanisms.`,
        labels: ["react", "compiler", "performance"],
        type: "talk",
        youtube: "https://www.youtube.com/embed/LMJmFmR3SC8?si=lrnrdlZdiO3guHNe",
        preview: acceptingReactCompiler,
        start: "2025-04-11T18:00:00.000Z",
        end: "2025-04-11T18:30:00.000Z",
    },
    {
        slug: "9-and-a-half-weeks-before-release",
        speaker: "daniil-savitskii",
        name: "9 ½ Weeks Before Release",
        description: `Choices, choices, and more choices. The best choice? The one you didn't have to make.Daniil will talk about taking apart a wooden airplane mid-flight, racing against the clock, and trying not to mess everything up at the finish line.
Daniil Savitsky, Senior Frontend Developer at Quantori, an advocate for simple solutions and almost a сlojurist, returns with a new talk, as always, with an intriguing title.`,
        labels: ["release", "performance"],
        type: "talk",
        youtube: "https://www.youtube.com/embed/dbGm3pDgSPQ?si=XfP4CxcJsAllVL9f",
        preview: weeksUntilRelease,
        start: "2025-04-11T18:40:00.000Z",
        end: "2025-04-11T19:10:00.000Z",
    },
    {
        slug: "practice-of-the-financial-chart-optimization",
        speaker: "eugene-korobko",
        name: "Practice of the financial chart optimization",
        description: `Evgeniy Korobko, Lead Software Developer on the TradingView charting team and author of TradingView’s first line of code, will share 14 years of hard-won performance optimizations: from drawing massive datasets on Canvas to squeezing every millisecond out of complex charting workflows.`,
        labels: ["canvas", "performance", "optimization"],
        type: "talk",
        youtube: "https://www.youtube.com/embed/VqWk-6oKGN4?si=H3fEWtvJ3w8d0wtp",
        preview: financialChartsOptimization,
        start: "2025-04-11T19:20:00.000Z",
        end: "2025-04-11T19:50:00.000Z",
    },
    {
        slug: "when-performance-optimizations-backfire",
        speaker: "ivan-akulov",
        name: "When Performance Optimizations Backfire",
        description: `Ever put your assets on a CDN? Or used font-diplay: swap to render the text faster? These optimizations are recommended all over the web, but sometimes, they make your site not faster but slower.In this talk, Ivan — Google Developer Expert and React/Web Performance Engineer — will show how some common performance optimizations backfire, and what we need to do to avoid that.`,
        labels: ["performance", "anti-patterns", "optimization"],
        type: "talk",
        youtube: "https://www.youtube.com/embed/JgQsElXk5BM?si=ILEnImX1XlpclqJz",
        preview: whenOptimizationBackfire,
        start: "2025-04-11T00:00:00.000Z",
        end: "2025-04-11T20:30:00.000Z",
    },
    {
        slug: "introduction-rust-and-its-basic-concepts",
        speaker: "aleksander-zelik",
        name: "Introduction: Rust and its Basic Concepts",
        description:
            "Rust is a programming language that helps write safe and fast code. In this talk, Alexander Zelik will explain how memory is managed to avoid errors and what tools make working with Rust convenient.",
        labels: ["rust", "basics"],
        type: "talk",
        preview: rustAndItsConcepts,
        youtube: "https://www.youtube.com/embed/NPoGm_5Xfn4?si=2WOMN-BEePHmwMIw",
        start: "2024-09-26T17:30:00.000Z",
        end: "2024-09-26T17:30:00.000Z",
    },
    {
        slug: "rust-as-a-tool-for-developing-backend-services",
        speaker: "aleksander-dmitriev",
        name: "Rust as a Tool for Developing Backend Services",
        description:
            "Rust is excellent for creating server applications. Alexander Dmitriev will show how to work safely with multithreading and asynchronous tasks, using Actix-web as an example to build high-performance web services.",
        labels: ["rust", "backend"],
        preview: backendInRust,
        youtube: "https://www.youtube.com/embed/14GQJB3RnYc?si=MMKxBcW7Qx023Zan",
        type: "talk",
        start: "2024-09-26T17:30:00.000Z",
        end: "2024-09-26T17:30:00.000Z",
    },
    {
        slug: "rust-as-a-tool-for-developing-frontend-applications",
        speaker: "aleksander-zelik",
        name: "Rust as a Tool for Developing Frontend Applications",
        description:
            "Rust can also be used to create rich browser apps via WebAssembly. Alexander Zelik will cover how Rust compiles to Wasm and how frameworks like Yew enable building modern frontend applications.",
        labels: ["rust", "frontend", "webassembly"],
        type: "talk",
        preview: rustForFrontendDevelopment,
        youtube: "https://www.youtube.com/embed/FV8qhSzzfYo?si=XlWSyAVSYhTh2574",
        start: "2024-09-26T17:30:00.000Z",
        end: "2024-09-26T17:30:00.000Z",
    },
    {
        slug: "dial-m-for-maintainability-part-1",
        speaker: "azat-davliatshin",
        name: "Dial M for Maintainability (Part 1)",
        description:
            "Azat Davliatshin, JS Engineer / SA at Quantori, will discuss “maintainability” using a simple problem example. He’ll explain what quality attributes are, share strategies for achieving code maintainability, and cover the “metrics” that indicate well-maintained code (and why “metrics” is in quotes).",
        labels: ["maintainability", "code-quality"],
        type: "talk",
        preview: dialMForMaintainability1,
        youtube: "https://www.youtube.com/embed/4AqRsCX6GGw?si=gZqpWGnKRF2X67cB",
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
        preview: dokaForEachOther,
        youtube: "https://www.youtube.com/embed/Zhlfia_l-bc?si=6USRkJiahbZyvvok",
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
        preview: frontendInBiotech,
        youtube: "https://www.youtube.com/embed/CKe7MQg8Mrc?si=0PSHgqPnOiUi1f15",
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
        preview: serverlessForFrontend,
        youtube: "https://www.youtube.com/embed/wNqhaK2rdSc?si=vJfZagTZ74V-xzPu",
        start: "2024-01-25T20:00:00.000Z",
        end: "2024-01-25T20:30:00.000Z",
    },
    {
        slug: "modern-ui-kit-libraries",
        speaker: "aleksander-popov",
        name: "Modern UI kit libraries",
        description:
            "In this presentation, we will dive into the world of modern UI-kits, which serve not just as a set of tools, but as a foundation for creating high-quality and user-friendly interfaces. Alexander Popov will examine how ready-made components speed up development and enhance product consistency, guide you in choosing and customizing the right kit, and review popular open-source (including headless) libraries—sharing pros, cons, and his top tool recommendations.",
        labels: ["ui-kit", "design-system", "component-library"],
        type: "talk",
        preview: modernUikitLibraries,
        start: "2024-03-28T16:30:00.000Z",
        end: "2024-03-28T16:30:00.000Z",
    },
    {
        slug: "dynamic-environments-in-frontend",
        speaker: "irakli-bakhtadze",
        name: "Dynamic environments in frontend",
        description:
            "Irakli Bakhtadze, Senior DevOps Engineer at FlowHealth, will explain how dynamic environments can streamline frontend workflows—covering their full lifecycle and demonstrating a concrete AWS-based implementation that empowers teams to test, iterate, and tear down safely and automatically.",
        labels: ["devops", "dynamic-environments", "aws"],
        type: "talk",
        preview: dynamicEnviromentsInFrontend,
        start: "2024-03-28T16:30:00.000Z",
        end: "2024-03-28T16:30:00.000Z",
    },
    {
        slug: "another-way-to-localise-websites",
        speaker: "dmitry-shmakov",
        name: "Another way to localise websites",
        description:
            "Dmitry Shmakov, organizer of MoscowJS, will tackle the challenge of adapting website design and content for diverse countries, peoples, and cultures. Using Geert Hofstede’s cultural dimensions, he’ll show how to tailor layouts, color schemes, and copy to boost engagement and conversion across global audiences.",
        labels: ["internationalization", "ux", "cultural-dimensions"],
        type: "talk",
        preview: anotherWayToLocaliseWebsites,
        youtube: "https://www.youtube.com/embed/JH7cvKIzZdk?si=8pacELXvjwLlRPeH",
        start: "2024-03-28T16:30:00.000Z",
        end: "2024-03-28T16:30:00.000Z",
    },
    {
        slug: "serverless-your-first-lambda",
        speaker: "philipp-baranovskii",
        name: "Serverless: Your First Lambda",
        description:
            "In Philipp’s talk, using examples from AWS and Yandex Cloud, we’ll explore serverless by building two applications: an echo bot and a subscription-calendar generator that receives events via a chat bot. We’ll dive into functions, database interactions, and S3 usage.",
        labels: ["serverless", "aws", "yandex-cloud"],
        type: "talk",
        preview: serverlessYourFirstLambda,
        youtube: "https://www.youtube.com/embed/UmMI_X6l9J0?si=UWyo8qOIA5GAWAoN",
        start: "2024-06-01T18:00:00.000Z",
        end: "2024-06-01T18:30:00.000Z",
    },
    {
        slug: "how-to-develop-through-mentorship",
        speaker: "timur-gafiulin",
        name: "How to Develop Through Mentorship?",
        description:
            "Many of us build the foundation of our knowledge in a haphazard way and then neglect proper refactoring due to lack of motivation. In this talk with Timur, we’ll discuss how junior developers can find a mentor and why experienced IT professionals should help newcomers—exploring the benefits of mentorship for both sides.",
        labels: ["mentorship", "career-development"],
        preview: howToGrowThroughMentorship,
        youtube: "https://www.youtube.com/embed/kahXRNNOzMk?si=8CiYzBrJQ94tcu7W",
        type: "talk",
        start: "2024-06-01T18:40:00.000Z",
        end: "2024-06-01T19:10:00.000Z",
    },
    {
        slug: "dial-m-for-maintainability-part-2",
        speaker: "azat-davliatshin",
        name: "Dial “M” for Maintainability. Part 2",
        description:
            "The sequel to “Dial “M” for Maintainability.” Together with Azat, we’ll continue developing the solution to the original problem—this time applying everything we learned in the first part.",
        labels: ["maintainability", "code-quality"],
        type: "talk",
        preview: dialMForMaintainability2,
        youtube: "https://www.youtube.com/embed/cR5HUjtukm8?si=OlTGMytadjNwu18s",
        start: "2024-06-01T19:20:00.000Z",
        end: "2024-06-01T19:50:00.000Z",
    },
    {
        slug: "frontend-across-borders",
        speaker: "viktor-shcheglov",
        name: "Frontend Across Borders",
        description:
            "Launching an application in a new market is a challenge. Drawing on real experience from product launches in African countries, Viktor will demonstrate how to adapt and optimize the frontend, measure and monitor key technical metrics, and solve common issues—highlighting the universality of these challenges.",
        labels: ["internationalization", "ux"],
        type: "talk",
        preview: frontendAcrossBorders,
        youtube: "https://www.youtube.com/embed/DskcARdCYjE?si=CZe8HB3t45zdyas5",
        start: "2024-06-01T20:00:00.000Z",
        end: "2024-06-01T20:30:00.000Z",
    },
    {
        slug: "beyond-the-frontend",
        speaker: "mikhail-garbuzov",
        name: "Beyond the Frontend",
        description:
            "In this talk, Misha will explain how a typical frontend developer can start writing backend code with Node.js. He’ll cover key considerations in the process and show that backend development isn’t as complex as it seems.",
        labels: ["backend", "nodejs"],
        type: "talk",
        preview: beyondFrontend,
        youtube: "https://www.youtube.com/embed/E6aVAAN1CdQ?si=glRyMw3AEayso2LE",
        start: "2024-06-01T20:40:00.000Z",
        end: "2024-06-01T21:10:00.000Z",
    },
    {
        slug: "tests-you-dont-need",
        speaker: "aleksander-komlev",
        name: "Tests You Don't Need",
        description:
            "In his talk, Sasha will outline bad testing practices you should avoid and show what you should be writing instead to ensure effective coverage and maintainable tests.",
        labels: ["testing", "best-practices"],
        type: "talk",
        preview: testsYouDontNeed,
        youtube: "https://www.youtube.com/embed/KqzH_X4Ds0c?si=VMPGmx_m_fEu852Q",
        start: "2024-06-01T21:20:00.000Z",
        end: "2024-06-01T21:50:00.000Z",
    },
    {
        slug: "why-should-you-write",
        speaker: "mikhail-pokryshchenko",
        name: "Why Should You Write?",
        description:
            "Our brains can trick us—mixing up thoughts and fostering self-doubt. Writing is your secret weapon! It can help organize your mind, improve memory, conquer imposter syndrome, and defeat procrastination. Want to become more confident and productive? Start writing!",
        labels: ["writing", "productivity"],
        type: "talk",
        preview: whyShouldYouWrite,
        youtube: "https://www.youtube.com/embed/Rezn0WQtJuE?si=DYezt8hgzTFlNRHg",
        start: "2024-06-01T22:00:00.000Z",
        end: "2024-06-01T22:30:00.000Z",
    },
    {
        slug: "getting-into-webgl",
        speaker: "pavel-melnikov",
        name: "How to Dive into WebGL Graphics: Up & Going",
        description:
            "Pavel will discuss the main challenges of combining React and WebGL, and demonstrate how to create custom materials and particle effects with practical examples.",
        labels: ["webgl", "graphics", "react"],
        type: "talk",
        preview: gettingIntoWebgl,
        youtube: "https://www.youtube.com/embed/-xnLWfCYAdE?si=6vxcGsggYSaC7pDo",
        start: "2024-06-01T22:40:00.000Z",
        end: "2024-06-01T23:10:00.000Z",
    },
    {
        slug: "storybook-the-cookbook",
        speaker: "marsel-akhmetshin",
        name: "Storybook: The Cookbook",
        description:
            "Marsel will share how to write effective stories for smart components and set up a production/development environment around them to improve your workflow.",
        labels: ["storybook", "component-library"],
        type: "talk",
        preview: storybookTheCookbook,
        youtube: "https://www.youtube.com/embed/H-8qQbaoSqM?si=8tFhntiY7FvUPC-X",
        start: "2024-06-01T23:20:00.000Z",
        end: "2024-06-01T23:50:00.000Z",
    },
    {
        slug: "why-do-we-create-communities",
        speaker: "aleksander-korotaev",
        name: "Why Do We Create Communities?",
        description:
            "Alexander will share his experience organizing meetups and communities, discuss the different formats, and explain why building communities is important for both participants and organizers.",
        labels: ["community", "meetups"],
        type: "talk",
        preview: whyDoWeCreateCommunities,
        youtube: "https://www.youtube.com/embed/h_vmHQhvz_U?si=JJAhey4pela7GDAe",
        start: "2024-06-01T23:50:00.000Z",
        end: "2024-06-01T00:20:00.000Z",
    },
    {
        slug: "how-browsers-render-shadows-and-curves",
        speaker: "aleksander-korotaev",
        name: "How Browsers Render Shadows and Curves",
        description:
            "Sasha Korotaev, developer, organizer of SPB Frontend and BeerJS Spb, and member of the Holy.js Program Committee, will explain how browsers draw shadows, round corners, and process vector graphics — from CSS rules to the graphics card.",
        labels: ["css", "graphics", "browsers"],
        type: "talk",
        preview: tjsMeetup7Image,
        youtube: "",
        start: "2025-08-16T10:30:00.000Z",
        end: "2025-08-16T11:00:00.000Z",
    },
    {
        slug: "responsive-typography-in-web",
        speaker: "tanya-fokina",
        name: "Responsive Typography in the Web",
        description:
            "Tanya Fokina, editor at Doka and web accessibility expert, will share how to work with responsive typography, where it’s needed, and why it matters.",
        labels: ["typography", "accessibility", "frontend"],
        type: "talk",
        preview: tjsMeetup7Image,
        youtube: "",
        start: "2025-08-16T11:10:00.000Z",
        end: "2025-08-16T11:40:00.000Z",
    },
    {
        slug: "growing-as-a-developer-long-term",
        speaker: "anna-shiryaeva",
        name: "Growing as a Developer in the Long Run",
        description:
            "Anya Shiryaeva, Lead Frontend Developer at Sibur Digital and organizer of MoscowJS, will talk about how to grow and develop as a professional, even if you’ve been in the industry for many years.",
        labels: ["career", "growth", "frontend"],
        type: "talk",
        preview: tjsMeetup7Image,
        youtube: "",
        start: "2025-08-16T11:50:00.000Z",
        end: "2025-08-16T12:20:00.000Z",
    },
    {
        slug: "writing-a-compiler-for-a-disappearing-framework",
        speaker: "daniil-savitskii",
        name: "Writing a Compiler for a Disappearing Framework",
        description:
            "Danya Savitskiy, Senior Frontend Engineer at Quantori, will share the story of writing his own compiler for a framework that’s fading away — and what he learned in the process.",
        labels: ["compilers", "frameworks", "frontend"],
        type: "talk",
        preview: tjsMeetup7Image,
        youtube: "",
        start: "2025-08-16T12:40:00.000Z",
        end: "2025-08-16T13:10:00.000Z",
    },
    {
        slug: "microfrontends-business-vs-development",
        speaker: "nikita-potapov",
        name: "Microfrontends: Business vs Development",
        description:
            "Nikita Potapov, Frontend Lead at Exante, will explain what microfrontends are, discuss their pros and cons, and help us figure out who needs them more — business or development teams.",
        labels: ["microfrontends", "architecture", "frontend"],
        type: "talk",
        preview: tjsMeetup7Image,
        youtube: "",
        start: "2025-08-16T13:20:00.000Z",
        end: "2025-08-16T13:50:00.000Z",
    },
];
