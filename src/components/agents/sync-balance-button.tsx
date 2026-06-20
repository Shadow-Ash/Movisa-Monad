"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function SyncBalanceButton({
    agentId,
}: {
    agentId: string;
}) {
    const router = useRouter();

    const [loading, setLoading] =
        useState(false);

    async function handleSync() {
        setLoading(true);

        await fetch(
            `/api/agents/${agentId}/sync`,
            {
                method: "POST",
            },
        );

        router.refresh();

        setLoading(false);
    }

    return (
        <button
            onClick={handleSync}
            disabled={loading}
            className="rounded-lg bg-primary px-4 py-2 font-semibold text-black"
        >
            {loading
                ? "Syncing..."
                : "Refresh Balance"}
        </button>
    );
}