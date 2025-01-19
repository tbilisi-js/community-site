import cn from "classnames";

import "./block.scss";

export interface BlockProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    bodyClassName?: string;
}

export const Block: React.FC<BlockProps> = ({ className, bodyClassName, children, ...props }) => (
    <section className={cn("block", className)} {...props}>
        <div className={cn("block-body", bodyClassName)}>{children}</div>
    </section>
);
