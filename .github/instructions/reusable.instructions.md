---
applyTo: 'src/pages/**'
task: 'Split components into separate files'
---

# Component Extraction Instructions

When working inside files in `src/pages/**`, follow these rules strictly:

## Component Splitting Rules

- If a component exceeds **100 lines**, move it to its own file.
- For each component extracted, place it in `src/components/[context]`:
  - **Layout/UI elements** → `src/components/ui/`
  - **Reusable app parts** → `src/components/common/`
  - **Feature-specific** → `src/components/features/[feature-name]/`
- Components must be named after the file (`Header.tsx` exports `Header`).
- Always update imports in the original file after extraction.
- Maintain folder structure consistency. Never create new folders unless necessary.

## Avoid

- Declaring multiple major components in a single file.
- Leaving UI logic or JSX definitions inline inside `src/pages/**`.
- Mixing layout code and business logic.
