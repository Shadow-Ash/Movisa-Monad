'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeroCard } from './hero-card';

// --- Sub-components for cleaner Tailwind architecture ---

function HeroBadge() {
    return (
        <span className="inline-flex items-center rounded-full border border-zinc-900 bg-zinc-950 px-3 py-1 text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
            LIVE ON MONAD TESTNET
        </span>
    );
}

function HeroTitle() {
    return (
        <h1 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.05]">
            Give AI Agents <br />
            <span className="font-bold text-white">Spending Power.</span>
        </h1>
    );
}

function HeroSubtitle() {
    return (
        <p className="mt-6 max-w-lg text-sm md:text-base leading-relaxed text-zinc-400">
            The autonomous banking layer for the AI economy. Issue programmable virtual cards, fund agent wallets, and oversee machine commerce with institutional-grade controls.
        </p>
    );
}

interface CTAButtonProps {
    href: string;
    label: string;
    variant?: 'primary' | 'secondary';
}

function CTAButton({ href, label, variant = 'primary' }: CTAButtonProps) {
    if (variant === 'primary') {
        return (
            <Link
                href={href}
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-xs font-semibold tracking-tight text-black transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98] shadow-[0_0_30px_rgba(200,191,255,0.1)] hover:shadow-[0_0_35px_rgba(200,191,255,0.25)]"
            >
                {label}
            </Link>
        );
    }

    return (
        <Link
            href={href}
            className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-800 bg-transparent px-8 text-xs font-semibold tracking-tight text-white transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-950 active:scale-[0.98]"
        >
            {label}
        </Link>
    );
}

function ProofPoint({ text }: { text: string }) {
    return (
        <span className="rounded-full border border-zinc-900 bg-zinc-950/50 px-3.5 py-1 text-[11px] font-medium tracking-tight text-zinc-400">
            {text}
        </span>
    );
}

export function HeroSection() {
    const proofPoints = [
        'Monad Gas Efficiency',
        'USDC Escrows',
        'Programmable Caps',
        'Cryptographic Proofs',
    ] as const;

    return (
        <section className="relative min-h-screen bg-black pt-36 pb-20 overflow-hidden flex items-center" id="hero">
            {/* Soft ambient violet background glow behind the card placement */}
            <div className="absolute right-1/4 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

            <div className="mx-auto w-full max-w-7xl px-6 md:px-12 z-10">
                <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
                    
                    {/* Left Column: Text Content */}
                    <motion.div
                        className="lg:col-span-7 flex flex-col items-start"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <HeroBadge />
                        <HeroTitle />
                        <HeroSubtitle />

                        {/* Proof Points */}
                        <div className="mt-8 flex flex-wrap gap-2">
                            {proofPoints.map((point) => (
                                <ProofPoint key={point} text={point} />
                            ))}
                        </div>

                        {/* Call to Actions */}
                        <div className="mt-10 flex flex-wrap gap-4 w-full sm:w-auto">
                            <CTAButton href="/dashboard" label="Launch App" variant="primary" />
                            <CTAButton href="#features" label="View Flow" variant="secondary" />
                        </div>
                    </motion.div>

                    {/* Right Column: 3D virtual card */}
                    <motion.div
                        className="lg:col-span-5 relative flex justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                    >
                        {/* Interactive Card */}
                        <HeroCard />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
