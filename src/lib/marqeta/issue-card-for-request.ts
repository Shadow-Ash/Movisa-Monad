import { prisma } from "@/lib/db/prisma";

import { createMarqetaUser } from "./create-user";
import { createVirtualCard } from "./create-card";

export async function issueCardForRequest(
    purchaseRequestId: string,
) {
    const request =
        await prisma.purchaseRequest.findUnique({
            where: {
                id: purchaseRequestId,
            },

            include: {
                agent: true,
            },
        });

    if (!request) {
        throw new Error(
            "Purchase request not found",
        );
    }

    const marqetaUser =
        await createMarqetaUser(
            request.agent.id,
        );

    const card =
        await createVirtualCard(
            marqetaUser.token,
        );

    const savedCard =
        await prisma.card.create({
            data: {
                marqetaId:
                    card.token,

                marqetaUserToken:
                    marqetaUser.token,

                cardProductToken:
                    card.card_product_token,

                last4:
                    card.last_four,

                expiryMonth:
                    Number(
                        card.expiration.substring(
                            0,
                            2,
                        ),
                    ),

                expiryYear:
                    Number(
                        `20${card.expiration.substring(
                            2,
                            4,
                        )}`,
                    ),

                amount:
                    request.amount,

                status:
                    "ACTIVE",

                purchaseRequestId:
                    request.id,

                agentId:
                    request.agent.id,
            },
        });

    return savedCard;
}