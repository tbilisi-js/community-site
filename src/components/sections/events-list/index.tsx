import Link from "next/link";
import Image from "next/image";

import { type Event } from "@src/core/mock/events";
import { formatDate } from "@src/core/utils/formatDate";
import { Block } from "@src/components/ui/block";

import "./events-list.scss";

export interface EventsListProps {
    events: Event[];
}

export const EventsList: React.FC<EventsListProps> = ({ events }) => (
    <Block className="events-list" id="events">
        <ul className="events-list-cards">
            {events.map((event) => (
                <li className="events-list-card" key={event.slug}>
                    <Link href={`/events/${event.slug}`} className="events-list-link">
                        <div className="events-list-visual">
                            <Image src={event.image} alt="" className="events-list-image" loading="lazy" />
                            <p className="events-list-date">{formatDate(event.date)}</p>
                        </div>
                        <p className="events-list-title">{event.name}</p>
                    </Link>
                </li>
            ))}
        </ul>
    </Block>
);
