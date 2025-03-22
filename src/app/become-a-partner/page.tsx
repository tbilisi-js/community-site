import { type Metadata } from "next/types";

import { StarsWrapper } from "@src/components/elements/stars-wrapper";
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
        <StarsWrapper density={3}>
            <BecomePartnerIntro />
        </StarsWrapper>
        <StarsWrapper>
            <OurPartners />
        </StarsWrapper>
        <StarsWrapper>
            <AboutCommunity />
        </StarsWrapper>
        <StarsWrapper>
            <HowToHelp />
        </StarsWrapper>
        <StarsWrapper>
            <Events events={events} />
        </StarsWrapper>
        <StarsWrapper>
            <WhatDoYouGet />
        </StarsWrapper>
        <StarsWrapper>
            <CatsPattern />
        </StarsWrapper>
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
