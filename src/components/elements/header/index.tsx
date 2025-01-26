"use client";

import { useState } from "react";
import cn from "classnames";

import { Button } from "@src/components/ui/button";
import { NavLink } from "@src/components/ui/nav-link";

import "./header.scss";

export const Header = () => {
    const [opened, setOpened] = useState(false);

    return (
        <header className="header">
            <div className="header-content">
                <NavLink href="/" className="header-logo">
                    <img src="/logo.png" alt="TJS" width={52} height={30} />
                </NavLink>
                <nav className="header-nav">
                    <div className={cn("header-nav-list", opened && "_opened")}>
                        <NavLink href="/" className="header-nav-link">
                            Home
                        </NavLink>
                        <NavLink href="/events" className="header-nav-link">
                            Events
                        </NavLink>
                        <NavLink href="/speakers" className="header-nav-link">
                            Speakers
                        </NavLink>
                        <NavLink href="/partners" className="header-nav-link">
                            Partners
                        </NavLink>
                        <NavLink href="/contacts" className="header-nav-link">
                            Contacts
                        </NavLink>
                        <NavLink href="/" className="header-join">
                            <Button variant="primary" size="md">
                                Join
                            </Button>
                        </NavLink>
                    </div>
                    <Button variant="primary" size="md" className="header-menu" onClick={() => setOpened(!opened)}>
                        Menu
                    </Button>
                </nav>
            </div>
        </header>
    );
};
