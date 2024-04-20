import type { RequestHandler } from "./$types";
import Stripe from "stripe";

const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRETKEY, {
    apiVersion: "2024-04-10"
})

export const POST: RequestHandler = async ({request}) =>{
    const data = await request.json();
    const items = [{price: "price_1P7hYvGbJmJXwLMkgST49PLl", quantity: 1}]

    const session = await stripe.checkout.sessions.create({
        line_items: items,
        mode: 'payment',
        success_url: `http://localhost:5173/eval/${data.id}?success=true`, // always send back to /call/id route
        cancel_url: `http://localhost:5173/eval/${data.id}?cancelled=true` // always send back to /call/id route
    })

    return new Response(
        JSON.stringify({url: session.url}),
        {
            status: 200,
            headers: {'content-type': 'application/json'}
        }
    )
}

//if payments succeeds, update doc and send back to 
//if payments fails, no doc update simply send back to /call/id route