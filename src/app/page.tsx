import { HomeIntro } from "../components/sections/home-intro";
import { AboutCommunity } from "../components/sections/about-community";
import { CallForSpeakers } from "../components/sections/call-for-speakers";
import { Organizers } from "../components/sections/organizers";
import { Announcement } from "../components/sections/announcement";

const HomePage = () => (
    <>
        <HomeIntro />
        <Announcement />
        <AboutCommunity />
        <CallForSpeakers />
        <Organizers />
    </>
);

export default HomePage;
