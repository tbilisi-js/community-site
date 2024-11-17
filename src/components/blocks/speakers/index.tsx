import Link from "next/link";
import { MicIcon } from "lucide-react";

export const Speakers = () => (
    <section
        id="speakers"
        className="container mx-auto py-12 px-4 flex justify-center items-center flex-col rounded-lg p-8 text-center mb-20"
    >
        <h2 className="text-3xl font-bold mb-4">Become a Speaker</h2>
        <p className="mb-6">Share your knowledge and experience with our community.</p>
        <Link
            href="/become-a-speaker"
            className="flex items-center rounded-md py-2 px-6 bg-slate-800 text-slate-50 hover:bg-slate-600"
        >
            <MicIcon className="w-4 h-4 mr-2" />
            Register as Speaker
        </Link>
    </section>
);
