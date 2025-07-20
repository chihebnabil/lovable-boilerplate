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

### Database Integration

#### Supabase Integration
If Supabase is used for backend services, the client configuration should be placed at:
```
src/integrations/supabase/client.ts
```

Use the official Supabase JavaScript client:
```bash
npm i @supabase/supabase-js
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



## PREMIUM DESIGN PRINCIPLES

### Core Design Philosophy
**Every interface must feel like it was crafted by a top-tier design agency.**
- **Emotional Impact First**: Ask "Does this make users stop and say 'wow'?"
- **Sophisticated Hierarchy**: Use contrast, scale, and spacing strategically
- **Purposeful Motion**: Every animation should enhance usability
- **Breathing Room**: Generous whitespace creates luxury feel
- **Cohesive Color Story**: Never use random colors - every choice is intentional
- **Accessibility First**: Ensure proper contrast ratios (4.5:1 minimum for normal text, 3:1 for large text)
- **Unique Visual Identity**: design should feel custom-crafted, never template-like

### Visual Quality Standards
**NEVER CREATE**:
- Generic card grids with default shadows
- Plain white backgrounds with black text
- Basic hover states (simple color changes)
- Template-like layouts
- Uniform spacing everywhere
- Default Tailwind grays (slate-500, gray-400, etc.)
- Poor contrast combinations (white text on light backgrounds, dark text on dark backgrounds)
- Identical repeated patterns without variation
- Static, lifeless interfaces

**ALWAYS CREATE**:
- Dynamic, engaging compositions with visual flow
- Rich color palettes with gradients and depth
- Sophisticated micro-interactions
- Asymmetrical layouts that guide the eye
- Varied spacing that creates rhythm
- Brand-consistent color systems
- High contrast, accessible text combinations
- Unique visual elements that tell a story
- Interactive, responsive designs with personality

## ACCESSIBILITY & CONTRAST REQUIREMENTS

### Text Contrast Standards (WCAG 2.1 AA)
- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text (18pt+)**: Minimum 3:1 contrast ratio
- **Interactive elements**: Must have visible focus states
- **Color information**: Never rely solely on color to convey information

### Safe Contrast Combinations
```tsx
// Light backgrounds
bg-white text-slate-900          // 21:1 ratio ✅
bg-slate-50 text-slate-800       // 16.7:1 ratio ✅
bg-blue-50 text-blue-900         // 14.2:1 ratio ✅

// Dark backgrounds  
bg-slate-900 text-white          // 21:1 ratio ✅
bg-slate-800 text-slate-100      // 15.8:1 ratio ✅
bg-blue-900 text-blue-50         // 18.1:1 ratio ✅

// Transparent/glass buttons on dark backgrounds
border-white/50 text-white       // High contrast ✅
bg-white/10 text-white           // 21:1 ratio ✅ 
hover:bg-white hover:text-slate-900  // 21:1 ratio ✅

// Never use these combinations
bg-white text-slate-400          // 2.9:1 ratio ❌
bg-slate-100 text-slate-500      // 3.4:1 ratio ❌
bg-blue-500 text-blue-200        // 2.1:1 ratio ❌
border-white/30 text-white       // Poor visibility ❌
bg-white/10 text-slate-400       // Poor contrast ❌
```

### Button Contrast Requirements
**CRITICAL**: All buttons must maintain proper contrast in ALL states:

✅ **Safe Button Patterns**:
```tsx
// Primary buttons - always high contrast
bg-blue-600 text-white           // 21:1 ratio ✅
bg-gradient-to-r from-blue-600 to-purple-600 text-white  // ✅

// Outline buttons on dark backgrounds
border-white/50 text-white hover:bg-white hover:text-slate-900  // ✅
border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white  // ✅

// Ghost buttons
text-white hover:bg-white/10     // ✅ (maintains white text)
text-slate-900 hover:bg-slate-100 // ✅ (maintains dark text)

// Disabled state with proper contrast
bg-slate-200 text-slate-500 cursor-not-allowed  // 3.4:1 ratio ✅ for disabled
bg-slate-700 text-slate-400 cursor-not-allowed  // 3.1:1 ratio ✅ for disabled

