"use client";

import cn from "classnames";

import { Button } from "@src/components/ui/button";
import { NavLink } from "@src/components/ui/nav-link";

import "./header.scss";

export const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <NavLink href="/" className="header-logo">
                    <img src="/logo.png" alt="TJS" width={52} height={30} />
                </NavLink>
                <nav className="header-nav">
                    <div className={cn("header-nav-list")}>
                        {/* <NavLink href="/" className="header-nav-link">
                            Home
                        </NavLink>
                        <NavLink href="/events" className="header-nav-link">
                            Events
                        </NavLink>
                        <NavLink href="/people" className="header-nav-link">
                            People
                        </NavLink>
                        <NavLink href="/partners" className="header-nav-link">
                            Partners
                        </NavLink>
                        <NavLink href="/contacts" className="header-nav-link">
                            Contacts
                        </NavLink> */}
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
                </nav>
            </div>
        </header>
    );
};
