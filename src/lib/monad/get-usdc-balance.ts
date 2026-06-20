import { formatUnits } from "viem";

import { MONAD } from "@/config/blockchain/monad";

import { monadClient } from "./client";
import { USDC_ABI } from "./usdc-abi";

export async function getUSDCBalance(
    address: `0x${string}`,
) {
    const balance =
        await monadClient.readContract({
            address:
                MONAD.USDC as `0x${string}`,

            abi: USDC_ABI,

            functionName:
                "balanceOf",

            args: [address],
        });

    return Number(
        formatUnits(balance, 6),
    );
}