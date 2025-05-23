import { type Talk } from "@src/core/mock/talks";
import { type Speaker } from "@src/core/mock/speakers";
import { Block } from "@src/components/ui/block";
import { NavLink } from "@src/components/ui/nav-link";

import "./schedule.scss";
import Image from "next/image";

const TALK_TYPES = {
    talk: "#00bcff",
    "free-form": "#c27aff",
};

export interface ScheduleProps {
    talks: Array<Omit<Talk, "speaker"> & { speaker?: Speaker }>;
    speakers: Array<Speaker>;
}

export const Schedule: React.FC<ScheduleProps> = ({ talks, speakers }) => {
    const getSpeakerAvatar = (talkSpeakerName: string) => speakers.find((speaker) => speaker.name === talkSpeakerName);

    return (
        <Block className="schedule" id="schedule">
            <h2 className="schedule-title">Schedule</h2>
            <div className="schedule-list">
                {talks.map((talk) => (
                    <details
                        className="schedule-item"
                        key={talk.slug}
                        style={
                            {
                                "--talk-type-color": TALK_TYPES[talk.type as keyof typeof TALK_TYPES],
                            } as React.CSSProperties
                        }
                    >
                        <summary className="schedule-item-summary">
                            <p className="schedule-item-time">
                                {new Intl.DateTimeFormat([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    timeZone: "Asia/Tbilisi",
                                    hour12: false,
                                }).format(new Date(talk.start))}
                                <br />
                                {new Intl.DateTimeFormat([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    timeZone: "Asia/Tbilisi",
                                    hour12: false,
                                }).format(new Date(talk.end))}
                            </p>
                            <div className="schedule-item-main">
                                <h3 className="schedule-item-name">{talk.name}</h3>
                                <p className="schedule-item-speaker">{talk.speaker?.name || "Organizing Committee"}</p>
                            </div>
                            <div className="schedule-item-arrow">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 9L12 15L18 9"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </summary>
                        <div className="schedule-item-description">
                            <Image
                                src={getSpeakerAvatar(talk.speaker?.name ?? "")?.img ?? "/logo-rect.png"}
                                width={100}
                                height={100}
                                alt="Avatar"
                                className="schedule-item-avatar"
                            />
                            <p>
                                {talk.description}
                                <NavLink
                                    href={`/talks/${talk.slug}`}
                                    weight="bold"
                                    textTransform="none"
                                    className="schedule-item-link"
                                >
                                    <span>Read more →</span>
                                </NavLink>
                            </p>
                        </div>
                    </details>
                ))}
            </div>
        </Block>
    );
};
