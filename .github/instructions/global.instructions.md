---
applyTo: '**'
---
# React + Vite + shadcn/ui Template - Premium Design System

## CRITICAL RULES - READ FIRST

### NEVER CREATE:
- **Monolithic components** over 300 lines
- **Copy-pasted code** - extract to reusable functions/hooks
- **Inline API calls** in components - use service layer
- **Poor accessibility** - maintain WCAG 2.1 AA contrast (4.5:1 minimum)
- **Generic designs** - always adapt to target industry/audience

### ALWAYS CREATE:
- **Focused components** (20-100 lines, single responsibility)
- **Custom hooks** for reusable logic
- **Composition patterns** - build complex UI from smaller parts
- **Shared types** in `lib/types.ts` 
- **Premium designs** with sophisticated animations and visual hierarchy

## Essential Commands
```bash
npm run dev          # Start development server (port 8080)
npm run build        # Production build  
npm run lint         # Run ESLint - MUST pass before shipping
```

## DETAILED GUIDELINES

This project uses a modular instruction system. For comprehensive guidance, see:

- **[Architecture Guidelines](./architecture.instructions.md)** - Component organization, reusability patterns, custom hooks, and code structure
- **[Design Guidelines](./design.instructions.md)** - Visual design system, industry-specific styling, accessibility, and premium UI patterns
- **[Development Workflow](./development.instructions.md)** - Commands, configuration, testing, and quality standards
- **[Component Guidelines](./components.instructions.md)** - UI, common, and feature component patterns
- **[Hooks Guidelines](./hooks.instructions.md)** - Custom hook patterns for data, forms, and UI state
- **[Page Guidelines](./pages.instructions.md)** - Page composition and organization rules
- **[Library Guidelines](./lib.instructions.md)** - Utilities, types, constants, and service layer patterns
- **[Quality Checklist](./quality.instructions.md)** - Code quality, design standards, and never-ship rules

## Tech Stack Overview

### Project Overview
- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.1
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS with custom theme
- **Routing**: React Router DOM v6
- **State Management**: TanStack Query (React Query)
- **Backend**: Supabase (Authentication, Database, Real-time)
- **Form Handling**: React Hook Form with Zod validation
- **Package Manager**: npm

### Essential Commands
```bash
npm run dev          # Start development server (port 8080)
npm run build        # Production build
npm run lint         # Run ESLint
```

### Key Architecture Rules
1. **No monolithic components** - Keep components under 300 lines
2. **Extract reusable logic** to custom hooks
3. **Use composition patterns** - build complex UI from smaller components
4. **Separate concerns** - UI, business logic, and API calls in different layers
5. **Shared types** - define interfaces once in `lib/types.ts`

### Design Principles
1. **Industry-appropriate design** - adapt colors and style to target audience
2. **Accessibility first** - maintain WCAG 2.1 AA contrast standards
3. **Premium feel** - sophisticated animations and visual hierarchy
4. **Mobile-first** responsive design approach

### Project Structure
```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── common/          # Reusable components  
│   ├── forms/           # Form components
│   └── features/        # Feature-specific components
├── hooks/               # Custom React hooks
├── integrations/
│   └── supabase/        # Supabase client and types
│       ├── client.ts    # Supabase client instance
│       └── types.ts     # Database type definitions
├── lib/
│   ├── utils.ts         # Utilities (includes cn function)
│   ├── types.ts         # Shared TypeScript types
│   ├── constants.ts     # App constants
│   └── validations/     # Zod schemas
├── pages/               # Route components (composition only)
├── services/            # API calls
└── context/             # React context providers
```

## Supabase Integration

### Quick Start
1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Copy `.env.example` to `.env` and add your credentials:
   ```bash
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key
   ```
3. Import and use the Supabase client:
   ```typescript
   import { supabase } from "@/integrations/supabase/client";
   ```

### Usage Examples

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
```

**Type Safety:**
```typescript
import type { Tables, TablesInsert } from "@/integrations/supabase/types";

// Use generated types
type Post = Tables<'posts'>;
type NewPost = TablesInsert<'posts'>;
```

### Best Practices
- Always use TanStack Query for data fetching and mutations
- Handle errors gracefully with try-catch or error boundaries
- Use TypeScript types from `@/integrations/supabase/types`
- Enable Row Level Security (RLS) on your Supabase tables
- Never expose sensitive credentials in environment variables

## Security Note
This is a **client-side application**. Only use `VITE_` environment variables for public configuration. Never expose sensitive data like API secrets.

## Important Reminders
- Do what has been asked; nothing more, nothing less
- NEVER create files unless absolutely necessary
- ALWAYS prefer editing existing files over creating new ones
- NEVER proactively create documentation files unless explicitly requested