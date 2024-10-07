import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-09-30.acacia',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
    const signature = req.headers.get('stripe-signature'); //stripe will send this header
    if (!signature) {
        return NextResponse.json({ message: 'Missing stripe-signature header' }, { status: 400 });
    }

    let event;

    try {
        const body = await req.text();
        event = stripe.webhooks.constructEvent(body, signature, endpointSecret);
    } catch (err) {
        console.error('⚠️ Webhook signature verification failed.', err);
        return NextResponse.json({ message: 'Webhook Error' }, { status: 400 });
    }

    if (event.type === 'payment_intent.created') {
        console.log("Payment intent created")
        //This if-check has to have some logic, a mere console log even, for the logic in the next if statement to work.
        //And this if-check has to exist.
    }

    if (event.type === 'payment_intent.succeeded') {
        //Add business logic here.
        const paymentIntent = event.data.object;
        console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);

    } else {
        console.log(`Unhandled event type ${event.type}.`);
    }
    return NextResponse.json({ received: true }, { status: 200 });


}