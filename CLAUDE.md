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

#### Component Organization & Structure
- `src/components/ui/` - Pre-built shadcn/ui components (40+ available, READ-ONLY)
- `src/components/common/` - Reusable components (20-100 lines each)
- `src/components/forms/` - Form-specific components
- `src/components/features/` - Feature-specific components
- `src/pages/` - Route-level page components
- `src/hooks/` - Custom React hooks including `use-mobile.tsx` and `use-toast.ts`
- `src/lib/utils.ts` - Utility functions with Tailwind class merging via `cn()` function
- `src/lib/types.ts` - Shared TypeScript types and interfaces
- `src/lib/constants.ts` - Application constants
- `src/lib/validations/` - Zod validation schemas

#### Critical Architecture Rules
- **Component Size Limit**: Never exceed 300 lines per component
- **Composition Over Complexity**: Build complex UI from smaller, focused components
- **Single Responsibility**: Each component should have one clear purpose
- **Extract Reusable Logic**: Use custom hooks instead of duplicating code
- **Service Layer Pattern**: No inline API calls in components - use service layer in `src/lib/`

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

This project uses a sophisticated design system based on comprehensive instructions in `.github/instructions/` and `.cursor/rules/`. Key principles:

#### shadcn/ui Components
Over 40 pre-built components available in `src/components/ui/`:
- **Layout**: `card`, `separator`, `sheet`, `sidebar`, `tabs`, `accordion`
- **Forms**: `button`, `input`, `form`, `select`, `checkbox`, `radio-group`
- **Overlays**: `dialog`, `alert-dialog`, `drawer`, `popover`, `tooltip`
- **Data Display**: `table`, `badge`, `avatar`, `chart`, `carousel`

#### Styling Conventions & Quality Standards
- Use Tailwind classes following the project's design system
- Generous spacing: `py-16 lg:py-24` for sections
- Consistent rhythm: `space-y-4 lg:space-y-6` for content
- Mobile-first responsive design approach
- Premium, sophisticated visual hierarchy with purposeful color psychology
- **Accessibility**: Maintain WCAG 2.1 AA contrast ratios (4.5:1 minimum)
- **Never ship** without running `npm run lint` - must pass without errors
- **Industry-specific designs**: Adapt visual identity, emotional tone, and color psychology to target audience
- **Design Philosophy**: Create unique, custom-crafted interfaces that feel premium and engaging
- **Color Strategy**: Use colors intentionally to evoke the right emotions and enhance user experience

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

### Development Patterns & Best Practices

#### Code Organization
- Use TypeScript interfaces for type safety - define shared types in `src/lib/types.ts`
- Implement responsive design mobile-first
- Follow React Hook Form patterns with Zod validation for forms
- Use TanStack Query for API state management
- Import UI components from `@/components/ui/`
- Use the toast system via `use-toast` hook for notifications

#### Cursor Rules Integration
This project includes comprehensive Cursor rules in `.cursor/rules/` that auto-apply based on file context:
- **Core Rules** (`core.mdc`) - Always active architecture and quality rules
- **Component Rules** (`components.mdc`) - Auto-loads when editing `src/components/**`
- **Design Rules** (`design.mdc`) - Auto-loads when editing UI/styling files
- **Form Rules** (`forms.mdc`) - Auto-loads when editing form components
- **Hook Rules** (`hooks.mdc`) - Auto-loads when editing `src/hooks/**`
- **Service Rules** (`services.mdc`) - Auto-loads when editing `src/lib/**`

Reference with `@rule-name` in prompts (e.g., `@quality` for quality checklist)