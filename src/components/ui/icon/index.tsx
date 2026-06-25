export interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => (
    <svg {...props}>
        <use xlinkHref={`/sprite.svg#${name}`} />
    </svg>
);
