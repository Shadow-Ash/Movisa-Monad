import Link from 'next/link';
import { marketingNavigation } from '@/config/navigation';

// --- Sub-components for cleaner Tailwind architecture ---

function BrandLogo() {
    return (
        <Link
            href="/"
            className="text-base font-bold tracking-[0.2em] text-white hover:opacity-80 transition-opacity"
        >
            MOVISA
        </Link>
    );
}

interface NavLinkProps {
    href: string;
    label: string;
}

function NavLink({ href, label }: NavLinkProps) {
    return (
        <Link
            href={href}
            className="text-xs font-medium tracking-wider uppercase text-zinc-400 hover:text-white transition-colors duration-200"
        >
            {label}
        </Link>
    );
}

interface ActionButtonProps {
    href: string;
    label: string;
    variant?: 'primary' | 'secondary';
}

function ActionButton({ href, label, variant = 'primary' }: ActionButtonProps) {
    if (variant === 'primary') {
        return (
            <Link
                href={href}
                className="inline-flex h-9 items-center justify-center rounded-full bg-white px-5 text-xs font-semibold tracking-tight text-black transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]"
            >
                {label}
            </Link>
        );
    }

    return (
        <Link
            href={href}
            className="inline-flex h-9 items-center justify-center rounded-full border border-zinc-800 bg-transparent px-5 text-xs font-semibold tracking-tight text-white transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-900 active:scale-[0.98]"
        >
            {label}
        </Link>
    );
}

// --- Main component ---

export function LandingNavbar() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-900 bg-black/80 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <div className="flex h-16 items-center justify-between">
                    <BrandLogo />

                    <nav className="hidden items-center gap-8 md:flex">
                        {marketingNavigation.map((item) => (
                            <NavLink
                                key={item.label}
                                href={item.href}
                                label={item.label}
                            />
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <ActionButton
                            href="/dashboard"
                            label="Launch App"
                            variant="secondary"
                        />
                        <ActionButton
                            href="/dashboard"
                            label="Get Started"
                            variant="primary"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}