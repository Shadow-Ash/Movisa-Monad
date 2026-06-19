import { prisma } from "@/lib/db/prisma";

export async function getAgents() {
    return prisma.agent.findMany({
        include: {
            wallet: true,
        },

        orderBy: {
            createdAt: "desc",
        },
    });
}