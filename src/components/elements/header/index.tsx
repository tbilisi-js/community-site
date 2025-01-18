import Link from "next/link";

import { Button } from "@src/components/ui/button";

export const Header = () => (
    <header>
        <div>
            <nav>
                <Link href="/">Tbilisi JS</Link>
                <div>
                    <Link href="/conferences">Conferences</Link>
                    <Link href="/talks">Talks</Link>
                    <Link href="/speakers">Speakers</Link>
                </div>
                <Button variant="secondary" size="md">
                    Menu
                </Button>
            </nav>
        </div>
    </header>
);
