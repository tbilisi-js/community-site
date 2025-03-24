import { notFound } from "next/navigation";

import { events } from "@src/core/mock/events";

type Params = Promise<{ slug: string }>;

const ConferencePage: React.FC<{ params: Params }> = async ({ params }) => {
    const { slug } = await params;
    const event = events.find((eventItem) => eventItem.slug === slug);

    if (!event) return notFound();

    return (
        <>
            <p>{event.name}</p>
        </>
    );
};

export const generateStaticParams = () => events.map(({ slug }) => ({ slug }));

export const generateMetadata = async ({ params }: { params: Params }) => {
    const { slug } = await params;
    const event = events.find((eventItem) => eventItem.slug === slug);

    if (!event) return notFound();

    return {
        title: event.name,
        description: event.promo,
    };
};

export default ConferencePage;
