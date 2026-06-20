export const USDC_ABI = [
    {
        type: "function",
        stateMutability: "view",
        name: "balanceOf",
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
    },
] as const;