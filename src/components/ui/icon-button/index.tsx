import cn from "classnames";

import { NavLink } from "../nav-link";

import "./icon-button.scss";

export type IconButtonProps =
    | ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>);

export const IconButton: React.FC<IconButtonProps> = (props) => {
    if (typeof props.href === "string") {
        const { className, ...other } = props;
        return <NavLink className={cn("icon-button", className)} {...other} />;
    }

    const { className, ...other } = props;
    return <button className={cn("icon-button", className)} {...other} />;
};
