"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function ThankYouPage() {
  const router = useRouter();
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <div className="bg-white p-10 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
        <p className="text-gray-600 mb-6">We've received your order and will email you an order confirmation shortly.</p>
        <div className="flex justify-center gap-3">
          <button onClick={() => router.push('/shop')} className="px-6 py-3 rounded-md bg-indigo-600 text-white">Shop more</button>
          <button onClick={() => router.push('/')} className="px-6 py-3 rounded-md border">Return home</button>
        </div>
      </div>
    </div>
  );
}
