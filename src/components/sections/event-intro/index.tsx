import Image from "next/image";
import Link from "next/link";

import { type Sponsor } from "@src/core/data/sponsors";
import { Block } from "@src/components/ui/block";
import { linkifyText } from "@src/core/utils/linkify";
import { Button } from "@src/components/ui/button";
import { SwapWrapper } from "@src/components/elements/swap-wrapper";

import "./event-intro.scss";

export interface EventIntroProps {
    title: string;
    image: string;
    description?: string;
    speakers?: { name: string; slug: string }[];
    sponsor?: Sponsor;
    youtubePlaylist?: string;
    date: string;
    registrationLink?: string;
}

export const EventIntro: React.FC<EventIntroProps> = ({
    title,
    image,
    description,
    speakers = [],
    sponsor,
    youtubePlaylist,
    date,
    registrationLink,
}) => {
    return (
        <Block className="event-intro">
            <h1 className="event-intro-title">{title}</h1>
            <div className="event-intro-body">
                <div className="event-intro-cover">
                    <Image src={image} alt={title} width={1200} height={630} className="event-intro-cover-image" />
                </div>
                <div className="event-intro-content">
                    {description && <p className="event-intro-description">{linkifyText(description, speakers)}</p>}
                    {sponsor && (
                        <p className="event-intro-sponsor">
                            This event was supported by the awesome folks at{" "}
                            <Link
                                href={sponsor.url}
                                className="event-intro-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {sponsor.name}
                            </Link>{" "}
                            — {sponsor.tagline}.
                        </p>
                    )}
                    <div className="event-intro-actions">
                        {registrationLink && (
                            <SwapWrapper
                                before={
                                    <Button
                                        variant="primary"
                                        size="md"
                                        href={registrationLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Register
                                    </Button>
                                }
                                after={null}
                                at={new Date(date).getTime() + 600000}
                            />
                        )}
                        {youtubePlaylist && (
                            <Button
                                variant="primary"
                                size="md"
                                href={youtubePlaylist}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Watch on YouTube
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </Block>
    );
};
