import Link from "next/link";
import Image from "next/image";

import { speakers } from "@src/core/mock/speakers";
import { Block } from "@src/components/ui/block";

import "./people-list.scss";

export const PeopleList = () => (
    <Block className="people-list" id="people">
        <ul className="people-list-cards">
            {speakers.map((speaker) => (
                <li className="people-list-card" key={speaker.slug}>
                    <Link href={`/people/${speaker.slug}`} className="people-list-link">
                        <div className="people-list-visual">
                            <Image
                                width={512}
                                height={512}
                                src={speaker.img || "/logo-rect.png"}
                                alt=""
                                className="people-list-image"
                                loading="lazy"
                            />
                        </div>
                        <p className="people-list-title">{speaker.name.split(" ").join("\n")}</p>
                    </Link>
                </li>
            ))}
        </ul>
    </Block>
);
