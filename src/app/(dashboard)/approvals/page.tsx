import { getPendingApprovals } from "@/lib/queries/approvals";

export const dynamic = 'force-dynamic';

export default async function ApprovalsPage() {
    const approvals =
        await getPendingApprovals();

    return (
        <div>
            <h1 className="mb-8 text-4xl font-bold">
                Approvals
            </h1>

            <div className="space-y-4">
                {approvals.map(
                    (approval) => (
                        <div
                            key={approval.id}
                            className="rounded-xl border border-white/10 p-6"
                        >
                            <h3 className="font-semibold">
                                {
                                    approval.merchant
                                }
                            </h3>

                            <p>
                                $
                                {String(
                                    approval.amount,
                                )}
                            </p>

                            <p>
                                Agent:
                                {
                                    approval
                                        .agent
                                        .name
                                }
                            </p>
                        </div>
                    ),
                )}
            </div>
        </div>
    );
}