import { type Metadata } from "next/types";

import { HomeIntro } from "../components/sections/home-intro";
import { SwapWrapper } from "../components/elements/swap-wrapper";
import { Announcement } from "../components/sections/announcement";
import { YoutubePlayer } from "../components/sections/youtube-player";
import { AboutCommunity } from "../components/sections/about-community";
import { Events } from "../components/sections/events";
import { CallForSpeakers } from "../components/sections/call-for-speakers";
import { Organisers } from "../components/sections/organisers";
import { JoinUs } from "../components/sections/join-us";
import { CatsPattern } from "../components/sections/cats-pattern";
import { Background } from "../components/elements/background";
import { events } from "../core/mock/events";

const HomePage = () => (
    <>
        <Background density={5}>
            <HomeIntro />
        </Background>
        <Background>
            <SwapWrapper
                before={<Announcement event={events[0]} />}
                after={<YoutubePlayer src={events[0].youtube} />}
                at={new Date(events[0].date).getTime() - 600000}
            />
        </Background>
        <Background>
            <AboutCommunity />
        </Background>
        <Background>
            <Events events={events} />
        </Background>
        <Background>
            <CallForSpeakers />
        </Background>
        <Background>
            <Organisers />
        </Background>
        <Background>
            <JoinUs />
        </Background>
        <Background>
            <CatsPattern />
        </Background>
    </>
);

export const metadata: Metadata = {
    title: "Tbilisi JS People",
    description:
        "Tbilisi JavaScript and TypeScript RU-EN speaking Community. We are united by our interest in technology and progress, a love for knowledge, and a genuine wish to support each other",
    openGraph: {
        type: "website",
        images: "/preview.jpg",
        locale: "en_US",
    },
};

export default HomePage;
