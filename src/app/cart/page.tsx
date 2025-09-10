"use client";
import React, { useEffect, useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { formatCurrency } from '@/lib/utils';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(t);
  }, []);

  if (loading) return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {[1,2].map(i => (
          <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow animate-pulse">
            <div className="w-24 h-24 bg-gray-200 rounded-md" />
            <div className="flex-1">
              <div className="h-4 bg-gray-200 w-1/2 mb-2 rounded" />
              <div className="h-3 bg-gray-200 w-1/4 rounded" />
            </div>
            <div className="text-right">
              <div className="h-4 bg-gray-200 w-16 mx-auto rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (!cart.length) return <div className="p-8 max-w-4xl mx-auto">Your cart is empty.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.product.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
            <img src={item.product.images[0]} alt={item.product.title} className="w-24 h-24 object-cover rounded-md" loading="lazy" />
            <div className="flex-1">
              <div className="font-semibold">{item.product.title}</div>
              <div className="text-sm text-gray-500">Qty: {item.qty}</div>
            </div>
            <div className="text-right">
              <div className="font-semibold">{formatCurrency(item.product.price * item.qty)}</div>
              <button onClick={() => removeFromCart(item.product.id)} className="text-sm text-red-600 mt-2">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <button onClick={() => clearCart()} className="px-4 py-2 rounded-md bg-red-50 text-red-600">Clear Cart</button>
        <a href="/checkout" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Proceed to Checkout</a>
      </div>
    </div>
  );
}
