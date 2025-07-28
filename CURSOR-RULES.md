# Cursor Rules Summary

This project uses organized Cursor rules located in `.cursor/rules/` to maintain code quality and consistency.

## Quick Reference

### Always Active
- **Core Rules** - Architecture patterns, component limits, quality gates

### Context-Aware Rules (Auto-load based on files you edit)
- **Components** - When editing `src/components/**` or `src/pages/**`
- **Hooks** - When editing `src/hooks/**`
- **Design** - When editing UI/styling files
- **Services** - When editing `src/lib/**` or API files
- **Forms** - When editing form components or validation schemas
- **TypeScript** - When editing utility/type files

### Manual Reference
Use `@rule-name` in your prompts:
- `@quality` - Quality checklist before shipping
- `@components` - Component development guidance
- `@design` - Design system and accessibility
- `@forms` - Form handling patterns

## Key Principles
- **Component Limit**: 300 lines max, prefer 20-100 lines
- **Composition**: Build complex UI from smaller components
- **Accessibility**: WCAG 2.1 AA standards (4.5:1 contrast)
- **Type Safety**: Shared types in `lib/types.ts`
- **Service Layer**: No inline API calls in components
- **Design Philosophy**: Industry-appropriate design with purposeful color psychology
- **Visual Quality**: Premium, sophisticated interfaces that feel custom-crafted

## Before Shipping
1. Run `npm run lint` (must pass)
2. Test responsive design
3. Verify accessibility contrast
4. Check for console errors

See `.cursor/rules/README.md` for detailed documentation.
