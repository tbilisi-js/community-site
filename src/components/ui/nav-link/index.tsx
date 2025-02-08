import Link, { type LinkProps } from "next/link";
import cn from "classnames";

import "./nav-link.scss";

export interface NavLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">, LinkProps {
    weight?: keyof typeof NAV_LINK_WEIGHTS;
    size?: keyof typeof NAV_LINK_SIZES;
    textTransform?: keyof typeof NAV_LINK_TRANSFORMS;
}

const NAV_LINK_WEIGHTS = {
    light: "nav-link_light",
    bold: "nav-link_bold",
};

const NAV_LINK_SIZES = {
    small: "nav-link_small",
    medium: "nav-link_medium",
};

const NAV_LINK_TRANSFORMS = {
    uppercase: "nav-link_transform-uppercase",
    capitalize: "nav-link_transform-capitalize",
    none: "nav-link_transform-none",
};

export const NavLink: React.FC<NavLinkProps> = ({
    className,
    weight = "light",
    size = "medium",
    textTransform = "uppercase",
    ...props
}) => (
    <Link
        className={cn(
            "nav-link",
            NAV_LINK_WEIGHTS[weight],
            NAV_LINK_SIZES[size],
            NAV_LINK_TRANSFORMS[textTransform],
            className,
        )}
        {...props}
    />
);
