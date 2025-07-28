---
applyTo: 'src/**/*.{tsx,ts}'
---
# Code Architecture & Reusability Guidelines

## CRITICAL ARCHITECTURE RULES

### NEVER CREATE:
- Components over 300 lines
- Duplicate logic across components
- Inline API calls in UI components
- Mixed concerns (UI + business logic + API)
- Copy-pasted code blocks

### ALWAYS CREATE:
- Single-responsibility components (20-100 lines)
- Custom hooks for reusable logic
- Service layer for API calls
- Shared types in `lib/types.ts`
- Composition patterns from smaller components

## Component Composition Over Monoliths

**NEVER create large, monolithic components that handle multiple concerns:**
**Avoid**: Single components or page that exceed 300 lines or handle multiple responsibilities
**Avoid**: Pages that contain all logic inline instead of using smaller components
**Avoid**: Components that mix UI rendering, business logic, and API calls

**ALWAYS break down complex functionality into smaller, reusable pieces:**
**Create**: Focused components with single responsibilities (20-100 lines)
**Create**: Composition patterns using multiple small components 
**Create**: Custom hooks for reusable logic extraction
**Create**: Separate layers for data fetching, business logic, and presentation

## Component Organization Strategy

### 1. Feature-Based Organization
```tsx
// Wrong: Everything in one file
const Dashboard = () => {
  // 300+ lines of mixed logic
  return <div>{/* massive JSX */}</div>
}

// ✅ Correct: Composed from focused components
const Dashboard = () => (
  <DashboardLayout>
    <DashboardHeader />
    <DashboardStats />
    <DashboardCharts />
    <DashboardActivity />
  </DashboardLayout>
)
```

### 2. Reusable Component Patterns
```tsx
// ✅ Base components for consistent UI patterns
const Card = ({ children, className, ...props }) => (
  <div className={cn("rounded-lg border bg-card", className)} {...props}>
    {children}
  </div>
)

// ✅ Composite components for complex patterns  
const StatsCard = ({ title, value, change, icon: Icon }) => (
  <Card className="p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-sm text-green-600">{change}</p>
      </div>
      <Icon className="h-8 w-8 text-muted-foreground" />
    </div>
  </Card>
)
```

### 3. Logic Extraction Patterns
```tsx
// ✅ Custom hooks for reusable stateful logic
const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value: any) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}

// ✅ Service layer for API interactions
export const userService = {
  async getUser(id: string) {
    const response = await fetch(`/api/users/${id}`)
    return response.json()
  },
  
  async updateUser(id: string, data: Partial<User>) {
    const response = await fetch(`/api/users/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    return response.json()
  }
}
```

## File Organization Best Practices

### 1. Component File Structure
```tsx
// ComponentName/index.ts - Export barrel
export { ComponentName } from './ComponentName'
export type { ComponentNameProps } from './ComponentName'

// ComponentName/ComponentName.tsx - Main component
interface ComponentNameProps {
  // Props definition
}

export const ComponentName = ({ ...props }: ComponentNameProps) => {
  // Component implementation
}

// ComponentName/ComponentName.stories.tsx - Storybook stories (if used)
// ComponentName/ComponentName.test.tsx - Tests (if used)
```

### 2. Shared Type Definitions
```tsx
// lib/types.ts - Shared application types
export interface User {
  id: string
  email: string
  name: string
  avatar?: string
}

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export type Theme = 'light' | 'dark' | 'system'
export type UserRole = 'admin' | 'user' | 'guest'
```

### 3. Utility Function Organization
```tsx
// lib/utils.ts - General utilities (keep existing cn function)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string, format?: string): string {
  // Date formatting utility
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  // Debounce utility
}

// lib/constants.ts - Application constants
export const API_ENDPOINTS = {
  USERS: '/api/users',
  POSTS: '/api/posts',
  AUTH: '/api/auth'
} as const

export const QUERY_KEYS = {
  USERS: 'users',
  POSTS: 'posts',
  USER_PROFILE: 'user-profile'
} as const
```

## Custom Hook Patterns for Reusability

### 1. Data Fetching Hooks
```tsx
// hooks/useUsers.ts
export const useUsers = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.USERS],
    queryFn: () => userService.getAllUsers()
  })
}

