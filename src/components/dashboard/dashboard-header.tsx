import Link from 'next/link';

export function DashboardHeader() {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-white">
                    Dashboard
                </h1>

                <p className="mt-1 text-sm text-zinc-400">
                    Manage autonomous agents and programmatic spending bounds.
                </p>
            </div>

            <Link
                href="/agents/new"
                className="inline-flex h-10 items-center justify-center rounded-xl bg-white px-5 text-xs font-bold tracking-tight text-black transition-all duration-200 hover:bg-zinc-200 active:scale-[0.98]"
            >
                Create Agent
            </Link>
        </div>
    );
}