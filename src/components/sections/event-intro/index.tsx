import Link from "next/link";

import { Block } from "@src/components/ui/block";
import { AnnouncementTimer } from "@src/components/elements/announcement-timer";
import { SwapWrapper } from "@src/components/elements/swap-wrapper";
import { Arrow } from "@src/components/ui/arrow";
import { linkifyText } from "@src/core/utils/linkify";
import { type Sponsor } from "@src/core/mock/sponsors";

import "./event-intro.scss";

export interface EventIntroProps {
    title: string;
    date: string;
    description?: string;
    speakers?: { name: string; slug: string }[];
    sponsor?: Sponsor;
}

export const EventIntro: React.FC<EventIntroProps> = ({ title, date, description, speakers = [], sponsor }) => {
    return (
        <Block className="event-intro">
            <h1 className="event-intro-title">{title}</h1>
            {description && <p className="event-intro-description">{linkifyText(description, speakers)}</p>}
            {sponsor && (
                <p className="event-intro-sponsor">
                    This event was supported by the awesome folks at{" "}
                    <Link
                        href={sponsor.url}
                        className="event-intro-description-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {sponsor.name}
                    </Link>{" "}
                    — {sponsor.tagline}.
                </p>
            )}
            <SwapWrapper
                before={<AnnouncementTimer nextConfDate={date} className="event-intro-timer" />}
                after={<></>}
                at={new Date(date).getTime()}
            />
            <Arrow className="event-intro-arrow" />
        </Block>
    );
};
