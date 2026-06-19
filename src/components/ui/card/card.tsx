import { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

type CardProps = {
    children: ReactNode;
    className?: string;
};

export function Card({
    children,
    className,
}: CardProps) {
    return (
        <div
            className={cn(
                'rounded-xl border border-white/5 bg-surface-container p-6',
                className,
            )}
        >
            {children}
        </div>
    );
}