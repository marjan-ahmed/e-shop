export type SiteProduct = {
  id: string;
  title: string;
  desc: string;
  shortDesc?: string;
  longDesc?: string;
  images: string[];
  price: number;
  oldPrice?: number;
  rating?: number;
  category?: string;
};

export const PRODUCTS: SiteProduct[] = [
  {
    id: 'serum',
    title: 'Radiant Glow Serum',
    desc: 'A lightweight vitamin-rich serum that brightens and hydrates.',
    shortDesc: 'Brightens, hydrates and visibly evens skin tone.',
    longDesc:
      'This serum combines vitamin C, hyaluronic acid and botanical extracts to deliver antioxidant protection and deep hydration. Use daily after cleansing. Suitable for most skin types; patch test recommended.',
    images: [
      'https://images.unsplash.com/photo-1601040123670-30ea36b18037?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1576675782174-1b2b1d2e4f2a?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1618354697775-4b3b7e4c1f6b?auto=format&fit=crop&w=1200&q=60'
    ],
    price: 49,
    oldPrice: 69,
    rating: 4.8,
    category: 'beauty'
  },

  {
    id: 'laptop',
    title: 'Ultra-Thin Creator Laptop',
    desc: 'Thin, powerful laptop built for creators and on-the-go professionals.',
    shortDesc: 'Lightweight, long battery life, high-refresh display.',
    longDesc:
      'Featuring the latest multi-core processor, fast NVMe storage and a color-accurate display. Ports include 2x USB-C (Thunderbolt), HDMI and SD card reader. Up to 14 hours battery life in mixed usage.',
    images: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1506152983151-009c3f1d1a7d?auto=format&fit=crop&w=1200&q=60'
    ],
    price: 1299,
    rating: 4.9,
    category: 'electronics'
  },

  {
    id: 'headphones',
    title: 'Noise-Cancelling Headphones',
    desc: 'Over-ear headphones with adaptive active noise cancellation and long battery life.',
    shortDesc: 'Deep bass, ANC and 30hr battery.',
    longDesc:
      'Engineered drivers and adaptive noise cancellation deliver studio-like clarity. Comfortable memory-foam earcups, 30-hour battery life, and fast-charge support. Includes carry case and detachable cable.',
    images: [
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1518444023534-0a80f6f0a1ff?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1526178611988-5c1f8a8b5b8b?auto=format&fit=crop&w=1200&q=60'
    ],
    price: 249,
    rating: 4.7,
    category: 'audio'
  },

  {
    id: 'watch',
    title: 'Classic Leather Watch',
    desc: 'Minimalist analog watch with genuine leather strap.',
    shortDesc: 'Timeless design and reliable movement.',
    longDesc:
      'A refined classic with stainless steel case, scratch-resistant glass and a premium leather strap. Water resistant for daily use and fitted with a reliable quartz movement.',
    images: [
      'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1519741492809-0f12a6a0a7b1?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1580910051071-0c38da7ed8e0?auto=format&fit=crop&w=1200&q=60'
    ],
    price: 179,
    rating: 4.5,
    category: 'accessories'
  },

  {
    id: 'camera',
    title: 'Mirrorless Camera',
    desc: 'Compact mirrorless camera with interchangeable lenses and 4K video.',
    shortDesc: 'High quality photos and 4K video capture.',
    longDesc:
      'Lightweight mirrorless body with advanced autofocus, in-body stabilization and excellent low-light performance. Ideal for travel and content creators.',
    images: [
      'https://images.unsplash.com/photo-1519183071298-a2962be90b8e?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1509099836639-18ba959b59b1?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1517430816045-df4b7de01d4d?auto=format&fit=crop&w=1200&q=60'
    ],
    price: 949,
    rating: 4.6,
    category: 'camera'
  },

  {
    id: 'chair',
    title: 'Ergonomic Office Chair',
    desc: 'Comfortable office chair with lumbar support and breathable mesh.',
    shortDesc: 'Adjustable, breathable and supportive.',
    longDesc:
      'Designed for long workdays with adjustable lumbar, tilt lock and height adjustment. Breathable mesh back keeps you cool while the padded seat offers long-lasting comfort.',
    images: [
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1586864387789-628a1fe28c6a?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1582719478142-7f34e84d99d0?auto=format&fit=crop&w=1200&q=60'
    ],
    price: 199,
    rating: 4.4,
    category: 'furniture'
  },

  {
    id: 'sneakers',
    title: 'Lightweight Sneakers',
    desc: 'Breathable sneakers with responsive cushioning for everyday wear.',
    shortDesc: 'Comfortable, lightweight and stylish.',
    longDesc:
      'Durable knit upper with cushioned midsole provides all-day comfort. Flexible outsole for natural movement and traction.',
    images: [
      'https://images.unsplash.com/photo-1520975911787-7b5b32b2b2d6?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1528701800484-86a8abf7f5da?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1593032465179-0179d0c6cdb4?auto=format&fit=crop&w=1200&q=60'
    ],
    price: 89,
    rating: 4.3,
    category: 'fashion'
  },

  {
    id: 'phone',
    title: 'Flagship Smartphone',
    desc: 'Powerful smartphone with pro-grade camera and vivid display.',
    shortDesc: 'Excellent camera and battery life.',
    longDesc:
      'Large OLED display, multi-lens camera system and long battery life. Fast charging and modern connectivity make this a great all-round device.',
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1510552776732-13bbe512e6a0?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1505740106531-4243f3831fdb?auto=format&fit=crop&w=1200&q=60'
    ],
    price: 799,
    rating: 4.7,
    category: 'mobile'
  },

  {
    id: 'tablet',
    title: 'Pro Tablet',
    desc: 'High-performance tablet for creatives and media consumption.',
    shortDesc: 'Fast, vivid display and stylus support.',
    longDesc:
      'A color-accurate display, excellent speakers and stylus support make this tablet ideal for artists and content consumers. Solid battery life and fast storage options.',
    images: [
      'https://images.unsplash.com/photo-1517430816045-df4b7de01d4d?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1519183071298-a2962be90b8e?auto=format&fit=crop&w=1200&q=60'
    ],
    price: 599,
    rating: 4.6,
    category: 'tablets'
  },

  {
    id: 'perfume',
    title: 'Signature Eau de Parfum',
    desc: 'A refined unisex fragrance with warm amber and citrus notes.',
    shortDesc: 'Long-lasting fragrance with modern character.',
    longDesc:
      'Top notes of citrus and bergamot, heart notes of jasmine and spice, and a warm amber base. Well-rounded and suitable for daily wear or special occasions.',
    images: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1505740106531-4243f3831fdb?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9d9?auto=format&fit=crop&w=1200&q=60'
    ],
    price: 69,
    rating: 4.4,
    category: 'beauty'
  }
];
