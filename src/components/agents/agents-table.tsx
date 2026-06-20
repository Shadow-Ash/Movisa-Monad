import Link from 'next/link';

type Props = {
    agents: any[];
};

export function AgentsTable({
    agents,
}: Props) {
    return (
        <div className="overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/20 backdrop-blur-md">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-zinc-900 bg-zinc-950/40">
                        <th className="py-4 pl-6 text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">
                            Agent Name
                        </th>

                        <th className="py-4 text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">
                            Wallet Address
                        </th>

                        <th className="py-4 pr-6 text-right text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">
                            Status
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {agents.map((agent) => (
                        <tr
                            key={agent.id}
                            className="border-b border-zinc-900/50 hover:bg-zinc-950/40 transition-colors"
                        >
                            <td className="py-4 pl-6">
                                <Link
                                    href={`/agents/${agent.id}`}
                                    className="text-xs font-semibold text-white hover:text-purple-400 transition-colors"
                                >
                                    {agent.name}
                                </Link>
                            </td>

                            <td className="py-4">
                                <span className="font-mono text-xs text-zinc-400 select-all">
                                    {agent.wallet?.address || 'No wallet linked'}
                                </span>
                            </td>

                            <td className="py-4 pr-6 text-right">
                                <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium tracking-tight ${
                                    agent.status === 'ACTIVE'
                                        ? 'text-emerald-400 bg-emerald-950/20 border-emerald-900/30'
                                        : 'text-zinc-400 bg-zinc-900 border-zinc-800'
                                }`}>
                                    {agent.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                    {agents.length === 0 && (
                        <tr>
                            <td colSpan={3} className="py-12 text-center text-xs text-zinc-500">
                                No agents registered yet. Click "Create Agent" to start.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}