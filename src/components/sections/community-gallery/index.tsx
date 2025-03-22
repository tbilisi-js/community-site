"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

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

const images = [
    { img: gallery1, alt: "Audience attending a presentation with slides" },
    { img: gallery2, alt: "Community members networking" },
    { img: gallery3, alt: "Woman speaking with a microphone at a community event" },
    { img: gallery4, alt: "Audience members listening attentively" },
    { img: gallery5, alt: "Community members engaged in discussion" },
    { img: gallery6, alt: "Group of people networking after the event" },
    { img: gallery7, alt: "Audience view during a presentation" },
    { img: gallery8, alt: "Speakers on stage discussing JavaScript topics" },
];

export const CommunityGallery = () => {
    const [store, setStore] = useState<number | null>(null);

    const keyboardHandler = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            handleClose();
        }

        if (e.key === "ArrowLeft") {
            handlePrev();
        }
        if (e.key === "ArrowRight") {
            handleNext();
        }
    }, []);

    const handleOpen = useCallback((index: number) => {
        setStore(index);
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", keyboardHandler);
    }, []);

    const handleClose = useCallback(() => {
        setStore(null);
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", keyboardHandler);
    }, []);

    const handlePrev = useCallback(() => {
        setStore((prev) => (prev === null || prev === 0 ? images.length - 1 : prev - 1));
    }, []);

    const handleNext = useCallback(() => {
        setStore((prev) => (prev === null || prev === images.length - 1 ? 0 : prev + 1));
    }, []);

    useEffect(() => {
        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", keyboardHandler);
        };
    }, []);

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
                        key={image.img.src}
                        tabIndex={0}
                        role="button"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleOpen(index);
                            }
                        }}
                    >
                        <Image src={image.img} alt={image.alt} className="community-gallery-card-img" />
                    </li>
                ))}
            </ul>
            {store !== null && (
                <div className="community-gallery-modal">
                    <div className="community-gallery-modal-backdrop" onClick={handleClose} />
                    <Image src={images[store].img} alt={images[store].alt} className="community-gallery-modal-img" />
                    <p className="community-gallery-modal-alt">{images[store].alt}</p>
                    <button className="community-gallery-modal-close" onClick={handleClose}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18 6L6 18M6 6L18 18"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <button className="community-gallery-modal-prev" onClick={handlePrev}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 18L9 12L15 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <button className="community-gallery-modal-next" onClick={handleNext}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9 18L15 12L9 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            )}
        </Block>
    );
};
