export type CategorySlug =
  | "airpods-earbuds"
  | "smart-watches"
  | "power-banks"
  | "fast-chargers"
  | "usb-cables"
  | "bluetooth-speakers"
  | "gaming-accessories"
  | "mobile-accessories"
  | "car-accessories";

export interface Category {
  id: string;
  name: string;
  slug: CategorySlug;
  description: string;
  image: string;
  productCount: number;
}

export interface ProductReview {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  salePrice?: number;
  rating: number;
  reviewsCount: number;
  category: CategorySlug;
  images: string[];
  stock: number;
  features: string[];
  specifications: Record<string, string>;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  isFlashSale?: boolean;
  reviews?: ProductReview[];
  sku: string;
  brand: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  comment: string;
  avatar: string;
  product: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Order {
  id: string;
  date: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  items: CartItem[];
  total: number;
  shippingAddress: string;
  paymentMethod: "cod" | "card";
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  paymentMethod: "cod" | "card";
  notes?: string;
}

export interface ProductFilters {
  search: string;
  category: CategorySlug | "all";
  minPrice: number;
  maxPrice: number;
  sortBy: "featured" | "price-asc" | "price-desc" | "rating" | "newest";
  page: number;
}

export type SortOption = ProductFilters["sortBy"];
