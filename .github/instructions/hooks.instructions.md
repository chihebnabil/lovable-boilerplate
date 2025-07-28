---
applyTo: 'src/hooks/**/*.{ts,tsx}'
---
# Custom Hooks Guidelines

## HOOK PATTERNS & BEST PRACTICES

### Data Fetching Hooks
```tsx
// PERFECT: Focused data fetching
export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => userService.getAllUsers(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export const useUser = (id: string) => {
  return useQuery({
    queryKey: ['users', id],
    queryFn: () => userService.getUser(id),
    enabled: !!id,
  })
}
```

### Form Hooks
```tsx
// PERFECT: Reusable form logic
export const useUserForm = (initialData?: Partial<User>) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: initialData || {},
  })

  const { mutate: saveUser, isPending } = useMutation({
    mutationFn: userService.updateUser,
    onSuccess: () => toast.success('User saved'),
    onError: (error) => toast.error(error.message),
  })

  return { form, saveUser, isPending }
}
```

### UI State Hooks
```tsx
// PERFECT: Reusable UI state
export const useDisclosure = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState)
  
  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen(prev => !prev),
  }
}
```

## Hook Naming Convention
- **Data**: `useUsers`, `useUser`, `useProducts`
- **Forms**: `useUserForm`, `useProductForm`
- **UI State**: `useDisclosure`, `useToggle`, `useLocalStorage`
- **Business Logic**: `useAuth`, `useCart`, `useNotifications`
