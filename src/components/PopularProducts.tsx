import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IMAGES } from '../lib/images';
import { useStore } from '@/context/StoreContext';
import { formatCurrency, parsePrice } from '@/lib/utils';

interface Product {
  id: string;
  title: string;
  desc: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 'serum',
    title: 'Radiant Glow Serum',
    desc: 'Luminous complexion booster with antioxidants.',
    price: '$49',
    image: IMAGES.products.serum,
  },
  {
    id: 'laptop',
    title: 'Ultra-Thin Laptop',
    desc: 'Performance & portability for creatives.',
    price: '$1299',
    image: IMAGES.products.laptop,
  },
  {
    id: 'headphones',
    title: 'Noise-Cancelling Headphones',
    desc: 'Immersive sound & deep bass.',
    price: '$249',
    image: IMAGES.products.headphones,
  },
];

export const PopularProducts: React.FC = () => {
  const store = (() => {
    try { return useStore(); } catch { return null; }
  })();

  return (
    <section className="mt-16 sm:mt-20 lg:mt-24 px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-10 gap-4 sm:gap-0 text-center sm:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Popular Products</h2>
        <a
          href="#"
          className="text-sm md:text-base font-semibold text-indigo-600 hover:text-indigo-700 transition"
        >
          View All
        </a>
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="group relative bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden flex flex-col"
          >
            {/* Clickable area */}
            <Link href={`/products/${p.id}`} className="block">
              {/* Image */}
              <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex flex-col">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2 line-clamp-1">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                  {p.desc}
                </p>
              </div>
            </Link>

            {/* Footer (actions remain clickable and separate) */}
            <div className="p-4 sm:p-6 mt-auto flex items-center justify-between">
              <span className="text-indigo-600 font-bold text-sm sm:text-lg">{formatCurrency(parsePrice(p.price))}</span>
              <div className="flex items-center gap-2">
                <Link href={`/products/${p.id}`} className="text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">View</Link>
                <button onClick={() => store?.addToCart({ id: p.id, title: p.title, desc: p.desc, images: [p.image], price: parsePrice(p.price) } as any)} className="text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium border border-indigo-100">Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
