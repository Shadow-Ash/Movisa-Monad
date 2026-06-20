import { PurchaseRequestStatus } from "@prisma/client";

export type ApprovalInput = {
    amount: number;
    approvalThreshold: number;
};

export function evaluateApproval(
    input: ApprovalInput,
) {
    const requiresApproval =
        input.amount >=
        input.approvalThreshold;

    return {
        requiresApproval,

        status: requiresApproval
            ? PurchaseRequestStatus.PENDING
            : PurchaseRequestStatus.APPROVED,
    };
}