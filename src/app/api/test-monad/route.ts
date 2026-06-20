import { NextResponse } from "next/server";

import { monadClient } from "@/lib/monad/client";

export async function GET() {
    const blockNumber =
        await monadClient.getBlockNumber();

    return NextResponse.json({
        blockNumber: blockNumber.toString(),
    });
}