// Loading state
bg-blue-600 text-white           // Always maintain primary contrast ✅
```

❌ **NEVER Use These Patterns**:
```tsx
// Poor contrast combinations
border-white/30 text-white       // Border too faint ❌
hover:bg-white/10 text-slate-400 // Poor hover contrast ❌
bg-slate-200 text-slate-400      // Insufficient contrast ❌
text-white on bg-white/20        // White on light = invisible ❌
```

## ADVANCED COLOR SYSTEMS

### Primary Brand Palettes (Pick ONE as your main theme)

#### Luxury Tech
```css
Primary: from-slate-900 to-slate-700
Accent: from-blue-500 to-cyan-400  
Surface: bg-slate-900/95 backdrop-blur
Text Light: text-white
Text Dark: text-slate-900
Muted: text-slate-400
Borders: border-slate-700/50
```

#### Creative Studio  
```css
Primary: from-violet-600 to-fuchsia-500
Accent: from-orange-400 to-pink-400
Surface: bg-violet-950/90 backdrop-blur
Text Light: text-white
Text Dark: text-violet-950
Muted: text-violet-200
Borders: border-violet-500/30
```

#### Modern Business
```css
Primary: from-indigo-600 to-blue-600  
Accent: from-emerald-400 to-teal-400
Surface: bg-indigo-950/95 backdrop-blur
Text Light: text-indigo-50
Text Dark: text-indigo-950
Muted: text-indigo-200
Borders: border-indigo-500/30
```

#### Organic/Health
```css
Primary: from-emerald-600 to-teal-600
Accent: from-yellow-400 to-orange-400  
Surface: bg-emerald-950/90 backdrop-blur
Text Light: text-emerald-50
Text Dark: text-emerald-950
Muted: text-emerald-200
Borders: border-emerald-500/30
```

#### Warm Sunset
```css
Primary: from-orange-600 to-red-600
Accent: from-yellow-400 to-orange-400
Surface: bg-orange-950/90 backdrop-blur
Text Light: text-orange-50
Text Dark: text-orange-950
Muted: text-orange-200
Borders: border-orange-500/30
```

### Advanced Gradient Patterns
```tsx
// Premium dark backgrounds
bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800
bg-gradient-to-tr from-slate-900 via-blue-900 to-slate-900
bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-indigo-900 to-purple-900

// Subtle light surface gradients
bg-gradient-to-br from-white to-slate-50
bg-gradient-to-tr from-slate-50 to-blue-50/20
bg-gradient-to-br from-blue-50 to-indigo-50

// High-impact accent gradients
bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-600/25
bg-gradient-to-r from-emerald-500 to-teal-500 shadow-xl shadow-emerald-500/20
bg-gradient-to-r from-orange-500 to-red-500 shadow-xl shadow-orange-500/25

// Mesh gradients for backgrounds
bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900
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
      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-600/25 transition-all duration-300 hover:scale-105">
        Begin Journey
      </Button>
    </div>
  </div>
  <div className="bg-gradient-to-tr from-blue-600 to-purple-700 flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
    <div className="relative z-10 w-80 h-80 bg-white/10 rounded-full backdrop-blur-sm animate-float" />
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
      <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white hover:scale-105 px-10 py-5 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300">
        Explore Now
      </Button>
      <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-5 text-xl rounded-2xl transition-all duration-300 backdrop-blur-sm">
        Learn More
      </Button>
    </div>
  </div>
</div>
```

#### Asymmetric Creative Hero
```tsx
<div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
  
  <div className="relative z-10 min-h-screen flex items-center">
    <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7 space-y-8">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium">
          ✨ Now in Beta
        </div>
        <h1 className="text-6xl lg:text-8xl font-bold text-white leading-none">
          Design
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Beyond
          </span>
          <br />
          Limits
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
          Unleash creativity with tools that adapt to your vision, not the other way around. 
          Build experiences that feel impossibly smooth and beautifully crafted.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-blue-600/25 transition-all duration-300 hover:scale-105">
            Start Creating
          </Button>
          <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/10 px-8 py-4 rounded-2xl text-lg transition-all duration-300">
            View Demo
          </Button>
        </div>
      </div>
      
      <div className="lg:col-span-5 relative">
        <div className="relative w-full aspect-square max-w-lg mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl rotate-6 animate-pulse" />
          <div className="absolute inset-4 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-3xl -rotate-3 animate-pulse animation-delay-1000" />
          <div className="absolute inset-8 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <div className="text-6xl">🎨</div>
          </div>
        </div>
      </div>
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

