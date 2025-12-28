import { notFound } from "next/navigation";

import { Background } from "@src/components/elements/background";
import { events } from "@src/core/mock/events";
import { CatsPattern } from "@src/components/sections/cats-pattern";
import { GalleryGrid } from "@src/components/sections/gallery-grid";

type Params = Promise<{ slug: string }>;

const EventGalleryPage: React.FC<{ params: Params }> = async ({ params }) => {
    const { slug } = await params;
    const event = events.find((eventItem) => eventItem.slug === slug);

    if (!event?.gallerySource) return notFound();

    const gallery = await fetch(event.gallerySource);
    const galleryData = await gallery.json();

    if (!galleryData.files.length) return notFound();

    return (
        <>
            <Background>
                <GalleryGrid files={galleryData.files} baseUrl={galleryData.base_url} />
            </Background>
            <Background>
                <CatsPattern />
            </Background>
        </>
    );
};

export const generateStaticParams = () => events.map(({ slug }) => ({ slug }));

export const generateMetadata = async ({ params }: { params: Params }) => {
    const { slug } = await params;
    const event = events.find((eventItem) => eventItem.slug === slug);

    if (!event?.gallerySource) return notFound();

    return {
        title: `${event.name} Gallery`,
        description: event.promo,
    };
};

export default EventGalleryPage;
