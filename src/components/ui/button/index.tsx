import cn from "classnames";

import "./button.scss";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof BUTTON_VARIANTS;
    size?: keyof typeof BUTTON_SIZES;
}

const BUTTON_VARIANTS = {
    primary: "button_primary",
    secondary: "button_secondary",
    neutral: "button_neutral",
};

const BUTTON_SIZES = {
    md: "button_medium",
    lg: "button_large",
};

export const Button: React.FC<ButtonProps> = ({ className, variant = "neutral", size = "md", ...props }) => (
    <button className={cn("button", BUTTON_VARIANTS[variant], BUTTON_SIZES[size], className)} {...props} />
);
