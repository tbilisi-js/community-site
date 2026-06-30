import { notFound } from "next/navigation";

import { Background } from "@src/components/elements/background";
import { EventIntro } from "@src/components/sections/event-intro";
import { Tapes } from "@src/components/sections/tapes";
import { Schedule } from "@src/components/sections/schedule";
import { events } from "@src/core/data/events";
import { talks, type Talk } from "@src/core/data/talks";
import { speakers, type Speaker } from "@src/core/data/speakers";
import { CommunityGallery } from "@src/components/sections/community-gallery";
import { YoutubePlayer } from "@src/components/sections/youtube-player";
import { CatsPattern } from "@src/components/sections/cats-pattern";
import { SpeakersList } from "@src/components/sections/speakers-list";
import { sponsors } from "@src/core/data/sponsors";
import { buildAllS3Photos, type S3GalleryStruct } from "@src/core/gallery/s3";

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

    const eventSpeakers: Speaker[] = eventTalks.flatMap((talk) => (talk.speaker ? [talk.speaker] : []));

    let s3Photos = undefined;
    if (event.gallerySource) {
        const res = await fetch(event.gallerySource);
        const struct: S3GalleryStruct = await res.json();
        if (struct.photos.length) {
            s3Photos = buildAllS3Photos(struct, event.name).slice(0, 7);
        }
    }

    return (
        <>
            <Background>
                <EventIntro
                    title={event.name}
                    image={event.image}
                    description={event.description}
                    speakers={eventSpeakers}
                    sponsor={event.sponsor ? sponsors[event.sponsor] : undefined}
                    youtubePlaylist={event.youtubePlaylist}
                    registrationLink={event.registration || undefined}
                    date={event.date}
                />
                <Tapes date={event.date} />
            </Background>
            {event.youtube && new Date(event.date) > new Date() && (
                <Background>
                    <YoutubePlayer src={event.youtube} />
                </Background>
            )}
            <Background>
                <SpeakersList speakers={eventSpeakers} />
            </Background>
            <Background>
                <Schedule talks={eventTalks} speakers={speakers} />
            </Background>
            <Background>
                <CommunityGallery s3Photos={s3Photos} galleryUrl={s3Photos ? `/events/${slug}/gallery` : undefined} />
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
