import { HomeIntro } from "../components/sections/home-intro";
import { Announcement } from "../components/sections/announcement";
import { AboutCommunity } from "../components/sections/about-community";
import { Events } from "../components/sections/events";
import { CallForSpeakers } from "../components/sections/call-for-speakers";
import { Organisers } from "../components/sections/organisers";
import { JoinUs } from "../components/sections/join-us";
import { CatsPattern } from "../components/sections/cats-pattern";
import { StarsWrapper } from "../components/elements/stars-wrapper";

const HomePage = () => (
    <>
        <StarsWrapper density={3}>
            <HomeIntro />
        </StarsWrapper>
        <StarsWrapper>
            <Announcement />
        </StarsWrapper>
        <StarsWrapper>
            <AboutCommunity />
        </StarsWrapper>
        <StarsWrapper>
            <Events />
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

export default HomePage;
