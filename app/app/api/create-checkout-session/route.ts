import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Folosește secret key-ul din Environment Variable
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export async function POST(req: NextRequest) {
  try {
    const { plan, coupon } = await req.json();

    let amount = 0;
    if (plan === "THE CHANCE") amount = 14900;
    if (plan === "PREMIUM") amount = coupon === "REGELEBANILOR10" ? 49900 : 99900;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "ron",
            product_data: { name: plan },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/course`,
      cancel_url: `${req.headers.get("origin")}/shop`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Eroare la Stripe Checkout" }, { status: 500 });
  }
}
