import { type Metadata } from "next/types";

import { events } from "@src/core/mock/events";
import { Background } from "@src/components/elements/background";
import { EventsIntro } from "@src/components/sections/events-intro";
import { EventsList } from "@src/components/sections/events-list";
import { CallForSpeakers } from "@src/components/sections/call-for-speakers";
import { JoinUs } from "@src/components/sections/join-us";
import { CatsPattern } from "@src/components/sections/cats-pattern";
import { CommunityGallery } from "@src/components/sections/community-gallery";

const EventsPage = () => (
    <>
        <Background density={3}>
            <EventsIntro />
        </Background>
        <Background>
            <EventsList events={events} />
        </Background>
        <Background>
            <CallForSpeakers />
        </Background>
        <Background>
            <CommunityGallery />
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
    title: "Tbilisi JS Events",
    description:
        "Bringing together experts and enthusiasts to change the future of the web - conferences about technologies, trends and people",
    openGraph: {
        type: "website",
        images: "/preview.jpg",
        locale: "en_US",
    },
};

export default EventsPage;
