type StatCardProps = {
    title: string;
    value: string;
};

export function StatCard({
    title,
    value,
}: StatCardProps) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
            <p className="text-sm text-onSurfaceVariant">
                {title}
            </p>

            <h3 className="mt-3 text-3xl font-bold">
                {value}
            </h3>
        </div>
    );
}