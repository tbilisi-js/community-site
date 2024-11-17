import Link from "next/link";

import { talks } from "@src/core/mock/talks";

type Params = Promise<{ slug: string }>;

const TalkPage: React.FC<{ params: Params }> = async ({ params }) => {
    const { slug } = await params;

    return (
        <section className="container mx-auto py-20 px-4">
            <p>Talk Page ({slug})</p>
            <Link href="/talks" className="py-1 hover:text-blue-700">
                See all talks
            </Link>
        </section>
    );
};

export const generateStaticParams = () => talks.map(({ slug }) => ({ slug }));

export default TalkPage;
