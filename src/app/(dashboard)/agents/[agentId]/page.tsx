import { notFound } from 'next/navigation';

import { getAgent } from "@/lib/queries/agent";
import { SyncBalanceButton } from "@/components/agents/sync-balance-button";
import { CopyAddressButton } from '@/components/agents/copy-address-button';

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

            {/* Main Content Grid (Top Cards) */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                {/* 1. Wallet Address Panel */}
                <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-md p-6 flex flex-col justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                        Wallet Address
                    </span>
                    <CopyAddressButton address={agent.wallet?.address || ''} />
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

                {/* 3. Status Panel */}
                <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-md p-6 flex flex-col justify-center items-center text-center">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase mb-4 self-start">
                        Status
                    </span>
                    <div className="flex flex-col items-center justify-center gap-2 my-auto">
                        <span className="text-2xl font-light tracking-wider text-white uppercase flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            {agent.status}
                        </span>
                    </div>
                </div>

                {/* 4. Miniature Virtual Card Panel */}
                <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-md p-6 flex flex-col justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase mb-3">
                        Virtual Card Reference
                    </span>
                    {/* <MiniVirtualCard /> */}
                </div>

            </div>

            {/* Bottom Split Layout: Purchases Table & New Purchase Request Form */}
            <div className="grid gap-8 lg:grid-cols-3">

                {/* Purchases List Table View */}
                <div className="lg:col-span-2 rounded-2xl border border-zinc-900 bg-zinc-950/20 backdrop-blur-md overflow-hidden">
                    <div className="px-6 py-5 border-b border-zinc-900 bg-zinc-950/40">
                        <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
                            Purchases List
                        </span>
                    </div>

                    {agent.purchaseRequests.length === 0 ? (
                        <p className="text-onSurfaceVariant">
                            No requests yet.
                        </p>
                    ) : (
                        <div className="space-y-3">
                            {agent.purchaseRequests.map(
                                (request) => (
                                    <div
                                        key={request.id}
                                        className="rounded-lg border border-white/10 p-4"
                                    >
                                        <p className="font-semibold">
                                            {request.merchant}
                                        </p>

                                        <p>
                                            $
                                            {String(
                                                request.amount,
                                            )}
                                        </p>

                                        <p>
                                            {request.status}
                                        </p>
                                    </div>
                                ),
                            )}
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
}