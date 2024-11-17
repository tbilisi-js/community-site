import Link from "next/link";

type Params = Promise<{ slug: string }>;

const ConferencePage: React.FC<{ params: Params }> = async ({ params }) => {
    const { slug } = await params;

    return (
        <section className="container mx-auto py-20 px-4">
            <p>Conference Page ({slug})</p>
            <Link href="/conferences" className="py-1 hover:text-blue-700">
                See all conferences
            </Link>
        </section>
    );
};

export default ConferencePage;
