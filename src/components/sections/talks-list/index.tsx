import Link from "next/link";
import Image from "next/image";

import { type Talk } from "@src/core/mock/talks";
import { formatDate } from "@src/core/utils/formatDate";
import { Block } from "@src/components/ui/block";

import "./talks-list.scss";

export type TalksListProps = {
    talks: Talk[];
};

export const TalksList: React.FC<TalksListProps> = ({ talks }) => {
    const talksGroups = [...talks]
        .sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime())
        .reduce<Record<string, Talk[]>>((acc, talk) => {
            const date = formatDate(talk.start, true);
            if (talk.type === "talk") {
                if (!acc[date]) acc[date] = [];

                acc[date].push(talk);
            }
            return acc;
        }, {});

    return (
        <Block className="talks-list" id="talks">
            {Object.entries(talksGroups).map(([date, list]) => (
                <div key={date}>
                    <h2 className="talks-list-date">{date}</h2>
                    <ul className="talks-list-cards">
                        {list.map((talk) => (
                            <li className="talks-list-card" key={talk.slug}>
                                <Link href={`/talks/${talk.slug}`} className="talks-list-link">
                                    <div className="talks-list-visual">
                                        <Image
                                            src={talk.preview || "/logo-rect.png"}
                                            alt="Talk preview"
                                            width={300}
                                            height={200}
                                            className="talks-list-image"
                                            loading="lazy"
                                        />
                                    </div>
                                    <p className="talks-list-title" title={talk.name}>
                                        {talk.name}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </Block>
    );
};
