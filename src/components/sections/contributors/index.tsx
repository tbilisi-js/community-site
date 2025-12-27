import Image from "next/image";
import Link from "next/link";

import { speakers } from "@src/core/mock/speakers";
import { Block } from "@src/components/ui/block";

import "./contributors.scss";

export const Contributors = () => {
    return (
        <Block id="contributors" bodyClassName="contributors-body">
            <svg className="contributors-svg-filters">
                <defs>
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
                    <mask
                        id="displacementMaskDynamic"
                        maskUnits="objectBoundingBox"
                        maskContentUnits="objectBoundingBox"
                    >
                        <circle cx="0.45" cy="0.45" r="0.45" fill="white" filter="url(#displacementFilter)" />
                    </mask>
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
                    <mask
                        id="displacementMaskStatic"
                        maskUnits="objectBoundingBox"
                        maskContentUnits="objectBoundingBox"
                    >
                        <circle cx="0.45" cy="0.45" r="0.45" fill="white" filter="url(#displacementFilter2)" />
                    </mask>
                </defs>
            </svg>
            <h2 className="contributors-heading">Meet the voices</h2>
            <ul className="contributors-list">
                {speakers.map((speaker) => (
                    <li className="contributors-item" key={speaker.slug}>
                        <Link href={`/people/${speaker.slug}`} className="contributors-link">
                            <Image
                                src={speaker.img || "/logo-rect.png"}
                                loading="lazy"
                                alt={speaker.name}
                                width={100}
                                height={100}
                                title={speaker.name}
                                className="contributors-image"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </Block>
    );
};
