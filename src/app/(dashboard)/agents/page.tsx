import Link from "next/link";

import { AgentsTable } from "@/components/agents/agents-table";
import { getAgents } from "@/lib/queries/agents";

export default async function AgentsPage() {
    const agents = await getAgents();

    return (
        <div className="space-y-12">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-white">
                        Agents
                    </h1>
                    <p className="mt-1 text-sm text-zinc-400">
                        Oversee autonomous agents authorized to spend USDC on Monad testnet.
                    </p>
                </div>

                <Link
                    href="/agents/new"
                    className="inline-flex h-10 items-center justify-center rounded-xl bg-white px-5 text-xs font-bold tracking-tight text-black transition-all duration-200 hover:bg-zinc-200 active:scale-[0.98]"
                >
                    Create Agent
                </Link>
            </div>

            <AgentsTable agents={agents} />
        </div>
    );
}