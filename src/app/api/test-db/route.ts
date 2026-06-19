import { NextResponse } from 'next/server';

import { prisma } from '@/lib/db/prisma';

export async function GET() {
    const agents = await prisma.agent.count();

    return NextResponse.json({
        success: true,
        agents,
    });
}