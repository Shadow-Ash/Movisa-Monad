import { ElementType, ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

type Variant =
    | 'display'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body-lg'
    | 'body'
    | 'label';

type TypographyProps = {
    as?: ElementType;
    variant?: Variant;
    className?: string;
    children: ReactNode;
};

const variants: Record<Variant, string> = {
    display:
        'text-6xl md:text-7xl font-extrabold tracking-tight',

    h1:
        'text-5xl font-extrabold tracking-tight',

    h2:
        'text-4xl font-bold tracking-tight',

    h3:
        'text-2xl font-bold',

    'body-lg':
        'text-lg text-onSurfaceVariant',

    body:
        'text-base text-onSurfaceVariant',

    label:
        'text-xs font-semibold uppercase tracking-wider',
};

export function Typography({
    as: Component = 'p',
    variant = 'body',
    className,
    children,
}: TypographyProps) {
    return (
        <Component
            className={cn(
                variants[variant],
                className,
            )}
        >
            {children}
        </Component>
    );
}