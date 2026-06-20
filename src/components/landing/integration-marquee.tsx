'use client';

import { motion } from 'framer-motion';

const PARTNERS = [
    'MONAD',
    'USDC',
    'LANGCHAIN',
    'ENVIO',
    'PYTH',
    'PARA',
    'VIEM',
    'PRISMA',
] as const;

// --- Sub-components for cleaner Tailwind architecture ---

interface LogoItemProps {
    name: string;
}

function LogoItem({ name }: LogoItemProps) {
    return (
        <div className="flex items-center justify-center px-12 py-4">
            <span className="text-xs font-semibold tracking-[0.3em] text-zinc-500 transition-colors duration-300 hover:text-zinc-100">
                {name}
            </span>
        </div>
    );
}

export function IntegrationMarquee() {
    // Duplicate the array to ensure a seamless infinite scroll loop
    const doubledPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

    return (
        <section className="relative overflow-hidden bg-black py-16 border-y border-zinc-900/50">
            {/* Ambient side fades for premium glassmorphism/gradient effect */}
            <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none" />

            <div className="flex overflow-hidden">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{
                        x: [0, -1000],
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 25,
                        repeat: Infinity,
                    }}
                >
                    {doubledPartners.map((partner, index) => (
                        <LogoItem
                            key={`${partner}-${index}`}
                            name={partner}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
