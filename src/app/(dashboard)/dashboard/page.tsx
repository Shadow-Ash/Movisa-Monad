import { prisma } from "@/lib/db/prisma";
import {
    DashboardHeader,
    StatCard,
} from "@/components/dashboard";

interface ActivityRowProps {
    agent: string;
    action: string;
    amount: string;
    status: "success" | "pending" | "failed";
    time: string;
}

function ActivityRow({
    agent,
    action,
    amount,
    status,
    time,
}: ActivityRowProps) {
    const statusColors = {
        success:
            "text-zinc-400 bg-zinc-900 border-zinc-800",
        pending:
            "text-purple-400 bg-purple-950/20 border-purple-900/30",
        failed:
            "text-red-400 bg-red-950/20 border-red-900/30",
    };

    return (
        <tr className="border-b border-zinc-900/50 transition-colors hover:bg-zinc-950/20">
            <td className="py-4 pl-6 text-xs font-semibold text-white">
                {agent}
            </td>
            <td className="py-4 text-xs text-zinc-400">
                {action}
            </td>
            <td className="py-4 text-xs font-mono text-zinc-300">
                {amount}
            </td>
            <td className="py-4">
                <span
                    className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium tracking-tight ${statusColors[status]}`}
                >
                    {status}
                </span>
            </td>
            <td className="py-4 pr-6 text-right text-xs font-mono text-zinc-500">
                {time}
            </td>
        </tr>
    );
}

export default async function DashboardPage() {
    const [
        agents,
        cards,
        transactions,
        requests,
    ] = await Promise.all([
        prisma.agent.count(),
        prisma.card.count(),
        prisma.transaction.count(),
        prisma.purchaseRequest.count(),
    ]);

    const activities: ActivityRowProps[] = [
        {
            agent: "OpenAI Agent 0x1",
            action: "API Subscription renew",
            amount: "-45.00 USDC",
            status: "success",
            time: "2m ago",
        },
        {
            agent: "LangChain Broker",
            action: "Compute resources deposit",
            amount: "-120.00 USDC",
            status: "success",
            time: "14m ago",
        },
        {
            agent: "Auditor Bot",
            action: "Multisig gas reserve top-up",
            amount: "-8.50 USDC",
            status: "success",
            time: "1h ago",
        },
        {
            agent: "Model Evaluator",
            action: "VectorDB query allocation",
            amount: "-300.00 USDC",
            status: "pending",
            time: "2h ago",
        },
    ];

    return (
        <div className="space-y-12">
            <DashboardHeader />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Agents"
                    value={String(agents)}
                />
                <StatCard
                    title="Cards Issued"
                    value={String(cards)}
                />
                <StatCard
                    title="Transactions"
                    value={String(transactions)}
                />
                <StatCard
                    title="Requests"
                    value={String(requests)}
                />
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/20 backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-zinc-900 bg-zinc-950/40 px-6 py-5">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500">
                        Recent Agent Activities
                    </span>
                    <span
                        className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"
                        title="System Live"
                    />
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="border-b border-zinc-900 bg-zinc-950/10">
                                <th className="py-3.5 pl-6 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                                    Agent
                                </th>
                                <th className="py-3.5 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                                    Action
                                </th>
                                <th className="py-3.5 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                                    Amount
                                </th>
                                <th className="py-3.5 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                                    Status
                                </th>
                                <th className="py-3.5 pr-6 text-right text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                                    Time
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {activities.map((act, index) => (
                                <ActivityRow
                                    key={index}
                                    {...act}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}