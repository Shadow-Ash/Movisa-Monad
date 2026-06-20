import {
    DashboardHeader,
    StatCard,
} from '@/components/dashboard';

// --- Sub-components for cleaner Tailwind architecture ---

interface ActivityRowProps {
    agent: string;
    action: string;
    amount: string;
    status: 'success' | 'pending' | 'failed';
    time: string;
}

function ActivityRow({ agent, action, amount, status, time }: ActivityRowProps) {
    const statusColors = {
        success: 'text-zinc-400 bg-zinc-900 border-zinc-800',
        pending: 'text-purple-400 bg-purple-950/20 border-purple-900/30',
        failed: 'text-red-400 bg-red-950/20 border-red-900/30',
    };

    return (
        <tr className="border-b border-zinc-900/50 hover:bg-zinc-950/20 transition-colors">
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
                <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium tracking-tight ${statusColors[status]}`}>
                    {status}
                </span>
            </td>
            <td className="py-4 pr-6 text-right text-xs text-zinc-500 font-mono">
                {time}
            </td>
        </tr>
    );
}

export default function DashboardPage() {
    // Mock recent activity for design preview compliance
    const activities: ActivityRowProps[] = [
        { agent: 'OpenAI Agent 0x1', action: 'API Subscription renew', amount: '-45.00 USDC', status: 'success', time: '2m ago' },
        { agent: 'LangChain Broker', action: 'Compute resources deposit', amount: '-120.00 USDC', status: 'success', time: '14m ago' },
        { agent: 'Auditor Bot', action: 'Multisig gas reserve top-up', amount: '-8.50 USDC', status: 'success', time: '1h ago' },
        { agent: 'Model Evaluator', action: 'VectorDB query allocation', amount: '-300.00 USDC', status: 'pending', time: '2h ago' },
    ];

    return (
        <div className="space-y-12">
            <DashboardHeader />

            {/* Stat Widgets Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard title="Total Agents" value="4" />
                <StatCard title="Active Cards" value="8" />
                <StatCard title="Total Spend" value="1,492 USDC" />
                <StatCard title="Pending Approvals" value="1" />
            </div>

            {/* Recent Activity Section */}
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950/20 backdrop-blur-md overflow-hidden">
                <div className="px-6 py-5 border-b border-zinc-900 bg-zinc-950/40 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
                        Recent Agent Activities
                    </span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" title="System Live" />
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-zinc-900 bg-zinc-950/10">
                                <th className="py-3.5 pl-6 text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">Agent</th>
                                <th className="py-3.5 text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">Action</th>
                                <th className="py-3.5 text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">Amount</th>
                                <th className="py-3.5 text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">Status</th>
                                <th className="py-3.5 pr-6 text-right text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activities.map((act, index) => (
                                <ActivityRow key={index} {...act} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}