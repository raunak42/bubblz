import { NextRequest } from "next/server";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-09-30.acacia',
});

export async function POST(req: NextRequest) {

    try {
        const session = await stripe.checkout.sessions.create({
            currency: "inr",
            ui_mode: "hosted",
            submit_type: "pay",
            line_items: [
                {
                    price_data: {
                        unit_amount: 349 * 100,
                        currency: "inr",
                        product_data: {
                            name: "Bubblz Soda - Pack of 10",
                            images: ["https://github.com/user-attachments/assets/12efbe76-1981-4343-80ff-53e8ef3e497c"]
                        },
                    },
                    quantity: 1,
                }
            ],
            mode: "payment",
            success_url: `${req.headers.get('origin')}/return?success=true`,
            cancel_url: `${req.headers.get('origin')}/return?success=false`,
            billing_address_collection: 'required',
            customer_creation: 'always',
            payment_intent_data: {
                metadata: {}
            },
        })
        return Response.json(session.url as string)
    } catch (err) {
        console.error(err)
        if (err instanceof Error) {
            return new Response(JSON.stringify({ message: err.message }));
        }
    }



}

export async function GET() {
    return new Response('Method Not Allowed', {
        status: 405,
        headers: { Allow: 'POST' },
    });
}