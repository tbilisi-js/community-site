import { notFound } from "next/navigation";

import { talks } from "@src/core/mock/talks";
import { speakers } from "@srccore/mock/speakers";
import { StarsWrapper } from "@src/components/elements/stars-wrapper";
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
            <StarsWrapper>
                <TalkIntro title={talk.name} date={talk.date} speaker={speaker} />
            </StarsWrapper>
            {talk.youtube && (
                <StarsWrapper>
                    <YoutubePlayer src={talk.youtube} />
                </StarsWrapper>
            )}
            <StarsWrapper>
                <TalkAnnouncement
                    description={talk.description}
                    date={talk.date}
                    img={speaker?.img || "/logo-rect.png"}
                />
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
