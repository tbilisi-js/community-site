import Link from "next/link";

import { talks } from "@src/core/mock/talks";

const TalksPage = () => (
    <section className="container mx-auto py-20 px-4">
        <p>Talks Page</p>
        <ul className="list-disc">
            {talks.map((talk) => (
                <li key={talk.slug}>
                    <Link href={`/talks/${talk.slug}`} className="block py-1 hover:text-blue-700">
                        {talk.name}
                    </Link>
                </li>
            ))}
        </ul>
    </section>
);

export default TalksPage;
