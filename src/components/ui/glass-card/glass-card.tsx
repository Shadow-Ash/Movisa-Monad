import { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

type GlassCardProps = {
    children: ReactNode;
    className?: string;
};

export function GlassCard({
    children,
    className,
}: GlassCardProps) {
    return (
        <div
            className={cn(
                'rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-glass',
                className,
            )}
        >
            {children}
        </div>
    );
}