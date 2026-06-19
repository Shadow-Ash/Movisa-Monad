import Link from 'next/link';

import { dashboardNavigation } from '@/config/navigation';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            <aside className="w-64 border-r border-white/10 p-6">
                <div className="mb-10 text-2xl font-bold">
                    MOVISA
                </div>

                <nav className="space-y-3">
                    {dashboardNavigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="block text-sm"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </aside>

            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
}