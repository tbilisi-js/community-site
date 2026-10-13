import { Picture } from "@src/components/ui/picture";
import Link from "next/link";

import { speakers } from "@src/core/data/speakers";
import { Block } from "@src/components/ui/block";

import "./contributors.scss";

export const Contributors = () => {
    return (
        <Block id="contributors" bodyClassName="contributors-body">
            <h2 className="contributors-heading">Meet the voices</h2>
            <ul className="contributors-list">
                {speakers.map((speaker) => (
                    <li className="contributors-item" key={speaker.slug}>
                        <Link href={`/people/${speaker.slug}`} className="contributors-link">
                            <Picture
                                src={speaker.img || "/logo-rect.png"}
                                sizes="100px"
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
