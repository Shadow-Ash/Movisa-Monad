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