import Link from "next/link";

import { speakers } from "@src/core/mock/speakers";

type Params = Promise<{ slug: string }>;

const SpeakerPage: React.FC<{ params: Params }> = async ({ params }) => {
    const { slug } = await params;

    return (
        <section>
            <p>Speaker Page ({slug})</p>
            <Link href="/speakers">See all speakers</Link>
        </section>
    );
};

export const generateStaticParams = () => speakers.map(({ slug }) => ({ slug }));

export default SpeakerPage;
