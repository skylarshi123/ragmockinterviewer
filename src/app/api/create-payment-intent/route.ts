// app/api/create-payment-intent/route.ts
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(request: Request) {
    console.log(request)
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000, // Hardcoded like the original example
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  })

  return NextResponse.json({
    clientSecret: paymentIntent.client_secret
  })
}