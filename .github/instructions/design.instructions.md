---
applyTo: 'src/**/*.{tsx,css}'
---
# Design System Guidelines

## CRITICAL DESIGN RULES

### NEVER CREATE:
- **Poor accessibility** - must maintain 4.5:1 contrast ratio minimum
- **Generic designs** - always adapt to target industry/audience  
- **Template-like layouts** - create unique, custom-crafted interfaces
- **Static interfaces** - include sophisticated micro-interactions
- **Default grays** (slate-400, gray-500) - use rich, intentional color palettes

### ALWAYS CREATE:
- **Industry-appropriate design** - adapt colors/typography to target audience
- **Premium visual hierarchy** - sophisticated use of scale, contrast, spacing
- **Accessible interfaces** - WCAG 2.1 AA compliant (4.5:1 text contrast)
- **Mobile-first responsive** - progressive enhancement approach
- **Purposeful animations** - enhance usability, not just decoration

## Core Design Philosophy

**Every interface must feel like it was crafted by a top-tier design agency.**
- **Emotional Impact First**: Ask "Does this make users stop and say 'wow'?"
- **Sophisticated Hierarchy**: Use contrast, scale, and spacing strategically
- **Purposeful Motion**: Every animation should enhance usability
- **Breathing Room**: Generous whitespace creates luxury feel
- **Cohesive Visual Story**: Design choices should work together harmoniously
- **Unique Visual Identity**: Design should feel custom-crafted, never template-like
- **Industry-Appropriate Design**: Visual language should match the target audience and use case
- **Color Psychology**: Use colors intentionally to evoke the right emotions and associations

## Visual Quality Standards

**NEVER CREATE**:
- Generic card grids with default shadows
- Plain white backgrounds with black text
- Basic hover states (simple color changes)
- Template-like layouts
- Uniform spacing everywhere
- Overuse of default Tailwind grays without intention
- Static, lifeless interfaces
- Color choices without consideration for brand or industry context

**ALWAYS CREATE**:
- Dynamic, engaging compositions with visual flow
- Rich, intentional color palettes that serve the design purpose
- Sophisticated micro-interactions
- Asymmetrical layouts that guide the eye
- Varied spacing that creates rhythm
- High contrast, accessible text combinations
- Interactive, responsive designs with personality
- Color schemes that enhance the user experience and brand message

## INDUSTRY-SPECIFIC DESIGN ADAPTATION

### Design Philosophy by Industry
**Always adapt visual identity, aesthetic tone, and emotional impact to match the target industry or niche:**

### Technology & SaaS
- **Color Psychology**: Modern, innovative, forward-thinking palettes with high-tech feeling
- **Typography**: Clean geometric sans-serif with futuristic character
- **Visual Style**: Minimal, data-driven, sophisticated gradients and depth
- **Animation**: Smooth, precise micro-interactions that feel cutting-edge
- **Emotional Tone**: Innovation, efficiency, technological advancement

### Finance & Banking
- **Color Psychology**: Trustworthy, stable, premium tones that convey security
- **Typography**: Professional typography mixing authority with approachability
- **Visual Style**: Clean, sophisticated, confidence-building with subtle luxury
- **Animation**: Subtle, professional interactions that reinforce reliability
- **Emotional Tone**: Trust, stability, professional competence

### Healthcare & Medical
- **Color Psychology**: Calming, clean, trustworthy palette promoting wellness
- **Typography**: Highly readable, accessible fonts prioritizing clarity
- **Visual Style**: Clean, sterile-feeling but warm, emphasizing care and precision
- **Animation**: Gentle, non-distracting transitions that don't overwhelm
- **Emotional Tone**: Care, trust, healing, accessibility

### Creative & Design
- **Color Psychology**: Bold, artistic, expressive palettes showcasing creativity
- **Typography**: Creative font combinations demonstrating design expertise
- **Visual Style**: Portfolio-focused, visually striking, artistic expression
- **Animation**: Playful, engaging interactions that showcase creativity
- **Emotional Tone**: Inspiration, creativity, artistic vision

