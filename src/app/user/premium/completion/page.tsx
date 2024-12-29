// app/completion/page.tsx
'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { loadStripe } from '@stripe/stripe-js'

export default function CompletionPage() {
  const [status, setStatus] = useState<string | null>(null)
  const searchParams = useSearchParams()
  
  useEffect(() => {
    const clientSecret = searchParams.get('payment_intent_client_secret')
    
    if (clientSecret) {
      loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
        .then((stripe) => {
          if (stripe) {
            return stripe.retrievePaymentIntent(clientSecret)
          }
        })
        .then((result) => {
          if (result?.paymentIntent) {
            setStatus(result.paymentIntent.status)
          }
        })
    }
  }, [searchParams])

  return (
    <div>
      {status && (
        <div>
          Payment status: {status}
        </div>
      )}
    </div>
  )
}