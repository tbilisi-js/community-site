import Image from "next/image";
import Link from "next/link";

import { friends } from "@src/core/mock/friends";
import { Block } from "@src/components/ui/block";
import { SvgFilters } from "@src/components/ui/svg-filters";

import "./friends.scss";

export const Friends = () => {
    return (
        <Block id="friends" bodyClassName="friends-body">
            <SvgFilters filters={["fractal-filter-dynamic", "fractal-filter-static"]} />
            <h2 className="friends-heading">Meet our friends</h2>
            <ul className="friends-list">
                {friends.map((friend) => (
                    <li className="friends-item" key={friend.slug}>
                        <Link href={friend.href} target="_blank" rel="noopener noreferrer" className="friends-link">
                            <Image
                                src={friend.img || "/logo-rect.png"}
                                loading="lazy"
                                alt={friend.name}
                                width={180}
                                height={180}
                                title={friend.name}
                                className="friends-image"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </Block>
    );
};
