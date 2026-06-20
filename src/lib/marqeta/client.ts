const MARQETA_BASE_URL =
    process.env.MARQETA_BASE_URL!;

const APPLICATION_TOKEN =
    process.env.MARQETA_APPLICATION_TOKEN!;

const ADMIN_ACCESS_TOKEN =
    process.env.MARQETA_ADMIN_ACCESS_TOKEN!;

export async function marqetaFetch(
    path: string,
    options?: RequestInit,
) {
    const auth = Buffer.from(
        `${APPLICATION_TOKEN}:${ADMIN_ACCESS_TOKEN}`,
    ).toString("base64");

    return fetch(
        `${MARQETA_BASE_URL}${path}`,
        {
            ...options,

            headers: {
                "Content-Type":
                    "application/json",

                Authorization: `Basic ${auth}`,

                ...(options?.headers ??
                    {}),
            },
        },
    );
}