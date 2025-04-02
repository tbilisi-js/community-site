import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    className?: string;
}

export const ArrowIcon: React.FC<IconProps> = ({ size = 20, className = "", ...props }) => {
    return (
        <svg
            width={size}
            height={size + 1} // Original had 21 height for 20 width
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
            {...props}
        >
            <path
                d="M19.9999 0.751465L9.394 2.26486L7.5793 4.08614L16.7726 2.76714L9.15935e-05 19.5396L1.21196 20.7515L17.9844 3.97901L16.6654 13.1723L18.4867 11.3576L19.9999 0.751465Z"
                fill="currentColor"
            />
        </svg>
    );
};
