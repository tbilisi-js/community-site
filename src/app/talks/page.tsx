import Link from "next/link";

import { talks } from "@src/core/mock/talks";

const TalksPage = () => (
    <section>
        <p>Talks Page</p>
        <ul>
            {talks.map((talk) => (
                <li key={talk.slug}>
                    <Link href={`/talks/${talk.slug}`}>{talk.name}</Link>
                </li>
            ))}
        </ul>
    </section>
);

export default TalksPage;
