# Seongbuk-gu University Student Beauty Salon Reservation Service

## Overview

This is a beauty salon reservation platform specifically designed for university students in the Seongbuk-gu district of Seoul, South Korea. The application allows students to easily book appointments at beauty salons that offer student discounts. The platform features a modern, form-centric design with a public-facing booking interface and an administrative dashboard for managing reservations.

The service targets university students from institutions like Korea University and Sungshin Women's University, providing them with an accessible way to find and book beauty services at discounted prices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query (React Query) for server state management and data fetching
- React Hook Form with Zod for form validation

**UI Framework:**
- shadcn/ui component library with Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Custom color palette centered around purple (260° hue) for professional yet approachable branding
- Full support for both light and dark modes
- Korean typography using 'Noto Sans KR' font family

**Design Philosophy:**
- Form-centric design inspired by modern booking platforms
- Mobile-first responsive approach
- Emphasis on clarity, trust, and ease of use
- Clean, professional aesthetic balanced with youthful energy

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- Custom middleware for request logging and error handling
- Session-based authentication (infrastructure in place but simplified for admin access)

**API Design:**
- RESTful endpoints under `/api` prefix
- Multipart form data support for file uploads (student ID photos)
- JSON responses with appropriate HTTP status codes

**Key Endpoints:**
- `POST /api/reservations` - Create new reservation with optional photo upload
- `GET /api/reservations` - Retrieve all reservations (admin only)

### Data Storage

**Database:**
- PostgreSQL via Neon serverless database
- Drizzle ORM for type-safe database interactions
- Connection pooling for optimal performance

**Schema Design:**

Two main tables:

1. **Users Table** - For administrative access
   - UUID primary keys
   - Username/password authentication (simplified)

2. **Reservations Table** - Core business entity
   - Stores student information (name, phone, school, student ID, email)
   - Appointment details (date, time)
   - Service preferences (location, price range, service type)
   - Optional fields (additional notes, photo URL)
   - Automatic timestamp tracking

**File Storage:**
- Local file system storage in `public/uploads/` directory
- Multer middleware for handling multipart uploads
- 5MB file size limit for student ID photos
- Unique filename generation to prevent collisions

### Authentication & Authorization

**Current Implementation:**
- Simplified admin authentication with hardcoded credentials (username: "admin", password: "1234")
- Client-side session state management
- No password hashing (suitable for development/prototype)

**Design Note:**
This simplified authentication is intentional for the current scope. The architecture supports expansion to a full authentication system with proper password hashing, session management, and role-based access control.

### Application Routing

**Public Routes:**
- `/` - Home page with hero section, benefits, how-it-works guide, and reservation form
- `/admin` - Admin login and dashboard (protected by client-side state)

**Route Structure:**
- Wouter provides lightweight client-side routing
- 404 handler for unmatched routes

### Key Features

**User-Facing:**
- Multi-step reservation form with validation
- Location selection from Seongbuk-gu districts
- Price range filtering (₩10,000 - ₩40,000+)
- Service type specification
- Optional student ID photo upload
- Real-time form validation with error messages
- Toast notifications for submission feedback

**Administrative:**
- Login interface with minimal authentication
- Dashboard displaying all reservations
- Responsive table view (desktop) and card view (mobile)
- Real-time updates via polling (3-second intervals)
- Logout functionality

## External Dependencies

### Core Infrastructure

- **Neon Database** - Serverless PostgreSQL hosting
  - Connection via `@neondatabase/serverless` package
  - WebSocket support for real-time connections
  - Environment variable: `DATABASE_URL`

### Development Tools

- **Replit Platform** - Development environment integration
  - Custom Vite plugins for error overlay and development banner
  - Cartographer plugin for code navigation
  - Runtime error modal for better debugging

### UI Component Libraries

- **Radix UI** - Comprehensive set of accessible, unstyled component primitives
  - Dialog, Dropdown, Popover, Select, and 20+ other components
  - Full keyboard navigation and ARIA support

- **shadcn/ui** - Pre-styled components built on Radix UI
  - Customized with project-specific design tokens
  - Components live in `client/src/components/ui/`

### Utility Libraries

- **date-fns** - Date manipulation and formatting
- **clsx & tailwind-merge** - Conditional CSS class composition
- **class-variance-authority** - Type-safe variant styling
- **lucide-react** - Icon library with consistent design

### Build & Development

- **Vite** - Fast development server and optimized production builds
- **esbuild** - Fast TypeScript/JavaScript bundling for server code
- **PostCSS** - CSS processing with Tailwind and Autoprefixer
- **tsx** - TypeScript execution for development server

### Form Handling

- **React Hook Form** - Performant form state management
- **Zod** - Runtime type validation and schema definition
- **@hookform/resolvers** - Integration between React Hook Form and Zod
- **drizzle-zod** - Generate Zod schemas from Drizzle database schemas

### File Upload

- **Multer** - Express middleware for multipart/form-data
- Local file system storage (no external cloud storage)

### Korean Language Support

- Google Fonts integration for 'Noto Sans KR' and 'Inter' font families
- Full Korean language UI text
- Optimized for Korean character rendering