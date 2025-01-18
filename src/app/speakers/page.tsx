import Link from "next/link";

import { speakers } from "@src/core/mock/speakers";

const SpeakersPage = () => (
    <section>
        <p>Speakers Page</p>
        <ul>
            {speakers.map((speaker) => (
                <li key={speaker.slug}>
                    <Link href={`/speakers/${speaker.slug}`}>{speaker.name}</Link>
                </li>
            ))}
        </ul>
    </section>
);

export default SpeakersPage;
