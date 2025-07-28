# Welcome to Lovable Boilerplate in Bolt.new! 🚀

## 🎯 Quick Start Guide

You're now editing the **Lovable Boilerplate** - a reverse-engineered React boilerplate optimized for AI coding assistants!

### ⚡ Instant Commands
```bash
npm run dev      # Start development server (port 8080)
npm run build    # Production build
npm run lint     # Run ESLint
```

### 🤖 AI Coding Assistant Instructions

This project includes comprehensive AI coding instructions located in:
**`.github/instructions/global.instructions.md`**

These instructions cover:
- ✨ **Premium Design Guidelines** - Create sophisticated, modern interfaces
- 🏗️ **Architecture Patterns** - Component organization and best practices
- 🎨 **Styling System** - Tailwind + shadcn/ui design system
- 📱 **Responsive Design** - Mobile-first development
- ♿ **Accessibility Standards** - WCAG 2.1 AA compliant designs

### 🧩 Available Components (40+ Pre-built)

**UI Components Ready to Use:**
- Layout: `Card`, `Sheet`, `Sidebar`, `Tabs`, `Accordion`
- Forms: `Button`, `Input`, `Select`, `Form`, `Calendar`
- Feedback: `Toast`, `Alert`, `Dialog`, `Progress`
- Navigation: `Dropdown`, `Command`, `Breadcrumb`

**Import Pattern:**
```tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
```

### 🎨 Design Philosophy

**Create Premium Interfaces:**
- Industry-appropriate color palettes (not generic grays)
- Sophisticated animations and micro-interactions
- Generous whitespace and purposeful spacing
- High contrast accessibility (4.5:1 minimum)
- Mobile-first responsive design

### 📁 Project Structure
```
src/
├── components/ui/     # shadcn/ui components (40+ ready)
├── components/common/ # Reusable app components  
├── hooks/            # Custom React hooks
├── lib/              # Utilities, types, validations
├── pages/            # Route components
├── App.tsx           # Main app with routing
└── main.tsx          # Entry point
```

### 🔧 Development Tips

1. **Component Architecture**: Keep components under 200 lines, extract logic to hooks
2. **Styling**: Use Tailwind classes with proper contrast ratios
3. **Forms**: Use React Hook Form + Zod for validation
4. **Data**: Use TanStack Query for server state
5. **Types**: Define shared types in `lib/types.ts`

### 🚀 Ready to Build?

Your development server should start automatically on port 8080. 
Start building premium React applications with AI assistance!

**Happy coding!** ✨
