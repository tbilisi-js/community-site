import Link, { type LinkProps } from "next/link";
import cn from "classnames";

import "./nav-link.scss";

export interface NavLinkProps extends React.HTMLAttributes<HTMLAnchorElement>, LinkProps {
    weight?: keyof typeof NAV_LINK_WEIGHTS;
    size?: keyof typeof NAV_LINK_SIZES;
}

const NAV_LINK_WEIGHTS = {
    light: "nav-link_light",
    bold: "nav-link_bold",
};

const NAV_LINK_SIZES = {
    small: "nav-link_small",
    medium: "nav-link_medium",
};

export const NavLink: React.FC<NavLinkProps> = ({ className, weight = "light", size = "medium", ...props }) => (
    <Link className={cn("nav-link", NAV_LINK_WEIGHTS[weight], NAV_LINK_SIZES[size], className)} {...props} />
);
