import { notFound } from "next/navigation";

import { talks } from "@src/core/mock/talks";
import { speakers } from "@src/core/mock/speakers";
import { events } from "@src/core/mock/events";
import { PersonIntro } from "@src/components/sections/person-intro";
import { Background } from "@src/components/elements/background";
import { CatsPattern } from "@src/components/sections/cats-pattern";
import { CallForSpeakers } from "@src/components/sections/call-for-speakers";
import { JoinUs } from "@src/components/sections/join-us";
import { TalksList } from "@src/components/sections/talks-list";
import { EventsList } from "@src/components/sections/events-list";

type Params = Promise<{ slug: string }>;

const PersonPage: React.FC<{ params: Params }> = async ({ params }) => {
    const { slug } = await params;
    const person = speakers.find((person) => person.slug === slug);

    if (!person) return notFound();

    const personTalks = talks.filter((talk) => talk.speaker === slug);
    const personEvents = events.filter((event) => event.talks.some((talk) => personTalks.some((t) => t.slug === talk)));

    return (
        <>
            <Background>
                <PersonIntro name={person.name} img={person.img} />
            </Background>
            <Background>
                <EventsList events={personEvents} />
            </Background>
            <Background>
                <CallForSpeakers />
            </Background>
            <Background>
                <TalksList talks={personTalks} />
            </Background>
            <Background>
                <JoinUs />
            </Background>
            <Background>
                <CatsPattern />
            </Background>
        </>
    );
};

export const generateStaticParams = () => speakers.map(({ slug }) => ({ slug }));

export const generateMetadata = async ({ params }: { params: Params }) => {
    const { slug } = await params;
    const person = speakers.find((person) => person.slug === slug);

    if (!person) return notFound();

    return {
        title: person.name,
        description: person.name,
        openGraph: {
            type: "website",
            images: person.img,
            locale: "en_US",
        },
    };
};

export default PersonPage;
