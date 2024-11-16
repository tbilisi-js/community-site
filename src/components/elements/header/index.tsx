import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { Button } from "@src/components/ui/button";

export const Header = () => (
    <header className="fixed top-0 text-slate-50 z-50 w-full">
        <div className="blur-mask absolute h-full w-full backdrop-blur-sm bg-slate-950/90"></div>
        <div className="relative container mx-auto px-4 z-10">
            <nav className="flex items-center justify-between py-4">
                <Link href="/" className="text-2xl font-bold">
                    Tbilisi JS
                </Link>
                <div className="hidden md:flex space-x-4">
                    <Link href="#schedule" className="hover:text-slate-50/80">
                        Schedule
                    </Link>
                    <Link href="#tickets" className="hover:text-slate-50/80">
                        Tickets
                    </Link>
                    <Link href="#previous" className="hover:text-slate-50/80">
                        Previous
                    </Link>
                    <Link href="#speakers" className="hover:text-slate-50/80">
                        Speakers
                    </Link>
                </div>
                <Button variant="secondary" size="sm" className="md:hidden">
                    <MenuIcon className="w-4 h-4" />
                </Button>
            </nav>
        </div>
    </header>
);
