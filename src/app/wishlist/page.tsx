"use client";
import React, { useEffect, useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { formatCurrency, parsePrice } from '@/lib/utils';

export default function WishlistPage() {
  const { favorites, removeFromFavorites, addToCart } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, []);

  if (loading) return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[1,2].map(i => (
          <div key={i} className="bg-white p-4 rounded-lg shadow animate-pulse">
            <div className="h-40 bg-gray-200 rounded-md mb-3" />
            <div className="h-4 bg-gray-200 w-3/4 mb-2" />
            <div className="h-3 bg-gray-200 w-1/4" />
          </div>
        ))}
      </div>
    </div>
  );

  if (!favorites.length) return <div className="p-8 max-w-4xl mx-auto">No items in your wishlist yet.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {favorites.map(p => (
          <div key={p.id} className="bg-white p-4 rounded-lg shadow flex flex-col gap-3">
            <div className="relative h-40 w-full overflow-hidden rounded-md">
              <img src={p.images[0]} alt={p.title} loading="lazy" className="object-cover h-full w-full" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{p.title}</div>
                <div className="text-sm text-gray-500">{formatCurrency(parsePrice(p.price))}</div>
              </div>
              <div className="flex flex-col gap-2">
                <button onClick={() => addToCart(p)} className="px-3 py-2 rounded-md bg-indigo-600 text-white">Add to cart</button>
                <button onClick={() => removeFromFavorites(p.id)} className="px-3 py-2 rounded-md bg-gray-100">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
