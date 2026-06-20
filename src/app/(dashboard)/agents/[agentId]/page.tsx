import { notFound } from 'next/navigation';

import { getAgent } from '@/lib/queries/agent';
import { SyncBalanceButton } from "@/components/agents/sync-balance-button";

export default async function AgentPage({
    params,
}: {
    params: Promise<{
        agentId: string;
    }>;
}) {
    const { agentId } =
        await params;

    const agent =
        await getAgent(agentId);

    if (!agent) {
        notFound();
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold">
                    {agent.name}
                </h1>

                <p className="mt-2 text-onSurfaceVariant">
                    {agent.description}
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-white/10 p-6">
                    <p>Wallet Address</p>

                    <p className="mt-3 break-all text-sm">
                        {agent.wallet?.address}
                    </p>
                </div>

                <div className="rounded-xl border border-white/10 p-6">
                    <p>Balance</p><SyncBalanceButton
                        agentId={agent.id}
                    />

                    <h3 className="mt-3 text-2xl font-bold">
                        {String(
                            agent.wallet?.balance ??
                            0,
                        )}
                    </h3>
                </div>

                <div className="rounded-xl border border-white/10 p-6">
                    <p>Status</p>

                    <h3 className="mt-3 text-2xl font-bold">
                        {agent.status}
                    </h3>
                </div>
            </div>
        </div>
    );
}