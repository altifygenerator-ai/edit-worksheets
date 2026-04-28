import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { supabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const body = await req.text();

  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe signature" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("WEBHOOK SIGNATURE ERROR:", err.message);
    return NextResponse.json(
      { error: "Invalid webhook signature" },
      { status: 400 }
    );
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      const userId = session.metadata?.user_id;
      const credits = Number(session.metadata?.credits || 0);

      if (!userId || !credits) {
        console.error("Missing webhook metadata:", session.metadata);
        return NextResponse.json(
          { error: "Missing metadata" },
          { status: 400 }
        );
      }

      const { data: profile, error: profileError } = await supabaseAdmin
        .from("profiles")
        .select("pdf_credits")
        .eq("id", userId)
        .single();

      if (profileError || !profile) {
        console.error("PROFILE LOOKUP ERROR:", profileError);
        return NextResponse.json(
          { error: "Profile not found" },
          { status: 404 }
        );
      }

      const newCredits = (profile.pdf_credits || 0) + credits;

      const { error: updateError } = await supabaseAdmin
        .from("profiles")
        .update({
          pdf_credits: newCredits,
          stripe_customer_id:
            typeof session.customer === "string" ? session.customer : null,
        })
        .eq("id", userId);

      if (updateError) {
        console.error("CREDIT UPDATE ERROR:", updateError);
        return NextResponse.json(
          { error: "Failed to update credits" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error("WEBHOOK ERROR:", err);
    return NextResponse.json(
      { error: err.message || "Webhook failed" },
      { status: 500 }
    );
  }
}