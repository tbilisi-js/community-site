import { HomeIntro } from "../components/blocks/home-intro";
import { Schedule } from "../components/blocks/schedule";
import { Tickets } from "../components/blocks/tickets";
import { PreviousConferences } from "../components/blocks/previous-conferences";
import { Speakers } from "../components/blocks/speakers";

const HomePage = () => (
    <>
        <HomeIntro />
        <Schedule />
        <Tickets />
        <PreviousConferences />
        <Speakers />
    </>
);

export default HomePage;
