import Link from "next/link";

import { Button } from "@/components/ui";

import { AgentsTable } from "@/components/agents/agents-table";

import { getAgents } from "@/lib/queries/agents";

export default async function AgentsPage() {
    const agents =
        await getAgents();

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold">
                    Agents
                </h1>

                <Link href="/agents/new">
                    <Button>
                        Create Agent
                    </Button>
                </Link>
            </div>

            <AgentsTable
                agents={agents}
            />
        </div>
    );
}