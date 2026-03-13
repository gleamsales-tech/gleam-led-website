# Gleam LED Website - Product Requirements Document

## Project Overview
Redesigned website for Gleam LED (gleamled.com) - India's trusted partner for transparent LED displays, indoor video walls, and outdoor digital signage solutions.

## Original Problem Statement
Build a complete redesigned website with:
- Light, clean, professional design
- All existing sections from current website
- Product catalog with detailed specifications
- Image gallery/portfolio
- Contact/quote request form

## User Personas
1. **Business Owners** - Retail stores, showrooms, malls looking for LED displays
2. **Architects/Interior Designers** - Seeking transparent LED solutions for projects
3. **Corporate Clients** - Companies needing video walls for lobbies/meeting rooms
4. **Marketing Agencies** - Digital signage for advertising clients

## Core Requirements (Static)
- Responsive website design
- Product catalog with technical specifications
- Contact form with MongoDB storage
- WhatsApp integration
- Portfolio/gallery section
- Use cases showcase

## What's Been Implemented (January 2026)

### Backend (FastAPI)
- `/api/products` - Get all product categories
- `/api/products/{categoryId}` - Get category details
- `/api/products/{categoryId}/{seriesId}` - Get series specifications
- `/api/use-cases` - Get application use cases
- `/api/contact` - Submit quote request (stores in MongoDB)

### Frontend (React + Tailwind)
- **Home Page**: Hero section, features grid, product highlights, use cases, CTA
- **Products Page**: Category tabs (Transparent, Indoor, Outdoor), product cards
- **Product Detail**: Full specs table, features, applications, related products
- **Use Cases**: Storefront, Mall, Showroom, Corporate lobby applications
- **About Us**: Company story, values, why choose us
- **Contact**: Quote request form with WhatsApp integration
- **Portfolio**: Image gallery with category filters

### Product Data
- **Transparent LED**: LUCID Series, INV Series
- **Indoor LED**: WP Series, IEC Series
- **Outdoor LED**: AP Series, Diamond Series

## Tech Stack
- Frontend: React 19, Tailwind CSS, Lucide Icons
- Backend: FastAPI, Motor (async MongoDB)
- Database: MongoDB
- Fonts: Manrope (headings), Inter (body)

## Backlog / Future Enhancements
- P0: Email notifications for contact form submissions
- P1: Admin dashboard to manage inquiries
- P1: Blog/News section
- P2: Live chat integration
- P2: Multi-language support (Hindi)
- P3: Customer testimonials section
- P3: Project calculator/estimator tool

## Next Tasks
1. Add email notification for new inquiries (SendGrid/Resend)
2. Add real product images from client
3. Update WhatsApp number with actual business number
4. SEO optimization

---
*Last Updated: January 2026*
