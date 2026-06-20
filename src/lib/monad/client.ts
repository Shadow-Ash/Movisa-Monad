import { createPublicClient, http } from "viem";

import { MONAD } from "@/config/blockchain/monad";

export const monadClient =
    createPublicClient({
        transport: http(
            MONAD.RPC_URL,
        ),
    });