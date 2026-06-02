# PakTech — Premium Tech Accessories Store

Pakistan's premier e-commerce platform for premium tech accessories. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features

- **34 Products** across 9 categories with realistic mock data
- **Full E-commerce Flow** — Browse, Cart, Checkout with COD
- **Zustand State Management** with Local Storage persistence
- **Dark Mode** support via next-themes
- **Responsive Design** — Mobile-first, fully responsive
- **SEO Optimized** — Metadata, OpenGraph, JSON-LD, Sitemap, Robots.txt
- **Pakistan Specific** — PKR currency, COD, WhatsApp ordering, nationwide shipping
- **Premium UI** — Framer Motion animations, Shadcn-style components

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Shadcn/UI (Radix UI)
- Framer Motion
- Zustand
- React Hook Form + Zod
- Lucide Icons

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
paktech/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── ui/           # Shadcn UI components
│   ├── layout/       # Navbar, Footer, Menus
│   ├── product/      # Product cards, grid, filters
│   ├── cart/         # Cart & wishlist drawers
│   ├── home/         # Homepage sections
│   └── shared/       # Shared utilities
├── data/             # Mock product & content data
├── hooks/            # Custom React hooks
├── store/            # Zustand stores
├── types/            # TypeScript types
├── lib/              # Utilities, constants, SEO
└── styles/           # Global CSS
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, featured products, categories, flash sale |
| Shop | `/shop` | Product grid with search, filters, sorting |
| Product | `/product/[slug]` | Product details, gallery, reviews |
| Cart | `/cart` | Shopping cart with coupon support |
| Checkout | `/checkout` | Billing, shipping, COD checkout |
| Account | `/account` | Login, register, orders, wishlist |
| About | `/about` | Brand story, team, statistics |
| Contact | `/contact` | Contact form, WhatsApp, map |

## Coupon Codes

- `PAKTECH10` — 10% off
- `WELCOME15` — 15% off
- `FLASH20` — 20% off

## License

MIT
