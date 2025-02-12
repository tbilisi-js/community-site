import { type Metadata } from "next/types";

import { HomeIntro } from "../components/sections/home-intro";
import { Announcement } from "../components/sections/announcement";
import { AboutCommunity } from "../components/sections/about-community";
import { Events } from "../components/sections/events";
import { CallForSpeakers } from "../components/sections/call-for-speakers";
import { Organisers } from "../components/sections/organisers";
import { JoinUs } from "../components/sections/join-us";
import { CatsPattern } from "../components/sections/cats-pattern";
import { StarsWrapper } from "../components/elements/stars-wrapper";
import { events } from "../core/mock/events";

const HomePage = () => (
    <>
        <StarsWrapper density={5}>
            <HomeIntro />
        </StarsWrapper>
        {new Date(events[0].date).getTime() > new Date().getTime() && (
            <StarsWrapper>
                <Announcement event={events[0]} />
            </StarsWrapper>
        )}
        <StarsWrapper>
            <AboutCommunity />
        </StarsWrapper>
        <StarsWrapper>
            <Events events={events} />
        </StarsWrapper>
        <StarsWrapper>
            <CallForSpeakers />
        </StarsWrapper>
        <StarsWrapper>
            <Organisers />
        </StarsWrapper>
        <StarsWrapper>
            <JoinUs />
        </StarsWrapper>
        <StarsWrapper>
            <CatsPattern />
        </StarsWrapper>
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
