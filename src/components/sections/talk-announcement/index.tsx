import Image, { StaticImageData } from "next/image";

import { Block } from "@src/components/ui/block";
import { AnnouncementTimer } from "@src/components/elements/announcement-timer";
import { SwapWrapper } from "@src/components/elements/swap-wrapper";

import "./talk-announcement.scss";

export interface TalkAnnouncementProps {
    description: string;
    date: string;
    img: StaticImageData | string;
}

export const TalkAnnouncement: React.FC<TalkAnnouncementProps> = ({ description, date, img }) => (
    <Block id="talk-announcement" bodyClassName="talk-announcement-body">
        <div className="talk-announcement-visual">
            <Image width={512} height={512} src={img} alt="" loading="lazy" className="talk-announcement-image" />
            <SwapWrapper
                before={
                    <div className="talk-announcement-timer-wrapper">
                        <svg
                            width="372"
                            height="161"
                            viewBox="0 0 372 161"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="talk-announcement-timer-bg"
                        >
                            <path
                                d="M34.5 61C34.5 49.9543 43.4543 41 54.5 41H203.5H352.5C363.546 41 372.5 32.0457 372.5 21V0V141C372.5 152.046 363.546 161 352.5 161H0H14.5C25.5457 161 34.5 152.046 34.5 141V131V101V61Z"
                                fill="#001020"
                            />
                        </svg>
                        <AnnouncementTimer nextConfDate={date} className="talk-announcement-timer" />
                    </div>
                }
                after={<></>}
                at={new Date(date).getTime()}
            />
        </div>
        <div className="talk-announcement-description" dangerouslySetInnerHTML={{ __html: description }} />
    </Block>
);
