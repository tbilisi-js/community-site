import { talks } from "@src/core/mock/talks";
import { TalkCard } from "@src/components/elements/talk-card";

export const Schedule = () => (
    <section id="schedule" className="container mx-auto py-12 px-4 mb-16">
        <h2 className="text-3xl font-bold mb-8">Conference Schedule</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {talks.map((talk) => (
                <TalkCard
                    key={talk.slug}
                    slug={talk.slug}
                    name={talk.name}
                    description={talk.description}
                    labels={talk.labels}
                    time={talk.time}
                    speaker={talk.speaker}
                    type={talk.type}
                />
            ))}
        </div>
    </section>
);
