"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import cn from "classnames";

import { type Event } from "@src/core/mock/events";
import { Block } from "@src/components/ui/block";
import { IconButton } from "@src/components/ui/icon-button";
import { ArrowIcon } from "@src/components/icons";

import "./events.scss";

export interface EventsProps {
    events: Event[];
}

export const Events: React.FC<EventsProps> = ({ events }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const touchRef = useRef<number | null>(null);
    const wheelRef = useRef<{ delta: number; time: number }>({ delta: 0, time: Date.now() });

    const touchStartHandler = (e: React.TouchEvent<HTMLElement>) => {
        touchRef.current = e.touches.item(0).clientX;
    };
    const touchEndHandler = (e: React.TouchEvent<HTMLElement>) => {
        if (touchRef.current === null) return;
        const touchClientX = e.changedTouches.item(0).clientX;
        if (touchClientX > touchRef.current + 100) {
            if (activeSlide > 0) {
                setActiveSlide(activeSlide - 1);
            }
        } else if (touchClientX < touchRef.current - 100) {
            if (activeSlide + 1 < events.length) {
                setActiveSlide(activeSlide + 1);
            }
        }
        touchRef.current = null;
    };

    const wheelHandler = (e: React.WheelEvent<HTMLElement>) => {
        const delta = e.deltaX;
        if (
            (wheelRef.current.delta > 0 && delta < 0) ||
            (wheelRef.current.delta < 0 && delta > 0) ||
            wheelRef.current.time + 2000 < Date.now()
        ) {
            wheelRef.current = { delta: 0, time: Date.now() };
        }

        wheelRef.current = { delta: wheelRef.current.delta + delta, time: Date.now() };

        if (delta > wheelRef.current.delta + 1000) {
            if (activeSlide > 0) {
                setActiveSlide(activeSlide - 1);
            }
            wheelRef.current = { delta: 0, time: Date.now() };
        } else if (delta < wheelRef.current.delta - 1000) {
            if (activeSlide + 1 < events.length) {
                setActiveSlide(activeSlide + 1);
            }
            wheelRef.current = { delta: 0, time: Date.now() };
        }
    };

    return (
        <Block id="events" className="events">
            <h2 className="events-heading">Our Events</h2>
            <div
                className="events-slider"
                style={{ "--translate": `${-74 * activeSlide}px` } as React.CSSProperties}
                onTouchStart={touchStartHandler}
                onTouchEnd={touchEndHandler}
                onWheel={wheelHandler}
            >
                {events.map((event, index) => (
                    <div
                        key={event.slug}
                        className={cn("events-slider-card", index === activeSlide && "events-slider-card-active")}
                        onClick={() => setActiveSlide(index)}
                    >
                        <Image src={event.image} alt="" className="events-slider-image" loading="lazy" />
                        <span className="events-slider-shadow" />
                        <p className="events-slider-heading">
                            <span className="events-slider-heading-name">{event.name}</span>
                            <span className="events-slider-heading-dot">{" • "}</span>
                            <span className="events-slider-heading-date">
                                {event.date.substring(0, 10).replace(/-/g, ".")}
                            </span>
                        </p>
                        <IconButton
                            className="events-slider-link"
                            href={`/events/${event.slug}`}
                            title={`Go to ${event.name} page`}
                        >
                            <ArrowIcon />
                        </IconButton>
                    </div>
                ))}
            </div>
        </Block>
    );
};
