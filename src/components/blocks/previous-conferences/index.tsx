import Link from "next/link";
import { CalendarIcon, UserIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@src/components/ui/card";
import { conferences } from "@src/core/mock/conferences";

export const PreviousConferences = () => (
    <section id="previous" className="container mx-auto py-12 px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">Previous Conferences</h2>
        <div className="grid gap-6 md:grid-cols-3">
            {conferences.map((conference) => (
                <Card key={conference.slug}>
                    <CardHeader>
                        <CardTitle>{conference.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center space-x-2 mt-1 text-slate-800">
                            <CalendarIcon className="w-4 h-4" />
                            <time className="text-sm">
                                {new Date(conference.date).toLocaleDateString("en-GE", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </time>
                        </div>
                        <Link href={`/conferences/${conference.slug}`} className="block py-2 hover:text-blue-700">
                            More details
                        </Link>
                        <div className="flex items-center space-x-2 mt-4">
                            <UserIcon className="w-4 h-4" />
                            <span>{conference.attendees} attendees</span>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    </section>
);
