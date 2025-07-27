# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server on port 8080
- `npm run build` - Create production build
- `npm run build:dev` - Create development build
- `npm run lint` - Run ESLint linter
- `npm run preview` - Preview production build locally

### Package Management
- `npm install` - Install dependencies (or use `bun install` for faster installs)

## Architecture & Structure

### Framework Stack
- **React 18.3.1** with TypeScript for UI
- **Vite 5.4.1** as build tool with SWC for fast compilation
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS 3.4.11** for styling with custom design system
- **React Router DOM v6** for client-side routing
- **TanStack Query** for server state management
- **React Hook Form + Zod** for form handling and validation

### Key Architecture Patterns

#### Component Organization
- `src/components/ui/` - Pre-built shadcn/ui components (40+ available)
- `src/components/` - Custom application components
- `src/pages/` - Route-level page components
- `src/hooks/` - Custom React hooks including `use-mobile.tsx` and `use-toast.ts`
- `src/lib/utils.ts` - Utility functions with Tailwind class merging

#### Import Aliases (configured in vite.config.ts)
- `@/` maps to `./src/`
- `@/components` for components
- `@/lib` for utilities
- `@/hooks` for custom hooks

#### Routing Structure
Routes are defined in `src/App.tsx`. Add new routes above the catch-all `*` route:
```tsx
<Routes>
  <Route path="/" element={<Index />} />
  {/* ADD NEW ROUTES HERE */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Design System Integration

This project uses a sophisticated design system based on the global instructions in `.github/instructions/global.instructions.md`. Key principles:

#### shadcn/ui Components
Over 40 pre-built components available in `src/components/ui/`:
- **Layout**: `card`, `separator`, `sheet`, `sidebar`, `tabs`, `accordion`
- **Forms**: `button`, `input`, `form`, `select`, `checkbox`, `radio-group`
- **Overlays**: `dialog`, `alert-dialog`, `drawer`, `popover`, `tooltip`
- **Data Display**: `table`, `badge`, `avatar`, `chart`, `carousel`

#### Styling Conventions
- Use Tailwind classes following the project's design system
- Generous spacing: `py-16 lg:py-24` for sections
- Consistent rhythm: `space-y-4 lg:space-y-6` for content
- Mobile-first responsive design approach
- Premium, sophisticated visual hierarchy

### Configuration Files

- `vite.config.ts` - Vite configuration with path aliases and port 8080
- `components.json` - shadcn/ui configuration with default style and slate base color
- `tailwind.config.ts` - Tailwind configuration with dark mode support
- `tsconfig.json` - TypeScript configuration with strict mode

### Environment Variables
⚠️ **Security**: This is a client-side application. Only use `VITE_` prefixed environment variables for public configuration. Never expose sensitive data like API secrets.

### Testing & Quality
- ESLint configured with React and TypeScript rules
- No test framework currently configured - determine testing approach from codebase if tests are needed

### Common Patterns
- Use TypeScript interfaces for type safety
- Implement responsive design mobile-first
- Follow React Hook Form patterns with Zod validation for forms
- Use TanStack Query for API state management
- Import UI components from `@/components/ui/`
- Use the toast system via `use-toast` hook for notifications