import { UserIcon } from "lucide-react";
import Link from "next/link";

import { type Talk } from "@src/core/mock/talks";
import { Card, CardContent, CardHeader, CardTitle } from "@src/components/ui/card";
import { speakers } from "@src/core/mock/speakers";

export const TalkCard: React.FC<Talk> = ({ slug, description, labels, name, time, speaker }) => {
    const speakerData = speaker && speakers.find(({ slug }) => slug === speaker);

    return (
        <Card key={slug} className="flex flex-col">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between flex-1">
                <p className="text-muted-foreground">
                    {description}
                    <br />
                    <Link href={`/talks/${slug}`} className="block py-2 hover:text-blue-700">
                        More details
                    </Link>
                </p>
                <div>
                    <div className="flex items-center justify-between mt-6">
                        <div>{time}</div>
                        {speakerData && (
                            <Link
                                className="flex items-center justify-start space-x-2 py-2 hover:text-blue-700"
                                href={`/authors/${speakerData.slug}`}
                            >
                                <UserIcon className="w-4 h-4" />
                                <span>{speakerData.name}</span>
                            </Link>
                        )}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {labels.map((label) => (
                            <span key={label} className="bg-slate-800 text-white text-sm px-2 py-1 rounded">
                                {label}
                            </span>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
