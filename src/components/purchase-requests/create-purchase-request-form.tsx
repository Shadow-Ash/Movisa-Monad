'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
    agentId: string;
}

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

        const form =
            e.currentTarget;

        setLoading(true);

        const formData =
            new FormData(form);

        const requestName =
            formData.get(
                'requestName',
            ) as string;

        const amount = Number(
            formData.get('amount'),
        );

        const network =
            formData.get(
                'network',
            ) as string;

        const payload = {
            agentId,

            title: requestName,

            merchant: `${network} Terminal`,

            amount,

            reason: `Autonomous request executed on ${network}`,
        };

        try {
            const response =
                await fetch(
                    '/api/purchase-requests',
                    {
                        method: 'POST',

                        headers: {
                            'Content-Type':
                                'application/json',
                        },

                        body: JSON.stringify(
                            payload,
                        ),
                    },
                );

            const data =
                await response.json();

            if (data.success) {
                form.reset();

                router.refresh();
            }
        } catch (err) {
            console.error(
                'Error submitting purchase request:',
                err,
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
        >
            <div>
                <label className="mb-1.5 block text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                    Request Name
                </label>

                <input
                    name="requestName"
                    type="text"
                    required
                    placeholder="e.g. LLM API Access"
                    className="w-full rounded-xl border border-zinc-900 bg-zinc-950 px-4 py-2.5 text-xs text-white placeholder-zinc-700 transition-colors focus:border-zinc-800 focus:outline-none"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="mb-1.5 block text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                        Amount ($)
                    </label>

                    <input
                        name="amount"
                        type="number"
                        required
                        min="1"
                        placeholder="USDC"
                        className="w-full rounded-xl border border-zinc-900 bg-zinc-950 px-4 py-2.5 text-xs text-white placeholder-zinc-700 transition-colors focus:border-zinc-800 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="mb-1.5 block text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                        Network
                    </label>

                    <select
                        name="network"
                        defaultValue="Monad Testnet"
                        className="w-full cursor-pointer appearance-none rounded-xl border border-zinc-900 bg-zinc-950 px-4 py-2.5 text-xs text-white transition-colors focus:border-zinc-800 focus:outline-none"
                    >
                        <option value="Monad Testnet">
                            Monad Testnet
                        </option>

                        <option value="Ethereum Mainnet">
                            Ethereum
                        </option>
                    </select>
                </div>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-xl bg-purple-600 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-purple-500 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
                {loading
                    ? 'Initiating...'
                    : 'Initiate Request'}
            </button>
        </form>
    );
}