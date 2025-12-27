import Image from "next/image";
import Link from "next/link";

import { speakers } from "@src/core/mock/speakers";
import { Block } from "@src/components/ui/block";
import { SvgFilters } from "@src/components/ui/svg-filters";

import "./contributors.scss";

export const Contributors = () => {
    return (
        <Block id="contributors" bodyClassName="contributors-body">
            <SvgFilters filters={["displacement-filter-dynamic", "displacement-filter-static"]} />
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
