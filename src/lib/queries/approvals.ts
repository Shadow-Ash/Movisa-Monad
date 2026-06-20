import { prisma } from "@/lib/db/prisma";

export async function getPendingApprovals() {
    return prisma.purchaseRequest.findMany({
        where: {
            status: "PENDING",
        },

        include: {
            agent: true,
        },

        orderBy: {
            createdAt: "desc",
        },
    });
}