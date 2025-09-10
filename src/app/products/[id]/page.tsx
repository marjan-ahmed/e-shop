"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '@/lib/products';
import { useStore } from '@/context/StoreContext';
import { formatCurrency, parsePrice } from '@/lib/utils';

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const prod = PRODUCTS.find(p => p.id === id);
  const router = useRouter();
  const { addToCart, addToFavorites, removeFromFavorites, isFavorite } = useStore();
  const [selected, setSelected] = useState(0);
  const [reviewInitial, setReviewInitial] = useState<{ name?: string; rating?: number; text?: string } | null>(null);

  if (!prod) return <div className="p-8">Product not found</div>;

  const onAdd = () => {
    addToCart(prod, 1);
  };

  const onBuy = () => {
    addToCart(prod, 1);
    router.push('/checkout');
  };

  const toggleFav = () => {
    if (isFavorite(prod.id)) removeFromFavorites(prod.id);
    else addToFavorites(prod);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:underline">Home</Link>
          </li>
          <li aria-hidden> / </li>
          <li>
            <Link href="/shop" className="hover:underline">Shop</Link>
          </li>
          <li aria-hidden> / </li>
          <li aria-current="page" className="text-gray-900 font-medium">{prod.title}</li>
        </ol>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <div className="rounded-3xl overflow-hidden bg-gray-100">
              <div className="relative w-full h-[420px] md:h-[520px]">
              <Image src={prod.images[selected]} alt={prod.title} fill className="object-cover" sizes="(max-width:768px) 90vw, 50vw" loading="lazy" />
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            {prod.images.map((src, i) => (
              <button key={src} onClick={() => setSelected(i)} className={`h-20 w-20 rounded-lg overflow-hidden border ${i === selected ? 'ring-2 ring-indigo-600' : 'ring-1 ring-neutral-200'}`}>
                <img src={src} alt={`thumb-${i}`} loading="lazy" className="object-cover h-full w-full" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{prod.title}</h1>
          <p className="mt-2 text-sm text-gray-600">{prod.shortDesc || prod.desc}</p>
          <div className="mt-4 flex items-center gap-4">
            <div className="text-2xl font-bold text-indigo-600">{formatCurrency(parsePrice(prod.price))}</div>
            {prod.oldPrice && <div className="text-sm line-through text-gray-400">{formatCurrency(parsePrice(prod.oldPrice))}</div>}
            <div className="ml-auto text-sm text-gray-500">⭐ {prod.rating}</div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button onClick={onBuy} className="px-5 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700">Buy Now</button>
            <button onClick={() => { onAdd(); }} className="px-4 py-3 rounded-full bg-indigo-50 text-indigo-700 font-medium border border-indigo-100">Add to Cart</button>
            <button onClick={toggleFav} className="p-3 rounded-full bg-gray-100 hover:bg-gray-200">
              {isFavorite(prod.id) ? '♥' : '♡'}
            </button>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Reviews</h3>
            <ReviewForm productId={prod.id} initial={reviewInitial} />
          </div>
        </div>
      </div>

      <div className="mt-10 max-w-4xl">
        <h2 className="text-xl font-semibold mb-3">Product details</h2>
        <p className="text-gray-700 leading-relaxed">{prod.longDesc || prod.desc}</p>
      </div>

      <div className="mt-8 max-w-4xl">
        <h3 className="text-lg font-semibold mb-3">Demo users</h3>
        <div className="flex flex-wrap gap-3 items-center">
          {[
            { name: 'Ayesha Khan', avatar: 'https://i.pravatar.cc/48?img=12' , sample: 'Love this product — great value.'},
            { name: 'Bilal Ahmed', avatar: 'https://i.pravatar.cc/48?img=6', sample: 'Very well made and fast shipping.' },
            { name: 'Sara Ali', avatar: 'https://i.pravatar.cc/48?img=23', sample: 'Exceeded my expectations!' },
          ].map((u) => (
            <div key={u.name} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow">
              <img src={u.avatar} alt={u.name} className="h-10 w-10 rounded-full object-cover" />
              <div>
                <div className="font-medium">{u.name}</div>
                <div className="text-sm text-gray-500">{u.sample}</div>
              </div>
              <div className="ml-4">
                <button onClick={() => {
                  setReviewInitial({ name: u.name, rating: 5, text: u.sample });
                  setTimeout(() => {
                    const el = document.getElementById('review-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }, 80);
                }} className="px-3 py-2 rounded-md bg-indigo-600 text-white">Add review</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4">Similar Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PRODUCTS.filter(p => p.id !== prod.id).map(p => (
            <Link key={p.id} href={`/products/${p.id}`} className="block bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
              <div className="relative h-44 w-full rounded-lg overflow-hidden mb-3">
                <img src={p.images[0]} alt={p.title} className="object-cover h-full w-full" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-gray-500">{formatCurrency(parsePrice(p.price))}</div>
                </div>
                <div className="text-indigo-600 font-bold">→</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReviewForm({ productId, initial }: { productId: string; initial?: { name?: string; rating?: number; text?: string } | null }) {
  const [name, setName] = useState(initial?.name || '');
  const [rating, setRating] = useState(initial?.rating || 5);
  const [text, setText] = useState(initial?.text || '');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (initial) {
      setName(initial.name || '');
      setRating(initial.rating || 5);
      setText(initial.text || '');
    }
  }, [initial]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
  const existing = JSON.parse(localStorage.getItem('eshop_reviews') || '{}');
    const arr = existing[productId] || [];
    arr.unshift({ name: name || 'Anonymous', rating, text, date: new Date().toISOString() });
    existing[productId] = arr;
    localStorage.setItem('eshop_reviews', JSON.stringify(existing));
    setSaved(true);
  setName(''); setRating(5); setText('');
  // clear initial so UI resets
  const ev = new CustomEvent('eshop:review-submitted', { detail: { productId } });
  window.dispatchEvent(ev as any);
  };

  return (
  <form id="review-form" onSubmit={submit} className="max-w-2xl">
      {saved && <div className="mb-3 text-sm text-green-600">Thanks — your review was submitted.</div>}
      <div className="grid gap-3">
        <input className="border px-3 py-2 rounded-md" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
        <select className="border px-3 py-2 rounded-md" value={rating} onChange={e => setRating(Number(e.target.value))}>
          {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} star{n>1?'s':''}</option>)}
        </select>
        <textarea className="border px-3 py-2 rounded-md" placeholder="Write about your experience" value={text} onChange={e => setText(e.target.value)} />
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">Submit Review</button>
        </div>
      </div>
    </form>
  );
}
