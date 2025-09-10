import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IMAGES } from '../lib/images';
import { useStore } from '@/context/StoreContext';
import { formatCurrency, parsePrice } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  tag?: string;
  rating?: number;
  price: string;
  oldPrice?: string;
  image: string;
}

const products: Product[] = [
  { id: 'watch', title: 'Minimalist Smart Watch', tag: 'Hot', rating: 4.7, price: '$199', oldPrice: '$249', image: IMAGES.products.watch },
  { id: 'camera', title: 'Mirrorless Camera Pro', tag: 'New', rating: 4.9, price: '$1399', image: IMAGES.products.camera },
  { id: 'chair', title: 'Ergo Comfort Chair', tag: 'Sale', rating: 4.6, price: '$289', oldPrice: '$349', image: IMAGES.products.chair },
  { id: 'sneakers', title: 'Urban Runner Sneakers', rating: 4.8, price: '$129', image: IMAGES.products.sneakers },
  { id: 'phone', title: 'Flagship Smartphone X', tag: 'Hot', rating: 4.95, price: '$999', image: IMAGES.products.phone },
  { id: 'laptop', title: 'Ultra-Thin Laptop', rating: 4.9, price: '$1299', image: IMAGES.products.laptop },
  { id: 'headphones', title: 'Wireless Headphones', rating: 4.7, price: '$199', image: IMAGES.products.headphones },
  { id: 'tablet', title: 'Pro Tablet 12"', rating: 4.8, price: '$499', image: IMAGES.products.camera },
];

const Star = ({ filled }: { filled: boolean }) => (
  <svg className={`h-3 w-3 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
  </svg>
);

const Rating = ({ value }: { value: number }) => {
  const full = Math.round(value);
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < full} />
      ))}
      <span className="text-[10px] font-medium text-gray-500">{value.toFixed(1)}</span>
    </div>
  );
};

const TrendingProducts: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const store = (() => { try { return useStore(); } catch { return null; } })();

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));

  return (
    <section className="mt-10 px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 md:mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Trending Products</h2>
          <p className="mt-1 text-sm text-gray-600 max-w-md">
            Hand-picked products rising fast in popularity. Updated daily.
          </p>
        </div>
        <button className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
          View All
        </button>
      </div>

      {/* Mobile carousel */}
      <div className="relative sm:hidden">
        <div className="overflow-hidden rounded-xl">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 80}%)` }}>
            {products.map((p, index) => (
              <div key={p.id} className="flex-shrink-0 w-[80%] max-w-xs bg-white rounded-xl shadow flex flex-col mx-2">
                <div className="relative h-56 w-full overflow-hidden rounded-t-xl">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                  {p.tag && (
                    <span className="absolute top-2 left-2 text-[10px] font-semibold uppercase bg-white/90 px-2 py-0.5 rounded-full text-indigo-600 shadow">
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{p.title}</h3>
                  {p.rating && <Rating value={p.rating} />}
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm font-bold text-indigo-600">{formatCurrency(parsePrice(p.price))}</span>
                    {p.oldPrice && <span className="text-[10px] font-medium text-gray-400 line-through">{formatCurrency(parsePrice(p.oldPrice))}</span>}
                  </div>
                  <div className="mt-2 flex gap-1">
                    <button onClick={() => store?.addToCart({ id: p.id, title: p.title, desc: p.title, images: [p.image], price: parsePrice(p.price) } as any)} className="flex-1 text-sm font-semibold rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition py-2">Add to Cart</button>
                    <button onClick={() => store?.addToFavorites({ id: p.id, title: p.title, desc: p.title, images: [p.image], price: parsePrice(p.price) } as any)} className="p-2 rounded-full bg-gray-100 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition"><Heart className="w-5 h-5" /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-white rounded-full p-3 shadow hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-white rounded-full p-3 shadow hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-3 space-x-2">
          {products.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      {/* Tablet & desktop grid */}
      <div className="hidden sm:grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <div key={p.id} className="group relative bg-white rounded-xl shadow ring-1 ring-black/5 hover:shadow-lg hover:-translate-y-0.5 transition flex flex-col">
            <Link href={`/products/${p.id}`} className="block">
              <div className="relative h-52 sm:h-56 md:h-60 w-full overflow-hidden rounded-t-xl">
                <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition duration-300" />
                {p.tag && (
                  <span className="absolute top-2 left-2 text-[10px] font-semibold uppercase bg-white/90 px-2 py-0.5 rounded-full text-indigo-600 shadow">
                    {p.tag}
                  </span>
                )}
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-1">{p.title}</h3>
                {p.rating && <Rating value={p.rating} />}
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm font-bold text-indigo-600">{formatCurrency(parsePrice(p.price))}</span>
                  {p.oldPrice && <span className="text-[10px] font-medium text-gray-400 line-through">{formatCurrency(parsePrice(p.oldPrice))}</span>}
                </div>
              </div>
            </Link>
            <div className="p-3 flex flex-col flex-1 mt-auto">
              <div className="mt-2 flex gap-1">
                <button onClick={() => store?.addToCart({ id: p.id, title: p.title, desc: p.title, images: [p.image], price: parsePrice(p.price) } as any)} className="flex-1 text-sm font-semibold rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition py-2">Add to Cart</button>
                <button onClick={() => store?.addToFavorites({ id: p.id, title: p.title, desc: p.title, images: [p.image], price: parsePrice(p.price) } as any)} className="p-1 rounded-full bg-gray-100 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition"><Heart className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
