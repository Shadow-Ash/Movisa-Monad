import { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

type HeadingProps = {
    title: string;
    subtitle?: ReactNode;
    centered?: boolean;
};

export function Heading({
    title,
    subtitle,
    centered = false,
}: HeadingProps) {
    return (
        <div
            className={cn(
                centered && 'text-center',
            )}
        >
            <h2 className="text-4xl font-extrabold tracking-tight">
                {title}
            </h2>

            {subtitle && (
                <p className="mt-4 text-onSurfaceVariant">
                    {subtitle}
                </p>
            )}
        </div>
    );
}