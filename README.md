# # Lovable Boilerplate

> **Reverse-engineered Lovable AI app builder** turned into a developer-friendly React boilerplate with comprehensive AI coding assistant instructions.

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-purple.svg)](https://vitejs.dev/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-components-black.svg)](https://ui.shadcn.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.11-cyan.svg)](https://tailwindcss.com/)

## What is this?

This boilerplate **reverse-engineers** the magic behind [Lovable's](https://lovable.dev) no-code AI app builder into a traditional React codebase that developers can understand, modify, and extend. It bridges the gap between no-code AI generation and developer control.

> **💡 Already have a Lovable app?** Convert it to Next.js with [**NextLovable.com**](https://nextlovable.com/) for production-ready performance and SEO.

## Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Library | 18.3.1 |
| **TypeScript** | Type Safety | 5.5.3 |
| **Vite** | Build Tool | 5.4.1 |
| **shadcn/ui** | Component Library | Latest |
| **Tailwind CSS** | Styling | 3.4.11 |
| **React Router** | Navigation | 6.26.2 |
| **TanStack Query** | Data Fetching | 5.56.2 |
| **React Hook Form** | Form Handling | 7.53.0 |
| **Zod** | Schema Validation | 3.23.8 |

## Quick Start

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

# Start development server
npm run dev
# or
bun dev
```

Your app will be running at `http://localhost:8080`

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
│   ├── components/ui/          # shadcn/ui components (40+ pre-built)
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions
│   ├── pages/                  # Route components
│   │   ├── Index.tsx           # Home page (/)
│   │   └── NotFound.tsx        # 404 page
│   ├── App.tsx                 # Main app with routing
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
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

---

**Ready to build something amazing?**

This boilerplate gives you everything you need to create modern, beautiful web applications with the power of AI coding assistants. The comprehensive instructions in `.github/instructions/global.instructions.md` ensure that GitHub Copilot, Cursor, and other AI tools understand exactly how to help you build efficiently.

**Happy coding!**


> **Reverse-engineered Lovable AI app builder** turned into a developer-friendly React boilerplate with comprehensive AI coding assistant instructions.

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-purple.svg)](https://vitejs.dev/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-components-black.svg)](https://ui.shadcn.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.11-cyan.svg)](https://tailwindcss.com/)

## What is this?

This boilerplate **reverse-engineers** the magic behind [Lovable's](https://lovable.dev) no-code AI app builder into a traditional React codebase that developers can understand, modify, and extend. It bridges the gap between no-code AI generation and developer control.

> **💡 Already have a Lovable app?** Convert it to Next.js with [**NextLovable.com**](https://nextlovable.com/) for production-ready performance and SEO.

## Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Library | 18.3.1 |
| **TypeScript** | Type Safety | 5.5.3 |
| **Vite** | Build Tool | 5.4.1 |
| **shadcn/ui** | Component Library | Latest |
| **Tailwind CSS** | Styling | 3.4.11 |
| **React Router** | Navigation | 6.26.2 |
| **TanStack Query** | Data Fetching | 5.56.2 |
| **React Hook Form** | Form Handling | 7.53.0 |
| **Zod** | Schema Validation | 3.23.8 |

## Quick Start

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

# Start development server
npm run dev
# or
bun dev
```

Your app will be running at `http://localhost:8080`

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
│   ├── components/ui/          # shadcn/ui components (40+ pre-built)
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions
│   ├── pages/                  # Route components
│   │   ├── Index.tsx           # Home page (/)
│   │   └── NotFound.tsx        # 404 page
│   ├── App.tsx                 # Main app with routing
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
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

---

**Ready to build something amazing?**

This boilerplate gives you everything you need to create modern, beautiful web applications with the power of AI coding assistants. The comprehensive instructions in `.github/instructions/global.instructions.md` ensure that GitHub Copilot, Cursor, and other AI tools understand exactly how to help you build efficiently.

**Happy coding!**