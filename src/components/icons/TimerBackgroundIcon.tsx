import React from "react";

export interface TimerBackgroundIconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

export const TimerBackgroundIcon: React.FC<TimerBackgroundIconProps> = ({ className = "", ...props }) => {
    return (
        <svg
            width="372"
            height="161"
            viewBox="0 0 372 161"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M34.5 61C34.5 49.9543 43.4543 41 54.5 41H203.5H352.5C363.546 41 372.5 32.0457 372.5 21V0V141C372.5 152.046 363.546 161 352.5 161H0H14.5C25.5457 161 34.5 152.046 34.5 141V131V101V61Z"
                fill="#001020"
            />
        </svg>
    );
};
