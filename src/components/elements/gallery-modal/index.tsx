import Image, { type StaticImageData } from "next/image";

import { IconButton } from "@src/components/ui/icon-button";

import "./gallery-modal.scss";

export interface GalleryModalProps {
    images: {
        img: string | StaticImageData;
        alt: string;
    }[];
    store: number;
    handleClose: () => void;
    handlePrev: () => void;
    handleNext: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ images, store, handleClose, handlePrev, handleNext }) => {
    return (
        <div className="gallery-modal">
            <div className="gallery-modal-backdrop" onClick={handleClose} />
            <Image
                width={960}
                height={960}
                src={images[store].img}
                alt={images[store].alt}
                className="gallery-modal-img"
                unoptimized
            />
            <p className="gallery-modal-alt">{images[store].alt}</p>
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
