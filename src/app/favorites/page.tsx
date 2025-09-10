"use client";
import React from 'react';
import { useStore } from '@/context/StoreContext';
import { formatCurrency, parsePrice } from '@/lib/utils';

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useStore();

  if (!favorites.length) return <div className="p-8 max-w-4xl mx-auto">No favorites yet.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {favorites.map(p => (
          <div key={p.id} className="bg-white p-4 rounded-lg shadow flex gap-4 items-center">
            <img src={p.images[0]} alt={p.title} className="w-24 h-24 object-cover rounded-md" />
            <div className="flex-1">
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm text-gray-500">{formatCurrency(parsePrice(p.price))}</div>
            </div>
            <div>
              <button onClick={() => removeFromFavorites(p.id)} className="text-sm text-red-600">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
