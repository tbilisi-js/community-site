import { type ElementView } from "./types";

export const BASE_VARIANTS: Record<string, (ElementView & { weight: number })[]> = {
    closest: [
        {
            type: "dot",
            size: 6,
            weight: 0.6,
        },
        {
            type: "star1",
            size: 10,
            weight: 0.15,
        },
        {
            type: "star1",
            size: 16,
            weight: 0.1,
        },
        {
            type: "star1",
            size: 16,
            weight: 0.1,
            addons: ["pulse"],
        },
        {
            type: "star2",
            size: 18,
            weight: 0.05,
            addons: ["pulse"],
        },
    ],
    average: [
        {
            type: "dot",
            size: 6,
            weight: 0.1,
        },
        {
            type: "star1",
            size: 10,
            weight: 0.15,
        },
        {
            type: "star1",
            size: 16,
            weight: 0.25,
        },
        {
            type: "star2",
            size: 18,
            weight: 0.15,
        },
        {
            type: "star2",
            size: 22,
            weight: 0.14,
        },
        {
            type: "khinkali",
            size: 40,
            weight: 0.005,
            addons: ["rotate-15-left"],
        },
        {
            type: "khinkali",
            size: 40,
            weight: 0.005,
            addons: ["rotate-15-right"],
        },
        {
            type: "star1",
            size: 16,
            weight: 0.1,
            addons: ["pulse"],
        },
        {
            type: "star2",
            size: 18,
            weight: 0.1,
            addons: ["pulse"],
        },
    ],
    farthest: [
        {
            type: "dot",
            size: 6,
            weight: 0.2,
        },
        {
            type: "star1",
            size: 10,
            weight: 0.1,
        },
        {
            type: "star1",
            size: 16,
            weight: 0.13,
        },
        {
            type: "star2",
            size: 18,
            weight: 0.1,
        },
        {
            type: "star2",
            size: 22,
            weight: 0.1,
        },
        {
            type: "star3",
            size: 36,
            weight: 0.1,
        },
        {
            type: "star3",
            size: 52,
            weight: 0.05,
        },
        {
            type: "khinkali",
            size: 40,
            weight: 0.005,
            addons: ["rotate-15-left"],
        },
        {
            type: "khinkali",
            size: 64,
            weight: 0.005,
            addons: ["rotate-15-left"],
        },
        {
            type: "khinkali",
            size: 40,
            weight: 0.005,
            addons: ["rotate-15-right"],
        },
        {
            type: "khinkali",
            size: 64,
            weight: 0.005,
            addons: ["rotate-15-right"],
        },
        {
            type: "star1",
            size: 16,
            weight: 0.1,
            addons: ["pulse"],
        },
        {
            type: "star2",
            size: 18,
            weight: 0.1,
            addons: ["pulse"],
        },
    ],
};

export const HALLOWEEN_VARIANTS: Record<string, (ElementView & { weight: number })[]> = {
    closest: [
        {
            type: "dot",
            size: 6,
            weight: 0.6,
        },
        {
            type: "star1",
            size: 10,
            weight: 0.15,
        },
        {
            type: "star1",
            size: 16,
            weight: 0.1,
        },
        {
            type: "star1",
            size: 16,
            weight: 0.1,
            addons: ["pulse"],
        },
        {
            type: "star2",
            size: 18,
            weight: 0.05,
            addons: ["pulse"],
        },
    ],
    average: [
        {
            type: "dot",
            size: 6,
            weight: 0.1,
        },
        {
            type: "star1",
            size: 10,
            weight: 0.15,
        },
        {
            type: "star1",
            size: 16,
            weight: 0.25,
        },
        {
            type: "star2",
            size: 18,
            weight: 0.15,
        },
        {
            type: "star2",
            size: 22,
            weight: 0.14,
        },
        {
            type: "pumpkin",
            size: 40,
            weight: 0.005,
            addons: ["rotate-15-left"],
        },
        {
            type: "pumpkin",
            size: 40,
            weight: 0.005,
            addons: ["rotate-15-right"],
        },
        {
            type: "star1",
            size: 16,
            weight: 0.1,
            addons: ["pulse"],
        },
        {
            type: "star2",
            size: 18,
            weight: 0.1,
            addons: ["pulse"],
        },
    ],
    farthest: [
        {
            type: "dot",
            size: 6,
            weight: 0.2,
        },
        {
            type: "star1",
            size: 10,
            weight: 0.04,
        },
        {
            type: "star1",
            size: 16,
            weight: 0.1,
        },
        {
            type: "star1",
            size: 16,
            weight: 0.1,
            addons: ["fly"],
        },
        {
            type: "star2",
            size: 18,
            weight: 0.1,
        },
        {
            type: "star2",
            size: 22,
            weight: 0.1,
        },
        {
            type: "star3",
            size: 36,
            weight: 0.05,
        },
        {
            type: "star3",
            size: 52,
            weight: 0.05,
        },
        {
            type: "pumpkin",
            size: 40,
            weight: 0.02,
            addons: ["rotate-15-left"],
        },
        {
            type: "pumpkin",
            size: 64,
            weight: 0.01,
            addons: ["rotate-15-left"],
        },
        {
            type: "pumpkin",
            size: 40,
            weight: 0.02,
            addons: ["rotate-15-right"],
        },
        {
            type: "pumpkin",
            size: 64,
            weight: 0.01,
            addons: ["rotate-15-right"],
        },
        {
            type: "star1",
            size: 16,
            weight: 0.1,
            addons: ["pulse"],
        },
        {
            type: "star2",
            size: 18,
            weight: 0.1,
            addons: ["pulse"],
        },
    ],
};

export const VARIANTS = {
    halloween: {
        options: HALLOWEEN_VARIANTS,
        from: "09-16",
        to: "10-14",
    },
    base: {
        options: BASE_VARIANTS,
        from: "01-01",
        to: "12-31",
    },
};
