import Link from "next/link";
import Image from "next/image";

import { Block } from "@src/components/ui/block";

import "./speakers-list.scss";
import type { Speaker } from "@src/core/mock/speakers";

export interface SpeakersListProps {
    speakers: Speaker[];
}

export const SpeakersList: React.FC<SpeakersListProps> = ({ speakers = [] }) => (
    <Block className="speakers-list" id="speakers">
        <ul className="speakers-list-cards">
            {speakers.map((speaker) => (
                <li className="speakers-list-card" key={speaker.slug}>
                    <Link href={`/people/${speaker.slug}`} className="speakers-list-link">
                        <div className="speakers-list-info">
                            <h3 className="speakers-list-name">{speaker.name}</h3>
                            {speaker.company && speaker.role && (
                                <p className="speakers-list-company">
                                    {speaker.company}, {speaker.role}
                                </p>
                            )}
                            {speaker.location && <p className="speakers-list-location">{speaker.location}</p>}
                            {speaker.hasSocial && (
                                <div className="speakers-list-social-icon">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="10" cy="10" r="9" fill="black" stroke="white" strokeWidth="2" />
                                        <path
                                            d="M7 10L9 12L13 8"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            )}
                        </div>
                        <div className="speakers-list-visual">
                            <Image
                                width={230}
                                height={230}
                                src={speaker.img || "/logo-rect.png"}
                                alt={speaker.name}
                                className="speakers-list-image"
                                loading="lazy"
                            />
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    </Block>
);
