import { prisma } from "@/lib/db/prisma";

export async function getPurchaseRequests(
    agentId: string,
) {
    return prisma.purchaseRequest.findMany({
        where: {
            agentId,
        },

        orderBy: {
            createdAt: "desc",
        },
    });
}