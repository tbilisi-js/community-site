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

export const XMAS_VARIANTS: Record<string, (ElementView & { weight: number })[]> = {
    closest: [
        {
            type: "snow1",
            size: 16,
            weight: 0.6,
            addons: ["rotate-15-left", "fall"],
        },
        {
            type: "snow2",
            size: 16,
            weight: 0.15,
            addons: ["rotate-15-right", "fall"],
        },
        {
            type: "snow3",
            size: 16,
            weight: 0.1,
            addons: ["fall"],
        },
        {
            type: "snow1",
            size: 16,
            weight: 0.1,
            addons: ["fall"],
        },
        {
            type: "snow2",
            size: 18,
            weight: 0.05,
            addons: ["fall"],
        },
    ],
    average: [
        {
            type: "snow1",
            size: 10,
            weight: 0.1,
            addons: ["fall"],
        },
        {
            type: "snow2",
            size: 10,
            weight: 0.15,
            addons: ["fall"],
        },
        {
            type: "snow1",
            size: 16,
            weight: 0.25,
            addons: ["fall"],
        },
        {
            type: "snow3",
            size: 18,
            weight: 0.15,
            addons: ["fall"],
        },
        {
            type: "snow2",
            size: 22,
            weight: 0.14,
            addons: ["fall"],
        },
        {
            type: "orange",
            size: 40,
            weight: 0.005,
            addons: ["rotate-15-left", "fall"],
        },
        {
            type: "orange",
            size: 40,
            weight: 0.005,
            addons: ["rotate-15-right", "fall"],
        },
        {
            type: "snow1",
            size: 16,
            weight: 0.1,
            addons: ["fall"],
        },
        {
            type: "orange",
            size: 64,
            weight: 0.1,
            addons: ["fall"],
        },
    ],
    farthest: [
        {
            type: "snow3",
            size: 16,
            weight: 0.2,
            addons: ["rotate-15-right", "fall"],
        },
        {
            type: "snow1",
            size: 10,
            weight: 0.04,
            addons: ["fall"],
        },
        {
            type: "snow1",
            size: 16,
            weight: 0.1,
            addons: ["fall"],
        },
        {
            type: "snow1",
            size: 16,
            weight: 0.1,
            addons: ["rotate-15-left", "fall"],
        },
        {
            type: "snow3",
            size: 18,
            weight: 0.1,
            addons: ["fall"],
        },
        {
            type: "snow2",
            size: 22,
            weight: 0.1,
            addons: ["fall"],
        },
        {
            type: "snow3",
            size: 36,
            weight: 0.05,
            addons: ["fall"],
        },
        {
            type: "snow3",
            size: 52,
            weight: 0.05,
            addons: ["fall"],
        },
        {
            type: "orange",
            size: 40,
            weight: 0.02,
            addons: ["rotate-15-left", "fall"],
        },
        {
            type: "orange",
            size: 80,
            weight: 0.01,
            addons: ["rotate-15-left", "fall"],
        },
        {
            type: "orange",
            size: 64,
            weight: 0.02,
            addons: ["rotate-15-right", "fall"],
        },
        {
            type: "orange",
            size: 92,
            weight: 0.01,
            addons: ["rotate-15-right", "fall"],
        },
        {
            type: "snow1",
            size: 16,
            weight: 0.1,
            addons: ["fall"],
        },
        {
            type: "snow3",
            size: 18,
            weight: 0.1,
            addons: ["fall"],
        },
    ],
};

export const VARIANTS = {
    halloween: {
        options: HALLOWEEN_VARIANTS,
        from: "10-01",
        to: "11-07",
    },
    xmas: {
        options: XMAS_VARIANTS,
        from: "12-20",
        to: "01-07",
    },
    base: {
        options: BASE_VARIANTS,
        from: "01-01",
        to: "12-31",
    },
};
