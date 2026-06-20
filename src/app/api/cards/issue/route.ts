import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { issueCardForRequest } from "@/lib/marqeta/issue-card-for-request";

export async function POST(
    request: NextRequest,
) {
    const body =
        await request.json();

    const card =
        await issueCardForRequest(
            body.purchaseRequestId,
        );

    return NextResponse.json(
        card,
    );
}