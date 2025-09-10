import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Currency helpers - format prices as Pakistani Rupees (PKR)
export function formatCurrency(value: number | string, locale = "en-PK") {
  const num = typeof value === "string" ? parseFloat(value) || 0 : value || 0;
  // Use Intl.NumberFormat for proper grouping. Prefix 'Rs' to match the site requirement.
  const formatted = new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(num);
  return `Rs ${formatted}`;
}

// Parse price strings like '$199' or '199' => number
export function parsePrice(price: string | number) {
  if (typeof price === 'number') return price;
  return parseFloat(String(price).replace(/[^0-9.\-]+/g, '')) || 0;
}