import Link from "next/link";

import { events } from "@src/core/mock/events";

const ConferencesPage = () => (
    <section>
        <p>Conferences Page</p>
        <ul>
            {events.map((event) => (
                <li key={event.slug}>
                    <Link href={`/events/${event.slug}`}>{event.name}</Link>
                </li>
            ))}
        </ul>
    </section>
);

export default ConferencesPage;
