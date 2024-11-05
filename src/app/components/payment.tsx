'use client'
import React from 'react'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from './CheckoutPage';
import convertToSubcurrency from '@/lib/convertToSubcurrency';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

export const Payment = ({amount}: {amount: number}) => {
  return (
    <div className="max-w-6xl mx-auto p-10 text-white text-center m-10 rounded-md">
      <div>
        <h1 className="text-4xl font-extrabold mb-2">Sonny</h1>
        <h2 className="text-2xl">
          has requested
          <span className="font-bold">
            ${amount}
          </span>
        </h2>
      </div>
      <Elements stripe={stripePromise}
      options=
      {{
        mode: "payment",
        amount: convertToSubcurrency(amount),
        currency: "usd",
      }}
      
      >
        <CheckoutPage 
        amount={convertToSubcurrency(amount)}
        />

      </Elements>
    </div>
  )
}
