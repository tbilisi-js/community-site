import Image from "next/image";

import { type Event } from "@src/core/mock/events";
import { Button } from "@src/components/ui/button";
import { Block } from "@src/components/ui/block";
import { AnnouncementTimer } from "@src/components/elements/announcement-timer";
import { formatDate } from "@src/core/utils/formatDate";
import { TimerBackgroundIcon } from "@src/components/icons";

import announcementImg from "./img/announcement.png";

import "./announcement.scss";

export interface AnnouncementProps {
    event: Event;
}

export const Announcement: React.FC<AnnouncementProps> = ({ event }) => (
    <Block id="announcement" bodyClassName="announcement-body">
        <p className="announcement-date">{formatDate(event.date)}</p>
        <h2 className="announcement-heading">{event.name}</h2>
        <Image src={announcementImg} alt="" loading="lazy" className="announcement-image" />
        {event.promo && <p className="announcement-description">{event.promo}</p>}
        <div className="announcement-timer-wrapper">
            <TimerBackgroundIcon className="announcement-timer-bg" />
            <AnnouncementTimer nextConfDate={event.date} className="announcement-timer" />
        </div>
        <Button
            variant="primary"
            size="md"
            href={event.registration}
            target="_blank"
            rel="noopener noreferrer"
            className="announcement-button"
        >
            Register
        </Button>
    </Block>
);
