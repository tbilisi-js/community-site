import cn from "classnames";

import { NavLink } from "../nav-link";

import "./icon-button.scss";

export interface IconButtonBaseProps {
    variant?: keyof typeof BUTTON_VARIANTS;
}

export type IconButtonProps =
    | ({ href: string } & IconButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & IconButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>);

const BUTTON_VARIANTS = {
    primary: "icon-button_primary",
    secondary: "icon-button_secondary",
    neutral: "icon-button_neutral",
    transparent: "icon-button_transparent",
    light: "icon-button_light",
};

export const IconButton: React.FC<IconButtonProps> = ({ variant = "transparent", ...props }) => {
    if (typeof props.href === "string") {
        const { className, ...other } = props;
        return <NavLink className={cn("icon-button", BUTTON_VARIANTS[variant], className)} {...other} />;
    }

    const { className, ...other } = props;
    return <button className={cn("icon-button", BUTTON_VARIANTS[variant], className)} {...other} />;
};
