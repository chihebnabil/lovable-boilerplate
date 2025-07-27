---
applyTo: '**'
---
# React + Vite + shadcn/ui Template - Premium Design System

## AI System Prompt

This is a React TypeScript project built with Vite, using shadcn/ui components and Tailwind CSS. Create **world-class, premium designs** that feel modern, sophisticated, and engaging - never generic or template-like.

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
/
├── src/
│   ├── components/ui/        # shadcn/ui components (pre-built)
│   ├── components/          # Custom components
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
├── vite.config.ts           # Vite configuration (@ → ./src, port 8080)
├── tailwind.config.ts       # Tailwind configuration (dark mode support)
├── components.json          # shadcn/ui configuration
└── tsconfig.json            # TypeScript configuration
```

### Routing Structure
Routes are defined in `src/App.tsx`:
```tsx
<Routes>
  <Route path="/" element={<Index />} />
  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Database Integration
If using Supabase, place client configuration at `src/integrations/supabase/client.ts`:
```bash
npm i @supabase/supabase-js
```

### Environment Variables Security Warning
⚠️ **CRITICAL**: This is a **client-side application**. All environment variables with the `VITE_` prefix will be **bundled and exposed** in the final build. 

**Never include sensitive data in environment variables:**
- API secrets, private keys, database passwords, service account credentials

**Only use environment variables for:**
- Public API URLs, public configuration values, feature flags, public keys (like Supabase anon keys)

## DESIGN PRINCIPLES

### Core Philosophy
**Every interface must feel like it was crafted by a top-tier design agency.**
- **Emotional Impact First**: Ask "Does this make users stop and say 'wow'?"
- **Sophisticated Hierarchy**: Use contrast, scale, and spacing strategically
- **Purposeful Motion**: Every animation should enhance usability
- **Breathing Room**: Generous whitespace creates luxury feel
- **Cohesive Color Story**: Never use random colors - every choice is intentional
- **Unique Visual Identity**: Design should feel custom-crafted, never template-like

### Visual Quality Standards
**NEVER CREATE**:
- Generic card grids with default shadows
- Plain white backgrounds with black text
- Basic hover states (simple color changes)
- Template-like layouts
- Uniform spacing everywhere
- Default Tailwind grays (slate-500, gray-400, etc.)
- Static, lifeless interfaces

**ALWAYS CREATE**:
- Dynamic, engaging compositions with visual flow
- Rich color palettes with gradients and depth
- Sophisticated micro-interactions
- Asymmetrical layouts that guide the eye
- Varied spacing that creates rhythm
- High contrast, accessible text combinations
- Interactive, responsive designs with personality

## ACCESSIBILITY & CONTRAST REQUIREMENTS (WCAG 2.1 AA)

### Text Contrast Standards
- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text (18pt+)**: Minimum 3:1 contrast ratio
- **Interactive elements**: Must have visible focus states
- **Color information**: Never rely solely on color to convey information

### Safe High-Contrast Combinations
```tsx
// Light backgrounds
bg-white text-slate-900          // 21:1 ratio ✅
bg-slate-50 text-slate-800       // 16.7:1 ratio ✅
bg-blue-50 text-blue-900         // 14.2:1 ratio ✅

// Dark backgrounds  
bg-slate-900 text-white          // 21:1 ratio ✅
bg-slate-800 text-slate-100      // 15.8:1 ratio ✅
bg-blue-900 text-blue-50         // 18.1:1 ratio ✅

// Buttons - maintain contrast in ALL states
bg-blue-600 text-white           // Primary buttons ✅
bg-slate-900 text-white          // Secondary buttons ✅
hover:bg-blue-700 hover:text-white  // Maintain on hover ✅
```

### CRITICAL: Avoid These Common Accessibility Failures
```tsx
// ❌ Poor contrast combinations - NEVER USE
bg-slate-400 text-white          // Only 3.1:1 ratio
bg-slate-500 text-white          // Only 4.6:1 ratio (use slate-600+)
text-slate-400 on bg-white       // Most common CTA text mistake
text-slate-500 on bg-slate-100   // Poor secondary button contrast
border-slate-400 text-slate-400  // Poor outline button
border-white/30 text-white       // Border invisible
bg-gray-100 text-gray-500        // Very common but poor contrast
```

### Button Accessibility Requirements
**All buttons must maintain proper contrast in ALL states:**
```tsx
// ✅ Perfect button patterns
<Button className="bg-blue-600 hover:bg-blue-700 text-white focus:ring-4 focus:ring-blue-500/50">
<Button className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">
<Button disabled className="bg-slate-300 text-slate-600 cursor-not-allowed">

// ❌ Never use these patterns
<Button className="bg-slate-400 text-white">     // Poor contrast
<Button className="text-slate-500">             // Poor contrast  
<Button className="hover:text-slate-400">       // Losing contrast on hover
```

## JSX SYNTAX RULES

### SVG and Data URL Encoding
When using SVG data URLs in CSS backgrounds, **ALWAYS** properly encode special characters:

