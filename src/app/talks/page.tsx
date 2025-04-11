import { type Metadata } from "next/types";

import { StarsWrapper } from "@src/components/elements/stars-wrapper";
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
        <StarsWrapper density={4}>
            <TalksIntro />
        </StarsWrapper>
        <StarsWrapper>
            <TalksList talks={talks} />
        </StarsWrapper>
        <StarsWrapper>
            <CallForSpeakers />
        </StarsWrapper>
        <StarsWrapper>
            <Events events={events} />
        </StarsWrapper>
        <StarsWrapper>
            <CommunityGallery />
        </StarsWrapper>
        <StarsWrapper>
            <CatsPattern />
        </StarsWrapper>
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
