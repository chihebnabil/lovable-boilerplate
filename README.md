# Lovable Boilerplate

> **Reverse-engineered Lovable AI app builder** turned into a developer-friendly React boilerplate with comprehensive AI coding assistant instructions.

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.0-purple.svg)](https://vitejs.dev/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-components-black.svg)](https://ui.shadcn.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.11-cyan.svg)](https://tailwindcss.com/)

## One-Click Setup
[![Edit with Bolt](https://img.shields.io/badge/Edit%20with-Bolt-4285F4?style=for-the-badge&logo=stackblitz&logoColor=white)](https://bolt.new/~/github.com/chihebnabil/lovable-boilerplate)
[![Edit with Replit](https://img.shields.io/badge/Edit%20with-Replit-4285F4?style=for-the-badge&logo=replit&logoColor=white)](https://replit.com/@ChihebNabil/lovable-boilerplate)
## What is this?

This boilerplate **reverse-engineers** the magic behind [Lovable's](https://lovable.dev) no-code AI app builder into a traditional React codebase that developers can understand, modify, and extend. It bridges the gap between no-code AI generation and developer control.

> **💡 Built something with Lovable or using this boilerplate?**  
> Upgrade to a fullstack Next.js app in minutes with [**NextLovable.com**](https://nextlovable.com/)  
> Get production-ready performance, better SEO, and full control.



## Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Library | 19.2.0 |
| **TypeScript** | Type Safety | 5.9.3 |
| **Vite** | Build Tool | 7.1.12 |
| **shadcn/ui** | Component Library | Latest |
| **Tailwind CSS** | Styling | 3.4.18 |
| **React Router** | Navigation | 7.9.5 |
| **TanStack Query** | Data Fetching | 5.90.6 |
| **React Hook Form** | Form Handling | 7.66.0 |
| **Zod** | Schema Validation | 4.1.12 |
| **Supabase** | Backend & Database | 2.80.0 |

## Features

- ⚡ **Lightning Fast Development** with Vite and React 19
- 🎨 **40+ Pre-built Components** from shadcn/ui
- 🎯 **Type-Safe** with TypeScript 5.9
- 🗄️ **Backend Ready** with Supabase integration
- 📱 **Responsive Design** with Tailwind CSS
- 🔄 **Smart Data Fetching** with TanStack Query
- 📋 **Form Validation** with React Hook Form + Zod
- 🤖 **AI-Optimized** with comprehensive coding instructions

## Getting Started

### Prerequisites
- Node.js 18+ or Bun
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/chihebnabil/lovable-boilerplate.git
cd lovable-boilerplate

# Install dependencies (npm, yarn, or bun)
npm install
# or
bun install

# Set up environment variables
cp .env.example .env
# Edit .env with your Supabase credentials

# Start development server
npm run dev
# or
bun dev
```

Your app will be running at `http://localhost:8080`

## Supabase Integration

This boilerplate comes with **Supabase** pre-configured for backend functionality including authentication, database, and real-time features.

### Setup Supabase

1. **Create a Supabase Project**
   - Visit [supabase.com](https://supabase.com) and create a new project
   - Wait for your database to be provisioned

2. **Configure Environment Variables**
   ```bash
   cp .env.example .env
   ```
   
   Add your Supabase credentials to `.env`:
   ```bash
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key
   ```
### Using Supabase in Your App

```typescript
// Import the Supabase client
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

// Example: Fetch data
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .eq('published', true);

// Example: Insert data
const { data, error } = await supabase
  .from('posts')
  .insert({
    title: 'My Post',
    slug: 'my-post',
    content: 'Post content',
    user_id: userId
  });

// Example: Real-time subscription
supabase
  .channel('posts')
  .on('postgres_changes', 
    { event: '*', schema: 'public', table: 'posts' },
    (payload) => {
      console.log('Change received!', payload);
    }
  )
  .subscribe();
```

### Type Safety

All database types are automatically generated in `src/integrations/supabase/types.ts`:

```typescript
import type { Tables, TablesInsert, TablesUpdate } from "@/integrations/supabase/types";

// Use generated types
type Post = Tables<'posts'>;
type NewPost = TablesInsert<'posts'>;
type UpdatePost = TablesUpdate<'posts'>;
```

### Authentication Example

```typescript
// Sign up
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password'
});

// Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password'
});

// Get current user
const { data: { user } } = await supabase.auth.getUser();

// Sign out
await supabase.auth.signOut();
```

### Best Practices

- **Environment Variables**: Never commit `.env` files. Use `.env.example` as a template
- **Row Level Security**: Enable RLS on your Supabase tables for security
- **Type Generation**: Regenerate types when your database schema changes
- **Error Handling**: Always handle errors from Supabase operations
- **Real-time**: Use Supabase real-time for live updates without polling

### Local Development with Supabase CLI

The boilerplate includes Supabase CLI configuration for local development:

```bash
# Initialize Supabase (already done)
npx supabase init

# Start Supabase locally (requires Docker)
npx supabase start

# Stop local Supabase
npx supabase stop

# Generate TypeScript types from your database
npx supabase gen types typescript --local > src/integrations/supabase/types.ts

# Create a new migration
npx supabase migration new migration_name

# Push migrations to remote database
npx supabase db push
```

The `supabase/` folder contains:
- **config.toml**: Supabase CLI configuration
- **migrations/**: Database migration files (version-controlled SQL)
- **.gitignore**: Excludes temporary files from version control

## AI Coding Assistant Instructions

This boilerplate is **optimized for AI coding assistants** like GitHub Copilot and Cursor. All comprehensive instructions are located in:

**`.github/instructions/global.instructions.md`**

These instructions include:
- **Modern Design Guidelines** - Create premium, contemporary interfaces
- **Architecture Patterns** - Project structure and best practices  
- **Component Usage** - How to use shadcn/ui components effectively
- **Development Workflow** - Adding features, pages, and functionality
- **Styling System** - Color palettes, spacing, typography, and animations
- **Responsive Design** - Mobile-first development principles

### For AI Assistants (Copilot/Cursor users):
Simply reference the instructions file when working on this project. The AI will understand the project structure, styling guidelines, and development patterns automatically.

## Project Structure

```
lovable-boilerplate/
├── .github/
│   └── instructions/           # AI coding assistant instructions
│       └── global.instructions.md
├── src/
│   ├── components/
│   │   └── ui/                 # shadcn/ui components (40+ pre-built)
│   ├── hooks/                  # Custom React hooks
│   ├── integrations/
│   │   └── supabase/           # Supabase client configuration
│   │       ├── client.ts       # Supabase client instance
│   │       └── types.ts        # Auto-generated database types
│   ├── lib/                    # Utility functions
│   ├── pages/                  # Route components
│   │   ├── Index.tsx           # Home page (/)
│   │   └── NotFound.tsx        # 404 page
│   ├── App.tsx                 # Main app with routing
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── supabase/                   # Supabase local development
│   ├── config.toml             # Supabase CLI configuration
│   └── migrations/             # Database migrations (auto-generated)
├── public/                     # Static assets
├── .env.example                # Environment variables template
├── package.json                # Dependencies
├── vite.config.ts              # Vite configuration  
├── tailwind.config.ts          # Tailwind configuration
├── components.json             # shadcn/ui configuration
└── tsconfig.json               # TypeScript configuration
```

## Available Components

### UI Components (40+ ready-to-use)
All components are pre-configured with shadcn/ui and located in `src/components/ui/`:

**Layout & Navigation**
- `accordion`, `card`, `separator`, `sheet`, `sidebar`, `tabs`
- `breadcrumb`, `command`, `dropdown-menu`, `menubar`, `navigation-menu`, `pagination`

**Forms & Inputs** 
- `button`, `input`, `textarea`, `select`, `checkbox`, `radio-group`, `switch`, `form`
- `calendar`, `input-otp`, `slider`, `toggle`

**Feedback & Overlays**
- `alert`, `alert-dialog`, `toast`, `sonner`, `progress`, `skeleton`
- `dialog`, `drawer`, `hover-card`, `popover`, `tooltip`

**Data Display**
- `avatar`, `badge`, `table`, `chart`, `carousel`
- `aspect-ratio`, `collapsible`, `resizable`, `scroll-area`


### Layout Principles
- **Generous Spacing**: `py-16 lg:py-24` for sections
- **Consistent Rhythm**: `space-y-4 lg:space-y-6` for content
- **Responsive First**: Mobile-first responsive design
- **Typography Scale**: Hierarchical text sizing

## Development Commands

```bash
# Development
npm run dev          # Start dev server (port 8080)
npm run build        # Production build  
npm run build:dev    # Development build
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Using Bun (faster alternative)
bun dev             # Start dev server
bun run build       # Production build
```


## What Makes This Special?

1. **Reverse-Engineered**: Based on patterns from Lovable's AI app builder
2. **AI-Optimized**: Designed specifically for AI coding assistants
3. **Design-First**: Premium visual design out of the box
4. **Performance**: Lightning-fast development and build times
5. **Flexible**: Easy to customize and extend
6. **Modern**: Latest React patterns and best practices

## Contributing

We welcome contributions! This project aims to provide the best possible starting point for AI-assisted React development.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this for any project!

## Acknowledgments

- **Lovable.dev** - Inspiration for the AI-first development approach
- **shadcn/ui** - Excellent component library and design system
- **Vercel** - Amazing tooling ecosystem (React, Vite, etc.)
- **Tailwind Labs** - Revolutionary CSS framework

**Happy coding!**
