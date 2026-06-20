import { notFound } from "next/navigation";
import Link from "next/link";

import { getAgent } from "@/lib/queries/agent";
import { SyncBalanceButton } from "@/components/agents/sync-balance-button";
import { CopyAddressButton } from "@/components/agents/copy-address-button";
import { InlinePurchaseRequestForm } from "@/components/purchase-requests/inline-purchase-request-form";
import { IssueCardButton } from "@/components/cards/issue-card-button";

export const dynamic = 'force-dynamic';

// --- Sub-components for cleaner Tailwind architecture ---

function MiniVirtualCard() {
    return (
        <div className="relative mx-auto aspect-[1.586/1] w-full max-w-[200px] select-none overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-4 shadow-xl">
            {/* Subtle purple background glow */}
            <div className="pointer-events-none absolute inset-0 bg-purple-500/[0.03] blur-md" />

            <div className="flex items-start justify-between text-[8px] font-bold tracking-[0.2em] text-zinc-500">
                <span>MOVISA</span>
                <svg
                    className="h-3 w-3 fill-zinc-500"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
            </div>

            <div className="mt-2.5">
                <span className="inline-block h-3.5 w-4.5 rounded-sm border border-yellow-700/30 bg-yellow-600/20" />
            </div>

            <div className="mt-3 font-mono text-xs tracking-wider text-zinc-300">
                ••••  ••••  ••••  2048
            </div>

            <div className="mt-2.5 flex items-center justify-between text-[7px] font-mono uppercase tracking-widest text-zinc-600">
                <div>
                    <span>Agent</span>
                    <p className="font-semibold text-zinc-500">MOVISA AGENT</p>
                </div>
                <div className="text-right">
                    <span>Valid</span>
                    <p className="font-semibold text-zinc-500">09/29</p>
                </div>
            </div>
        </div>
    );
}

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
            {/* Header & Navigation Area */}
            <div className="flex flex-col gap-4">
                <Link
                    href="/agents"
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-500 transition-colors duration-200 hover:text-zinc-300"
                >
                    ← Back to Agents List
                </Link>

                <div className="mt-2 flex flex-col gap-1.5">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                        Agent Detail &gt; {agent.name}
                    </span>
                    <h1 className="leading-none text-4xl font-bold tracking-tight text-white">
                        {agent.name}
                    </h1>
                    <p className="mt-1 max-w-xl text-sm leading-relaxed text-zinc-400">
                        {agent.description || "No description provided."}
                    </p>
                </div>
            </div>

            {/* Main Content Grid (Top Cards) */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* 1. Wallet Address Panel */}
                <div className="flex flex-col justify-between rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 backdrop-blur-md">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                        Wallet Address
                    </span>
                    <CopyAddressButton
                        address={agent.wallet?.address || ""}
                    />
                </div>

                {/* 2. Balance Panel */}
                <div className="flex flex-col justify-between gap-4 rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 backdrop-blur-md">
                    <div>
                        <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                            Balance
                        </span>
                        <h3 className="mt-1 text-3xl font-light tracking-tight text-white">
                            {String(agent.wallet?.balance ?? 0)}{" "}
                            <span className="text-xs font-mono font-bold text-zinc-500">
                                USDC
                            </span>
                        </h3>
                    </div>
                    <div>
                        <SyncBalanceButton agentId={agent.id} />
                    </div>
                </div>

                {/* 3. Status Panel */}
                <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 text-center backdrop-blur-md">
                    <span className="mb-4 self-start text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                        Status
                    </span>
                    <div className="my-auto flex flex-col items-center justify-center gap-2">
                        <span className="flex items-center gap-2 text-2xl font-light uppercase tracking-wider text-white">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                            {agent.status}
                        </span>
                    </div>
                </div>

                {/* 4. Miniature Virtual Card Panel */}
                <div className="flex flex-col justify-between rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 backdrop-blur-md">
                    <span className="mb-3 text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                        Virtual Card Reference
                    </span>
                    {/* Uncomment when you want the visual card */}
                    {/* <MiniVirtualCard /> */}
                </div>
            </div>

            {/* Bottom Split Layout: Purchases Table & New Purchase Request Form */}
            <div className="grid gap-8 lg:grid-cols-3">
                {/* Purchases List Table View */}
                <div className="lg:col-span-2 overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/20 backdrop-blur-md">
                    <div className="border-b border-zinc-900 bg-zinc-950/40 px-6 py-5">
                        <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
                            Purchases List
                        </span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left">
                            <thead>
                                <tr className="border-b border-zinc-900 bg-zinc-950/10">
                                    <th className="py-3.5 pl-6 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                                        Date
                                    </th>
                                    <th className="py-3.5 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                                        Merchant
                                    </th>
                                    <th className="py-3.5 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                                        Amount
                                    </th>
                                    <th className="py-3.5 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                                        Status
                                    </th>

                                    <th className="py-3.5 pr-6 text-right text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {agent.purchaseRequests.map((req: any) => (
                                    <tr
                                        key={req.id}
                                        className="border-b border-zinc-900/50 transition-colors hover:bg-zinc-950/40"
                                    >
                                        <td className="py-4 pl-6 font-mono text-xs text-zinc-500">
                                            {new Date(
                                                req.createdAt,
                                            ).toLocaleDateString(undefined, {
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </td>

                                        <td className="py-4 text-xs font-semibold text-white">
                                            {req.merchant || req.title}
                                        </td>

                                        <td className="py-4 text-xs font-mono text-zinc-300">
                                            {String(req.amount)} USDC
                                        </td>

                                        <td className="py-4">
                                            <span
                                                className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium tracking-tight ${req.status === "APPROVED" ||
                                                    req.status === "COMPLETED"
                                                    ? "border-emerald-900/30 bg-emerald-950/20 text-emerald-400"
                                                    : req.status === "PENDING"
                                                        ? "border-purple-900/30 bg-purple-950/20 text-purple-400"
                                                        : "border-red-900/30 bg-red-950/20 text-red-400"
                                                    }`}
                                            >
                                                {req.status}
                                            </span>
                                        </td>

                                        <td className="py-4 pr-6 text-right">
                                            <IssueCardButton
                                                purchaseRequestId={req.id}
                                            />
                                        </td>
                                    </tr>
                                ))}
                                {agent.purchaseRequests.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={4}
                                            className="py-12 text-center font-mono text-xs text-zinc-600"
                                        >
                                            No purchase history found for this agent.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* New Purchase Request Form Panel */}
                <div className="flex flex-col justify-between gap-6 rounded-2xl border border-zinc-900 border-t-2 border-purple-500/80 bg-zinc-950/40 p-6 backdrop-blur-md">
                    <div>
                        <span className="mb-1 block text-xs font-mono font-bold uppercase tracking-widest text-zinc-300">
                            New Purchase Request
                        </span>
                        <p className="mb-6 text-[11px] leading-relaxed text-zinc-500">
                            Submit a spend authorization request for this agent. Limits are
                            assessed on-chain.
                        </p>

                        <InlinePurchaseRequestForm agentId={agent.id} />
                    </div>
                </div>
            </div>
        </div>
    );
}