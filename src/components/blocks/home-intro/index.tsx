import Image from "next/image";
import { CalendarIcon, TicketIcon } from "lucide-react";

import { Button } from "@src/components/ui/button";

export const HomeIntro: React.FC = () => (
    <section className="relative bg-slate-950 text-slate-50 pt-48 pb-32 -mt-16 px-4">
        <div className="container mx-auto py-12 px-4 text-center">
            <div className="relative z-10">
                <h1 className="text-4xl font-bold">Tbilisi JS Meetup #4</h1>
                <p className="text-xl mt-4">Join us to celebrate 1 year together!</p>
                <div className="flex justify-center items-center space-x-8 mt-16">
                    <div className="flex items-center space-x-2 font-semibold">
                        <CalendarIcon className="w-5 h-5" />
                        <time className="text-lg">
                            {new Date("2024-12-16T16:30:00.000Z").toLocaleDateString("en-GE", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </time>
                    </div>
                    <Button variant="primary" size="lg" className="font-semibold">
                        <TicketIcon className="w-5 h-5 mr-2" />
                        Register
                    </Button>
                </div>
            </div>
            <Image
                src={require("./img/tbilisi_js_community_cover.png").default.src}
                alt=""
                fill
                className="object-contain object-bottom opacity-20"
            />
        </div>
    </section>
);
