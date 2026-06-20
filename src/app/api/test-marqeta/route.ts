import { NextResponse } from "next/server";

export async function GET() {
    const auth = Buffer.from(
        `${process.env.MARQETA_APPLICATION_TOKEN}:${process.env.MARQETA_ADMIN_ACCESS_TOKEN}`,
    ).toString("base64");

    const response = await fetch(
        `${process.env.MARQETA_BASE_URL}/cardproducts`,
        {
            headers: {
                Authorization: `Basic ${auth}`,
                "Content-Type":
                    "application/json",
            },
        },
    );

    const data =
        await response.json();

    return NextResponse.json(data);
}