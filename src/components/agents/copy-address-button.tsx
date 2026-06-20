'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyAddressButtonProps {
    address: string;
}

export function CopyAddressButton({ address }: CopyAddressButtonProps) {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(address);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }

    // Mask address: e.g. 0x17...7E
    const maskedAddress = address.length > 10
        ? `${address.slice(0, 6)}...${address.slice(-4)}`
        : address;

    return (
        <div className="flex items-center justify-between gap-3 mt-4">
            <span className="font-mono text-xs text-zinc-300 select-all shrink-0">
                {maskedAddress}
            </span>
            <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-900 bg-zinc-950/80 text-zinc-500 hover:text-zinc-300 hover:border-zinc-800 transition-all text-[10px] uppercase font-bold tracking-wider"
                title="Copy Address"
            >
                {copied ? (
                    <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                    </>
                ) : (
                    <>
                        <Copy className="h-3 w-3" />
                        <span>Copy</span>
                    </>
                )}
            </button>
        </div>
    );
}
