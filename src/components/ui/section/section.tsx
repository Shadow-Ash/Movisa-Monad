import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils/cn';

type SectionProps =
    HTMLAttributes<HTMLElement>;

export function Section({
    children,
    className,
    ...props
}: SectionProps) {
    return (
        <section
            className={cn(
                'relative py-24',
                className,
            )}
            {...props}
        >
            {children}
        </section>
    );
}
