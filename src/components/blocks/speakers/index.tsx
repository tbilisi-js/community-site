import { MicIcon } from "lucide-react";

import { Button } from "@src/components/ui/button";

export const Speakers = () => (
    <section
        id="speakers"
        className="container mx-auto py-12 px-4 flex justify-center items-center flex-col rounded-lg p-8 text-center mb-20"
    >
        <h2 className="text-3xl font-bold mb-4">Become a Speaker</h2>
        <p className="mb-6">Share your knowledge and experience with our community.</p>
        <Button variant="neutral" size="lg">
            <MicIcon className="w-4 h-4 mr-2" />
            Register as Speaker
        </Button>
    </section>
);
