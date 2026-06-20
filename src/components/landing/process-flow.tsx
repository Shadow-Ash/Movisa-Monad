'use client';

import { motion, Variants } from 'framer-motion';
import {
    Bot,
    Wallet,
    Coins,
    CreditCard,
    ShieldCheck,
    Cpu,
    FileCode,
    Zap,
} from 'lucide-react';

const ICON_MAP = {
    Bot: Bot,
    Wallet: Wallet,
    Coins: Coins,
    CreditCard: CreditCard,
    ShieldCheck: ShieldCheck,
    Cpu: Cpu,
    FileCode: FileCode,
    Zap: Zap,
};

const STEPS = [
    {
        num: '01',
        title: 'Create Agent',
        description: 'Provision a secure, autonomous AI agent with custom prompt boundaries.',
        iconName: 'Bot' as const,
    },
    {
        num: '02',
        title: 'Generate Wallet',
        description: "Instant on-chain cryptographic wallet generation tied to the agent's identity.",
        iconName: 'Wallet' as const,
    },
    {
        num: '03',
        title: 'Fund Wallet',
        description: 'Deposit gas and operational capital directly via the Monad Testnet using USDC.',
        iconName: 'Coins' as const,
    },
    {
        num: '04',
        title: 'Request Card',
        description: 'Agent triggers an automated issuance request for a programmatic credit card.',
        iconName: 'CreditCard' as const,
    },
    {
        num: '05',
        title: 'Pay Treasury',
        description: 'Smart contracts securely lock collateral and settle issuance fees.',
        iconName: 'ShieldCheck' as const,
    },
    {
        num: '06',
        title: 'Marqeta Issues Card',
        description: 'Real-time webhook integration calls the Marqeta API to provision a virtual card.',
        iconName: 'Cpu' as const,
    },
    {
        num: '07',
        title: 'Card Returned',
        description: 'Card credentials (PAN, CVV, Expiry) are securely encrypted and returned.',
        iconName: 'FileCode' as const,
    },
    {
        num: '08',
        title: 'Purchase Simulation',
        description: 'Execute production spending workloads to purchase live API credits.',
        iconName: 'Zap' as const,
    },
] as const;

// --- Sub-components for cleaner Tailwind architecture ---

interface TimelineStepProps {
    num: string;
    title: string;
    description: string;
    iconName: keyof typeof ICON_MAP;
}

function TimelineStep({ num, title, description, iconName }: TimelineStepProps) {
    const IconComponent = ICON_MAP[iconName];

    // Glow and border transition variants
    const iconVariants: Variants = {
        hidden: {
            borderColor: 'rgba(39, 39, 42, 1)',
            boxShadow: '0 0 0px rgba(255, 255, 255, 0)',
            color: 'rgba(113, 113, 122, 1)',
        },
        visible: {
            borderColor: 'rgba(255, 255, 255, 0.5)',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.12)',
            color: 'rgba(255, 255, 255, 1)',
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    // Slide and fade text variants
    const textVariants: Variants = {
        hidden: {
            opacity: 0,
            x: -20,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-120px' }}
            className="relative flex items-start gap-6 sm:gap-10"
        >
            {/* Icon Node directly over the line */}
            <motion.div
                variants={iconVariants}
                className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-black transition-all duration-300"
            >
                <IconComponent className="h-4.5 w-4.5" />
            </motion.div>

            {/* Floating Text Content */}
            <motion.div variants={textVariants} className="flex-1 pt-1.5">
                <span className="font-mono text-zinc-600 text-xs tracking-wider block mb-1">
                    {num}
                </span>
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mb-2">
                    {title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400 max-w-2xl">
                    {description}
                </p>
            </motion.div>
        </motion.div>
    );
}

export function ProcessFlow() {
    return (
        <section className="bg-black py-24 md:py-32 overflow-hidden border-b border-zinc-900" id="features">
            <div className="mx-auto max-w-3xl px-6 md:px-12">
                
                {/* Header */}
                <div className="mb-20 text-left">
                    <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-zinc-500 uppercase block mb-3">
                        The Lifecycle
                    </span>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
                        Autonomous <br />
                        <span className="font-bold text-white">Execution Loop.</span>
                    </h2>
                    <p className="mt-4 text-xs md:text-sm text-zinc-500 leading-relaxed max-w-xl">
                        How Movisa orchestrates instant card provisioning and transaction routing for artificial agents on Monad.
                    </p>
                </div>

                {/* Vertical Timeline Structure */}
                <div className="relative pl-8 sm:pl-12">
                    {/* Centered connector line behind icons */}
                    <div className="absolute left-[18px] top-3 bottom-3 w-px bg-white/10" />

                    <div className="flex flex-col gap-12">
                        {STEPS.map((step) => (
                            <TimelineStep
                                key={step.num}
                                num={step.num}
                                title={step.title}
                                description={step.description}
                                iconName={step.iconName}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
