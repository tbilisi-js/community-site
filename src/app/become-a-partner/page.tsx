import { type Metadata } from "next/types";

import { Background } from "@src/components/elements/background";
import { OurPartners } from "@src/components/sections/our-partners";
import { AboutCommunity } from "@src/components/sections/about-community";
import { BecomePartnerIntro } from "@src/components/sections/become-partner-intro";
import { CatsPattern } from "@src/components/sections/cats-pattern";
import { Events } from "@src/components/sections/events";
import { HowToHelp } from "@src/components/sections/how-to-help";
import { WhatDoYouGet } from "@src/components/sections/what-do-you-get";
import { events } from "@src/core/mock/events";

const BecomeAPartnerPage = () => (
    <>
        <Background density={3}>
            <BecomePartnerIntro />
        </Background>
        <Background>
            <OurPartners />
        </Background>
        <Background>
            <AboutCommunity />
        </Background>
        <Background>
            <HowToHelp />
        </Background>
        <Background>
            <Events events={events} />
        </Background>
        <Background>
            <WhatDoYouGet />
        </Background>
        <Background>
            <CatsPattern />
        </Background>
    </>
);

export const metadata: Metadata = {
    title: "Become a Partner",
    description:
        "Bringing together business, community, and technology. Seeking partners to explore new horizons together",
    openGraph: {
        type: "website",
        images: "/preview.jpg",
        locale: "en_US",
    },
};

export default BecomeAPartnerPage;
