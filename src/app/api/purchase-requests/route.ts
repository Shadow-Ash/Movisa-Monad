import { NextResponse } from "next/server";

import { prisma } from "@/lib/db/prisma";
import { evaluateApproval } from "@/lib/policies/approval-engine";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const agent = await prisma.agent.findUnique({
            where: {
                id: body.agentId,
            },
        });

        if (!agent) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Agent not found",
                },
                {
                    status: 404,
                },
            );
        }

        const policy = evaluateApproval({
            amount: Number(body.amount),
            approvalThreshold: Number(agent.approvalThreshold),
        });

        const purchaseRequest = await prisma.purchaseRequest.create({
            data: {
                title: body.title,
                merchant: body.merchant,
                amount: body.amount,
                reason: body.reason,

                requiresApproval: policy.requiresApproval,

                status: policy.status,

                agentId: agent.id,
            },
        });

        await prisma.auditLog.create({
            data: {
                actor: "system",
                action: "Purchase Request Created",

                agentId: agent.id,

                metadata: {
                    purchaseRequestId: purchaseRequest.id,
                },
            },
        });

        return NextResponse.json({
            success: true,
            purchaseRequest,
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