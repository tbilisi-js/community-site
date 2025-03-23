"use client";

import { useState } from "react";
import cn from "classnames";

import { Button } from "@src/components/ui/button";
import { NavLink } from "@src/components/ui/nav-link";

import "./header.scss";

export const Header = () => {
    const [opened, setOpened] = useState(false);

    return (
        <header className={cn("header", opened && "_opened")}>
            <div className="header-content">
                <NavLink href="/" className="header-logo">
                    <img src="/logo.png" alt="TJS" width={52} height={30} />
                </NavLink>
                <nav className="header-nav">
                    <div className="header-nav-list">
                        <NavLink href="/events" className="header-nav-link">
                            Events
                        </NavLink>
                        <NavLink href="/people" className="header-nav-link">
                            People
                        </NavLink>
                        <NavLink href="/become-a-partner" className="header-nav-link">
                            Partners
                        </NavLink>
                        <Button
                            variant="primary"
                            size="md"
                            className="header-join"
                            href="https://t.me/tbilisi_js_chat"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Join Us
                        </Button>
                    </div>
                    <Button variant="primary" size="md" className="header-menu" onClick={() => setOpened(!opened)}>
                        Menu
                    </Button>
                </nav>
            </div>
        </header>
    );
};
