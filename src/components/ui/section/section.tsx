import { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

type SectionProps = {
    children: ReactNode;
    className?: string;
};

export function Section({
    children,
    className,
}: SectionProps) {
    return (
        <section
            className={cn(
                'relative py-24',
                className,
            )}
        >
            {children}
        </section>
    );
}