### E-commerce & Retail
- **Color Psychology**: Warm, inviting tones that encourage purchasing decisions
- **Typography**: Friendly, approachable fonts that build customer connection
- **Visual Style**: Product-focused, conversion-optimized, shopping-friendly
- **Animation**: Shopping-focused interactions (product previews, cart actions)
- **Emotional Tone**: Desire, comfort, value, satisfaction

### Education & Learning
- **Color Psychology**: Fresh, energetic palettes that motivate and inspire learning
- **Typography**: Clear, student-friendly fonts optimized for extended reading
- **Visual Style**: Approachable, encouraging, progress-focused design patterns
- **Animation**: Learning-focused progressions and achievement celebrations
- **Emotional Tone**: Growth, achievement, encouragement, curiosity

### Real Estate & Property
- **Color Psychology**: Sophisticated, luxurious tones suggesting premium lifestyle
- **Typography**: Elegant typography reflecting property quality and sophistication
- **Visual Style**: Property showcase-focused with luxury aesthetic appeal
- **Animation**: Property tour-inspired interactions and smooth transitions
- **Emotional Tone**: Aspiration, luxury, home, investment value

### Food & Restaurant
- **Color Psychology**: Appetite-stimulating, warm palettes that enhance food appeal
- **Typography**: Warm, inviting fonts that create culinary atmosphere
- **Visual Style**: Food photography-focused with sensory appeal
- **Animation**: Menu interactions and ordering flow optimizations
- **Emotional Tone**: Appetite, comfort, satisfaction, culinary experience

### Fitness & Wellness
- **Color Psychology**: Energetic, motivational palettes inspiring action and health
- **Typography**: Strong, dynamic fonts conveying energy and motivation
- **Visual Style**: Progress-focused, health-conscious, achievement-oriented
- **Animation**: Activity-based interactions showing progress and momentum
- **Emotional Tone**: Energy, motivation, achievement, transformation

### Legal & Professional Services
- **Color Psychology**: Authoritative, trustworthy tones conveying expertise
- **Typography**: Professional typography balancing authority with accessibility
- **Visual Style**: Credible, document-focused, emphasizing expertise
- **Animation**: Minimal, professional interactions maintaining gravitas
- **Emotional Tone**: Authority, trust, competence, reliability

### Travel & Hospitality
- **Color Psychology**: Wanderlust-inspiring palettes evoking adventure and escape
- **Typography**: Adventure-inspiring fonts suggesting exploration and discovery
- **Visual Style**: Destination-focused, experiential, emotionally evocative
- **Animation**: Journey-themed interactions and exploration-inspired transitions
- **Emotional Tone**: Adventure, escape, discovery, memorable experiences

### ALWAYS ASK YOURSELF:
1. What industry/niche is this for?
2. What emotions should this evoke in the target audience?
3. What visual expectations and cultural norms does this industry have?
4. How can the design reinforce trust, expertise, or desired brand perception?
5. What level of formality, playfulness, or sophistication is appropriate?
6. Does the color palette, typography, and layout communicate the right message?
7. Will this design differentiate from competitors while meeting user expectations?

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
// ❌ Poor contrast combinations - AVOID THESE PATTERNS
bg-slate-400 text-white          // Only 3.1:1 ratio
bg-slate-500 text-white          // Only 4.6:1 ratio (use darker backgrounds)
text-slate-400 on bg-white       // Common CTA text mistake
text-slate-500 on bg-slate-100   // Poor secondary button contrast
border-slate-400 text-slate-400  // Poor outline button
border-white/30 text-white       // Border invisible
bg-gray-100 text-gray-500        // Very common but poor contrast

// ✅ Better alternatives - USE THESE PATTERNS
bg-slate-600 text-white          // 8.59:1 ratio - safe
bg-slate-700 text-white          // 11.63:1 ratio - safer
text-slate-700 on bg-white       // 10.45:1 ratio - excellent
border-slate-700 text-slate-700  // High contrast outline
bg-slate-900 text-slate-100      // 15.8:1 ratio - premium
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