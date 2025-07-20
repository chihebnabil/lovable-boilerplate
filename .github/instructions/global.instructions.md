---
applyTo: '**'
---
# React + Vite + shadcn/ui Template

## AI System Prompt

This is a React TypeScript project built with Vite, using shadcn/ui components and Tailwind CSS. Below is comprehensive information for AI assistants to understand and work with this project effectively, with emphasis on creating modern, visually compelling designs.

### Project Overview
- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.1
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS with custom theme
- **Routing**: React Router DOM v6
- **State Management**: TanStack Query (React Query)
- **Form Handling**: React Hook Form with Zod validation
- **Package Manager**: npm

### Project Structure
```
/workspaces/greeting-blank-canvas/
├── src/
│   ├── components/ui/        # shadcn/ui components (pre-built)
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── pages/               # Route components
│   │   ├── Index.tsx        # Home page (/)
│   │   └── NotFound.tsx     # 404 page (*)
│   ├── App.tsx              # Main app component with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind configuration
├── components.json          # shadcn/ui configuration
└── tsconfig.json            # TypeScript configuration
```

### Key Configuration Files

#### Vite Configuration (`vite.config.ts`)
- Path alias: `@` maps to `./src`
- Server runs on port 8080
- Uses SWC for React compilation
- Includes lovable-tagger for development

#### Tailwind Configuration (`tailwind.config.ts`)
- Dark mode support via class strategy
- Custom theme with CSS variables
- Responsive design utilities
- Animation support

### Routing Structure

Routes are defined in `src/App.tsx`:
```tsx
<Routes>
  <Route path="/" element={<Index />} />
  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

**Important**: Always add new routes ABOVE the catch-all `*` route to ensure proper routing.

### Available UI Components

Located in `src/components/ui/`, all components are pre-configured with shadcn/ui:
- **Layout**: accordion, card, separator, sheet, sidebar, tabs
- **Forms**: button, input, textarea, select, checkbox, radio-group, switch, form
- **Navigation**: breadcrumb, command, dropdown-menu, menubar, navigation-menu, pagination
- **Feedback**: alert, alert-dialog, toast, sonner, progress, skeleton
- **Data Display**: avatar, badge, table, calendar, chart, carousel
- **Overlays**: dialog, drawer, hover-card, popover, tooltip
- **Utilities**: aspect-ratio, collapsible, resizable, scroll-area, slider, toggle

### Development Commands

```bash
npm run dev          # Start development server (port 8080)
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

### Key Dependencies

**Core Libraries**:
- React + React DOM (18.3.1)
- React Router DOM (6.26.2)
- TanStack React Query (5.56.2)
- React Hook Form (7.53.0) + Zod (3.23.8)

