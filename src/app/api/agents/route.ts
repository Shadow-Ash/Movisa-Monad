import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib/db/prisma';
import { createWallet } from '@/lib/blockchain/wallet';
import { encrypt } from '@/lib/security/encryption';

export async function POST(
    request: NextRequest,
) {
    try {
        const body = await request.json();

        const wallet = createWallet();

        const agent = await prisma.agent.create({
            data: {
                name: body.name,
                description: body.description,

                dailyLimit: body.dailyLimit,
                transactionLimit:
                    body.transactionLimit,

                approvalThreshold:
                    body.approvalThreshold,

                wallet: {
                    create: {
                        address: wallet.address,

                        encryptedPrivateKey:
                            encrypt(wallet.privateKey),

                        balance: 0,
                    },
                },

                auditLogs: {
                    create: {
                        actor: 'system',
                        action: 'Agent Created',
                    },
                },
            },

            include: {
                wallet: true,
            },
        });

        return NextResponse.json({
            success: true,
            agent,
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