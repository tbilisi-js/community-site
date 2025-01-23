import { HomeIntro } from "../components/sections/home-intro";
import { AboutCommunity } from "../components/sections/about-community";
import { CallForSpeakers } from "../components/sections/call-for-speakers";
import { Organizers } from "../components/sections/organizers";

const HomePage = () => (
    <>
        <HomeIntro />
        <AboutCommunity />
        <CallForSpeakers />
        <Organizers />
    </>
);

export default HomePage;
