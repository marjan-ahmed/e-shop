import Image from 'next/image';
import React from 'react';
import { IMAGES } from '../lib/images';
import Shuffle from './Shuffle';

interface CategoryCard {
  title: string;
  image: string;
  products: string; // e.g. "5,000+ Products"
}

const categories: CategoryCard[] = [
  { title: 'Electronics', products: '5,000+ Products', image: IMAGES.categories.electronics },
  { title: 'Cosmetics', products: '3,495 Products', image: IMAGES.categories.cosmetics },
  { title: 'Skincare', products: '2,100+ Products', image: IMAGES.categories.skincare },
  { title: 'Gadgets', products: '1,500+ Products', image: IMAGES.categories.gadgets },
];

export const CategoriesGrid: React.FC = () => {
  return (
    <section className="relative mt-20">
      {/* soft backdrop tint & subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 rounded-[3rem] bg-gradient-to-b from-white via-white to-[#f4f8f5]" />
      <div className="relative z-10">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-14 px-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Explore Our Top Categories
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Discover our curated selection of high-quality electronics and premium beauty products designed for modern living.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="
                group relative rounded-2xl overflow-hidden 
                shadow-[0_6px_20px_rgba(0,0,0,0.06)] bg-white/20 backdrop-blur-sm 
                transition duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                h-56 sm:h-60 md:h-64 lg:h-72 xl:h-[244px] w-full
              "
            >
              {/* Background image */}
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover absolute inset-0 -z-10 scale-105 group-hover:scale-110 transition duration-[1200ms] ease-out"
                sizes="(max-width: 768px) 100vw, 25vw"
              />

              {/* ✅ Top blur only */}
              <div className="absolute top-0 left-0 right-0 h-20 sm:h-24 bg-gradient-to-b from-white/85 via-white/40 to-transparent backdrop-blur-md flex flex-col justify-center px-4 sm:px-6">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 drop-shadow-sm">
                  {cat.title}
                </h3>
                <span className="text-gray-700 text-xs sm:text-sm font-medium">
                  {cat.products}
                </span>
              </div>

              {/* Bottom button */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <button className="w-full bg-black text-white text-xs sm:text-sm font-medium py-2 sm:py-3 rounded-lg sm:rounded-xl md:rounded-2xl shadow-inner shadow-black/40 tracking-wide hover:translate-y-[-2px] active:translate-y-0 transition">
                  <Shuffle
                    text="Shop Now"
                    shuffleDirection="right"
                    duration={0.35}
                    animationMode="evenodd"
                    shuffleTimes={1}
                    ease="power3.out"
                    stagger={0.03}
                    threshold={0.1}
                    triggerOnce
                    triggerOnHover
                    respectReducedMotion
                    className="inline-block"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="relative flex justify-center mt-16">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-64 h-20 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35),rgba(59,130,246,0)_70%)] blur-2xl opacity-60" />
          </div>
          <button className="relative rounded-xl md:rounded-2xl bg-black text-white px-6 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm font-medium tracking-wide hover:shadow-lg hover:shadow-black/30 transition">
            <Shuffle
              text="View All Categories"
              shuffleDirection="right"
              duration={0.4}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.025}
              threshold={0.15}
              triggerOnce
              triggerOnHover
              respectReducedMotion
              className="inline-block"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
