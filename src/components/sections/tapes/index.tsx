"use client";

import { useEffect, useRef, useState } from "react";
import { formatDate } from "@src/core/utils/formatDate";

import "./tapes.scss";
import cn from "classnames";

export interface TapesProps {
    date: string;
}

export const Tapes: React.FC<TapesProps> = ({ date }) => {
    const [counts, setCounts] = useState({ left: 0, right: 0, ready: false });
    const leftSectionRef = useRef<HTMLSpanElement>(null);
    const rightSectionRef = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        const rightSection = rightSectionRef.current;
        const leftSection = leftSectionRef.current;
        const calculate = () => {
            if (rightSection && leftSection) {
                setCounts((prev) => ({ ...prev, ready: true }));
                const rightSectionCount = Math.ceil((window.innerWidth * 1.08) / rightSection.offsetWidth);
                const leftSectionCount = Math.ceil((window.innerWidth * 1.08) / leftSection.offsetWidth);
                setCounts({ right: rightSectionCount * 2, left: leftSectionCount * 2, ready: true });
            }
        };
        calculate();
        window.addEventListener("resize", calculate);
        return () => window.removeEventListener("resize", calculate);
    }, []);

    return (
        <div className={cn("tapes", counts.ready && "_ready")}>
            <div className="tape-left">
                <span className="tape-left-content">
                    <span ref={leftSectionRef}>
                        {" "}
                        <span className="tapes-dot" /> {formatDate(date)} <span className="tapes-dot" /> Online{" "}
                        <span className="tapes-dot" /> Tbilisi, Georgia
                    </span>
                    {Array.from(new Array(counts.left)).map((_, index) => (
                        <span key={index}>
                            {" "}
                            <span className="tapes-dot" /> {formatDate(date)} <span className="tapes-dot" /> Online{" "}
                            <span className="tapes-dot" /> Tbilisi, Georgia
                        </span>
                    ))}
                </span>
            </div>
            <div className="tape-right">
                <span className="tape-right-content">
                    <span ref={rightSectionRef}>
                        {formatDate(date)} <span className="tapes-dot" /> Online <span className="tapes-dot" /> Tbilisi,
                        Georgia <span className="tapes-dot" />{" "}
                    </span>
                    {Array.from(new Array(counts.right)).map((_, index) => (
                        <span key={index}>
                            {formatDate(date)} <span className="tapes-dot" /> Online <span className="tapes-dot" />{" "}
                            Tbilisi, Georgia <span className="tapes-dot" />{" "}
                        </span>
                    ))}
                </span>
            </div>
        </div>
    );
};
