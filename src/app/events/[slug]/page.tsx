import Link from "next/link";

import { events } from "@src/core/mock/events";

type Params = Promise<{ slug: string }>;

const ConferencePage: React.FC<{ params: Params }> = async ({ params }) => {
    const { slug } = await params;

    return (
        <section>
            <p>Conference Page ({slug})</p>
            <Link href="/events">See all events</Link>
        </section>
    );
};

export const generateStaticParams = () => events.map(({ slug }) => ({ slug }));

export default ConferencePage;
