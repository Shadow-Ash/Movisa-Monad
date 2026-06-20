import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/db/prisma";
import { simulateTransaction } from "@/lib/marqeta/simulate-transaction";

export async function POST(
    request: NextRequest,
) {
    try {
        const body =
            await request.json();

        const card =
            await prisma.card.findUnique({
                where: {
                    id: body.cardId,
                },
            });

        if (!card?.marqetaId) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Card not found",
                },
                {
                    status: 404,
                },
            );
        }

        const result =
            await simulateTransaction(
                card.marqetaId,
                Number(body.amount),
            );

        await prisma.transaction.create({
            data: {
                merchant:
                    body.merchant,

                amount:
                    body.amount,

                status:
                    "SUCCESS",

                cardId:
                    card.id,

                agentId:
                    body.agentId,
            },
        });

        return NextResponse.json({
            success: true,
            result,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
            },
            {
                status: 500,
            },
        );
    }
}