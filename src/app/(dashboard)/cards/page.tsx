import { prisma } from "@/lib/db/prisma";

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
        <div>
            <h1 className="mb-8 text-4xl font-bold">
                Issued Cards
            </h1>

            <div className="space-y-4">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="rounded-xl border border-white/10 p-6"
                    >
                        <div className="flex justify-between">
                            <div>
                                <h3 className="font-semibold">
                                    **** {card.last4}
                                </h3>

                                <p>
                                    {card.expiryMonth}/
                                    {card.expiryYear}
                                </p>
                            </div>

                            <div>
                                <p>
                                    {card.status}
                                </p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <p>
                                Agent:
                                {" "}
                                {card.agent.name}
                            </p>

                            <p>
                                Merchant:
                                {" "}
                                {card.purchaseRequest?.merchant}
                            </p>

                            <p>
                                Amount:
                                {" "}
                                ${String(card.amount)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}