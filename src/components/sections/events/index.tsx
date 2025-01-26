"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import cn from "classnames";

import { events } from "@src/core/mock/events";
import { Block } from "@src/components/ui/block";
import { IconButton } from "@src/components/ui/icon-button";
import { NavLink } from "@src/components/ui/nav-link";

import "./events.scss";

export const Events = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const touchRef = useRef<number | null>(null);

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

    return (
        <Block id="events" className="events">
            <h2 className="events-heading">Our Events</h2>
            <div
                className="events-slider"
                style={{ marginLeft: -74 * activeSlide }}
                onTouchStart={touchStartHandler}
                onTouchEnd={touchEndHandler}
            >
                {events.map((event, index) => (
                    <div
                        key={event.slug}
                        className={cn("events-slider-card", index === activeSlide && "events-slider-card-active")}
                        onClick={() => setActiveSlide(index)}
                    >
                        <Image src={event.image} alt="" className="events-slider-image" />
                        <span className="events-slider-shadow" />
                        <p className="events-slider-heading">
                            <span className="events-slider-heading-name">{event.name}</span>
                            <span className="events-slider-heading-dot">{" • "}</span>
                            <span className="events-slider-heading-date">
                                {event.date.substring(0, 10).replace(/-/g, ".")}
                            </span>
                        </p>
                        <NavLink
                            href={`/events/${event.slug}`}
                            className="events-slider-link"
                            title={`Go to ${event.name} page`}
                        >
                            <IconButton className="events-slider-link-button">
                                <svg
                                    width="20"
                                    height="21"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M19.9999 0.751465L9.394 2.26486L7.5793 4.08614L16.7726 2.76714L9.15935e-05 19.5396L1.21196 20.7515L17.9844 3.97901L16.6654 13.1723L18.4867 11.3576L19.9999 0.751465Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </IconButton>
                        </NavLink>
                    </div>
                ))}
            </div>
        </Block>
    );
};
