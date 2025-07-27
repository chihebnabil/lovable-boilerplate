---
applyTo: '**'
---
# React + Vite + shadcn/ui Template - Premium Design System

## 🚨 CRITICAL RULES - READ FIRST

### ❌ NEVER CREATE:
- **Monolithic components** over 300 lines
- **Copy-pasted code** - extract to reusable functions/hooks
- **Inline API calls** in components - use service layer
- **Poor accessibility** - maintain WCAG 2.1 AA contrast (4.5:1 minimum)
- **Generic designs** - always adapt to target industry/audience

### ✅ ALWAYS CREATE:
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

## 📚 DETAILED GUIDELINES

This project uses a modular instruction system. For comprehensive guidance, see:

- **🏗️ [Architecture Guidelines](./architecture.instructions.md)** - Component organization, reusability patterns, custom hooks, and code structure
- **🎨 [Design Guidelines](./design.instructions.md)** - Visual design system, industry-specific styling, accessibility, and premium UI patterns
- **⚙️ [Development Workflow](./development.instructions.md)** - Commands, configuration, testing, and quality standards
- **✅ [Quality Checklist](./quality.instructions.md)** - Code quality, design standards, and never-ship rules

## Tech Stack Overview

### Project Overview
- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.1
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS with custom theme
- **Routing**: React Router DOM v6
- **State Management**: TanStack Query (React Query)
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
├── lib/
│   ├── utils.ts         # Utilities (includes cn function)
│   ├── types.ts         # Shared TypeScript types
│   ├── constants.ts     # App constants
│   └── validations/     # Zod schemas
├── pages/               # Route components (composition only)
├── services/            # API calls
└── context/             # React context providers
```

## ⚠️ Security Note
This is a **client-side application**. Only use `VITE_` environment variables for public configuration. Never expose sensitive data like API secrets.

## Important Reminders
- Do what has been asked; nothing more, nothing less
- NEVER create files unless absolutely necessary
- ALWAYS prefer editing existing files over creating new ones
- NEVER proactively create documentation files unless explicitly requested