"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function CreateAgentForm() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>,
    ) {
        e.preventDefault();

        setLoading(true);

        const formData = new FormData(
            e.currentTarget,
        );

        const payload = {
            name: formData.get("name"),
            description: formData.get("description"),

            dailyLimit: Number(
                formData.get("dailyLimit"),
            ),

            transactionLimit: Number(
                formData.get("transactionLimit"),
            ),

            approvalThreshold: Number(
                formData.get(
                    "approvalThreshold",
                ),
            ),
        };

        const response = await fetch(
            "/api/agents",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json",
                },
                body: JSON.stringify(payload),
            },
        );

        const data =
            await response.json();

        if (data.success) {
            router.push("/agents");
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
                name="name"
                required
                placeholder="Agent Name"
                className="w-full rounded-lg border border-white/10 bg-transparent p-4"
            />

            <textarea
                name="description"
                placeholder="Description"
                className="w-full rounded-lg border border-white/10 bg-transparent p-4"
            />

            <input
                name="dailyLimit"
                type="number"
                required
                placeholder="Daily Limit"
                className="w-full rounded-lg border border-white/10 bg-transparent p-4"
            />

            <input
                name="transactionLimit"
                type="number"
                required
                placeholder="Transaction Limit"
                className="w-full rounded-lg border border-white/10 bg-transparent p-4"
            />

            <input
                name="approvalThreshold"
                type="number"
                required
                placeholder="Approval Threshold"
                className="w-full rounded-lg border border-white/10 bg-transparent p-4"
            />

            <button
                disabled={loading}
                type="submit"
                className="rounded-lg bg-primary px-6 py-3 font-semibold text-black"
            >
                {loading
                    ? "Creating..."
                    : "Create Agent"}
            </button>
        </form>
    );
}