"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { GalleryModal } from "@src/components/elements/gallery-modal";
import { useModal } from "@src/components/elements/gallery-modal/use-modal";

import { Block } from "@src/components/ui/block";

import gallery1 from "./img/gallery-1.jpg";
import gallery2 from "./img/gallery-2.jpg";
import gallery3 from "./img/gallery-3.jpg";
import gallery4 from "./img/gallery-4.jpg";
import gallery5 from "./img/gallery-5.jpg";
import gallery6 from "./img/gallery-6.jpg";
import gallery7 from "./img/gallery-7.jpg";
import gallery8 from "./img/gallery-8.jpg";

import "./community-gallery.scss";

const defaultImages = [
    { img: gallery1, alt: "Audience attending a presentation with slides" },
    { img: gallery2, alt: "Community members networking" },
    { img: gallery3, alt: "Woman speaking with a microphone at a community event" },
    { img: gallery4, alt: "Audience members listening attentively" },
    { img: gallery5, alt: "Community members engaged in discussion" },
    { img: gallery6, alt: "Group of people networking after the event" },
    { img: gallery7, alt: "Audience view during a presentation" },
    { img: gallery8, alt: "Speakers on stage discussing JavaScript topics" },
];

export interface CommunityGalleryProps {
    images?: {
        img: StaticImageData | string;
        alt: string;
    }[];
    galleryUrl?: string;
}

export const CommunityGallery: React.FC<CommunityGalleryProps> = ({ images = defaultImages, galleryUrl }) => {
    const { store, handleOpen, handleClose, handlePrev, handleNext } = useModal(images);

    return (
        <Block className="community-gallery" id="community-gallery">
            <ul className="community-gallery-list">
                <li className="community-gallery-card community-gallery-card-head">
                    <h2>
                        That's&nbsp;All About <span className="community-gallery-card-primary">Community</span>
                    </h2>
                </li>
                {images.map((image, index) => (
                    <li
                        className="community-gallery-card"
                        onClick={() => handleOpen(index)}
                        key={typeof image.img === "string" ? image.img : image.img.src}
                        tabIndex={0}
                        role="button"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleOpen(index);
                            }
                        }}
                    >
                        <Image
                            width={960}
                            height={960}
                            src={image.img}
                            alt={image.alt}
                            className="community-gallery-card-img"
                        />
                    </li>
                ))}
                {galleryUrl && (
                    <li className="community-gallery-card">
                        <Link href={galleryUrl} className="community-gallery-card-view-all">
                            View all photos
                        </Link>
                    </li>
                )}
            </ul>
            {store !== null && (
                <GalleryModal
                    images={images}
                    store={store}
                    handleClose={handleClose}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                />
            )}
        </Block>
    );
};
