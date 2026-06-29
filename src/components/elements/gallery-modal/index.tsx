"use client";

import { useState } from "react";
import { type StaticImageData } from "next/image";

import { IconButton } from "@src/components/ui/icon-button";

import "./gallery-modal.scss";

export interface GalleryModalProps {
    images: {
        img: string | StaticImageData;
        alt: string;
        downloadUrl?: string;
    }[];
    store: number;
    handleClose: () => void;
    handlePrev: () => void;
    handleNext: () => void;
}

async function downloadPhoto(url: string, filename: string) {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);
}

function filenameFromAlt(alt: string): string {
    return (
        alt
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "") + ".jpg"
    );
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ images, store, handleClose, handlePrev, handleNext }) => {
    const [downloading, setDownloading] = useState(false);
    const current = images[store];

    const handleDownload = async () => {
        if (!current.downloadUrl || downloading) return;
        setDownloading(true);
        try {
            await downloadPhoto(current.downloadUrl, filenameFromAlt(current.alt));
        } finally {
            setDownloading(false);
        }
    };

    return (
        <div className="gallery-modal">
            <div className="gallery-modal-backdrop" onClick={handleClose} />
            <img
                width={960}
                height={960}
                src={typeof current.img === "string" ? current.img : current.img.src}
                alt={current.alt}
                className="gallery-modal-img"
            />
            <p className="gallery-modal-alt">{current.alt}</p>
            {current.downloadUrl && (
                <button
                    className={`gallery-modal-download${downloading ? " gallery-modal-download--loading" : ""}`}
                    onClick={handleDownload}
                    disabled={downloading}
                    title="Download original"
                >
                    {downloading ? (
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="gallery-modal-download-spinner"
                        >
                            <circle
                                cx="12"
                                cy="12"
                                r="9"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeDasharray="14 42"
                            />
                        </svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 3v13m0 0l-4-4m4 4l4-4M4 20h16"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </button>
            )}
            <IconButton variant="light" className="gallery-modal-close" onClick={handleClose}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18 6L6 18M6 6L18 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </IconButton>
            <IconButton variant="light" className="gallery-modal-prev" onClick={handlePrev}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </IconButton>
            <IconButton variant="light" className="gallery-modal-next" onClick={handleNext}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </IconButton>
        </div>
    );
};
