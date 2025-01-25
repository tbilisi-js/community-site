import { HomeIntro } from "../components/sections/home-intro";
import { Announcement } from "../components/sections/announcement";
import { AboutCommunity } from "../components/sections/about-community";
import { Events } from "../components/sections/events";
import { CallForSpeakers } from "../components/sections/call-for-speakers";
import { Organisers } from "../components/sections/organisers";
import { JoinUs } from "../components/sections/join-us";
import { CatsPattern } from "../components/sections/cats-pattern";

const HomePage = () => (
    <>
        <HomeIntro />
        <Announcement />
        <AboutCommunity />
        <Events />
        <CallForSpeakers />
        <Organisers />
        <JoinUs />
        <CatsPattern />
    </>
);

export default HomePage;
