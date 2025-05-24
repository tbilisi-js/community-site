import cn from "classnames";

import { PixelArrowBottom } from "@src/components/icons/pixel-arrow-bottom";

import "./arrow.scss";

export interface ArrowProps {
    className?: string;
}

export const Arrow: React.FC<ArrowProps> = ({ className }) => <PixelArrowBottom className={cn("arrow", className)} />;
