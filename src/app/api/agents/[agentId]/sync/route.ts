import { NextResponse } from "next/server";

import { prisma } from "@/lib/db/prisma";
import { getUSDCBalance } from "@/lib/monad/get-usdc-balance";

export async function POST(
    _request: Request,
    {
        params,
    }: {
        params: Promise<{
            agentId: string;
        }>;
    },
) {
    try {
        const { agentId } = await params;

        const agent =
            await prisma.agent.findUnique({
                where: {
                    id: agentId,
                },

                include: {
                    wallet: true,
                },
            });

        if (!agent?.wallet) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Wallet not found",
                },
                {
                    status: 404,
                },
            );
        }

        const balance =
            await getUSDCBalance(
                agent.wallet.address as `0x${string}`,
            );

        await prisma.wallet.update({
            where: {
                id: agent.wallet.id,
            },

            data: {
                balance,
            },
        });

        return NextResponse.json({
            success: true,
            balance,
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