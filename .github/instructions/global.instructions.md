---
applyTo: '**'
---
# React + Vite + shadcn/ui Template - Premium Design System

## AI System Prompt

This is a React TypeScript project built with Vite, using shadcn/ui components and Tailwind CSS. Below is comprehensive information for AI assistants to create **world-class, premium designs** that feel modern, sophisticated, and engaging - never generic or template-like.

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
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind configuration
├── components.json          # shadcn/ui configuration
└── tsconfig.json            # TypeScript configuration
```

## PREMIUM DESIGN PRINCIPLES

### Core Design Philosophy
**Every interface must feel like it was crafted by a top-tier design agency.**
- **Emotional Impact First**: Ask "Does this make users stop and say 'wow'?"
- **Sophisticated Hierarchy**: Use contrast, scale, and spacing strategically
- **Purposeful Motion**: Every animation should enhance usability
- **Breathing Room**: Generous whitespace creates luxury feel
- **Cohesive Color Story**: Never use random colors - every choice is intentional

### Visual Quality Standards
❌ **NEVER CREATE**:
- Generic card grids with default shadows
- Plain white backgrounds with black text
- Basic hover states (simple color changes)
- Template-like layouts
- Uniform spacing everywhere
- Default Tailwind grays (slate-500, gray-400, etc.)

✅ **ALWAYS CREATE**:
- Dynamic, engaging compositions with visual flow
- Rich color palettes with gradients and depth
- Sophisticated micro-interactions
- Asymmetrical layouts that guide the eye
- Varied spacing that creates rhythm
- Brand-consistent color systems

## ADVANCED COLOR SYSTEMS

### Primary Brand Palettes (Pick ONE as your main theme)

#### Luxury Tech
```css
Primary: from-slate-900 to-slate-700
Accent: from-blue-500 to-cyan-400  
Surface: bg-slate-900/95 backdrop-blur
Text: text-slate-100
Muted: text-slate-400
```

#### Creative Studio  
```css
Primary: from-violet-600 to-fuchsia-500
Accent: from-orange-400 to-pink-400
Surface: bg-violet-950/90 backdrop-blur
Text: text-white
Muted: text-violet-200
```

#### Modern Business
```css
Primary: from-indigo-600 to-blue-600  
Accent: from-emerald-400 to-teal-400
Surface: bg-indigo-950/95 backdrop-blur
Text: text-indigo-50
Muted: text-indigo-200
```

#### Organic/Health
```css
Primary: from-emerald-600 to-teal-600
Accent: from-yellow-400 to-orange-400  
Surface: bg-emerald-950/90 backdrop-blur
Text: text-emerald-50
Muted: text-emerald-200
```

### Advanced Gradient Patterns
```tsx
// Premium backgrounds
bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800
bg-gradient-to-tr from-slate-900 via-blue-900 to-slate-900
bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-indigo-900 to-purple-900

// Subtle surface gradients
bg-gradient-to-br from-white to-slate-50
bg-gradient-to-tr from-slate-50 to-blue-50/20

// Glowing accents
bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/25
bg-gradient-to-r from-violet-500 to-purple-500 shadow-xl shadow-violet-500/20
```

## SOPHISTICATED LAYOUT PATTERNS

### Hero Section Archetypes

#### Split Hero with Visual Impact
```tsx
<div className="min-h-screen grid lg:grid-cols-2 overflow-hidden">
  <div className="flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-slate-900 to-slate-800">
    <div className="max-w-xl">
      <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
        Transform Your
        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          {' '}Digital Vision
        </span>
      </h1>
      <p className="text-xl text-slate-300 mb-8 leading-relaxed">
        Craft experiences that captivate, convert, and create lasting impact
      </p>
      <Button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-white/10 transition-all duration-300">
        Begin Journey
      </Button>
    </div>
  </div>
  <div className="bg-gradient-to-tr from-blue-600 to-purple-700 flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
    {/* Visual element here */}
  </div>
</div>
```

#### Centered Impact Hero  
```tsx
<div className="relative min-h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800" />
  <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
  <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
    <h1 className="text-6xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
      <span className="block">Redefine</span>
      <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
        Possibilities
      </span>
    </h1>
    <p className="text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
      Where innovation meets execution, creating digital experiences that transform industries
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button className="bg-white text-slate-900 hover:scale-105 px-10 py-5 text-xl font-semibold rounded-2xl shadow-2xl transition-all duration-300">
        Explore Now
      </Button>
      <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-10 py-5 text-xl rounded-2xl transition-all duration-300">
        Learn More
      </Button>
    </div>
  </div>
</div>
```

### Advanced Card Systems

#### Floating Feature Cards
```tsx
<div className="grid md:grid-cols-3 gap-8 lg:gap-12">
  {features.map((feature, index) => (
    <div 
      key={index}
      className="group relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
        <p className="text-slate-300 leading-relaxed text-lg">{feature.description}</p>
      </div>
    </div>
  ))}
</div>
```

#### Masonry Layout Cards
```tsx
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
  {items.map((item, index) => (
    <div 
      key={index}
      className="break-inside-avoid bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-6 overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
      <p className="text-slate-400 leading-relaxed">{item.description}</p>
    </div>
  ))}
</div>
```

## MICRO-INTERACTION PATTERNS

### Button Interactions
```tsx
// Premium button with multiple states
<Button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
  <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
  <span className="relative z-10 flex items-center gap-2">
    Get Started
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
  </span>
</Button>

// Magnetic button effect
<Button className="group relative bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95">
  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
  <span className="relative">Explore</span>
