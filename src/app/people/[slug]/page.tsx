import Link from "next/link";

import { speakers } from "@srccore/mock/speakers";

type Params = Promise<{ slug: string }>;

const PersonPage: React.FC<{ params: Params }> = async ({ params }) => {
    const { slug } = await params;

    return (
        <section>
            <p>Person Page ({slug})</p>
            <Link href="/people">See all people</Link>
        </section>
    );
};

export const generateStaticParams = () => speakers.map(({ slug }) => ({ slug }));

export default PersonPage;
