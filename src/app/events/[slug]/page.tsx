import { notFound } from "next/navigation";

import { StarsWrapper } from "@src/components/elements/stars-wrapper";
import { EventIntro } from "@src/components/sections/event-intro";
import { Tapes } from "@src/components/sections/tapes";
import { Schedule } from "@src/components/sections/schedule";
import { events } from "@src/core/mock/events";
import { talks, type Talk } from "@src/core/mock/talks";
import { speakers, type Speaker } from "@src/core/mock/speakers";

type Params = Promise<{ slug: string }>;

const EventPage: React.FC<{ params: Params }> = async ({ params }) => {
    const { slug } = await params;
    const event = events.find((eventItem) => eventItem.slug === slug);

    if (!event) return notFound();

    const eventTalks = event.talks.reduce<Array<Omit<Talk, "speaker"> & { speaker?: Speaker }>>((acc, cur) => {
        const talk = talks.find((talk) => talk.slug === cur);
        const speaker = speakers.find((speaker) => speaker.slug === talk?.speaker);

        if (talk) {
            acc.push({ ...talk, speaker });
        }

        return acc;
    }, []);

    return (
        <>
            <StarsWrapper>
                <EventIntro title={event.name} date={event.date} />
                <Tapes date={event.date} />
            </StarsWrapper>
            <StarsWrapper>
                <Schedule talks={eventTalks} />
            </StarsWrapper>
        </>
    );
};

export const generateStaticParams = () => events.map(({ slug }) => ({ slug }));

export const generateMetadata = async ({ params }: { params: Params }) => {
    const { slug } = await params;
    const event = events.find((eventItem) => eventItem.slug === slug);

    if (!event) return notFound();

    return {
        title: event.name,
        description: event.promo,
    };
};

export default EventPage;
