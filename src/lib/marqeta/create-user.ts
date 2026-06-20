import { marqetaFetch } from "./client";

export async function createMarqetaUser(
    agentId: string,
) {
    const response =
        await marqetaFetch("/users", {
            method: "POST",

            body: JSON.stringify({
                token: `agent_${agentId}`,

                active: true,

                first_name: "MOVISA",

                last_name: agentId.slice(
                    0,
                    8,
                ),
            }),
        });

    if (!response.ok) {
        throw new Error(
            "Failed to create Marqeta user",
        );
    }

    return response.json();
}