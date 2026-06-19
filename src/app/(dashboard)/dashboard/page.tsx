import {
    DashboardHeader,
    StatCard,
} from '@/components/dashboard';

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <DashboardHeader />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <StatCard
                    title="Total Agents"
                    value="0"
                />

                <StatCard
                    title="Active Cards"
                    value="0"
                />

                <StatCard
                    title="Total Spend"
                    value="$0"
                />

                <StatCard
                    title="Pending Approvals"
                    value="0"
                />
            </div>
        </div>
    );
}