### Premium Button System
```tsx
// Primary CTA - Gradient with proper contrast
<Button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
  <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
  <span className="relative z-10 flex items-center gap-2">
    Get Started
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
  </span>
</Button>

// Secondary Button - Outline with hover fill
<Button variant="outline" className="group relative border-2 border-blue-600 text-blue-600 hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 overflow-hidden">
  <span className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
  <span className="relative z-10">Learn More</span>
</Button>

// Ghost Button - Minimal with backdrop
<Button variant="ghost" className="group relative text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 backdrop-blur-sm px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
  <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  <span className="relative">Explore</span>
</Button>

// Magnetic Button Effect
<Button className="group relative bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-900/25 active:scale-95">
  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  <span className="relative">Click Me</span>
</Button>

// Destructive Button - High contrast
<Button variant="destructive" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-red-600/25 transition-all duration-300 hover:scale-105">
  Delete Item
</Button>

// Success Button
<Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-emerald-600/25 transition-all duration-300 hover:scale-105">
  Save Changes
</Button>
```

### Button States & Accessibility
```tsx
// Disabled state with proper contrast
<Button disabled className="bg-slate-200 text-slate-500 cursor-not-allowed px-8 py-4 rounded-2xl font-semibold">
  Disabled
</Button>

// Loading state
<Button disabled className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2">
  <Loader2 className="w-5 h-5 animate-spin" />
  Processing...
</Button>

// Focus states for accessibility
<Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:ring-offset-2 transition-all duration-300">
  Accessible Button
</Button>
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

#### Glassmorphism Cards (Light Theme)
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item, index) => (
    <div 
      key={index}
      className="group relative bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/30 hover:border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 space-y-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
        <p className="text-slate-700 leading-relaxed">{item.description}</p>
      </div>
    </div>
  ))}
</div>
```

#### Premium Pricing Cards
```tsx
<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {plans.map((plan, index) => (
    <div 
      key={index}
      className={cn(
        "group relative rounded-3xl p-8 border transition-all duration-500 hover:scale-105",
        plan.popular 
          ? "bg-gradient-to-br from-blue-600 to-purple-700 border-transparent text-white shadow-2xl shadow-blue-600/25" 
          : "bg-white/5 backdrop-blur-lg border-white/10 hover:border-white/20"
      )}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="space-y-6">
        <div>
          <h3 className={cn("text-2xl font-bold", plan.popular ? "text-white" : "text-white")}>{plan.name}</h3>
          <p className={cn("mt-2", plan.popular ? "text-blue-100" : "text-slate-400")}>{plan.description}</p>
        </div>
        
        <div className="flex items-baseline gap-2">
          <span className={cn("text-5xl font-bold", plan.popular ? "text-white" : "text-white")}>${plan.price}</span>
          <span className={cn("text-lg", plan.popular ? "text-blue-100" : "text-slate-400")}>/month</span>
        </div>
        
        <ul className="space-y-3">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center gap-3">
              <Check className={cn("w-5 h-5", plan.popular ? "text-blue-200" : "text-emerald-400")} />
              <span className={cn(plan.popular ? "text-blue-50" : "text-slate-300")}>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className={cn(
            "w-full py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105",
            plan.popular 
              ? "bg-white text-blue-600 hover:bg-blue-50 shadow-lg" 
              : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-blue-600/25"
          )}
        >
          {plan.popular ? "Get Started" : "Choose Plan"}
        </Button>
      </div>
    </div>
  ))}
</div>
```

