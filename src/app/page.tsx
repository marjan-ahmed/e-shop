"use client";

import React from "react";
import Hero from "../components/Hero";
import CategoriesGrid from "../components/CategoriesGrid";
import PopularProducts from "../components/PopularProducts";
import TrendingProducts from "../components/TrendingProducts";
import StackedShowcase from "../components/StackedShowcase";
import Testimonials from "../components/Testimonials";
import SiteFooter from "../components/SiteFooter";
import { Navbar1 } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-50 font-sans text-gray-700">
      <div className="max-w-7xl mx-auto mt-10 space-y-20">
        <Hero />
        <CategoriesGrid />
        <PopularProducts />
        <TrendingProducts />
        <StackedShowcase />
        <Testimonials />
      </div>
    </div>
  );
}
