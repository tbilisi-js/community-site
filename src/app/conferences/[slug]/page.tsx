import Link from "next/link";

import { conferences } from "@src/core/mock/conferences";

type Params = Promise<{ slug: string }>;

const ConferencePage: React.FC<{ params: Params }> = async ({ params }) => {
    const { slug } = await params;

    return (
        <section>
            <p>Conference Page ({slug})</p>
            <Link href="/conferences">See all conferences</Link>
        </section>
    );
};

export const generateStaticParams = () => conferences.map(({ slug }) => ({ slug }));

export default ConferencePage;
