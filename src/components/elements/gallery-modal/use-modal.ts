import { type StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";

export const useModal = (images: { img: string | StaticImageData; alt: string }[]) => {
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

    return {
        store,
        handleOpen,
        handleClose,
        handlePrev,
        handleNext,
    };
};
