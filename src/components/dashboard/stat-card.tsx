type StatCardProps = {
    title: string;
    value: string;
};

export function StatCard({
    title,
    value,
}: StatCardProps) {
    return (
        <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-md p-6 transition-all duration-300 hover:border-zinc-800">
            <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                {title}
            </span>

            <h3 className="mt-2 text-3xl font-light tracking-tight text-white">
                {value}
            </h3>
        </div>
    );
}