---
applyTo: "**"
---

## QUALITY CHECKLIST

Before completing any code implementation, ensure:

### ✅ Code Architecture Quality

- [ ] **No monolithic components** - Each component under 200 lines with single responsibility
- [ ] **Logic extraction** - Reusable logic moved to custom hooks, not duplicated
- [ ] **Type safety** - Shared interfaces defined in `lib/types.ts` and reused
- [ ] **Service layer** - API calls abstracted to service functions, not inline
- [ ] **Proper imports** - Using path aliases (@/) and organized import groups
- [ ] **Validation schemas** - Zod schemas shared and reused across components
- [ ] **Component composition** - Complex UI built from smaller, focused components

### ✅ Design Quality

- [ ] Uses sophisticated color palette (not default grays)
- [ ] Has proper visual hierarchy with varied typography scales
- [ ] Includes subtle animations and micro-interactions
- [ ] Features generous whitespace and purposeful spacing
- [ ] All interactive elements have clear hover/active states
- [ ] **Accessibility standards are met (proper contrast, focus states)**
- [ ] Mobile experience is thoughtfully designed
- [ ] Maintains consistent color story throughout

### ❌ NEVER Ship Code That:

- Contains components over 200 lines mixing multiple concerns
- Has duplicated logic that could be extracted to hooks
- Uses inline API calls instead of service layer
- Lacks proper TypeScript interfaces
- Has accessibility contrast violations
- Contains copy-pasted code blocks
- Mixes business logic with presentation layer
