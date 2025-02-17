"use client";

import { useEffect, useState } from "react";

export interface SwapWrapperProps {
    before: React.ReactNode;
    after: React.ReactNode;
    at: number;
}

export const SwapWrapper: React.FC<SwapWrapperProps> = ({ before, after, at }) => {
    const [passed, setPassed] = useState(at < new Date().getTime());

    useEffect(() => {
        if (at < new Date().getTime()) return () => {};

        const timer = setInterval(() => {
            const newPassed = at < new Date().getTime();

            if (newPassed) {
                clearInterval(timer);
                setPassed(newPassed);
            }
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, [at]);

    if (passed) {
        return after;
    }

    return before;
};
