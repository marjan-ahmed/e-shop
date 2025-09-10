'use client';
import React from 'react';
import Image from 'next/image';
import { IMAGES } from '../lib/images';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface ShowcaseItem {
  id: string;
  title: string;
  snippet: string;
  rating: string;
  image: string;
}

const items: ShowcaseItem[] = [
  {
    id: 'serum',
    title: 'Radiant Glow Serum',
    snippet: 'Achieve a luminous complexion with our best-selling serum, packed with potent antioxidants and hydrating ingredients. Rated 4.8 stars.',
    rating: '4.8',
    image: IMAGES.products.serum,
  },
  {
    id: 'laptop',
    title: 'Ultra-Thin Laptop',
    snippet: 'Experience unparalleled performance and portability with our new ultra-thin laptop. Perfect for professionals on the go. Rated 4.7 stars.',
    rating: '4.7',
    image: IMAGES.products.laptop,
  },
  {
    id: 'headphones',
    title: 'Noise-Cancelling Headphones',
    snippet: 'Immerse yourself in pure sound with our premium noise-cancelling headphones. Enjoy crystal-clear audio and deep bass. Rated 4.9 stars.',
    rating: '4.9',
    image: IMAGES.products.headphones,
  },
];

const StackedShowcase: React.FC = () => {
  return (
    <section className="mt-16" aria-labelledby="stacked-products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end md:justify-between">
        <div>
          <h2 id="stacked-products-heading" className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Popular Products
          </h2>
          <p className="max-w-xl text-sm md:text-base leading-relaxed text-gray-600">
            Explore our top-rated products from both beauty and electronics categories, carefully selected to meet your needs. Discover quality items with detailed ratings and competitive prices.
          </p>
        </div>
      </div>

    <div className="mt-[-200px]">
      <ScrollStack itemDistance={80} itemScale={0.05} itemStackDistance={36} baseScale={0.88} stackPosition="6%" scaleEndPosition="9%">
        {items.map((item) => (
          <ScrollStackItem key={item.id}>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center h-full">
              {/* Text Section */}
              <div className="order-2 md:order-1">
                <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                  <div className="relative flex h-14 w-14 items-center justify-center flex-shrink-0">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-100 to-gray-200" />
                    <span className="relative h-9 w-9 rounded-full bg-gray-900 flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-3 leading-snug">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.snippet}</p>
                    <div className="mt-4 md:mt-6 flex items-center gap-4 sm:gap-6 flex-wrap">
                      <a href="#" className="text-sm font-semibold text-gray-900 flex items-center gap-2 group/link">
                        View Product
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-4 w-4 transition -translate-x-0 group-hover/link:translate-x-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>

                      <div className="flex items-center text-xs font-medium text-gray-500 gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-yellow-500">
                          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        {item.rating}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="order-1 md:order-2">
                <div className="relative w-full h-[250px] sm:h-[300px] md:h-[320px] lg:h-[360px] overflow-hidden rounded-2xl md:rounded-3xl bg-gray-100 ring-1 ring-gray-200/60">
                  <Image src={item.image} alt={item.title} fill className="object-cover scale-105" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10 mix-blend-overlay" />
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
      </div>
    </section>
  );
};

export default StackedShowcase;
