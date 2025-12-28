import { notFound } from "next/navigation";

import { Background } from "@src/components/elements/background";
import { EventIntro } from "@src/components/sections/event-intro";
import { Tapes } from "@src/components/sections/tapes";
import { Schedule } from "@src/components/sections/schedule";
import { events } from "@src/core/mock/events";
import { talks, type Talk } from "@src/core/mock/talks";
import { speakers, type Speaker } from "@src/core/mock/speakers";
import { CommunityGallery } from "@src/components/sections/community-gallery";
import { CatsPattern } from "@src/components/sections/cats-pattern";

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

    const gallery = event.gallerySource && (await fetch(event.gallerySource));
    const galleryData = gallery && (await gallery.json());
    const images = galleryData?.files.map((file: string, index: number) => ({
        img: `${galleryData.base_url}${file}`,
        alt: `Photo from ${event.name} #${index + 1}`,
    }));

    return (
        <>
            <Background>
                <EventIntro title={event.name} date={event.date} />
                <Tapes date={event.date} />
            </Background>
            <Background>
                <Schedule talks={eventTalks} speakers={speakers} />
            </Background>
            <Background>
                <CommunityGallery
                    images={images?.length ? images.slice(-7) : undefined}
                    galleryUrl={images?.length ? `/events/${slug}/gallery` : undefined}
                />
            </Background>
            <Background>
                <CatsPattern />
            </Background>
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
