'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { IMAGES } from '@/lib/images';
import Link from 'next/link';
import { formatCurrency } from '@/lib/utils';

interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}

// Sample products (up to 10 for now)
const products: Product[] = [
  { id: 'p1', title: 'Smart Beauty Mirror', category: 'Beauty', price: 199, rating: 4.8, image: IMAGES.products.serum },
  { id: 'p2', title: 'Noise-Cancelling Headphones', category: 'Electronics', price: 249, rating: 4.7, image: IMAGES.products.headphones },
  { id: 'p3', title: 'AI-Powered Skincare Device', category: 'Beauty', price: 299, rating: 4.9, image: IMAGES.products.cream },
  { id: 'p4', title: 'Wireless Charging Pad', category: 'Electronics', price: 39, rating: 4.6, image: IMAGES.products.phone },
  { id: 'p5', title: 'Ultra-Thin Laptop', category: 'Electronics', price: 899, rating: 4.5, image: IMAGES.products.laptop },
  { id: 'p6', title: 'Smartwatch Pro', category: 'Electronics', price: 299, rating: 4.5, image: IMAGES.products.watch },
  { id: 'p7', title: 'Luxury Bag', category: 'Fashion', price: 149, rating: 4.3, image: IMAGES.products.bag },
  { id: 'p8', title: 'Perfume', category: 'Beauty', price: 79, rating: 4.7, image: IMAGES.products.perfume },
  { id: 'p9', title: 'Lipstick', category: 'Beauty', price: 25, rating: 4.5, image: IMAGES.products.lipstick },
  { id: 'p10', title: 'Tablet', category: 'Electronics', price: 499, rating: 4.7, image: IMAGES.products.tablet },
];

const ShopPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const priceOptions = [50, 100, 300, 500, 1000];
  const categories = Array.from(new Set(products.map((p) => p.category)));

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = selectedPrice ? p.price <= selectedPrice : true;
    const matchesCategory = selectedCategories.length ? selectedCategories.includes(p.category) : true;
    return matchesSearch && matchesPrice && matchesCategory;
  });

  return (
<section className="px-4 sm:px-6 md:px-10 mt-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Shop Our Products</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-md text-sm font-semibold ${viewMode === 'grid' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 rounded-md text-sm font-semibold ${viewMode === 'list' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
          >
            List
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-1/4 bg-white p-6 rounded-2xl shadow space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Search</h2>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Filter by Price</h2>
            {priceOptions.map((price) => (
        <label key={price} className="flex items-center gap-2 text-gray-700 mb-1 cursor-pointer">
                <input
                  type="radio"
                  name="price"
                  checked={selectedPrice === price}
                  onChange={() => setSelectedPrice(price)}
                  className="accent-indigo-600"
                />
          <span>Up to {formatCurrency(price)}</span>
              </label>
            ))}
            <button onClick={() => setSelectedPrice(null)} className="text-indigo-600 text-sm mt-2 hover:underline">
              Clear
            </button>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Filter by Category</h2>
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-2 text-gray-700 mb-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="accent-indigo-600"
                />
                <span>{category}</span>
              </label>
            ))}
            <button onClick={() => setSelectedCategories([])} className="text-indigo-600 text-sm mt-2 hover:underline">
              Clear
            </button>
          </div>
        </aside>

        {/* Products */}
<main className={`w-full ${viewMode === 'grid' ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3' : 'flex flex-col gap-4'}`}>
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex flex-col">
              <Link href={`/products/${product.id}`} className="relative h-60 w-full rounded-2xl overflow-hidden shadow-sm block">
                <Image src={product.image} alt={product.title} fill className="object-cover rounded-2xl" />
              </Link>

              {/* Info below image */}
              <div className="mt-2 flex flex-col gap-1">
                <Link href={`/products/${product.id}`} className="text-gray-800 font-semibold hover:underline">{product.title}</Link>
                <p className="text-indigo-600 font-bold">{formatCurrency(product.price)}</p>
                <p className="text-yellow-500 text-sm">Rating: {product.rating}</p>

                {viewMode === 'list' && (
                  <div className="flex gap-2 mt-1">
                    <button className="flex-1 bg-indigo-600 text-white py-1 rounded text-sm hover:bg-indigo-700 transition">Add to Cart</button>
                    <button className="flex-1 bg-gray-100 text-gray-800 py-1 rounded text-sm hover:bg-gray-200 transition">Buy Now</button>
                  </div>
                )}

                {viewMode === 'grid' && (
                  <button className="mt-2 bg-indigo-600 text-white py-1 rounded text-sm hover:bg-indigo-700 transition">
                    Buy Now
                  </button>
                )}
              </div>
            </div>
          ))}

          {filteredProducts.length === 0 && (
            <p className="text-gray-500 col-span-full text-center">No products found.</p>
          )}
        </main>
      </div>
    </section>
  );
};

export default ShopPage;