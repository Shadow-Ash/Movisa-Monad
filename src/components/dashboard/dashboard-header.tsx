import { Button } from '@/components/ui';

export function DashboardHeader() {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-4xl font-bold">
                    Dashboard
                </h1>

                <p className="mt-2 text-onSurfaceVariant">
                    Manage agents and spending.
                </p>
            </div>

            <Button>
                Create Agent
            </Button>
        </div>
    );
}