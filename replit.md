# All State Fence Website

## Overview

This is a professional fence service company website built as a modern full-stack application. The project uses React with TypeScript for the frontend, Express for the backend, and is designed to showcase fence products, collect customer inquiries, and provide information about the company's services. The application follows a component-based architecture with shadcn/ui for consistent, accessible UI components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **Technology**: React 18+ with TypeScript and Vite as the build tool
- **Rationale**: Vite provides fast development experience with hot module replacement (HMR), while React offers a mature ecosystem for building interactive UIs. TypeScript adds type safety to reduce runtime errors.
- **Component Library**: shadcn/ui (Radix UI primitives with Tailwind CSS styling)
- **Design System**: Custom implementation using the "new-york" style variant with neutral base colors

**Styling Approach**
- **Technology**: Tailwind CSS with CSS custom properties for theming
- **Design Tokens**: HSL color system with CSS variables for dynamic theming support
- **Custom Colors**: Navy blue (`--header-navy`) and gold (`--gold`) as brand colors
- **Responsive Design**: Mobile-first approach with breakpoints at 768px (tablet) and 1024px (desktop)
- **Typography**: Inter font family as the primary sans-serif typeface

**State Management**
- **Technology**: TanStack Query (React Query) v5
- **Rationale**: Handles server state synchronization, caching, and request deduplication. Configured with custom query functions that integrate with the Express backend.
- **Configuration**: Infinite stale time, no automatic refetching to minimize unnecessary requests

**Form Handling**
- **Technology**: React Hook Form with Zod validation via @hookform/resolvers
- **Rationale**: Provides performant form state management with minimal re-renders and type-safe schema validation

**Routing**
- **Implementation**: Client-side routing (specific router library not evident from files, likely React Router)
- **Structure**: Single Page Application (SPA) with fallback to 404 page for unmatched routes

### Backend Architecture

**Server Framework**
- **Technology**: Express.js with TypeScript running on Node.js
- **Runtime**: ESM (ES Modules) as indicated by `"type": "module"` in package.json
- **Development**: tsx for TypeScript execution in development, esbuild for production builds

**API Design**
- **Pattern**: RESTful API with all routes prefixed with `/api`
- **Request Logging**: Custom middleware logs API requests with method, path, status, duration, and response preview
- **Request Parsing**: JSON body parsing with raw body preservation for webhook validation
- **CORS & Credentials**: Configured to include credentials in requests

**Development vs Production**
- **Development**: Vite dev server integrated as middleware for HMR
- **Production**: Pre-built static files served from `dist/public`
- **Build Process**: Frontend built with Vite, backend bundled with esbuild targeting Node platform

**Session Management**
- **Technology**: connect-pg-simple (PostgreSQL session store)
- **Rationale**: Persistent session storage for user authentication across server restarts

### Data Storage

**Database**
- **Technology**: PostgreSQL via Neon serverless driver (`@neondatabase/serverless`)
- **ORM**: Drizzle ORM v0.39+ for type-safe database queries
- **Schema Location**: `shared/schema.ts` for code sharing between frontend and backend
- **Migration Tool**: Drizzle Kit for schema migrations (output directory: `./migrations`)

**Current Schema**
- **Users Table**: Contains id (UUID primary key), username (unique), and password fields
- **Validation**: Zod schemas generated from Drizzle tables via `drizzle-zod`

**Storage Abstraction**
- **Pattern**: Interface-based storage (`IStorage`) with in-memory implementation (`MemStorage`)
- **Rationale**: Enables easy switching between storage backends (memory for development/testing, database for production)
- **Methods**: CRUD operations for users (getUser, getUserByUsername, createUser)

### External Dependencies

**UI Component Framework**
- **Radix UI**: Comprehensive set of unstyled, accessible component primitives
  - Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu, Form controls, Navigation Menu, Popover, Select, Tabs, Toast, Tooltip, and more
  - Provides WAI-ARIA compliant accessibility out of the box

**Database Services**
- **Neon Database**: Serverless PostgreSQL provider
- **Connection**: Via `DATABASE_URL` environment variable
- **Driver**: WebSocket-based connection compatible with edge runtimes

**Development Tools**
- **Replit Plugins**: 
  - Runtime error modal overlay for better error visibility
  - Cartographer for code navigation
  - Dev banner for development environment indication
- **PostCSS**: With Tailwind CSS and Autoprefixer plugins

**Utility Libraries**
- **date-fns**: Date manipulation and formatting
- **clsx & tailwind-merge**: Conditional class name composition with Tailwind conflict resolution
- **class-variance-authority**: Type-safe variant creation for component APIs
- **nanoid**: Unique ID generation for sessions and tracking
- **lucide-react**: Icon library with React components
- **embla-carousel-react**: Carousel/slider functionality
- **cmdk**: Command palette/search interface (Command+K style)
- **vaul**: Drawer component for mobile-friendly modals

**Form & Validation**
- **Zod**: TypeScript-first schema validation
- **React Hook Form**: Performant form state management
- **@hookform/resolvers**: Bridge between React Hook Form and Zod

**Build & Bundling**
- **Vite**: Frontend build tool and dev server
- **esbuild**: Backend bundling for production (fast, minimal configuration)
- **TypeScript**: Type checking across the entire codebase