import { type Metadata } from "next/types";

import { Background } from "@src/components/elements/background";
import { PeopleIntro } from "@src/components/sections/people-intro";
import { PeopleList } from "@src/components/sections/people-list";
import { CallForSpeakers } from "@src/components/sections/call-for-speakers";
import { JoinUs } from "@src/components/sections/join-us";
import { CatsPattern } from "@src/components/sections/cats-pattern";
import { CommunityGallery } from "@src/components/sections/community-gallery";

const PeoplePage = () => (
    <>
        <Background density={3}>
            <PeopleIntro />
        </Background>
        <Background>
            <PeopleList />
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
    title: "Tbilisi JS People",
    description:
        "Bringing together experts and enthusiasts to change the future of the web - conferences about technologies, trends and people",
    openGraph: {
        type: "website",
        images: "/preview.jpg",
        locale: "en_US",
    },
};

export default PeoplePage;
