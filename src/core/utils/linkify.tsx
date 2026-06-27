import Link from "next/link";

export function linkifyText(text: string, speakers: { name: string; slug: string }[]): React.ReactNode[] {
    if (!speakers.length) return [text];

    const sorted = [...speakers].sort((a, b) => b.name.length - a.name.length);
    const escaped = sorted.map((s) => s.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    const pattern = new RegExp(`(${escaped.join("|")})`, "g");
    const nameToSlug = Object.fromEntries(speakers.map((s) => [s.name, s.slug]));

    return text.split(pattern).map((part, i) => {
        const slug = nameToSlug[part];
        return slug ? (
            <Link key={i} href={`/people/${slug}`} className="event-intro-description-link">
                {part}
            </Link>
        ) : (
            part
        );
    });
}
