import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { Block } from "@src/components/ui/block";
import { linkifyText } from "@src/core/utils/linkify";
import { type Sponsor } from "@src/core/mock/sponsors";

import "./event-intro.scss";

export interface EventIntroProps {
    title: string;
    image: StaticImageData;
    description?: string;
    speakers?: { name: string; slug: string }[];
    sponsor?: Sponsor;
    youtubePlaylist?: string;
}

export const EventIntro: React.FC<EventIntroProps> = ({
    title,
    image,
    description,
    speakers = [],
    sponsor,
    youtubePlaylist,
}) => {
    return (
        <Block className="event-intro">
            <h1 className="event-intro-title">{title}</h1>
            <div className="event-intro-body">
                <div className="event-intro-cover">
                    <Image src={image} alt={title} className="event-intro-cover-image" />
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
                    {youtubePlaylist && (
                        <a
                            href={youtubePlaylist}
                            className="event-intro-youtube"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Watch on YouTube
                        </a>
                    )}
                </div>
            </div>
        </Block>
    );
};
