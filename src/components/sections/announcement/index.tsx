import Image from "next/image";

import { Button } from "@src/components/ui/button";
import { Block } from "@src/components/ui/block";
import { AnnouncementTimer } from "@src/components/elements/announcement-timer";
import { formatDate } from "@src/core/utils/formatDate";
import { nextConfDate } from "@src/core/mock/conferences";

import announcementImg from "./img/announcement.png";

import "./announcement.scss";

export const Announcement = () => (
    <Block id="announcement" bodyClassName="announcement-body">
        <p className="announcement-date">{formatDate(nextConfDate)}</p>
        <h2 className="announcement-heading">Tbilisi js meetup</h2>
        <Image src={announcementImg} alt="" loading="lazy" className="announcement-image" />
        <p className="announcement-description">
            Celebrate 1 year together
            <br />
            let’s chat, chill and eat huge cake 🎂
        </p>
        <div className="announcement-timer-wrapper">
            <svg
                width="372"
                height="161"
                viewBox="0 0 372 161"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="announcement-timer-bg"
            >
                <path
                    d="M34.5 61C34.5 49.9543 43.4543 41 54.5 41H203.5H352.5C363.546 41 372.5 32.0457 372.5 21V0V141C372.5 152.046 363.546 161 352.5 161H0H14.5C25.5457 161 34.5 152.046 34.5 141V131V101V61Z"
                    fill="#001020"
                />
            </svg>
            <AnnouncementTimer nextConfDate={nextConfDate} className="announcement-timer" />
        </div>
        <Button variant="primary" className="announcement-button" size="md">
            Register
        </Button>
    </Block>
);
