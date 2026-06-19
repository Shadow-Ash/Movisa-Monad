import Link from 'next/link';

import { Button, Container } from '@/components/ui';
import { marketingNavigation } from '@/config/navigation';

export function LandingNavbar() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <Link
                        href="/"
                        className="text-2xl font-bold tracking-tight"
                    >
                        MOVISA
                    </Link>

                    <nav className="hidden items-center gap-8 md:flex">
                        {marketingNavigation.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-sm text-onSurfaceVariant transition-colors hover:text-primary"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <Button variant="ghost">
                            Launch App
                        </Button>

                        <Button>
                            Get Started
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
}