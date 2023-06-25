import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { wallet_id: string } }) {
    // console.log(params.wallet_id)
    const response = await fetch(`http://host.docker.internal:3000/wallets/${params.wallet_id}/assets`, {
        // cache: 'no-store',
        next: {
            revalidate: 1
        }
    });
    return NextResponse.json(await response.json())
}