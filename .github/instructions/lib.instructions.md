---
applyTo: 'src/lib/**/*.{ts,tsx}'
---
# Utility & Service Guidelines

## LIB ORGANIZATION RULES

### File Structure
```
src/lib/
├── utils.ts          # General utilities (keep existing cn function)
├── types.ts          # Shared TypeScript interfaces
├── constants.ts      # App-wide constants
├── validations/      # Zod schemas
│   ├── user.ts
│   ├── product.ts
│   └── common.ts
└── services/         # API service layer
    ├── api.ts        # Base API client
    ├── userService.ts
    └── productService.ts
```

### Utility Functions (utils.ts)
```tsx
// Keep existing cn function
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add other utilities
export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat('en-US').format(new Date(date))
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}
```

### Type Definitions (types.ts)
```tsx
// Shared application types
export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: UserRole
}

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export type UserRole = 'admin' | 'user' | 'guest'
export type Theme = 'light' | 'dark' | 'system'
```

### Constants (constants.ts)
```tsx
// Application constants
export const API_ENDPOINTS = {
  USERS: '/api/users',
  PRODUCTS: '/api/products',
  AUTH: '/api/auth',
} as const

export const QUERY_KEYS = {
  USERS: 'users',
  PRODUCTS: 'products',
  USER_PROFILE: 'user-profile',
} as const

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  USERS: '/users',
  PROFILE: '/profile',
} as const
```

### Validation Schemas (validations/)
```tsx
// validations/common.ts
export const emailSchema = z.string().email('Invalid email')
export const phoneSchema = z.string().regex(/^\+?[\d\s-()]+$/, 'Invalid phone')

// validations/user.ts
export const userSchema = z.object({
  name: z.string().min(2, 'Name too short'),
  email: emailSchema,
  phone: phoneSchema.optional(),
})

export type UserFormData = z.infer<typeof userSchema>
```
