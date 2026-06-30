"use client";

import { useState } from "react";

import { GalleryModal } from "@src/components/elements/gallery-modal";
import { DownloadErrorNotification } from "@src/components/elements/gallery-modal/download-error-notification";
import { useModal } from "@src/components/elements/gallery-modal/use-modal";
import { downloadPhoto, filenameFromAlt } from "@src/core/gallery/download";
import { type S3Photo } from "@src/core/gallery/s3";

import "./gallery-grid.scss";

export interface GalleryGridProps {
    photos: S3Photo[];
}

const DownloadButton = ({ photo }: { photo: S3Photo }) => {
    const [downloading, setDownloading] = useState(false);
    const [downloadError, setDownloadError] = useState(false);

    const handleClick = async (e: React.MouseEvent) => {
        e.stopPropagation();
        if (downloading) return;
        setDownloading(true);
        setDownloadError(false);
        try {
            await downloadPhoto(photo.fullJpg, filenameFromAlt(photo.alt));
        } catch (err) {
            console.error("Failed to download photo", err);
            setDownloadError(true);
        } finally {
            setDownloading(false);
        }
    };

    return (
        <>
            <button
                className={`gallery-grid-download${downloading ? " gallery-grid-download--loading" : ""}`}
                onClick={handleClick}
                disabled={downloading}
                title="Download original"
                aria-label="Download original"
            >
                {downloading ? (
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="gallery-grid-download-spinner"
                    >
                        <circle
                            cx="12"
                            cy="12"
                            r="9"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeDasharray="14 42"
                        />
                    </svg>
                ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 3v13m0 0l-4-4m4 4l4-4M4 20h16"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </button>
            {downloadError && <DownloadErrorNotification onClose={() => setDownloadError(false)} />}
        </>
    );
};

export const GalleryGrid = ({ photos }: GalleryGridProps) => {
    const modalImages = photos.map((p) => ({ img: p.large, alt: p.alt, downloadUrl: p.fullJpg }));
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
                    <DownloadButton photo={photo} />
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
