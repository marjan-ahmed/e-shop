import Image from "next/image";
import React from "react";
import { IMAGES } from "../lib/images";
import Link from "next/link";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-500 text-white px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-24 flex flex-col md:flex-row items-center gap-10 shadow-lg">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.heroBg}
          alt="Shopping background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 via-indigo-700/40 to-blue-600/60 mix-blend-multiply" />
      </div>

      {/* Left Content */}
      <div className="relative z-10 max-w-xl text-center md:text-left">
        <span className="inline-block mb-4 text-[10px] sm:text-xs tracking-wider font-semibold bg-white/15 backdrop-blur px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30">
          TRENDING NOW
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Discover Your Next <br className="hidden md:block" />{" "}
          <span className="text-yellow-300">Favorite</span> Finds
        </h1>
        <p className="text-white/85 mb-8 text-base sm:text-lg leading-relaxed">
          Explore curated beauty essentials and cutting-edge electronics
          designed to elevate your daily life.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-4">
          <Link href={'/shop'}>
          <button className="bg-white text-indigo-700 font-semibold px-5 sm:px-6 py-3 rounded-full shadow hover:shadow-md transition flex items-center gap-2 text-sm md:text-base">
            Shop Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
          </Link>
          <button className="bg-indigo-500/30 backdrop-blur border border-white/30 hover:bg-indigo-500/40 text-white font-medium px-5 sm:px-6 py-3 rounded-full text-sm md:text-base transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative z-10 flex-1 flex items-center justify-center mt-8 md:mt-0">
        <div className="relative">
          <Image
            src={IMAGES.heroProduct}
            alt="Hero Product"
            width={420}
            height={420}
            className="rounded-full object-cover w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 shadow-2xl ring-8 ring-white/10"
          />
          <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white text-indigo-700 rounded-full px-6 sm:px-8 py-4 sm:py-6 shadow-xl flex flex-col items-center justify-center">
            <span className="text-2xl sm:text-3xl font-extrabold leading-none">
              50%
            </span>
            <span className="text-xs sm:text-sm font-semibold mt-1">OFF</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
