"use client";

import { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { type Element } from "./types";
import { generateElements } from "./generate-elements";

import "./background.scss";

export interface BackgroundProps {
    children: React.ReactNode;
    density?: number;
}

export const Background: React.FC<BackgroundProps> = ({ children, density = 1 }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const elementsRef = useRef<HTMLDivElement | null>(null);
    const [elements, setElements] = useState<Element[]>([]);

    useEffect(() => {
        if (containerRef.current) {
            const newElements = generateElements(containerRef.current, density);
            setElements(newElements);
        }

        let timeout: NodeJS.Timeout | null = null;
        const resizeHandler = () => {
            elementsRef.current?.classList.remove("_active");
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                if (containerRef.current) {
                    const newElements = generateElements(containerRef.current, density);
                    setElements(newElements);
                    timeout = null;
                    elementsRef.current?.classList.add("_active");
                }
            }, 300);
        };
        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <div ref={containerRef} className="background">
            <div ref={elementsRef} className={cn("background-elements", elements.length && "_active")}>
                {elements.map((element) => (
                    <span
                        key={element.key}
                        style={
                            {
                                left: element.x,
                                top: element.y,
                                "--random": element.random,
                            } as React.CSSProperties
                        }
                        className={cn(
                            `background-element background-element-type_${element.view.type} background-element-size_${element.view.size}`,
                            element.view.addons &&
                                element.view.addons.map((addon) => `background-element-addon_${addon}`),
                        )}
                    />
                ))}
            </div>
            {children}
        </div>
    );
};
