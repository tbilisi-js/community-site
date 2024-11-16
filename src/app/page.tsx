import { Header } from "../components/elements/header";
import { HomeIntro } from "../components/blocks/home-intro";
import { Schedule } from "../components/blocks/schedule";
import { Tickets } from "../components/blocks/tickets";
import { PreviousConferences } from "../components/blocks/previous-conferences";
import { Footer } from "../components/elements/footer";

export default function ConferenceHome() {
    const conferenceDate = new Date("2024-12-16T16:30:00.000Z");

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main>
                <HomeIntro conferenceDate={conferenceDate} />
                <Schedule />
                <Tickets />
                <PreviousConferences />
            </main>
            <Footer />
        </div>
    );
}
