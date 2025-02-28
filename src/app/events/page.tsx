import { StarsWrapper } from "@src/components/elements/stars-wrapper";
import { EventsIntro } from "@src/components/sections/events-intro";
import { EventsList } from "@src/components/sections/events-list";
import { CallForSpeakers } from "../../components/sections/call-for-speakers";
import { JoinUs } from "../../components/sections/join-us";
import { CatsPattern } from "../../components/sections/cats-pattern";

const EventsPage = () => (
    <>
        <StarsWrapper density={3}>
            <EventsIntro />
        </StarsWrapper>
        <StarsWrapper>
            <EventsList />
        </StarsWrapper>
        <StarsWrapper>
            <CallForSpeakers />
        </StarsWrapper>
        <StarsWrapper>
            <JoinUs />
        </StarsWrapper>
        <StarsWrapper>
            <CatsPattern />
        </StarsWrapper>
    </>
);

export default EventsPage;
