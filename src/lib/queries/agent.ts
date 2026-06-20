import { prisma } from '@/lib/db/prisma';

export async function getAgent(
    agentId: string,
) {
    return prisma.agent.findUnique({
        where: {
            id: agentId,
        },

        include: {
            wallet: true,
            cards: true,
            purchaseRequests: true,
            transactions: true,
        },
    });
}