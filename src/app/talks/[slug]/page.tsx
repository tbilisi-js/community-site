import { notFound } from "next/navigation";

import { talks } from "@src/core/mock/talks";
import { speakers } from "@src/core/mock/speakers";
import { Background } from "@src/components/elements/background";
import { TalkIntro } from "@src/components/sections/talk-intro";
import { TalkAnnouncement } from "@src/components/sections/talk-announcement";
import { CatsPattern } from "@src/components/sections/cats-pattern";
import { YoutubePlayer } from "@src/components/sections/youtube-player";
import { CallForSpeakers } from "@src/components/sections/call-for-speakers";
import { JoinUs } from "@src/components/sections/join-us";

type Params = Promise<{ slug: string }>;

const TalkPage: React.FC<{ params: Params }> = async ({ params }) => {
    const { slug } = await params;
    const talk = talks.find((talk) => talk.slug === slug);

    if (!talk) return notFound();

    const speaker = speakers.find((speaker) => speaker.slug === talk.speaker);

    return (
        <>
            <Background>
                <TalkIntro title={talk.name} date={talk.start} speaker={speaker} />
            </Background>
            {talk.youtube && (
                <Background>
                    <YoutubePlayer src={talk.youtube} />
                </Background>
            )}
            <Background>
                <TalkAnnouncement
                    description={talk.description}
                    date={talk.start}
                    img={speaker?.img || "/logo-rect.png"}
                />
            </Background>
            <Background>
                <CallForSpeakers />
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

export const generateStaticParams = () => talks.map(({ slug }) => ({ slug }));

export const generateMetadata = async ({ params }: { params: Params }) => {
    const { slug } = await params;
    const talk = talks.find((talk) => talk.slug === slug);

    if (!talk) return notFound();

    return {
        title: talk.name,
        description: talk.name,
        openGraph: {
            type: "website",
            images: typeof talk.preview === "string" ? talk.preview : talk.preview?.src,
            locale: "en_US",
        },
    };
};

export default TalkPage;
