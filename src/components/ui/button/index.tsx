import cn from "classnames";

import { NavLink } from "../nav-link";

import "./button.scss";

export interface ButtonBaseProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof BUTTON_VARIANTS;
    size?: keyof typeof BUTTON_SIZES;
}

export type ButtonProps =
    | ({ href: string } & ButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>);

const BUTTON_VARIANTS = {
    primary: "button_primary",
    secondary: "button_secondary",
    neutral: "button_neutral",
};

const BUTTON_SIZES = {
    md: "button_medium",
    lg: "button_large",
};

export const Button: React.FC<ButtonProps> = (props) => {
    if (typeof props.href === "string") {
        const { className, variant = "neutral", size = "md", ...other } = props;
        return <NavLink className={cn("button", BUTTON_VARIANTS[variant], BUTTON_SIZES[size], className)} {...other} />;
    }

    const { className, variant = "neutral", size = "md", ...other } = props;
    return <button className={cn("button", BUTTON_VARIANTS[variant], BUTTON_SIZES[size], className)} {...other} />;
};
