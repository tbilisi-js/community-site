import { UserIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@src/components/ui/card";
import { talks } from "@src/core/mock/talks";

export const Schedule = () => (
    <section id="schedule" className="container mx-auto py-12 px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">Conference Schedule</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {talks.map((talk) => (
                <Card key={talk.topic + talk.time} className="flex flex-col">
                    <CardHeader>
                        <CardTitle>{talk.topic}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-between flex-1">
                        <p className="text-muted-foreground">{talk.description}</p>
                        <div>
                            <div className="flex items-center justify-between mt-6">
                                <div>{talk.time}</div>
                                {talk.speaker && (
                                    <div className="flex items-center space-x-2">
                                        <UserIcon className="w-4 h-4" />
                                        <span>{talk.speaker}</span>
                                    </div>
                                )}
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {talk.labels.map((label) => (
                                    <span key={label} className="bg-slate-800 text-white text-sm px-2 py-1 rounded">
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    </section>
);
