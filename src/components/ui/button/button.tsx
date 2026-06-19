import { ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/utils/cn';

type Variant =
    | 'primary'
    | 'secondary'
    | 'ghost';

type Props =
    ButtonHTMLAttributes<HTMLButtonElement> & {
        variant?: Variant;
    };

const variants: Record<Variant, string> = {
    primary:
        'bg-primary text-black hover:opacity-90',

    secondary:
        'border border-white/10 bg-surface-container hover:bg-surface-container-high',

    ghost:
        'hover:bg-white/5',
};

export function Button({
    variant = 'primary',
    className,
    ...props
}: Props) {
    return (
        <button
            className={cn(
                'inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50',
                variants[variant],
                className,
            )}
            {...props}
        />
    );
}