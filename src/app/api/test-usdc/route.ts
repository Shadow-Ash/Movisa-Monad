import { NextResponse } from "next/server";

import { getUSDCBalance } from "@/lib/monad/get-usdc-balance";

export async function GET() {
    const address =
        "PUT_A_REAL_AGENT_WALLET_HERE";

    const balance =
        await getUSDCBalance(
            address as `0x${string}`,
        );

    return NextResponse.json({
        balance,
    });
}