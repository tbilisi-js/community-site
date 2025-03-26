import { type Talk } from "@src/core/mock/talks";
import { type Speaker } from "@src/core/mock/speakers";
import { Block } from "@src/components/ui/block";
import { NavLink } from "@src/components/ui/nav-link";

import "./schedule.scss";

const TALK_TYPES = {
    talk: "#00bcff",
    "free-form": "#c27aff",
};

export interface ScheduleProps {
    talks: Array<Omit<Talk, "speaker"> & { speaker?: Speaker }>;
}

export const Schedule: React.FC<ScheduleProps> = ({ talks }) => {
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
                                {talk.start}
                                <br />
                                {talk.end}
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
                            <p>{talk.description}</p>
                            <NavLink
                                href={`/talks/${talk.slug}`}
                                weight="bold"
                                textTransform="none"
                                className="schedule-item-link"
                            >
                                <span>Read more</span>
                            </NavLink>
                        </div>
                    </details>
                ))}
            </div>
        </Block>
    );
};
