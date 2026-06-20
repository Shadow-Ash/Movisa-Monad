"use client";

export function SimulateSpendButton({
    cardId,
    agentId,
}: {
    cardId: string;
    agentId: string;
}) {
    async function handleClick() {
        await fetch(
            "/api/cards/simulate",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json",
                },

                body: JSON.stringify({
                    cardId,
                    agentId,

                    amount: 25,

                    merchant:
                        "OpenAI",
                }),
            },
        );

        window.location.reload();
    }

    return (
        <button
            onClick={handleClick}
            className="rounded-lg bg-primary px-4 py-2 text-black"
        >
            Simulate Spend
        </button>
    );
}