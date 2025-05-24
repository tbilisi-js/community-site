import { Block } from "@src/components/ui/block";
import { AnnouncementTimer } from "@src/components/elements/announcement-timer";
import { SwapWrapper } from "@src/components/elements/swap-wrapper";
import { Arrow } from "@src/components/ui/arrow";

import "./event-intro.scss";

export interface EventIntroProps {
    title: string;
    date: string;
}

export const EventIntro: React.FC<EventIntroProps> = ({ title, date }) => {
    return (
        <Block className="event-intro">
            <h1 className="event-intro-title">{title}</h1>
            <SwapWrapper
                before={<AnnouncementTimer nextConfDate={date} className="event-intro-timer" />}
                after={<></>}
                at={new Date(date).getTime()}
            />
            <Arrow className="event-intro-arrow" />
        </Block>
    );
};