export const useUser = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.USERS, id],
    queryFn: () => userService.getUser(id),
    enabled: !!id
  })
}
```

### 2. Form Handling Hooks
```tsx
// hooks/useUserForm.ts
export const useUserForm = (initialData?: Partial<User>) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: initialData?.name || '',
      email: initialData?.email || '',
      // ... other fields
    }
  })

  const { mutate: saveUser, isPending } = useMutation({
    mutationFn: userService.updateUser,
    onSuccess: () => {
      toast.success('User updated successfully')
    }
  })

  return { form, saveUser, isPending }
}
```

### 3. UI State Hooks
```tsx
// hooks/useDisclosure.ts
export const useDisclosure = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState)
  
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen(prev => !prev), [])
  
  return { isOpen, open, close, toggle }
}
```

## Validation Schema Reusability

### 1. Shared Zod Schemas
```tsx
// lib/validations/common.ts
export const emailSchema = z.string().email('Invalid email address')
export const phoneSchema = z.string().regex(/^\+?[\d\s-()]+$/, 'Invalid phone number')

// lib/validations/user.ts
export const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: emailSchema,
  phone: phoneSchema.optional(),
  role: z.enum(['admin', 'user', 'guest'])
})

export type UserFormData = z.infer<typeof userSchema>
```

## Component Composition Patterns

### 1. Compound Components
```tsx
// components/common/DataTable/DataTable.tsx
const DataTable = ({ children }: { children: React.ReactNode }) => (
  <div className="border rounded-lg overflow-hidden">
    {children}
  </div>
)

const DataTableHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-muted p-4 border-b">
    {children}
  </div>
)

const DataTableBody = ({ children }: { children: React.ReactNode }) => (
  <div className="divide-y">
    {children}
  </div>
)

// Usage: Flexible composition
<DataTable>
  <DataTableHeader>
    <h3>Users</h3>
  </DataTableHeader>
  <DataTableBody>
    {users.map(user => <UserRow key={user.id} user={user} />)}
  </DataTableBody>
</DataTable>
```

### 2. Render Props Pattern
```tsx
// components/common/DataLoader.tsx
interface DataLoaderProps<T> {
  data: T[] | undefined
  isLoading: boolean
  error: Error | null
  children: (data: T[]) => React.ReactNode
  loadingComponent?: React.ReactNode
  errorComponent?: (error: Error) => React.ReactNode
  emptyComponent?: React.ReactNode
}

export const DataLoader = <T,>({
  data,
  isLoading,
  error,
  children,
  loadingComponent = <div>Loading...</div>,
  errorComponent = (err) => <div>Error: {err.message}</div>,
  emptyComponent = <div>No data found</div>
}: DataLoaderProps<T>) => {
  if (isLoading) return <>{loadingComponent}</>
  if (error) return <>{errorComponent(error)}</>
  if (!data || data.length === 0) return <>{emptyComponent}</>
  return <>{children(data)}</>
}
```

## CRITICAL RULES FOR CODE ORGANIZATION

1. **Single Responsibility**: Each component should have one clear purpose
2. **Composition Over Inheritance**: Build complex UIs by combining simple components
3. **Extract Logic**: Move reusable logic into custom hooks, not copy-paste
4. **Shared Types**: Define interfaces once, import everywhere
5. **Service Layer**: Keep API calls separate from UI components
6. **Consistent Patterns**: Use the same patterns across the entire application
7. **Import Organization**: Group imports by type (React, libraries, local)

## Project Structure
```
/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components (pre-built)
│   │   ├── common/          # Reusable components (Header, Footer, Layout)
│   │   ├── forms/           # Form-specific components
│   │   └── features/        # Feature-specific component groups
│   ├── hooks/               # Custom React hooks (reusable logic)
│   ├── lib/
│   │   ├── utils.ts         # General utility functions
│   │   ├── constants.ts     # App constants and enums
│   │   ├── types.ts         # Shared TypeScript types
│   │   └── validations/     # Zod schemas and form validations
│   ├── pages/               # Route components (composition only)
│   ├── services/            # API calls and external service integrations
│   ├── context/             # React context providers
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