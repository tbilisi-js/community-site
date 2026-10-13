import Link from "next/link";
import { Picture } from "@src/components/ui/picture";

import { speakers } from "@src/core/data/speakers";
import { Block } from "@src/components/ui/block";

import "./people-list.scss";

export const PeopleList = () => (
    <Block className="people-list" id="people">
        <ul className="people-list-cards">
            {speakers.map((speaker) => (
                <li className="people-list-card" key={speaker.slug}>
                    <Link href={`/people/${speaker.slug}`} className="people-list-link">
                        <div className="people-list-visual">
                            <Picture
                                width={512}
                                height={512}
                                src={speaker.img || "/logo-rect.png"}
                                alt=""
                                sizes="(max-width: 600px) 50vw, 256px"
                                className="people-list-image"
                            />
                        </div>
                        <p className="people-list-title">{speaker.name.split(" ").join("\n")}</p>
                    </Link>
                </li>
            ))}
        </ul>
    </Block>
);
