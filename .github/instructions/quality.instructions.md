---
applyTo: 'src/**/*.{tsx,ts,css}'
---

## QUALITY CHECKLIST

Before completing any code implementation, ensure:

### Code Architecture Quality

- [ ] **No monolithic components** - Each component under 200 lines with single responsibility
- [ ] **Logic extraction** - Reusable logic moved to custom hooks, not duplicated
- [ ] **Type safety** - Shared interfaces defined in `lib/types.ts` and reused
- [ ] **Service layer** - API calls abstracted to service functions, not inline
- [ ] **Proper imports** - Using path aliases (@/) and organized import groups
- [ ] **Validation schemas** - Zod schemas shared and reused across components
- [ ] **Component composition** - Complex UI built from smaller, focused components

### Design Quality

- [ ] Uses sophisticated color palette (not default grays)
- [ ] Has proper visual hierarchy with varied typography scales
- [ ] Includes subtle animations and micro-interactions
- [ ] Features generous whitespace and purposeful spacing
- [ ] All interactive elements have clear hover/active states
- [ ] **Accessibility standards are met (proper contrast, focus states)**
- [ ] Mobile experience is thoughtfully designed
- [ ] Maintains consistent color story throughout

# Quality Standards & Never-Ship Rules

## NEVER SHIP CODE THAT:

- Has ESLint errors (run `npm run lint` first)
- Uses poor accessibility (contrast ratio below 4.5:1)
- Has monolithic components over 300 lines
- Contains inline API calls in UI components
- Uses generic designs without industry context
- Has console errors or warnings
- Lacks responsive design testing
- Missing TypeScript types for new interfaces
