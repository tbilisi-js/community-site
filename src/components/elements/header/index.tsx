import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { Button } from "@src/components/ui/button";

export const Header = () => (
    <header className="sticky top-0 text-slate-50 z-50 w-full h-16">
        <div className="blur-mask absolute h-full w-full backdrop-blur-sm bg-slate-950/90"></div>
        <div className="relative container mx-auto px-4 z-10">
            <nav className="flex items-center justify-between py-4">
                <Link href="/" className="text-2xl font-bold">
                    Tbilisi JS
                </Link>
                <div className="hidden md:flex space-x-4">
                    <Link href="/conferences" className="py-1 hover:text-slate-50/80">
                        Conferences
                    </Link>
                    <Link href="/talks" className="py-1 hover:text-slate-50/80">
                        Talks
                    </Link>
                    <Link href="/speakers" className="py-1 hover:text-slate-50/80">
                        Speakers
                    </Link>
                </div>
                <Button variant="secondary" size="md" className="md:hidden">
                    <MenuIcon className="w-4 h-4" />
                </Button>
            </nav>
        </div>
    </header>
);
