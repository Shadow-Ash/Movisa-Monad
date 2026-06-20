'use client';

import { motion } from 'framer-motion';
import { Wallet, Sliders, Bot } from 'lucide-react';

// --- Sub-components for cleaner Tailwind architecture ---

interface FlowCardProps {
    icon: React.ReactNode;
    step: string;
    title: string;
    description: string;
    delay: number;
}

function FlowCard({ icon, step, title, description, delay }: FlowCardProps) {
    return (
        <motion.article
            className="group relative rounded-2xl border border-zinc-900 bg-zinc-950 p-8 md:p-10 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-purple-500/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        >
            {/* Subtle glow background effect visible on hover */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-purple-500/0 opacity-0 blur-xl transition-all duration-500 group-hover:bg-purple-500/5 group-hover:opacity-100 pointer-events-none" />

            <div className="flex items-center justify-between">
                <div className="text-zinc-500 group-hover:text-purple-400 transition-colors duration-300">
                    {icon}
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-zinc-700 group-hover:text-zinc-500 transition-colors duration-300">
                    {step}
                </span>
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-bold tracking-tight text-white">
                    {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {description}
                </p>
            </div>
        </motion.article>
    );
}

export function FlowGridSection() {
    return (
        <section className="relative bg-black py-24 md:py-32 overflow-hidden" id="features">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <div className="max-w-xl mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
                            The Autonomous <br />
                            <span className="font-bold text-white">Banking Flow.</span>
                        </h2>
                        <p className="mt-4 text-sm text-zinc-400">
                            Three simple, secure phases enabling AI agents to interact with on-chain resources, bank rails, and commercial merchant systems.
                        </p>
                    </motion.div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <FlowCard
                        icon={<Wallet className="h-6 w-6" />}
                        step="01"
                        title="Fund Agent Wallets"
                        description="Deposit funds into agent-controlled accounts. Supported by multi-token escrow and gas-efficient execution loops on Monad."
                        delay={0.1}
                    />
                    <FlowCard
                        icon={<Sliders className="h-6 w-6" />}
                        step="02"
                        title="Set Spending Limits"
                        description="Define strict, programmatic boundaries. Restrict by merchant, daily spending caps, or multi-signature verification thresholds."
                        delay={0.2}
                    />
                    <FlowCard
                        icon={<Bot className="h-6 w-6" />}
                        step="03"
                        title="AI Spends Autonomously"
                        description="Let agents execute tasks, pay API keys, purchase compute, or query APIs directly, operating under secure cryptographically verified limits."
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
}
