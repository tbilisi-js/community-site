"use client";

import { useEffect, useState } from "react";
import cn from "classnames";

import { formatLeadingZero } from "@src/core/utils/formatDate";

import "./timer.scss";

export interface AnnouncementTimerProps {
    nextConfDate: string | Date;
    className?: string;
}

export const AnnouncementTimer: React.FC<AnnouncementTimerProps> = ({ nextConfDate, className }) => {
    const [state, setState] = useState({ days: 0, hours: 0, minutes: 0 });

    useEffect(() => {
        const till = new Date(nextConfDate);
        const updateCounter = () => {
            const diffMinutes = Math.floor((+till - +new Date()) / 60000);
            const diffHours = Math.floor(diffMinutes / 60);
            const diffDays = Math.floor(diffHours / 24);
            const minutes = diffMinutes % 60;
            setState((prev) =>
                minutes === prev.minutes
                    ? prev
                    : {
                          minutes,
                          hours: diffHours % 24,
                          days: diffDays,
                      },
            );
        };
        const interval = setInterval(updateCounter, 5000);
        updateCounter();

        return () => {
            clearInterval(interval);
        };
    }, [nextConfDate]);

    return (
        <div className={cn("timer", className)}>
            <span className="timer-item">
                <span className="timer-item-type">Days</span>
                <span className="timer-item-time">{formatLeadingZero(state.days)}</span>
            </span>
            <span className="timer-item timer-item-time timer-item-del">:</span>
            <span className="timer-item">
                <span className="timer-item-type">Hours</span>
                <span className="timer-item-time">{formatLeadingZero(state.hours)}</span>
            </span>
            <span className="timer-item timer-item-time timer-item-del">:</span>
            <span className="timer-item">
                <span className="timer-item-type">Minutes</span>
                <span className="timer-item-time">{formatLeadingZero(state.minutes)}</span>
            </span>
        </div>
    );
};
