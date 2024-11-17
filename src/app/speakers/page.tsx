import Link from "next/link";

import { speakers } from "@src/core/mock/speakers";

const SpeakersPage = () => (
    <section className="container mx-auto py-20 px-4">
        <p>Speakers Page</p>
        <ul className="list-disc">
            {speakers.map((speaker) => (
                <li key={speaker.slug}>
                    <Link href={`/speakers/${speaker.slug}`} className="block py-1 hover:text-blue-700">
                        {speaker.name}
                    </Link>
                </li>
            ))}
        </ul>
    </section>
);

export default SpeakersPage;
