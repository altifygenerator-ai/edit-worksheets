import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const PRICE_MAP: Record<string, { priceId: string; credits: number }> = {
  single: {
    priceId: process.env.STRIPE_PRICE_SINGLE!,
    credits: 1,
  },
  five: {
    priceId: process.env.STRIPE_PRICE_FIVE!,
    credits: 5,
  },
  twenty: {
    priceId: process.env.STRIPE_PRICE_TWENTY!,
    credits: 20,
  },
};

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "You must be logged in to buy credits" },
        { status: 401 }
      );
    }

    const { pack } = await req.json();

    const selectedPack = PRICE_MAP[pack];

    if (!selectedPack) {
      return NextResponse.json(
        { error: "Invalid credit pack" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: selectedPack.priceId,
          quantity: 1,
        },
      ],
      customer_email: user.email || undefined,
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?payment=cancelled`,
      metadata: {
        user_id: user.id,
        credits: String(selectedPack.credits),
        pack,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("CHECKOUT SESSION ERROR:", err);
    return NextResponse.json(
      { error: err.message || "Failed to create checkout session" },
      { status: 500 }
    );
  }
}