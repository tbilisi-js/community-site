"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";

import { TapeContent } from "./tapes-content";

import "./tapes.scss";

export interface TapesProps {
    date: string;
}

export interface TapeCounts {
    left: number;
    right: number;
    ready: boolean;
}

const WINDOW_WIDTH_MULTIPLIER = 1.08;
const REPEAT_MULTIPLIER = 2;

export const Tapes: React.FC<TapesProps> = ({ date }) => {
    const [counts, setCounts] = useState<TapeCounts>({ left: 0, right: 0, ready: false });
    const leftSectionRef = useRef<HTMLSpanElement>(null);
    const rightSectionRef = useRef<HTMLSpanElement>(null);

    const calculateCounts = useCallback(() => {
        const rightSection = rightSectionRef.current;
        const leftSection = leftSectionRef.current;

        if (!rightSection || !leftSection) return;

        const windowWidth = window.innerWidth;
        const rightSectionCount = Math.ceil((windowWidth * WINDOW_WIDTH_MULTIPLIER) / rightSection.offsetWidth);
        const leftSectionCount = Math.ceil((windowWidth * WINDOW_WIDTH_MULTIPLIER) / leftSection.offsetWidth);

        setCounts({
            right: rightSectionCount * REPEAT_MULTIPLIER,
            left: leftSectionCount * REPEAT_MULTIPLIER,
            ready: true,
        });
    }, []);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(calculateCounts, 150);
        };

        calculateCounts();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(timeoutId);
        };
    }, [calculateCounts]);

    return (
        <div className={cn("tapes", counts.ready && "_ready")}>
            <div className="tape-left">
                <span className="tape-left-content">
                    <span ref={leftSectionRef}>
                        <TapeContent date={date} isLeft />
                    </span>
                    {Array.from({ length: counts.left }).map((_, index) => (
                        <span key={`left-${index}`}>
                            <TapeContent date={date} isLeft />
                        </span>
                    ))}
                </span>
            </div>
            <div className="tape-right">
                <span className="tape-right-content">
                    <span ref={rightSectionRef}>
                        <TapeContent date={date} />
                    </span>
                    {Array.from({ length: counts.right }).map((_, index) => (
                        <span key={`right-${index}`}>
                            <TapeContent date={date} />
                        </span>
                    ))}
                </span>
            </div>
        </div>
    );
};
