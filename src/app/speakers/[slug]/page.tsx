import Link from "next/link";

type Params = Promise<{ slug: string }>;

const SpeakerPage: React.FC<{ params: Params }> = async ({ params }) => {
    const { slug } = await params;

    return (
        <section className="container mx-auto py-20 px-4">
            <p>Speaker Page ({slug})</p>
            <Link href="/speakers" className="py-1 hover:text-blue-700">
                See all speakers
            </Link>
        </section>
    );
};

export default SpeakerPage;
