import { notFound } from 'next/navigation';

import { getAgent } from '@/lib/queries/agent';
import { SyncBalanceButton } from "@/components/agents/sync-balance-button";
import Link from "next/link";

export default async function AgentPage({
    params,
}: {
    params: Promise<{
        agentId: string;
    }>;
}) {
    const { agentId } = await params;
    const agent = await getAgent(agentId);

    if (!agent) {
        notFound();
    }

    return (
        <div className="space-y-12 text-white">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-white">
                    {agent.name}
                </h1>

                <p className="mt-2 text-sm text-zinc-400 max-w-2xl leading-relaxed">
                    {agent.description}
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Wallet Card */}
                <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-md p-6">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                        Wallet Address
                    </span>
                    <p className="mt-4 break-all font-mono text-xs text-zinc-300">
                        {agent.wallet?.address}
                    </p>
                </div>

                {/* Balance Card */}
                <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-md p-6 flex flex-col justify-between gap-4">
                    <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                            Balance
                        </span>
                        <SyncBalanceButton agentId={agent.id} />
                    </div>

                    <h3 className="text-3xl font-light tracking-tight text-white">
                        {String(agent.wallet?.balance ?? 0)} <span className="text-xs font-mono font-bold text-zinc-500">USDC</span>
                    </h3>
                </div>

                {/* Status Card */}
                <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-md p-6">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                        Status
                    </span>

                    <h3 className="mt-4 text-2xl font-light tracking-tight text-white flex items-center gap-2">
                        <span className={`h-2.5 w-2.5 rounded-full ${agent.status === 'ACTIVE' ? 'bg-emerald-500' : 'bg-zinc-500'}`} />
                        {agent.status}
                    </h3>
                </div>

                <Link
                    href={`/agents/${agent.id}/purchase-request/new`}
                    className="inline-block rounded-lg bg-primary px-4 py-2 text-black"
                >
                    New Request
                </Link>

                <div className="rounded-xl border border-white/10 p-6">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-bold">
                            Purchase Requests
                        </h2>

                        <Link
                            href={`/agents/${agent.id}/purchase-request/new`}
                            className="rounded-lg bg-primary px-4 py-2 text-black"
                        >
                            New Request
                        </Link>
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