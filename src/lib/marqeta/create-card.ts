import { marqetaFetch } from "./client";

const CARD_PRODUCT_TOKEN =
    "bbb97bdf-799a-48e8-b712-3e0654fc496b";

export async function createVirtualCard(
    userToken: string,
) {
    const response =
        await marqetaFetch("/cards", {
            method: "POST",

            body: JSON.stringify({
                user_token: userToken,

                card_product_token:
                    CARD_PRODUCT_TOKEN,
            }),
        });

    const data =
        await response.json();

    if (!response.ok) {
        console.error(data);

        throw new Error(
            "Failed to create card",
        );
    }

    return data;
}