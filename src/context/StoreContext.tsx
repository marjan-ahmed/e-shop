"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';
import type { SiteProduct } from '@/lib/products';

type CartItem = { product: SiteProduct; qty: number };

interface StoreShape {
  cart: CartItem[];
  favorites: SiteProduct[];
  addToCart: (product: SiteProduct, qty?: number) => void;
  removeFromCart: (productId: string) => void;
  cartCount: number;
  addToFavorites: (product: SiteProduct) => void;
  removeFromFavorites: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  clearCart: () => void;
}

const StoreContext = createContext<StoreShape | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem('eshop_cart');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [favorites, setFavorites] = useState<SiteProduct[]>(() => {
    try {
      const raw = localStorage.getItem('eshop_fav');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('eshop_cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('eshop_fav', JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  const addToCart = (product: SiteProduct, qty = 1) => {
    setCart(prev => {
      const idx = prev.findIndex(i => i.product.id === product.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return copy;
      }
      return [...prev, { product, qty }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(i => i.product.id !== productId));
  };

  const cartCount = cart.reduce((s, it) => s + it.qty, 0);

  const addToFavorites = (product: SiteProduct) => {
    setFavorites(prev => {
      if (prev.find(p => p.id === product.id)) return prev;
      return [product, ...prev];
    });
  };

  const removeFromFavorites = (productId: string) => {
    setFavorites(prev => prev.filter(p => p.id !== productId));
  };

  const isFavorite = (productId: string) => favorites.some(p => p.id === productId);

  const clearCart = () => setCart([]);

  return (
    <StoreContext.Provider value={{ cart, favorites, addToCart, removeFromCart, cartCount, addToFavorites, removeFromFavorites, isFavorite, clearCart }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const c = useContext(StoreContext);
  if (!c) throw new Error('useStore must be used inside StoreProvider');
  return c;
};
