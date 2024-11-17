import Link from "next/link";

import { conferences } from "@src/core/mock/conferences";

const ConferencesPage = () => (
    <section className="container mx-auto py-20 px-4">
        <p>Conferences Page</p>
        <ul className="list-disc">
            {conferences.map((conference) => (
                <li key={conference.slug}>
                    <Link href={`/conferences/${conference.slug}`} className="block py-1 hover:text-blue-700">
                        {conference.name}
                    </Link>
                </li>
            ))}
        </ul>
    </section>
);

export default ConferencesPage;
