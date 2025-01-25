import { HomeIntro } from "../components/sections/home-intro";
import { AboutCommunity } from "../components/sections/about-community";
import { CallForSpeakers } from "../components/sections/call-for-speakers";
import { Organizers } from "../components/sections/organizers";
import { Announcement } from "../components/sections/announcement";
import { JoinUs } from "../components/sections/join-us";
import { CatsPattern } from "../components/sections/cats-pattern";

const HomePage = () => (
    <>
        <HomeIntro />
        <Announcement />
        <AboutCommunity />
        <CallForSpeakers />
        <Organizers />
        <JoinUs />
        <CatsPattern />
    </>
);

export default HomePage;
