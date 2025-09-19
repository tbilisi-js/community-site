export type ElementViewType = "dot" | "star1" | "star2" | "star3" | "khinkali" | "pumpkin";
export type ElementViewSize = 6 | 10 | 16 | 18 | 22 | 36 | 40 | 52 | 64;
export type ElementViewAddon = "pulse" | "rotate-15-left" | "rotate-15-right" | "fly";
export type ElementView = { type: ElementViewType; size: ElementViewSize; addons?: ElementViewAddon[] };

export type Element = {
    x: number;
    y: number;
    key: string;
    view: ElementView;
    random: number;
};
