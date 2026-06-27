"use client";

import { GalleryModal } from "@src/components/elements/gallery-modal";
import { useModal } from "@src/components/elements/gallery-modal/use-modal";
import { type S3Photo } from "@src/core/gallery/s3";

import "./gallery-grid.scss";

export interface GalleryGridProps {
    photos: S3Photo[];
}

export const GalleryGrid = ({ photos }: GalleryGridProps) => {
    const modalImages = photos.map((p) => ({ img: p.large, alt: p.alt }));
    const { store, handleOpen, handleClose, handlePrev, handleNext } = useModal(modalImages);

    return (
        <div className="gallery-grid">
            {photos.map((photo, index) => (
                <div key={photo.preview} className="gallery-grid-item" onClick={() => handleOpen(index)}>
                    <picture>
                        <source
                            type="image/webp"
                            srcSet={`${photo.thumbnail} 400w, ${photo.preview} 800w, ${photo.large} 1600w`}
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <img
                            src={photo.preview}
                            alt={photo.alt}
                            className="gallery-grid-item-image"
                            loading="lazy"
                            decoding="async"
                        />
                    </picture>
                </div>
            ))}
            {store !== null && (
                <GalleryModal
                    images={modalImages}
                    store={store}
                    handleClose={handleClose}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                />
            )}
        </div>
    );
};
