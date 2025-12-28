import "./svg-filters.scss";

const FILTERS = {
    "displacement-filter-dynamic": (
        <>
            <filter id="displacementFilter" x="0" y="0" width="100px" height="100px">
                <feTurbulence type="turbulence" baseFrequency="2" numOctaves="20" result="turbulence">
                    <animate attributeName="baseFrequency" values="2;6;2" dur="50s" repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap
                    in2="turbulence"
                    in="SourceGraphic"
                    scale="-0.2"
                    xChannelSelector="R"
                    yChannelSelector="G"
                />
                <feDisplacementMap
                    in2="turbulence"
                    in="SourceGraphic"
                    scale="0.2"
                    xChannelSelector="R"
                    yChannelSelector="G"
                />
            </filter>
            <mask id="displacementMaskDynamic" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
                <circle cx="0.45" cy="0.45" r="0.45" fill="white" filter="url(#displacementFilter)" />
            </mask>
        </>
    ),
    "displacement-filter-static": (
        <>
            <filter id="displacementFilter2" x="0" y="0" width="100px" height="100px">
                <feTurbulence type="turbulence" baseFrequency="20" numOctaves="1" result="turbulence2" />
                <feDisplacementMap
                    in2="turbulence2"
                    in="SourceGraphic"
                    scale="0.2"
                    xChannelSelector="R"
                    yChannelSelector="G"
                />
            </filter>
            <mask id="displacementMaskStatic" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
                <circle cx="0.45" cy="0.45" r="0.45" fill="white" filter="url(#displacementFilter2)" />
            </mask>
        </>
    ),
    "fractal-filter-static": (
        <>
            <filter id="fractalFilterStatic" x="0" y="0" width="100px" height="100px">
                <feTurbulence type="fractalNoise" baseFrequency="50 50" numOctaves="3" result="fractal" />
                <feDisplacementMap
                    in="SourceGraphic"
                    in2="fractal"
                    scale="0.5"
                    xChannelSelector="R"
                    yChannelSelector="G"
                />
            </filter>

            <mask id="fractalMaskStatic" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
                <rect x="0" y="0" width="1" height="1" fill="white" filter="url(#fractalFilterStatic)" />
            </mask>
        </>
    ),
    "fractal-filter-dynamic": (
        <>
            <filter id="fractalFilterDynamic" x="0" y="0" width="100px" height="100px">
                <feTurbulence type="fractalNoise" baseFrequency="50 50" numOctaves="3" result="fractal">
                    <animate
                        attributeName="baseFrequency"
                        values="60 60; 66 66; 60 60"
                        dur="50s"
                        repeatCount="indefinite"
                    />
                </feTurbulence>
                <feDisplacementMap
                    in="SourceGraphic"
                    in2="fractal"
                    scale="0.5"
                    xChannelSelector="R"
                    yChannelSelector="G"
                >
                    <animate attributeName="scale" values="0.25; 0.75; 0.25" dur="10s" repeatCount="indefinite" />
                </feDisplacementMap>
            </filter>

            <mask id="fractalMaskDynamic" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
                <rect x="0" y="0" width="1" height="1" fill="white" filter="url(#fractalFilterDynamic)" />
            </mask>
        </>
    ),
};

export interface SvgFiltersProps {
    filters: (keyof typeof FILTERS)[];
}

export const SvgFilters = ({ filters }: SvgFiltersProps) => {
    return (
        <svg className="svg-filters">
            <defs>
                {filters.map((filter) => (
                    <g id={filter} key={filter}>
                        {FILTERS[filter]}
                    </g>
                ))}
            </defs>
        </svg>
    );
};