❌ **WRONG - Causes build errors**:
```tsx
<div className="bg-[url('data:image/svg+xml,%3Csvg width="60" height="60"...')]" />
```

✅ **CORRECT - Use these safe alternatives**:
```tsx
// Option 1: Use external SVG file (recommended)
<div className="bg-[url('/pattern.svg')]" />

// Option 2: Use CSS custom properties in index.css
<div className="bg-dot-pattern" />

// Option 3: Use Tailwind gradient utilities
<div className="bg-gradient-radial from-blue-500/10 to-transparent" />
```

### Safe Background Pattern Classes (Add to index.css)
```css
.bg-dot-pattern {
  background-image: radial-gradient(circle, #334155 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.03;
}

.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(51, 65, 85, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(51, 65, 85, 0.03) 1px, transparent 1px);
  background-size: 20px 20px;
}

.bg-neural-pattern {
  background: linear-gradient(45deg, transparent 25%, rgba(168,85,247,0.1) 50%, transparent 75%),
              linear-gradient(-45deg, transparent 25%, rgba(59,130,246,0.1) 50%, transparent 75%);
  background-size: 40px 40px;
}
```

## PREMIUM COMPONENT PATTERNS

### Button System
```tsx
// Primary CTA - High contrast required
<Button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
  <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
  <span className="relative z-10 flex items-center gap-2">
    Get Started
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
  </span>
</Button>

// Secondary Button - Outline with hover fill
<Button variant="outline" className="group border-2 border-slate-900 text-slate-900 hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 overflow-hidden">
  <span className="absolute inset-0 bg-slate-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
  <span className="relative z-10">Learn More</span>
</Button>
```

### Premium Hero Section
```tsx
<div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950 to-slate-950">
  {/* Floating 3D elements */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-3xl rotate-12 animate-float backdrop-blur-sm" />
    <div className="absolute top-40 right-1/4 w-48 h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl -rotate-12 animate-float animation-delay-1000 backdrop-blur-sm" />
  </div>
  
  <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
    <div className="text-center max-w-6xl mx-auto space-y-8">
      <h1 className="text-7xl lg:text-9xl font-black leading-none">
        <span className="block bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
          FUTURE
        </span>
        <span className="block mt-4 bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          AWAITS
        </span>
      </h1>
      
      <p className="text-2xl lg:text-3xl text-violet-100/90 max-w-4xl mx-auto leading-relaxed font-light">
        Experience the next evolution of digital interaction
      </p>
    </div>
  </div>
</div>
```

### Feature Cards
```tsx
<div className="grid md:grid-cols-3 gap-8">
  {features.map((feature, index) => (
    <div 
      key={index}
      className="group relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
        <p className="text-slate-300 leading-relaxed text-lg">{feature.description}</p>
      </div>
    </div>
  ))}
</div>
```

### Form Design
```tsx
<div className="group relative">
  <Input 
    className="w-full bg-slate-50 border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 placeholder:text-slate-500 rounded-2xl px-6 py-4 text-lg transition-all duration-300 focus:shadow-lg focus:scale-[1.02]"
    placeholder="Enter your email"
  />
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-300" />
</div>
```

## ANIMATION SYSTEM

### Custom Tailwind Animations (Add to tailwind.config.ts)
```javascript
theme: {
  extend: {
    animation: {
      'float': 'float 3s ease-in-out infinite',
      'shimmer': 'shimmer 2s linear infinite',
      'fade-in': 'fadeIn 0.5s ease-out',
      'gradient-x': 'gradient-x 3s ease infinite',
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-10px)' }
      },
      shimmer: {
        '0%': { backgroundPosition: '-200% 0' },
        '100%': { backgroundPosition: '200% 0' }
      },
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' }
      },
      'gradient-x': {
        '0%, 100%': { backgroundSize: '200% 200%', backgroundPosition: 'left center' },
        '50%': { backgroundSize: '200% 200%', backgroundPosition: 'right center' }
      }
    }
  }
}
```

## RESPONSIVE DESIGN

### Mobile-First Approach
```tsx
// Progressive enhancement
<div className="
  px-4 py-8
  sm:px-6 sm:py-12  
  md:px-8 md:py-16
  lg:px-12 lg:py-20
">

// Typography scaling
<h1 className="
  text-3xl font-bold
  sm:text-4xl
  md:text-5xl  
  lg:text-6xl
  leading-tight
">
```

## DEVELOPMENT COMMANDS

```bash
npm run dev          # Start development server (port 8080)
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

## QUALITY CHECKLIST

Before completing any design, ensure:
- [ ] Uses sophisticated color palette (not default grays)
- [ ] Has proper visual hierarchy with varied typography scales
- [ ] Includes subtle animations and micro-interactions
- [ ] Features generous whitespace and purposeful spacing
- [ ] All interactive elements have clear hover/active states
- [ ] **Accessibility standards are met (proper contrast, focus states)**
- [ ] Mobile experience is thoughtfully designed
- [ ] Maintains consistent color story throughout
