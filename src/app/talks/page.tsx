import { type Metadata } from "next/types";

import { Background } from "@src/components/elements/background";
import { TalksList } from "@src/components/sections/talks-list";
import { TalksIntro } from "@src/components/sections/talks-intro";
import { CallForSpeakers } from "@src/components/sections/call-for-speakers";
import { CommunityGallery } from "@src/components/sections/community-gallery";
import { CatsPattern } from "@src/components/sections/cats-pattern";
import { Events } from "@src/components/sections/events";
import { talks } from "@src/core/mock/talks";
import { events } from "@src/core/mock/events";

const TalksPage = () => (
    <>
        <Background density={4}>
            <TalksIntro />
        </Background>
        <Background>
            <TalksList talks={talks} />
        </Background>
        <Background>
            <CallForSpeakers />
        </Background>
        <Background>
            <Events events={events} />
        </Background>
        <Background>
            <CommunityGallery />
        </Background>
        <Background>
            <CatsPattern />
        </Background>
    </>
);

export const metadata: Metadata = {
    title: "Tbilisi JS Talks",
    description: "Talks about technologies, trends and people",
    openGraph: {
        type: "website",
        images: "/preview.jpg",
        locale: "en_US",
    },
};

export default TalksPage;
