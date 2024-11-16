import cn from "classnames";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof BUTTON_VARIANTS;
    size?: keyof typeof BUTTON_SIZES;
}

const BUTTON_VARIANTS = {
    primary: "bg-blue-700 text-slate-50 hover:bg-blue-600",
    secondary: "bg-orange-700 text-slate-50 hover:bg-orange-600",
    neutral: "bg-slate-800 text-slate-50 hover:bg-slate-600",
};

const BUTTON_SIZES = {
    sm: "py-1 px-4",
    md: "py-2 px-6",
    lg: "py-3 px-8",
    xl: "py-4 px-10",
};

export const Button: React.FC<ButtonProps> = ({ className, variant, size = "md", ...props }) => (
    <button
        className={cn(
            "flex items-center rounded-md",
            variant && BUTTON_VARIANTS[variant],
            size && BUTTON_SIZES[size],
            className,
        )}
        {...props}
    />
);
