import Link from 'next/link';

type Props = {
    agents: any[];
};

export function AgentsTable({
    agents,
}: Props) {
    return (
        <div className="overflow-hidden rounded-xl border border-white/10">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-white/10">
                        <th className="p-4 text-left">
                            Agent
                        </th>

                        <th className="p-4 text-left">
                            Wallet
                        </th>

                        <th className="p-4 text-left">
                            Status
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {agents.map((agent) => (
                        <tr
                            key={agent.id}
                            className="border-b border-white/5"
                        >
                            <td className="p-4">
                                <Link
                                    href={`/agents/${agent.id}`}
                                    className="hover:text-primary"
                                >
                                    {agent.name}
                                </Link>
                            </td>

                            <td className="p-4">
                                {agent.wallet?.address}
                            </td>

                            <td className="p-4">
                                {agent.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}