### Enhanced Input Field Patterns
```tsx
// Dark theme input with glow effect
<div className="group relative">
  <Input 
    className="w-full bg-slate-900/50 border-slate-700 focus:border-blue-500 text-white placeholder:text-slate-400 rounded-2xl px-6 py-4 text-lg transition-all duration-300 focus:bg-slate-900/80 focus:scale-105"
    placeholder="Enter your email"
  />
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-300" />
</div>

// Light theme input with subtle elevation
<div className="group relative">
  <Input 
    className="w-full bg-white/50 backdrop-blur-sm border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 placeholder:text-slate-500 rounded-2xl px-6 py-4 text-lg transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/10"
    placeholder="Search anything..."
  />
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-300" />
</div>

// Floating label input
<div className="group relative">
  <Input 
    id="email"
    className="peer w-full bg-transparent border-2 border-slate-300 focus:border-blue-500 text-slate-900 rounded-2xl px-6 pt-6 pb-2 text-lg transition-all duration-300"
    placeholder=" "
  />
  <Label 
    htmlFor="email"
    className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 text-lg transition-all duration-300 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-8"
  >
    Email Address
  </Label>
</div>

// Search input with icon
<div className="group relative">
  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-300" />
  <Input 
    className="w-full bg-slate-50 border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 placeholder:text-slate-500 rounded-2xl pl-12 pr-6 py-4 text-lg transition-all duration-300 focus:shadow-lg"
    placeholder="Search products, brands, and more..."
  />
</div>
```
```tsx
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

// Loading dots animation
<div className="flex items-center gap-2">
  <span className="text-slate-700">Loading</span>
  <div className="flex gap-1">
    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
  </div>
</div>

// Progress bar with gradient
<div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
  <div 
    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 relative overflow-hidden"
    style={{ width: '65%' }}
  >
    <div className="absolute inset-0 bg-white/30 animate-shimmer bg-[length:200%_100%]" />
  </div>
</div>
```
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

## UNIQUE VISUAL PATTERNS

### Bento Grid Layouts
```tsx
// Dynamic bento grid for showcasing features
<div className="grid grid-cols-4 grid-rows-4 gap-4 h-[600px]">
  <div className="col-span-2 row-span-2 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 flex flex-col justify-between text-white">
    <h3 className="text-2xl font-bold">Main Feature</h3>
    <p className="text-blue-100">Detailed description of your primary offering</p>
  </div>
  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
    <div className="text-3xl mb-4">🎯</div>
    <h4 className="font-semibold text-white">Precision</h4>
  </div>
  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-6 text-white">
    <div className="text-3xl mb-4">⚡</div>
    <h4 className="font-semibold">Speed</h4>
  </div>
  <div className="col-span-2 bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10">
    <h4 className="font-semibold text-white mb-2">Analytics</h4>
    <div className="h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl"></div>
  </div>
  <div className="row-span-2 bg-gradient-to-b from-orange-500 to-red-600 rounded-3xl p-6 text-white flex flex-col justify-between">
    <div className="text-4xl">🚀</div>
    <div>
      <h4 className="font-semibold">Growth</h4>
      <p className="text-orange-100 text-sm">Scale with confidence</p>
    </div>
  </div>
</div>
```

### Interactive Timeline
```tsx
<div className="relative max-w-4xl mx-auto">
  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>
  {timelineItems.map((item, index) => (
    <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
        <div className="group cursor-pointer">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
            <div className="text-sm text-blue-300 font-semibold mb-2">{item.date}</div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-slate-300">{item.description}</p>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-900"></div>
    </div>
  ))}
</div>
```

### Floating Action Elements
```tsx
// Floating CTA that follows scroll
<div className="fixed bottom-8 right-8 z-50">
  <Button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-600/25 transition-all duration-300 hover:scale-110">
    <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
  </Button>
</div>

// Magnetic hover effect for cards
<div className="group relative cursor-pointer transform-gpu transition-transform duration-300 hover:scale-105">
  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
    <h3 className="text-xl font-bold text-white">Magnetic Card</h3>
    <p className="text-slate-300">Hovers with subtle glow and scale effect</p>
  </div>
</div>
```

### Theme Variations
```tsx
// Light mode hero alternative
<section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center">
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-6xl lg:text-8xl font-bold mb-8">
      <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
        Beautiful
      </span>
      <br />
      <span className="text-slate-800">Designs</span>
    </h1>
    <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
      Crafted with attention to detail and modern aesthetics
    </p>
    <Button className="bg-slate-900 hover:bg-slate-800 text-white px-12 py-6 rounded-2xl text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
      Explore Collection
    </Button>
  </div>
</section>

// Dark mode with neon accents
<section className="min-h-screen bg-black relative overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
  <div className="relative z-10 container mx-auto px-4 flex items-center min-h-screen">
    <div className="text-center w-full">
      <h1 className="text-7xl lg:text-9xl font-bold mb-8">
        <span className="text-white">CYBER</span>
        <br />
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
          PUNK
        </span>
      </h1>
      <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold px-12 py-6 rounded-full text-xl shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-110">
        ENTER MATRIX
      </Button>
    </div>
  </div>
</section>
```