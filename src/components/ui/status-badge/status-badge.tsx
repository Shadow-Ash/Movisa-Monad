import { cn } from '@/lib/utils/cn';

type StatusBadgeProps = {
    label: string;
};

export function StatusBadge({
    label,
}: StatusBadgeProps) {
    return (
        <div
            className={cn(
                'inline-flex items-center gap-2 text-sm text-onSurfaceVariant',
            )}
        >
            <div className="h-2 w-2 rounded-full bg-primary" />
            {label}
        </div>
    );
}