# Christian Stegh Website - Replit Project Guide

## Overview

This is a professional website for Christian Stegh, a Microsoft MVP for Copilot and CTO at eGroup. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a contact form system for speaking engagement inquiries and thought leadership content.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact form submission
- **Storage**: In-memory storage (MemStorage) with interface for future database integration
- **Development**: Hot module replacement via Vite integration

### Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined in shared directory for type safety
- **Tables**: Users and contact inquiries with proper relationships
- **Validation**: Zod schemas for runtime type checking

## Key Components

### Shared Schema (`shared/schema.ts`)
- Centralized database schema definitions
- Type-safe data models for users and contact inquiries
- Zod validation schemas for API endpoints
- Shared between frontend and backend for consistency

### Storage Layer (`server/storage.ts`)
- Interface-based storage design for flexibility
- Current implementation uses in-memory storage
- Ready for database integration with existing interface
- Supports user management and contact inquiry handling

### API Endpoints (`server/routes.ts`)
- `POST /api/contact` - Submit contact inquiry with validation
- `GET /api/contact` - Retrieve all contact inquiries (admin endpoint)
- Proper error handling and validation responses

### Frontend Pages
- **Home**: Hero section with call-to-action buttons
- **About**: Professional background and expertise areas
- **Speaking**: Speaking topics and testimonials
- **Books**: Published works and publications
- **Blog**: Article listings and content
- **Contact**: Contact form with real-time validation

### UI Components
- Comprehensive shadcn/ui component library
- Consistent design system with Microsoft-inspired colors
- Responsive navigation with mobile support
- Toast notifications for user feedback

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - React Hook Form validates input using Zod schema
   - Form data submitted to `/api/contact` endpoint
   - Backend validates data using shared schema
   - Data stored in memory (currently) or database
   - Success/error response returned to frontend
   - Toast notification displayed to user

2. **Page Navigation**:
   - Client-side routing with Wouter
   - Navigation state managed by React
   - Mobile-responsive navigation menu

3. **Content Display**:
   - Static content rendered from components
   - Professional images from Unsplash
   - Responsive layouts with Tailwind CSS

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Framework**: Radix UI primitives, Tailwind CSS
- **Backend**: Express.js, TypeScript execution (tsx)
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Validation**: Zod for schema validation
- **Build Tools**: Vite, esbuild for production builds

### Development Dependencies
- **TypeScript**: Full type safety across stack
- **Replit Integration**: Runtime error overlay, cartographer
- **CSS Processing**: PostCSS, Autoprefixer

## Deployment Strategy

### Production Build
- Frontend built with Vite to `dist/public`
- Backend bundled with esbuild to `dist/index.js`
- Static assets served by Express in production
- Environment-based configuration for development/production

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Development**: `npm run dev` starts both frontend and backend
- **Production**: `npm run start` serves built application
- **Port Configuration**: Internal port 5000, external port 80
- **Auto-scaling deployment target**

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required for production)
- `NODE_ENV`: Environment mode (development/production)

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- Updated website with Christian's authentic biographical information and professional credentials
- Added featured keynotes section with specific lectures: "AI for Executive Leadership", "AI for Higher Ed Leaders", "AI for Financial Executives"  
- Integrated Amazon link for book "Elevate the Enterprise with Microsoft 365 Copilot"
- Updated contact information with correct phone (773-531-1825), email (christian.stegh@outlook.com), and Chicago location
- Modified testimonials to reflect realistic client feedback
- Featured eGroup experience and Microsoft MVP for Copilot status throughout site

## Changelog

- June 25, 2025: Initial website setup with placeholder content
- June 25, 2025: Complete content update with Christian's actual professional information