**UI & Styling**:
- Tailwind CSS (3.4.11)
- Radix UI primitives (@radix-ui/*)
- Lucide React icons (0.462.0)
- Class Variance Authority (CVA)
- clsx for conditional classes

**Utilities**:
- date-fns for date manipulation
- cmdk for command palette
- next-themes for theme switching

## Modern Design Guidelines

### Design Philosophy
Create interfaces that feel **premium, contemporary, and engaging**. Avoid generic, template-like appearances by focusing on:
- **Visual hierarchy** through strategic use of contrast and spacing
- **Micro-interactions** that delight users
- **Sophisticated color combinations** that create emotional resonance
- **Generous whitespace** for breathing room
- **Subtle animations** that guide attention

### Color Palette Strategy

#### Primary Brand Colors (Choose one as your main brand color)
- **Indigo**: `bg-indigo-600 hover:bg-indigo-700` - Professional, trustworthy
- **Violet**: `bg-violet-600 hover:bg-violet-700` - Creative, innovative  
- **Blue**: `bg-blue-600 hover:bg-blue-700` - Reliable, corporate
- **Emerald**: `bg-emerald-600 hover:bg-emerald-700` - Growth, success
- **Rose**: `bg-rose-600 hover:bg-rose-700` - Warm, personal
- **Amber**: `bg-amber-600 hover:bg-amber-700` - Energetic, attention-grabbing

#### Supporting Colors for Accents & States
- **Success**: `text-emerald-600 bg-emerald-50 border-emerald-200`
- **Warning**: `text-amber-600 bg-amber-50 border-amber-200`  
- **Error**: `text-red-600 bg-red-50 border-red-200`
- **Info**: `text-blue-600 bg-blue-50 border-blue-200`

#### Neutral Palette (for backgrounds and text)
- **Dark Mode**: `bg-slate-900 text-slate-100` (main), `bg-slate-800` (cards), `bg-slate-700` (hover)
- **Light Mode**: `bg-slate-50 text-slate-900` (main), `bg-white` (cards), `bg-slate-100` (hover)
- **Subtle Borders**: `border-slate-200` (light), `border-slate-700` (dark)

### Layout & Spacing Principles

#### Container Patterns
```tsx
// Full-width hero sections
<section className="min-h-screen bg-gradient-to-br from-indigo-900 via-violet-900 to-purple-900">

// Content containers  
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// Card layouts with depth
<div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
```

#### Spacing Hierarchy
- **Sections**: `py-16 lg:py-24` (large vertical spacing)
- **Components**: `p-6 lg:p-8` (comfortable internal padding)  
- **Elements**: `space-y-4 lg:space-y-6` (consistent vertical rhythm)
- **Tight Groups**: `space-y-2` (related items)

### Typography Scale
```tsx
// Headlines
<h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
<h2 className="text-3xl lg:text-4xl font-semibold">  
<h3 className="text-xl lg:text-2xl font-semibold">

// Body Text
<p className="text-lg text-slate-600 leading-relaxed">
<p className="text-sm text-slate-500"> // Supporting text
```

### Visual Effects & Interactions

#### Background Patterns
```tsx
// Gradient backgrounds
className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800"
className="bg-gradient-to-r from-emerald-400 to-cyan-400"

// Glass morphism
className="bg-white/10 backdrop-blur-lg border border-white/20"

// Subtle patterns
className="bg-slate-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"
```

#### Interactive States
```tsx
// Buttons with depth
className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all duration-150 shadow-lg hover:shadow-xl"

// Cards with hover effects  
className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl"

// Links with underline animation
className="text-indigo-600 hover:text-indigo-700 underline decoration-2 underline-offset-4 decoration-indigo-300 hover:decoration-indigo-500 transition-colors"
```

#### Animations & Transitions
```tsx
// Smooth transitions
className="transition-all duration-300 ease-out"

// Staggered animations for lists
className="animate-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${index * 100}ms` }}

// Subtle hover animations
className="hover:translate-y-1 hover:scale-105 transition-transform duration-200"
```

### Component Styling Examples

#### Hero Sections
```tsx
<div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
  <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
    <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
      Beautiful Headline
    </h1>
    <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
      Compelling description that draws users in
    </p>
    <Button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl">
      Get Started
    </Button>
  </div>
</div>
```

#### Feature Cards
```tsx
<div className="grid md:grid-cols-3 gap-8">
  {features.map((feature, index) => (
    <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-2xl hover:border-indigo-200 transition-all duration-300">
      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
      <p className="text-slate-600 leading-relaxed">{feature.description}</p>
    </div>
  ))}
</div>
```

### Styling Guidelines

1. **Avoid Generic Looks**: Don't use default grays everywhere. Choose a cohesive color story.
2. **Layer Depth**: Use shadows, gradients, and transparency to create visual depth
3. **Consistent Spacing**: Follow the spacing hierarchy religiously  
4. **Interactive Feedback**: Every clickable element should have clear hover/active states
5. **Mobile-First**: Always design for mobile, then enhance for desktop
6. **Performance**: Use CSS transforms for animations, not layout properties

### Adding New Features

1. **New Pages**: Create in `src/pages/` and add route to `App.tsx`
2. **Components**: Use shadcn/ui components from `src/components/ui/`
3. **Custom Components**: Create in `src/components/`
4. **Hooks**: Add to `src/hooks/`
5. **Utilities**: Add to `src/lib/utils.ts`
6. **API Calls**: Use TanStack Query for data fetching

### Database Integration

#### Supabase Integration
If Supabase is used for backend services, the client configuration should be placed at:
```
src/integrations/supabase/client.ts
```

Use the official Supabase JavaScript client:
```bash
bun add @supabase/supabase-js
```

Example client setup:
```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### Environment Variables Security Warning

⚠️ **CRITICAL SECURITY NOTICE**: This is a **client-side application**. All environment variables with the `VITE_` prefix will be **bundled and exposed** in the final build. 

**Never include sensitive data in environment variables:**
- API secrets
- Private keys  
- Database passwords
- Service account credentials

**Only use environment variables for:**
- Public API URLs
- Public configuration values
- Feature flags
- Public keys (like Supabase anon keys)

All sensitive operations should be handled server-side or through secure authentication flows.

### File Naming Conventions

- **Components**: PascalCase (e.g., `MyComponent.tsx`)
- **Pages**: PascalCase (e.g., `Dashboard.tsx`)
- **Hooks**: camelCase starting with 'use' (e.g., `useCustomHook.ts`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)

### Import Path Resolution

Use the `@` alias for cleaner imports:
```tsx
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

### Current State

The project currently has:
- A simple home page at `/` displaying "hello"
- A 404 page for unmatched routes
- Complete shadcn/ui component library
- Configured development environment

### Next Steps for Development

1. Replace the placeholder content in `src/pages/Index.tsx` with modern, visually compelling design
2. Choose a primary brand color and implement consistently
3. Add new pages and routes with sophisticated layouts
4. Implement your application logic with attention to user experience
5. Add API integration using TanStack Query
6. Customize the theme in `tailwind.config.ts` to match your brand

**Remember**: Every component should feel intentional and premium. Use the color guidelines, spacing principles, and interaction patterns above to create interfaces that users love to interact with.
