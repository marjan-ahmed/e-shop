"use client";

import { useEffect, useState, useRef } from "react";
import { useStore } from "@/context/StoreContext";
import {
  Book,
  Menu,
  Sunset,
  Trees,
  Zap,
  ShoppingCart,
  Heart,
  User,
  Search,
  X,
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/images/kaliz_logo.png",
    alt: "logo",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "Shop",
      url: "/",
      items: [
        {
          title: "Electronics",
          description: "Phones, laptops, accessories & more",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/category/electronics",
        },
        {
          title: "Fashion",
          description: "Men, women & kids clothing",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/category/fashion",
        },
        {
          title: "Beauty",
          description: "Skincare, cosmetics & personal care",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/category/beauty",
        },
        {
          title: "Home & Living",
          description: "Furniture, kitchen & home essentials",
          icon: <Book className="size-5 shrink-0" />,
          url: "/category/home-living",
        },
      ],
    },
    {
      title: "Deals",
      url: "/deals",
      items: [
        {
          title: "Today’s Deals",
          description: "Limited-time discounts you don’t want to miss",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/deals/today",
        },
        {
          title: "Clearance Sale",
          description: "Last chance products at huge discounts",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/deals/clearance",
        },
      ],
    },
    { title: "New Arrivals", url: "/new-arrivals" },
    { title: "Best Sellers", url: "/best-sellers" },
    { title: "Contact Us", url: "/contact" },
  ],
  auth = {
    login: { title: "Login", url: "/login" },
    signup: { title: "Sign Up", url: "/signup" },
  },
}: Navbar1Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const mainSearchRef = useRef<HTMLInputElement | null>(null);
  const mobileSearchRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ctrl/Cmd + K → search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const isModifier = e.ctrlKey || e.metaKey;
      if (!isModifier) return;
      if (e.key.toLowerCase() === "k") {
        e.preventDefault();
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
          setMobileSearchOpen(true);
          requestAnimationFrame(() => {
            setTimeout(() => mobileSearchRef.current?.focus(), 60);
          });
        } else {
          mainSearchRef.current?.focus();
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const store = (() => {
    try {
      return useStore();
    } catch (e) {
      return null;
    }
  })();

  return (
    <header data-scrolled={scrolled}>
      {/* TOP BAR */}
      <div className="hidden lg:block border-b border-neutral-200 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center text-xs font-medium text-neutral-700">
          <div className="flex items-center gap-6 flex-1">
            <span className="hidden xl:inline-flex items-center gap-1.5 text-[#652D90] font-semibold">
              <Zap className="size-3.5" /> Free shipping over {formatCurrency(99)}
            </span>
            <span className="inline-flex items-center gap-1">
              <Sunset className="size-3.5" /> 24/7 Support
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="h-7 px-3 hidden xl:inline-flex"
              >
                <a href={auth.login.url}>{auth.login.title}</a>
              </Button>
              <Button asChild size="sm" className="h-7 px-3 hidden xl:inline-flex">
                <a href={auth.signup.url}>{auth.signup.title}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div
        className={`sticky top-0 z-50 transition-all duration-300 border-b border-neutral-200 ${
          scrolled
            ? "shadow-sm bg-[#652D90]/90 backdrop-blur text-white"
            : "bg-[#652D90] text-white"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-6 flex items-center gap-4 min-h-[70px]">
          {/* Logo + Menu */}
          <div className="flex items-center gap-6 flex-shrink-0">
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-8 rounded-md" alt={logo.alt} />
            </a>
            <div className="hidden xl:flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Search (desktop) */}
          <div className="hidden md:flex flex-1 min-w-[260px]">
            <SearchBar innerRef={mainSearchRef} />
          </div>

          {/* Right icons */}
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <IconLink href="/cart" label="Cart" badge={store ? store.cartCount : 0}>
              <ShoppingCart className="size-5" />
            </IconLink>
            <IconLink
              href="/wishlist"
              label="Wishlist"
              badge={store ? store.favorites.length : 0}
            >
              <Heart className="size-5" />
            </IconLink>
            <IconLink href="/profile" label="Account">
              <User className="size-5" />
            </IconLink>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 ml-auto md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search"
              onClick={() => setMobileSearchOpen((o) => !o)}
            >
              {mobileSearchOpen ? <X className="size-5" /> : <Search className="size-5" />}
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="max-h-8" alt={logo.alt} />
                      <span className="text-lg font-bold">{logo.title}</span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="flex gap-3 pt-2">
                    <Button asChild variant="outline" className="flex-1">
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button asChild className="flex-1">
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <IconLink href="/cart" label="Cart" badge={store ? store.cartCount : 0}>
                      <ShoppingCart className="size-5" />
                    </IconLink>
                    <IconLink
                      href="/wishlist"
                      label="Wishlist"
                      badge={store ? store.favorites.length : 0}
                    >
                      <Heart className="size-5" />
                    </IconLink>
                    <IconLink href="/profile" label="Account">
                      <User className="size-5" />
                    </IconLink>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile expanding search */}
        <div
          className={`md:hidden px-4 pb-3 transition-[height,opacity] duration-300 overflow-hidden ${
            mobileSearchOpen ? "h-16 opacity-100" : "h-0 opacity-0"
          }`}
        >
          <SearchBar autoFocus innerRef={mobileSearchRef} />
        </div>
      </div>
    </header>
  );
};

// Reusable Icon Link
const IconLink = ({
  href,
  label,
  badge,
  children,
}: {
  href: string;
  label: string;
  badge?: number;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    aria-label={label}
    className="relative p-2 rounded-full text-white hover:bg-[#7d41a5] transition"
  >
    {children}
    {badge != null && badge > 0 && (
      <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full bg-[#652D90] text-white text-[10px] font-semibold shadow ring-2 ring-white">
        {badge}
      </span>
    )}
  </a>
);

// Search Bar
interface SearchBarProps {
  compact?: boolean;
  autoFocus?: boolean;
  innerRef?: React.RefObject<HTMLInputElement | null>;
}
const SearchBar = ({ compact = false, autoFocus = false, innerRef }: SearchBarProps) => {
  return (
    <div className={`w-full group relative ${compact ? "" : "max-w-xl"}`}>
      <div className="relative flex items-center h-11 rounded-full border border-neutral-200 bg-neutral-50/80 backdrop-blur px-4 shadow-sm focus-within:border-[#652D90] transition">
        <Search className="size-4 text-neutral-400" />
        <input
          type="text"
          placeholder="Search products, brands, categories..."
          autoFocus={autoFocus}
          ref={innerRef as any}
          className="bg-transparent flex-1 px-3 text-sm focus:outline-none placeholder:text-neutral-400 text-neutral-700"
          aria-label="Search products"
        />
        <kbd className="hidden md:inline-block text-[10px] font-medium px-1.5 py-0.5 rounded bg-neutral-200/70 text-neutral-600">
          CTRL + K
        </kbd>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-full ring-0 group-focus-within:ring-4 ring-[#652D90]/20 transition" />
    </div>
  );
};

// Menu Items
const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
<NavigationMenuContent className="bg-white p-2 text-black shadow-lg rounded-md">
  {item.items.map((subItem) => (
    <NavigationMenuLink asChild key={subItem.title} className="w-80">
      <SubMenuLink item={subItem} />
    </NavigationMenuLink>
  ))}
</NavigationMenuContent>

      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-[#7d41a5] transition-colors"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      className="flex min-w-80 select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none text-black hover:bg-neutral-100 transition"
      href={item.url}
    >
      <div className="text-[#652D90]">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-neutral-500">{item.description}</p>
        )}
      </div>
    </Link>
  )
}


export { Navbar1 };
