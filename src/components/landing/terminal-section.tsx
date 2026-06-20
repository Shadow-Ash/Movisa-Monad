'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const CODE_SNIPPET = `import { MovisaSDK } from '@movisa/sdk';

// Initialize Movisa SDK on Monad
const sdk = new MovisaSDK({ 
  network: 'monad-testnet',
  privateKey: process.env.AGENT_KEY 
});

// Configure autonomous spend rules
const card = await sdk.cards.create({
  owner: 'agent_0x9e28f...',
  dailyLimit: 100, // 100 USDC daily cap
  allowedDomains: ['openai.com', 'anthropic.com', 'github.com'],
  requireApprovalAbove: 20 // Require multisig signature for >$20 tx
});

console.log(\`Active virtual card: \${card.address}\`);`;

// Custom highlight line function avoiding complex recursive regex issues
function highlightLine(line: string) {
    if (line.trim().startsWith('//')) {
        return `<span class="text-zinc-600">${line}</span>`;
    }
    
    // Simple sanitization
    let escaped = line
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    // Highlight strings
    escaped = escaped.replace(/('[^']*'|`[^`]*`)/g, '<span class="text-zinc-300">$1</span>');

    // Highlight keywords
    escaped = escaped.replace(
        /\b(const|let|var|import|from|await|new|return)\b/g,
        '<span class="text-zinc-500">$1</span>'
    );

    return escaped;
}

// --- Sub-components for cleaner Tailwind architecture ---

function TerminalDot({ color }: { color: 'red' | 'yellow' | 'green' }) {
    const bgColors = {
        red: 'bg-red-500/80',
        yellow: 'bg-yellow-500/80',
        green: 'bg-green-500/80',
    };
    return <span className={`h-3 w-3 rounded-full ${bgColors[color]}`} />;
}

function TerminalHeader() {
    return (
        <div className="flex items-center justify-between border-b border-zinc-900 bg-zinc-950 px-5 py-4">
            <div className="flex gap-2">
                <TerminalDot color="red" />
                <TerminalDot color="yellow" />
                <TerminalDot color="green" />
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">
                movisa.config.ts
            </span>
            <div className="w-12" /> {/* Spacer to center the title */}
        </div>
    );
}

export function TerminalSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="bg-black py-24 md:py-32 overflow-hidden" id="developers">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
                            Built for developers, <br />
                            <span className="font-bold text-white">run by agents.</span>
                        </h2>
                        <p className="mt-6 text-sm leading-relaxed text-zinc-400 max-w-lg">
                            Integrate sovereign spending wallets into your AI agents with standard TypeScript hooks. Securely authorize external APIs, computational runtimes, and smart contracts to trade assets under hard spending boundaries.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 font-mono text-xs text-zinc-500">
                            <div className="flex items-center gap-3">
                                <span className="text-purple-500">✔</span> Type-safe schema validation
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-purple-500">✔</span> Real-time settlement on Monad
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-purple-500">✔</span> Automated gas reserve allocation
                            </div>
                        </div>
                    </motion.div>

                    {/* Terminal Column */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Soft ambient violet glow behind the terminal */}
                        <div className="absolute inset-0 -z-10 rounded-2xl bg-purple-500/5 blur-3xl pointer-events-none" />

                        <div className="overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-md shadow-2xl">
                            <TerminalHeader />
                            <div className="p-6 md:p-8 overflow-x-auto">
                                <pre className="font-mono text-xs md:text-[13px] leading-relaxed text-zinc-300">
                                    <code>
                                        {CODE_SNIPPET.split('\n').map((line, idx) => {
                                            return (
                                                <div key={idx} className="flex">
                                                    <span className="w-8 select-none text-zinc-700 text-right pr-4 font-mono">
                                                        {idx + 1}
                                                    </span>
                                                    <span
                                                        dangerouslySetInnerHTML={{
                                                            __html: mounted ? highlightLine(line) : line,
                                                        }}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
