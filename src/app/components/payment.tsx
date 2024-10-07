'use client'
import React from 'react'
import CheckoutPage from "@/components/CheckoutPage";
import convertToSubcurrency from "@/utils/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
if(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY){
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not set")
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

export const Payment = () => {
  const amount = 49.99;
  return (
    <div className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div>
        <h1 className="text-4xl font-extrabold mb-2">Sonny</h1>
        <h2 className="text-2xl">
          has requested
          <span className="font-bold">
            ${amount}
          </span>
        </h2>
      </div>
    </div>
  )
}
