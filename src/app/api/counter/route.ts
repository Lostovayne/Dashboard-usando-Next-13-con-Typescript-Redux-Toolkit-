import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return NextResponse.json({
        method: "GET",
        count: 100,
    });
}
