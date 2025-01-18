import Link from "next/link";

import { conferences } from "@src/core/mock/conferences";

const ConferencesPage = () => (
    <section>
        <p>Conferences Page</p>
        <ul>
            {conferences.map((conference) => (
                <li key={conference.slug}>
                    <Link href={`/conferences/${conference.slug}`}>{conference.name}</Link>
                </li>
            ))}
        </ul>
    </section>
);

export default ConferencesPage;
