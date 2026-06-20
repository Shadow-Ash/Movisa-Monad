import { prisma } from "@/lib/db/prisma";
import { SimulateSpendButton } from "@/components/cards/simulate-spend-button";

export default async function CardsPage() {
    const cards = await prisma.card.findMany({
        include: {
            agent: true,
            purchaseRequest: true,
        },

        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold">
                    Issued Cards
                </h1>

                <p className="mt-2 text-white/60">
                    Virtual Visa cards issued through
                    Marqeta for autonomous agents.
                </p>
            </div>

            {cards.length === 0 ? (
                <div className="rounded-xl border border-white/10 p-10 text-center">
                    <h2 className="text-xl font-semibold">
                        No Cards Issued Yet
                    </h2>

                    <p className="mt-2 text-white/60">
                        Create a purchase request and
                        issue a card to see it here.
                    </p>
                </div>
            ) : (
                <div className="grid gap-6">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                        >
                            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                                <div>
                                    <div className="mb-3 flex items-center gap-3">
                                        <h3 className="text-2xl font-bold">
                                            **** {card.last4}
                                        </h3>

                                        <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm text-green-400">
                                            {card.status}
                                        </span>
                                    </div>

                                    <p className="text-white/60">
                                        Expires:
                                        {" "}
                                        {card.expiryMonth}/
                                        {card.expiryYear}
                                    </p>

                                    <p className="mt-1 text-xs text-white/40">
                                        Marqeta ID:
                                        {" "}
                                        {card.marqetaId}
                                    </p>
                                </div>

                                <SimulateSpendButton
                                    cardId={card.id}
                                    agentId={card.agentId}
                                />
                            </div>

                            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                <div>
                                    <p className="text-xs uppercase text-white/40">
                                        Agent
                                    </p>

                                    <p className="font-medium">
                                        {card.agent.name}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase text-white/40">
                                        Merchant
                                    </p>

                                    <p className="font-medium">
                                        {card.purchaseRequest
                                            ?.merchant ??
                                            "-"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase text-white/40">
                                        Amount
                                    </p>

                                    <p className="font-medium">
                                        $
                                        {String(
                                            card.amount,
                                        )}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase text-white/40">
                                        Created
                                    </p>

                                    <p className="font-medium">
                                        {new Date(
                                            card.createdAt,
                                        ).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );


}
