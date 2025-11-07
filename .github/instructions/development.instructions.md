---
applyTo: '{package.json,vite.config.ts,tsconfig.json,tailwind.config.ts,src/**}'
---
# Development Workflow & Commands

## ESSENTIAL COMMANDS

```bash
npm run dev          # Start development server (port 8080)
npm run build        # Production build
npm run lint         # Run ESLint - MUST pass before shipping
npm run preview      # Preview production build locally
npm install          # Install dependencies
```

## CRITICAL WORKFLOW RULES

### BEFORE SHIPPING:
- Run `npm run lint` and fix all issues
- Test responsive design on mobile/desktop
- Verify accessibility contrast ratios
- Ensure no console errors in browser

### NEVER SHIP:
- Code with ESLint errors
- Untested responsive layouts
- Poor accessibility (contrast violations)
- Console errors or warnings

## Framework Stack
- **React 18.3.1** with TypeScript for UI
- **Vite 5.4.1** as build tool with SWC for fast compilation
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS 3.4.11** for styling with custom design system
- **React Router DOM v6** for client-side routing
- **TanStack Query** for server state management
- **Supabase 2.80.0** for backend, authentication, and database
- **React Hook Form + Zod** for form handling and validation

## Development Commands

### Core Development
- `npm run dev` - Start development server on port 8080
- `npm run build` - Create production build
- `npm run build:dev` - Create development build
- `npm run lint` - Run ESLint linter
- `npm run preview` - Preview production build locally

### Package Management
- `npm install` - Install dependencies (or use `bun install` for faster installs)

## Key Architecture Patterns

### Import Aliases (configured in vite.config.ts)
- `@/` maps to `./src/`
- `@/components` for components
- `@/lib` for utilities
- `@/hooks` for custom hooks
- `@/integrations/supabase` for Supabase client and types

### Routing Structure
Routes are defined in `src/App.tsx`. Add new routes above the catch-all `*` route:
```tsx
<Routes>
  <Route path="/" element={<Index />} />
  {/* ADD NEW ROUTES HERE */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

## Supabase Integration

### Setup
The boilerplate comes with Supabase pre-configured:

1. **Install Supabase** (already in package.json):
   ```bash
   npm i @supabase/supabase-js
   ```

2. **Environment Configuration**:
   Copy `.env.example` to `.env` and add your Supabase credentials:
   ```bash
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key
   ```

3. **Client Location**: `src/integrations/supabase/client.ts`
4. **Type Definitions**: `src/integrations/supabase/types.ts`

### Usage Patterns

**Data Fetching with TanStack Query:**
```typescript
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('published', true);
      
      if (error) throw error;
      return data;
    }
  });
};
```

**Mutations:**
```typescript
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (newPost) => {
      const { data, error } = await supabase
        .from('posts')
        .insert(newPost)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    }
  });
};
```

**Authentication:**
```typescript
// Sign up
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'securepassword'
});

// Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'securepassword'
});

// Get current user
const { data: { user } } = await supabase.auth.getUser();

// Sign out
await supabase.auth.signOut();
```

**Type Safety:**
```typescript
import type { Tables, TablesInsert, TablesUpdate } from "@/integrations/supabase/types";

// Use generated types
type Post = Tables<'posts'>;
type NewPost = TablesInsert<'posts'>;
type UpdatePost = TablesUpdate<'posts'>;
```

### Best Practices
- **Always use TanStack Query** for data fetching and mutations
- **Handle errors gracefully** with try-catch blocks or error boundaries
- **Use TypeScript types** from `@/integrations/supabase/types`
- **Enable Row Level Security (RLS)** on all Supabase tables
- **Never expose sensitive credentials** - only use public keys in environment variables

## Environment Variables Security Warning
**CRITICAL**: This is a **client-side application**. All environment variables with the `VITE_` prefix will be **bundled and exposed** in the final build. 

**Never include sensitive data in environment variables:**
- API secrets, private keys, database passwords, service account credentials

**Only use environment variables for:**
- Public API URLs, public configuration values, feature flags, public keys (like Supabase anon keys)

## Configuration Files

- `vite.config.ts` - Vite configuration with path aliases and port 8080
- `components.json` - shadcn/ui configuration with default style and slate base color
- `tailwind.config.ts` - Tailwind configuration with dark mode support
- `tsconfig.json` - TypeScript configuration with strict mode

## Testing & Quality
- ESLint configured with React and TypeScript rules
- No test framework currently configured - determine testing approach from codebase if tests are needed

## Common Patterns
- Use TypeScript interfaces for type safety
- Implement responsive design mobile-first
- Follow React Hook Form patterns with Zod validation for forms
- Use TanStack Query for all Supabase data fetching and mutations
- Import Supabase client from `@/integrations/supabase/client`
- Use generated types from `@/integrations/supabase/types`
- Import UI components from `@/components/ui/`
- Use the toast system via `use-toast` hook for notifications

## Landing Page Design Guidelines
Before generating the landing page, check the following:

What is the primary CTA (call-to-action)?
(e.g. submit an idea, request a demo, sign up)

Should the hero section include a form or another interactive element?
(e.g. submission form, email input, demo request)

What is the core value proposition or message?
(e.g. competitor analysis, product validation, AI-powered research)

What visual tone should the landing page have?
(e.g. clean and professional, playful and bold, minimalistic)

Any preferred colors or gradients?
(e.g. purple/blue gradient, dark theme, pastel tones)

Should the design include subtle animations or stay static?
Do you want to follow an indie maker aesthetic or a more corporate look?

## Quality Checklist

Before completing any code implementation, ensure:

### ✅ Code Architecture Quality
- [ ] **No monolithic components** - Each component under 300 lines with single responsibility
- [ ] **Logic extraction** - Reusable logic moved to custom hooks, not duplicated
- [ ] **Type safety** - Shared interfaces defined in `lib/types.ts` and reused
- [ ] **Service layer** - API calls abstracted to service functions, not inline
- [ ] **Proper imports** - Using path aliases (@/) and organized import groups
- [ ] **Validation schemas** - Zod schemas shared and reused across components
- [ ] **Component composition** - Complex UI built from smaller, focused components

### ✅ Design Quality  
- [ ] Uses sophisticated color palette (not default grays)
- [ ] Has proper visual hierarchy with varied typography scales
- [ ] Includes subtle animations and micro-interactions
- [ ] Features generous whitespace and purposeful spacing
- [ ] All interactive elements have clear hover/active states
- [ ] **Accessibility standards are met (proper contrast, focus states)**
- [ ] Mobile experience is thoughtfully designed
- [ ] Maintains consistent color story throughout

### ❌ NEVER Ship Code That:
- Contains components over 300 lines mixing multiple concerns
- Has duplicated logic that could be extracted to hooks
- Uses inline API calls instead of service layer
- Lacks proper TypeScript interfaces
- Has accessibility contrast violations  
- Contains copy-pasted code blocks
- Mixes business logic with presentation layer

## Important Reminders
- Do what has been asked; nothing more, nothing less
- NEVER create files unless they're absolutely necessary for achieving your goal
- ALWAYS prefer editing an existing file to creating a new one
- NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User