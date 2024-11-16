import { HomeIntro } from "../components/blocks/home-intro";
import { Schedule } from "../components/blocks/schedule";
import { Tickets } from "../components/blocks/tickets";
import { PreviousConferences } from "../components/blocks/previous-conferences";

const HomePage = () => (
    <>
        <HomeIntro />
        <Schedule />
        <Tickets />
        <PreviousConferences />
    </>
);

export default HomePage;
