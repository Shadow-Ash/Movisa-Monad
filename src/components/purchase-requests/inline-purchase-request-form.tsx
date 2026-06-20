'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
    agentId: string;
}

export function InlinePurchaseRequestForm({ agentId }: Props) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const requestName = formData.get('requestName') as string;
        const amount = Number(formData.get('amount'));
        const network = formData.get('network') as string;

        const payload = {
            agentId,
            title: requestName,
            merchant: `${network} Terminal`, // use network to fulfill merchant field
            amount,
            reason: `Autonomous request executed on ${network}`,
        };

        try {
            const response = await fetch('/api/purchase-requests', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            if (data.success) {
                e.currentTarget.reset();
                router.refresh();
            }
        } catch (err) {
            console.error('Error submitting purchase request:', err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
                <label className="block text-[9px] font-mono font-bold tracking-widest text-zinc-500 uppercase mb-1.5">
                    Request Name
                </label>
                <input
                    name="requestName"
                    type="text"
                    required
                    placeholder="e.g. LLM API Access"
                    className="w-full rounded-xl border border-zinc-900 bg-zinc-950 px-4 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-800 transition-colors"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-[9px] font-mono font-bold tracking-widest text-zinc-500 uppercase mb-1.5">
                        Amount ($)
                    </label>
                    <input
                        name="amount"
                        type="number"
                        required
                        min="1"
                        placeholder="USDC"
                        className="w-full rounded-xl border border-zinc-900 bg-zinc-950 px-4 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-800 transition-colors"
                    />
                </div>

                <div>
                    <label className="block text-[9px] font-mono font-bold tracking-widest text-zinc-500 uppercase mb-1.5">
                        Network
                    </label>
                    <select
                        name="network"
                        defaultValue="Monad Testnet"
                        className="w-full rounded-xl border border-zinc-900 bg-zinc-950 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-zinc-800 transition-colors appearance-none cursor-pointer"
                    >
                        <option value="Monad Testnet">Monad Testnet</option>
                        <option value="Ethereum Mainnet">Ethereum</option>
                    </select>
                </div>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full h-10 inline-flex items-center justify-center rounded-xl bg-purple-600 hover:bg-purple-500 active:scale-[0.98] transition-all text-xs font-bold text-white uppercase tracking-wider"
            >
                {loading ? 'Initiating...' : 'Initiate Request'}
            </button>
        </form>
    );
}
