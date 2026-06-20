const rpcUrl = process.env.MONAD_RPC_URL;

if (!rpcUrl) {
    throw new Error(
        "MONAD_RPC_URL is missing",
    );
}

export const MONAD = {
    RPC_URL: rpcUrl,

    USDC:
        "0x534b2f3A21130d7a60830c2Df862319e593943A3",
} as const;