import { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

type ContainerProps = {
    children: ReactNode;
    className?: string;
};

export function Container({
    children,
    className,
}: ContainerProps) {
    return (
        <div
            className={cn(
                'mx-auto w-full max-w-container px-5 md:px-16',
                className,
            )}
        >
            {children}
        </div>
    );
}