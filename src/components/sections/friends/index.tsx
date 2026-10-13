import { Picture } from "@src/components/ui/picture";
import Link from "next/link";

import { friends } from "@src/core/data/friends";
import { Block } from "@src/components/ui/block";

import "./friends.scss";

export const Friends = () => {
    return (
        <Block id="friends" bodyClassName="friends-body">
            <h2 className="friends-heading">Meet our friends</h2>
            <ul className="friends-list">
                {friends.map((friend) => (
                    <li className="friends-item" key={friend.slug}>
                        <Link href={friend.href} target="_blank" rel="noopener noreferrer" className="friends-link">
                            <Picture
                                src={friend.img || "/logo-rect.png"}
                                alt={friend.name}
                                width={180}
                                height={180}
                                title={friend.name}
                                sizes="100px"
                                className="friends-image"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </Block>
    );
};
