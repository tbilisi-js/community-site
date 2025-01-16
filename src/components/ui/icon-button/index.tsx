import cn from "classnames";

import "./icon-button.scss";

export type IconButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export const IconButton: React.FC<IconButtonProps> = ({ className, ...props }) => (
    <button className={cn("icon-button", className)} {...props} />
);
