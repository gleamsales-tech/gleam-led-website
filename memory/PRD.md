# Gleam LED Website - Product Requirements Document

## Project Overview
Headless WordPress + Next.js website for Gleam LED (gleamled.com) - India's trusted partner for transparent LED displays, indoor video walls, and outdoor digital signage solutions.

## Original Problem Statement
Build a complete redesigned website with:
- Light, clean, professional design
- All existing sections from current website
- Product catalog with detailed specifications
- Image gallery/portfolio
- Contact/quote request form
- **Headless WordPress + Next.js architecture** for SEO & easy content management

## Architecture
```
┌─────────────────┐         ┌─────────────────┐
│   WordPress     │   API   │    Next.js      │
│   (Backend CMS) │ ──────► │   (Frontend)    │
│                 │         │                 │
│ • WPGraphQL     │         │ • SSR/SSG       │
│ • Content Edit  │         │ • SEO optimized │
│ • gleamled.com  │         │ • Fast loading  │
└─────────────────┘         └─────────────────┘
        │                           │
        └───────────┬───────────────┘
                    │
              ┌─────▼─────┐
              │  FastAPI  │
              │  Backend  │
              │ (Contact) │
              └─────┬─────┘
                    │
              ┌─────▼─────┐
              │  MongoDB  │
              │ (Inquiries)│
              └───────────┘
```

## Tech Stack
- **Frontend**: Next.js 14, React 18, Tailwind CSS, TypeScript
- **CMS**: WordPress with WPGraphQL plugin (https://gleamled.com/graphql)
- **Backend API**: FastAPI (Python) for contact form
- **Database**: MongoDB (storing contact inquiries)
- **Hosting**: Vercel (free tier) for Next.js

## User Personas
1. **Business Owners** - Retail stores, showrooms, malls looking for LED displays
2. **Architects/Interior Designers** - Seeking transparent LED solutions
3. **Corporate Clients** - Video walls for lobbies/meeting rooms
4. **Marketing Agencies** - Digital signage for advertising clients

## What's Been Implemented (January 2026)

### Frontend Pages (Next.js)
- **Home Page**: Hero section, features grid, product highlights, use cases, CTAs
- **Products Page**: Category tabs (Transparent, Indoor, Outdoor), product cards
- **Product Detail**: Full specs table, features, applications, related products
- **Use Cases**: Storefront, Mall, Showroom, Corporate lobby applications
- **About Us**: Company story, values, why choose us
- **Contact**: Quote request form with WhatsApp integration
- **Portfolio**: Image gallery with category filters

### Backend API (FastAPI)
- `POST /api/contact` - Submit quote request (stores in MongoDB)
- `GET /api/products` - Get all product categories
- `GET /api/use-cases` - Get application use cases

### SEO Features
- Server-side rendering (SSR) via Next.js
- Dynamic meta tags per page
- Proper semantic HTML structure
- Fast page loads

### Product Data
- **Transparent LED**: LUCID Series, INV Series
- **Indoor LED**: WP Series
- **Outdoor LED**: AP Series

## Deployment Guide

### Deploy to Vercel (Free)
1. Push code to GitHub
2. Connect Vercel to GitHub repo
3. Set environment variables:
   - `WORDPRESS_API_URL=https://gleamled.com/graphql`
   - `NEXT_PUBLIC_BACKEND_URL=<your-backend-url>`
4. Deploy

### Domain Setup
1. In Vercel, add custom domain `gleamled.com`
2. Update DNS records at your domain registrar
3. SSL/HTTPS is automatic

## Backlog / Future Enhancements
- P0: Connect dynamic content from WordPress (currently static)
- P0: Email notifications for contact form submissions
- P1: WordPress custom post types for products
- P1: Blog section from WordPress posts
- P2: Multi-language support (Hindi)
- P3: Customer testimonials from WordPress

## Next Tasks
1. Configure WordPress custom post types for products
2. Connect Next.js to fetch real WordPress content
3. Add email notification for inquiries
4. Update WhatsApp number with actual business number
5. Deploy to Vercel and connect domain

---
*Last Updated: January 2026*
*Architecture: Headless WordPress + Next.js*
