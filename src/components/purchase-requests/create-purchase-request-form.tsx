"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
    agentId: string;
};

export function CreatePurchaseRequestForm({
    agentId,
}: Props) {
    const router = useRouter();

    const [loading, setLoading] =
        useState(false);

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>,
    ) {
        e.preventDefault();

        setLoading(true);

        const formData =
            new FormData(e.currentTarget);

        const payload = {
            agentId,

            title:
                formData.get("title"),

            merchant:
                formData.get("merchant"),

            amount: Number(
                formData.get("amount"),
            ),

            reason:
                formData.get("reason"),
        };

        const response =
            await fetch(
                "/api/purchase-requests",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify(
                        payload,
                    ),
                },
            );

        const data =
            await response.json();

        if (data.success) {
            router.push(
                `/agents/${agentId}`,
            );

            router.refresh();
        }

        setLoading(false);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            <input
                name="title"
                placeholder="Purchase Title"
                required
                className="w-full rounded-lg border border-white/10 bg-transparent p-4"
            />

            <input
                name="merchant"
                placeholder="Merchant"
                required
                className="w-full rounded-lg border border-white/10 bg-transparent p-4"
            />

            <input
                name="amount"
                type="number"
                required
                placeholder="Amount"
                className="w-full rounded-lg border border-white/10 bg-transparent p-4"
            />

            <textarea
                name="reason"
                placeholder="Reason"
                className="w-full rounded-lg border border-white/10 bg-transparent p-4"
            />

            <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-primary px-6 py-3 font-semibold text-black"
            >
                {loading
                    ? "Creating..."
                    : "Create Request"}
            </button>
        </form>
    );
}