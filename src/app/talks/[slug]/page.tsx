import Link from "next/link";

import { talks } from "@src/core/mock/talks";

type Params = Promise<{ slug: string }>;

const TalkPage: React.FC<{ params: Params }> = async ({ params }) => {
    const { slug } = await params;

    return (
        <section>
            <p>Talk Page ({slug})</p>
            <Link href="/talks">See all talks</Link>
        </section>
    );
};

export const generateStaticParams = () => talks.map(({ slug }) => ({ slug }));

export default TalkPage;
