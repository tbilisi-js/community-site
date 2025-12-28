"use client";

import Image from "next/image";

import { GalleryModal } from "@src/components/elements/gallery-modal";
import { useModal } from "@src/components/elements/gallery-modal/use-modal";

import "./gallery-grid.scss";

export interface GalleryGridProps {
    files: string[];
    baseUrl: string;
}

export const GalleryGrid = ({ files, baseUrl }: GalleryGridProps) => {
    const { store, handleOpen, handleClose, handlePrev, handleNext } = useModal(
        files.map((file) => ({ img: `${baseUrl}${file}`, alt: file })),
    );
    return (
        <div className="gallery-grid">
            {files.map((file, index) => (
                <div key={file} className="gallery-grid-item">
                    <Image
                        src={`${baseUrl}${file}`}
                        alt={file}
                        width={360}
                        height={360}
                        className="gallery-grid-item-image"
                        loading="lazy"
                        onClick={() => handleOpen(index)}
                    />
                </div>
            ))}
            {store !== null && (
                <GalleryModal
                    images={files.map((file) => ({ img: `${baseUrl}${file}`, alt: file }))}
                    store={store}
                    handleClose={handleClose}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                />
            )}
        </div>
    );
};
