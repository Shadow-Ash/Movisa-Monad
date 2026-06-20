import Link from 'next/link';

// --- Sub-components for cleaner Tailwind architecture ---

function FooterLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
        >
            {label}
        </Link>
    );
}

export function Footer() {
    return (
        <footer className="border-t border-zinc-900 bg-black py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    <div>
                        <span className="text-sm font-bold tracking-[0.25em] text-white">
                            MOVISA
                        </span>
                        <p className="mt-2 text-xs text-zinc-500 max-w-xs leading-relaxed">
                            Autonomous spending boundaries for AI agents on Monad. Instantly deploy programmable virtual banking cards.
                        </p>
                    </div>

                    <nav className="flex flex-wrap gap-x-8 gap-y-4">
                        <FooterLink href="#features" label="Features" />
                        <FooterLink href="#developers" label="Developers" />
                        <FooterLink href="https://monad.xyz" label="Monad" />
                        <FooterLink href="/privacy" label="Privacy Policy" />
                    </nav>
                </div>

                <div className="mt-12 border-t border-zinc-900 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[10px] font-mono tracking-wider text-zinc-600 uppercase">
                        &copy; {new Date().getFullYear()} Movisa. All rights reserved.
                    </p>
                    <p className="text-[10px] font-mono tracking-wider text-zinc-600 uppercase">
                        Built for Monad Testnet
                    </p>
                </div>
            </div>
        </footer>
    );
}
