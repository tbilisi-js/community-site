"use client";

import { useState } from "react";
import { type StaticImageData } from "next/image";
import cn from "classnames";

import { Icon } from "@src/components/ui/icon";
import { IconButton } from "@src/components/ui/icon-button";
import { downloadPhoto } from "@src/core/gallery/download";

import { DownloadErrorNotification } from "./download-error-notification";
import "./gallery-modal.scss";

export interface GalleryModalProps {
    images: {
        img: string | StaticImageData;
        alt: string;
        downloadUrl?: string;
        filename?: string;
    }[];
    store: number;
    handleClose: () => void;
    handlePrev: () => void;
    handleNext: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ images, store, handleClose, handlePrev, handleNext }) => {
    const [downloading, setDownloading] = useState(false);
    const [downloadError, setDownloadError] = useState(false);
    const current = images[store];

    const handleDownload = async () => {
        if (!current.downloadUrl || downloading) return;
        setDownloading(true);
        setDownloadError(false);
        try {
            await downloadPhoto(current.downloadUrl, current.filename ?? "photo.jpg");
        } catch (error) {
            console.error("Failed to download photo", error);
            setDownloadError(true);
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
                    className={cn("gallery-modal-download", downloading && "gallery-modal-download--loading")}
                    onClick={handleDownload}
                    disabled={downloading}
                    title="Download original"
                >
                    <Icon
                        name={downloading ? "spinner" : "download"}
                        width={20}
                        height={20}
                        className={cn(downloading && "gallery-modal-download-spinner")}
                    />
                </button>
            )}
            {downloadError && <DownloadErrorNotification onClose={() => setDownloadError(false)} />}
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
