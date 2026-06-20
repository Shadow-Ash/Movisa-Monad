import { prisma } from "@/lib/db/prisma";

export default async function TransactionsPage() {
    const transactions =
        await prisma.transaction.findMany({
            include: {
                agent: true,
                card: true,
            },

            orderBy: {
                createdAt: "desc",
            },
        });

    return (
        <div>
            <h1 className="mb-8 text-4xl font-bold">
                Transactions
            </h1>

            <div className="space-y-4">
                {transactions.map(
                    (tx) => (
                        <div
                            key={tx.id}
                            className="rounded-xl border border-white/10 p-6"
                        >
                            <p>
                                Merchant:
                                {tx.merchant}
                            </p>

                            <p>
                                Amount: $
                                {String(
                                    tx.amount,
                                )}
                            </p>

                            <p>
                                Agent:
                                {
                                    tx.agent
                                        .name
                                }
                            </p>

                            <p>
                                Status:
                                {tx.status}
                            </p>
                        </div>
                    ),
                )}
            </div>
        </div>
    );
}