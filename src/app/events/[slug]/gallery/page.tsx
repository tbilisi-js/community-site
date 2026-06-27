import { notFound } from "next/navigation";

import { Background } from "@src/components/elements/background";
import { events } from "@src/core/mock/events";
import { CatsPattern } from "@src/components/sections/cats-pattern";
import { GalleryGrid } from "@src/components/sections/gallery-grid";
import { buildAllS3Photos, type S3GalleryStruct } from "@src/core/gallery/s3";

type Params = Promise<{ slug: string }>;

const EventGalleryPage: React.FC<{ params: Params }> = async ({ params }) => {
    const { slug } = await params;
    const event = events.find((eventItem) => eventItem.slug === slug);

    if (!event?.gallerySource) return notFound();

    const res = await fetch(event.gallerySource);
    const struct: S3GalleryStruct = await res.json();

    if (!struct.photos.length) return notFound();

    const photos = buildAllS3Photos(struct, event.name);

    return (
        <>
            <Background>
                <GalleryGrid photos={photos} />
            </Background>
            <Background>
                <CatsPattern />
            </Background>
        </>
    );
};

export const generateStaticParams = () => events.filter((event) => event.gallerySource).map(({ slug }) => ({ slug }));

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
