'use server';

import { revalidateTag } from "next/cache";

export async function revalidateOrders({ wallet_id }: { wallet_id: string; }) {
    // revalidateTag(`orders-wallet-${wallet_id}`)
    revalidateTag(`orders-wallet-${wallet_id}`);
}