import { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

type BadgeProps = {
    children: ReactNode;
    className?: string;
};

export function Badge({
    children,
    className,
}: BadgeProps) {
    return (
        <div
            className={cn(
                'inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary',
                className,
            )}
        >
            {children}
        </div>
    );
}