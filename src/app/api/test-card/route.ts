import { NextResponse } from "next/server";

import { createVirtualCard } from "@/lib/marqeta/create-card";

export async function GET() {
    const card =
        await createVirtualCard(
            "agent_demo-agent",
        );

    return NextResponse.json(
        card,
    );
}