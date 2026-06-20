import { marqetaFetch } from "./client";

export async function simulateTransaction(
    cardToken: string,
    amount: number,
) {
    const response =
        await marqetaFetch(
            "/simulations/cardtransactions/authorization",
            {
                method: "POST",

                body: JSON.stringify({
                    amount: String(amount),

                    card_token:
                        cardToken,

                    network: "VISA",

                    card_acceptor: {
                        mid: "123456890",
                    },
                }),
            },
        );

    const data =
        await response.json();

    if (!response.ok) {
        throw new Error(
            JSON.stringify(data),
        );
    }

    return data;
}