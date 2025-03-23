import { type Speaker } from "@srccore/mock/speakers";
import { Block } from "@src/components/ui/block";

import "./talk-intro.scss";
import { formatDate } from "../../../core/utils/formatDate";
import Image from "next/image";

export interface TalkIntroProps {
    title: string;
    date: string;
    speaker?: Speaker;
}

export const TalkIntro: React.FC<TalkIntroProps> = ({ title, speaker, date }) => (
    <Block id="intro" className="talk-intro">
        <h1 className="talk-intro-title">{title}</h1>
        <div className="talk-intro-info">
            <p className="talk-intro-date">
                {formatDate(date)},{" "}
                {new Intl.DateTimeFormat([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "Asia/Tbilisi",
                    hour12: false,
                }).format(new Date(date))}
            </p>
            <div className="talk-intro-speaker">
                {speaker ? (
                    <>
                        {speaker.img ? (
                            <Image
                                src={speaker.img}
                                width={40}
                                height={40}
                                alt="Avatar"
                                className="talk-intro-speaker-avatar"
                            />
                        ) : (
                            <img src="/logo-rect.png" width={40} height={40} className="talk-intro-speaker-avatar" />
                        )}
                        <p>{speaker.name}</p>
                    </>
                ) : (
                    <>
                        <img src="/logo-rect.png" width={40} height={40} className="talk-intro-speaker-avatar" />
                        <p>Tbilisi JS</p>
                    </>
                )}
            </div>
        </div>
    </Block>
);
