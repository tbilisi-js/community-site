"use client";

import { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { generateStars, Star } from "./generate-stars";

import "./stars-wrapper.scss";

export interface StarsWrapperProps {
    children: React.ReactNode;
    density?: number;
}

export const StarsWrapper: React.FC<StarsWrapperProps> = ({ children, density = 1 }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const starsRef = useRef<HTMLDivElement | null>(null);
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        if (containerRef.current) {
            const newStars = generateStars(containerRef.current, density);
            setStars(newStars);
        }

        let timeout: NodeJS.Timeout | null = null;
        const resizeHandler = () => {
            starsRef.current?.classList.remove("_active");
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                if (containerRef.current) {
                    const newStars = generateStars(containerRef.current, density);
                    setStars(newStars);
                    timeout = null;
                    starsRef.current?.classList.add("_active");
                }
            }, 300);
        };
        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <div ref={containerRef} className="stars-wrapper">
            <div ref={starsRef} className={cn("stars", stars.length && "_active")}>
                {stars.map((star) => (
                    <span
                        key={star.key}
                        style={{
                            left: star.x,
                            top: star.y,
                            width: star.size,
                            height: star.size,
                        }}
                        className="star"
                    />
                ))}
            </div>
            {children}
        </div>
    );
};
