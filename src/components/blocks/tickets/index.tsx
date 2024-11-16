import { TicketIcon } from "lucide-react";

import { Button } from "@src/components/ui/button";

export const Tickets = () => (
    <section
        id="tickets"
        className="container mx-auto py-12 px-4 flex justify-center items-center flex-col mb-16 bg-slate-950 text-slate-50 rounded-lg p-10 text-center"
    >
        <h2 className="text-3xl font-bold mb-6">Get Your Ticket Now!</h2>
        <p className="mb-10">Don&apos;t miss out on this amazing opportunity to learn and network.</p>
        <Button variant="primary" size="lg">
            <TicketIcon className="w-4 h-4 mr-2" />
            Register
        </Button>
    </section>
);
