'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Bot,
    CreditCard,
    Wallet,
    CheckSquare,
    FileText
} from 'lucide-react';

import { dashboardNavigation } from '@/config/navigation';

// Map sidebar labels to Lucide Icons
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
    'Dashboard': LayoutDashboard,
    'Agents': Bot,
    'Cards': CreditCard,
    'Treasury': Wallet,
    'Approvals': CheckSquare,
    'Audit Logs': FileText,
    'transactions': FileText,
};

// --- Sub-components for cleaner Tailwind architecture ---

interface SidebarLinkProps {
    href: string;
    label: string;
    isActive: boolean;
}

function SidebarLink({ href, label, isActive }: SidebarLinkProps) {
    const Icon = ICON_MAP[label] || LayoutDashboard;

    return (
        <Link
            href={href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${isActive
                ? 'bg-white text-black border-white'
                : 'text-zinc-500 border-transparent hover:text-zinc-100 hover:bg-zinc-950'
                }`}
        >
            <Icon className="h-4 w-4 shrink-0" />
            {label}
        </Link>
    );
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-white">
            {/* Sidebar Navigation */}
            <aside className="w-64 border-r border-zinc-900 bg-black p-6 flex flex-col justify-between hidden md:flex">
                <div className="flex flex-col gap-10">
                    <Link
                        href="/"
                        className="text-base font-bold tracking-[0.25em] text-white hover:opacity-80 transition-opacity"
                    >
                        MOVISA
                    </Link>

                    <nav className="space-y-1.5">
                        {dashboardNavigation.map((item) => {
                            // Determine if current link is active
                            const isActive =
                                pathname === item.href ||
                                (item.href !== '/dashboard' && pathname.startsWith(item.href));

                            return (
                                <SidebarLink
                                    key={item.href}
                                    href={item.href}
                                    label={item.label}
                                    isActive={isActive}
                                />
                            );
                        })}
                    </nav>
                </div>

                <div className="border-t border-zinc-900 pt-6">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase">
                        Monad Testnet Environment
                    </span>
                </div>
            </aside>

            {/* Main Application Interface */}
            <main className="flex-1 bg-black p-8 md:p-12 overflow-y-auto">
                <div className="mx-auto max-w-7xl">
                    {children}
                </div>
            </main>
        </div>
    );
}