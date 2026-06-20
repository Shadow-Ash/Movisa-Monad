import { prisma } from "@/lib/db/prisma";
import {
    DashboardHeader,
    StatCard,
} from "@/components/dashboard";

export default async function DashboardPage() {
    const [
        agentsCount,
        cardsCount,
        transactionsCount,
        requestsCount,

        recentTransactions,
        recentRequests,

        wallets,
    ] = await Promise.all([
        prisma.agent.count(),

        prisma.card.count(),

        prisma.transaction.count(),

        prisma.purchaseRequest.count(),

        prisma.transaction.findMany({
            include: {
                agent: true,
                card: true,
            },

            orderBy: {
                createdAt: "desc",
            },

            take: 10,
        }),

        prisma.purchaseRequest.findMany({
            include: {
                agent: true,
            },

            orderBy: {
                createdAt: "desc",
            },

            take: 10,
        }),

        prisma.wallet.findMany(),
    ]);

    const treasuryBalance =
        wallets.reduce(
            (sum, wallet) =>
                sum +
                Number(wallet.balance),

            0,
        );

    return (
        <div className="space-y-10">
            <DashboardHeader />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                <StatCard
                    title="Agents"
                    value={String(
                        agentsCount,
                    )}
                />

                <StatCard
                    title="Cards"
                    value={String(
                        cardsCount,
                    )}
                />

                <StatCard
                    title="Transactions"
                    value={String(
                        transactionsCount,
                    )}
                />

                <StatCard
                    title="Requests"
                    value={String(
                        requestsCount,
                    )}
                />

                <StatCard
                    title="Treasury"
                    value={`${treasuryBalance.toFixed(
                        2,
                    )
                        } USDC`}
                />
            </div>

            <div className="grid gap-8 xl:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/20">
                    <div className="border-b border-zinc-900 px-6 py-4">
                        <h2 className="text-sm font-semibold text-white">
                            Recent Transactions
                        </h2>
                    </div>

                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-zinc-900">
                                <th className="px-6 py-3 text-left text-xs text-zinc-500">
                                    Agent
                                </th>

                                <th className="py-3 text-left text-xs text-zinc-500">
                                    Merchant
                                </th>

                                <th className="py-3 text-left text-xs text-zinc-500">
                                    Amount
                                </th>

                                <th className="pr-6 py-3 text-right text-xs text-zinc-500">
                                    Status
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {recentTransactions.map(
                                (tx) => (
                                    <tr
                                        key={
                                            tx.id
                                        }
                                        className="border-b border-zinc-900/50"
                                    >
                                        <td className="px-6 py-4 text-xs text-white">
                                            {
                                                tx
                                                    .agent
                                                    .name
                                            }
                                        </td>

                                        <td className="py-4 text-xs text-zinc-300">
                                            {tx.merchant ??
                                                "-"}
                                        </td>

                                        <td className="py-4 text-xs font-mono text-zinc-300">
                                            {String(
                                                tx.amount,
                                            )}
                                        </td>

                                        <td className="pr-6 py-4 text-right text-xs text-zinc-400">
                                            {
                                                tx.status
                                            }
                                        </td>
                                    </tr>
                                ),
                            )}

                            {recentTransactions.length ===
                                0 && (
                                    <tr>
                                        <td
                                            colSpan={
                                                4
                                            }
                                            className="py-12 text-center text-xs text-zinc-600"
                                        >
                                            No transactions yet
                                        </td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>

                <div className="overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/20">
                    <div className="border-b border-zinc-900 px-6 py-4">
                        <h2 className="text-sm font-semibold text-white">
                            Recent Purchase Requests
                        </h2>
                    </div>

                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-zinc-900">
                                <th className="px-6 py-3 text-left text-xs text-zinc-500">
                                    Agent
                                </th>

                                <th className="py-3 text-left text-xs text-zinc-500">
                                    Merchant
                                </th>

                                <th className="py-3 text-left text-xs text-zinc-500">
                                    Amount
                                </th>

                                <th className="pr-6 py-3 text-right text-xs text-zinc-500">
                                    Status
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {recentRequests.map(
                                (req) => (
                                    <tr
                                        key={
                                            req.id
                                        }
                                        className="border-b border-zinc-900/50"
                                    >
                                        <td className="px-6 py-4 text-xs text-white">
                                            {
                                                req
                                                    .agent
                                                    .name
                                            }
                                        </td>

                                        <td className="py-4 text-xs text-zinc-300">
                                            {
                                                req.merchant
                                            }
                                        </td>

                                        <td className="py-4 text-xs font-mono text-zinc-300">
                                            {String(
                                                req.amount,
                                            )}
                                        </td>

                                        <td className="pr-6 py-4 text-right text-xs text-zinc-400">
                                            {
                                                req.status
                                            }
                                        </td>
                                    </tr>
                                ),
                            )}

                            {recentRequests.length ===
                                0 && (
                                    <tr>
                                        <td
                                            colSpan={
                                                4
                                            }
                                            className="py-12 text-center text-xs text-zinc-600"
                                        >
                                            No requests yet
                                        </td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );


}
