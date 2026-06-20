"use client";

export function IssueCardButton({
    purchaseRequestId,
}: {
    purchaseRequestId: string;
}) {
    async function handleIssue() {
        const response = await fetch(
            "/api/cards/issue",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json",
                },

                body: JSON.stringify({
                    purchaseRequestId,
                }),
            },
        );

        if (!response.ok) {
            alert(
                "Failed to issue card",
            );

            return;
        }

        alert(
            "Card issued successfully",
        );

        window.location.reload();
    }

    return (
        <button
            onClick={handleIssue}
            className="rounded-lg border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 text-[11px] font-semibold text-purple-300 transition hover:bg-purple-500/20"
        >
            Issue Card
        </button>
    );
}