</Button>
```

### Input Field Enhancements
```tsx
<div className="group relative">
  <Input 
    className="w-full bg-slate-900/50 border-slate-700 focus:border-blue-500 text-white placeholder:text-slate-400 rounded-2xl px-6 py-4 text-lg transition-all duration-300 focus:bg-slate-900/80 focus:scale-105"
    placeholder="Enter your email"
  />
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-300" />
</div>
```

### Loading & State Animations
```tsx
// Skeleton with shimmer
<div className="animate-pulse">
  <div className="h-8 bg-gradient-to-r from-slate-200 via-slate-50 to-slate-200 bg-[length:200%_100%] animate-shimmer rounded-lg mb-4" />
</div>

// Success state animation
<div className="flex items-center gap-3 text-emerald-600">
  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center animate-bounce">
    <Check className="w-4 h-4" />
  </div>
  <span className="font-semibold">Success!</span>
</div>
```

## RESPONSIVE DESIGN EXCELLENCE

### Mobile-First Approach
```tsx
// Progressive enhancement
<div className="
  px-4 py-8
  sm:px-6 sm:py-12  
  md:px-8 md:py-16
  lg:px-12 lg:py-20
  xl:px-16 xl:py-24
">

// Responsive grid systems
<div className="
  grid grid-cols-1 gap-6
  md:grid-cols-2 md:gap-8
  lg:grid-cols-3 lg:gap-10
  xl:grid-cols-4 xl:gap-12
">

// Typography scaling
<h1 className="
  text-3xl font-bold
  sm:text-4xl
  md:text-5xl  
  lg:text-6xl
  xl:text-7xl
  leading-tight
">
```

## COMPONENT ARCHITECTURE

### Advanced shadcn/ui Customization
```tsx
// Custom Button variants
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:scale-105",
        ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full",
        magnetic: "bg-white text-slate-900 hover:scale-105 hover:shadow-2xl active:scale-95"
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-4 text-lg",
        xl: "px-12 py-6 text-xl"
      }
    }
  }
)

// Premium Card component
const Card = ({ className, children, ...props }) => (
  <div
    className={cn(
      "group relative bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden",
      className
    )}
    {...props}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">{children}</div>
  </div>
)
```

## ANIMATION SYSTEM

### Custom Tailwind Animations (Add to tailwind.config.ts)
```javascript
theme: {
  extend: {
    animation: {
      'shimmer': 'shimmer 2s linear infinite',
      'float': 'float 3s ease-in-out infinite',
      'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      'slide-up': 'slideUp 0.5s ease-out',
      'fade-in': 'fadeIn 0.5s ease-out',
    },
    keyframes: {
      shimmer: {
        '0%': { backgroundPosition: '-200% 0' },
        '100%': { backgroundPosition: '200% 0' }
      },
      float: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-10px)' }
      },
      slideUp: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0px)' }
      },
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' }
      }
    }
  }
}
```

### Page Transition System
```tsx
// Page wrapper with entrance animation
const PageWrapper = ({ children, className = "" }) => (
  <div className={cn("animate-fade-in", className)}>
    {children}
  </div>
)

// Staggered list animations
const AnimatedList = ({ items, className }) => (
  <div className={className}>
    {items.map((item, index) => (
      <div
        key={index}
        className="animate-slide-up"
        style={{ 
          animationDelay: `${index * 100}ms`,
          animationFillMode: 'both'
        }}
      >
        {item}
      </div>
    ))}
  </div>
)
```

## QUALITY CHECKLIST

Before completing any design, ensure:

### Visual Excellence
- [ ] Uses sophisticated color palette (not default grays)
- [ ] Has proper visual hierarchy with varied typography scales
- [ ] Includes subtle animations and micro-interactions
- [ ] Features generous whitespace and purposeful spacing
- [ ] Contains depth through shadows, gradients, or blur effects

### User Experience  
- [ ] All interactive elements have clear hover/active states
- [ ] Mobile experience is thoughtfully designed (not just responsive)
- [ ] Loading states and error states are handled elegantly
- [ ] Accessibility standards are met (proper contrast, focus states)

### Technical Quality
- [ ] Uses semantic HTML structure
- [ ] Implements proper TypeScript types
- [ ] Follows consistent naming conventions
- [ ] Optimizes for performance (efficient animations, lazy loading)

### Brand Consistency
- [ ] Maintains consistent color story throughout
- [ ] Uses cohesive spacing system
- [ ] Typography scale is harmonious
- [ ] Component patterns are reusable

## DEVELOPMENT COMMANDS

```bash
npm run dev          # Start development server (port 8080)
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

## ADVANCED PATTERNS

### Form Design Excellence
```tsx
<form className="space-y-8 max-w-2xl mx-auto">
  <div className="space-y-6">
    <div className="group">
      <Label className="text-sm font-semibold text-slate-700 mb-2 block">
        Email Address
      </Label>
      <div className="relative">
        <Input 
          type="email"
          className="w-full bg-slate-50 border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 rounded-xl px-4 py-3 transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
          placeholder="you@company.com"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-300" />
      </div>
    </div>
  </div>
  
  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
    Get Started
  </Button>
</form>
```

### Data Visualization
```tsx
// Premium stat cards
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {stats.map((stat, index) => (
    <div key={index} className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl" />
      <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
      <div className="text-slate-400 font-medium">{stat.label}</div>
      <div className="text-sm text-slate-500 mt-2">{stat.change}</div>
    </div>
  ))}
</div>
```

Remember: **Every component should feel intentionally crafted, not template-generated.** Focus on creating emotional connections through thoughtful design choices, sophisticated interactions, and premium aesthetics.