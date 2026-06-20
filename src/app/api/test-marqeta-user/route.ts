import { NextResponse } from "next/server";

import { createMarqetaUser } from "@/lib/marqeta/create-user";

export async function GET() {
    const user =
        await createMarqetaUser(
            "demo-agent",
        );

    return NextResponse.json(
        user,
    );
}