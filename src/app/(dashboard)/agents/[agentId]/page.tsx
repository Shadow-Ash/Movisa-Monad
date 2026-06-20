import { notFound } from 'next/navigation';
import Link from 'next/link';

import { getAgent } from '@/lib/queries/agent';
import { SyncBalanceButton } from "@/components/agents/sync-balance-button";
import { CopyAddressButton } from "@/components/agents/copy-address-button";
import { InlinePurchaseRequestForm } from "@/components/purchase-requests/inline-purchase-request-form";

// --- Sub-components for cleaner Tailwind architecture ---

function MiniVirtualCard() {
    return (
        <div className="relative aspect-[1.586/1] w-full max-w-[200px] rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-4 shadow-xl overflow-hidden mx-auto select-none">
            {/* Subtle purple background glow */}
            <div className="absolute inset-0 bg-purple-500/[0.03] blur-md pointer-events-none" />
            
            <div className="flex items-start justify-between text-[8px] font-bold tracking-[0.2em] text-zinc-500">
                <span>MOVISA</span>
                <svg className="h-3 w-3 fill-zinc-500" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
            </div>

            <div className="mt-2.5">
                <span className="inline-block h-3.5 w-4.5 rounded-sm bg-yellow-600/20 border border-yellow-700/30" />
            </div>

            <div className="mt-3 font-mono text-xs text-zinc-300 tracking-wider">
                ••••  ••••  ••••  2048
            </div>

            <div className="mt-2.5 flex items-center justify-between text-[7px] font-mono text-zinc-600 uppercase tracking-widest">
                <div>
                    <span>Agent</span>
                    <p className="text-zinc-500 font-semibold">MOVISA AGENT</p>
                </div>
                <div className="text-right">
                    <span>Valid</span>
                    <p className="text-zinc-500 font-semibold">09/29</p>
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
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors duration-200"
                >
                    ← Back to Agents List
                </Link>

                <div className="flex flex-col gap-1.5 mt-2">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                        Agent Detail &gt; {agent.name}
                    </span>
                    <h1 className="text-4xl font-bold tracking-tight text-white leading-none">
                        {agent.name}
                    </h1>
                    <p className="text-sm text-zinc-400 max-w-xl leading-relaxed mt-1">
                        {agent.description || 'No description provided.'}
                    </p>
                </div>
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

                {/* 2. Balance Panel */}
                <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-md p-6 flex flex-col justify-between gap-4">
                    <div>
                        <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                            Balance
                        </span>
                        <h3 className="text-3xl font-light tracking-tight text-white mt-1">
                            {String(agent.wallet?.balance ?? 0)} <span className="text-xs font-mono font-bold text-zinc-500">USDC</span>
                        </h3>
                    </div>
                    <div>
                        <SyncBalanceButton agentId={agent.id} />
                    </div>
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
                    <MiniVirtualCard />
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

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-zinc-900 bg-zinc-950/10">
                                    <th className="py-3.5 pl-6 text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">Date</th>
                                    <th className="py-3.5 text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">Merchant</th>
                                    <th className="py-3.5 text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">Amount</th>
                                    <th className="py-3.5 pr-6 text-right text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {agent.purchaseRequests.map((req: any) => (
                                    <tr
                                        key={req.id}
                                        className="border-b border-zinc-900/50 hover:bg-zinc-950/40 transition-colors"
                                    >
                                        <td className="py-4 pl-6 text-xs text-zinc-500 font-mono">
                                            {new Date(req.createdAt).toLocaleDateString(undefined, {
                                                month: 'short',
                                                day: 'numeric',
                                            })}
                                        </td>
                                        <td className="py-4 text-xs font-semibold text-white">
                                            {req.merchant || req.title}
                                        </td>
                                        <td className="py-4 text-xs font-mono text-zinc-300">
                                            {String(req.amount)} USDC
                                        </td>
                                        <td className="py-4 pr-6 text-right">
                                            <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium tracking-tight ${
                                                req.status === 'APPROVED' || req.status === 'COMPLETED'
                                                    ? 'text-emerald-400 bg-emerald-950/20 border-emerald-900/30'
                                                    : req.status === 'PENDING'
                                                    ? 'text-purple-400 bg-purple-950/20 border-purple-900/30'
                                                    : 'text-red-400 bg-red-950/20 border-red-900/30'
                                            }`}>
                                                {req.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                                {agent.purchaseRequests.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="py-12 text-center text-xs text-zinc-600 font-mono">
                                            No purchase history found for this agent.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* New Purchase Request Form Panel */}
                <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-md p-6 border-t-2 border-purple-500/80 flex flex-col justify-between gap-6">
                    <div>
                        <span className="text-xs font-mono font-bold tracking-widest text-zinc-300 uppercase block mb-1">
                            New Purchase Request
                        </span>
                        <p className="text-[11px] text-zinc-500 leading-relaxed mb-6">
                            Submit a spend authorization request for this agent. Limits are assessed on-chain.
                        </p>
                        
                        <InlinePurchaseRequestForm agentId={agent.id} />
                    </div>
                </div>

            </div>

        </div>
    );
}