import React from "react";

export interface TimerBackgroundIconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

export const TimerBackgroundIcon: React.FC<TimerBackgroundIconProps> = ({ className = "", ...props }) => {
    return (
        <svg
            width="342"
            height="161"
            viewBox="0 0 342 161"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M34.5 61C34.5 49.9543 43.4543 41 54.5 41H173.5H322.5C333.546 41 342.5 32.0457 342.5 21V0V141C342.5 152.046 333.546 161 322.5 161H0H14.5C25.5457 161 34.5 152.046 34.5 141V131V101V61Z"
                fill="#001020"
            />
        </svg>
    );
};
