---
applyTo: 'src/pages/**/*.{tsx,ts}'
---
# Page Component Guidelines

## PAGE ARCHITECTURE RULES

### Pages are COMPOSITION ONLY
Pages should be thin orchestration layers that compose smaller components:

```tsx
// PERFECT: Page as composition layer (10-30 lines max)
const DashboardPage = () => {
  return (
    <PageLayout>
      <DashboardHeader />
      <DashboardMetrics />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCharts />
        <DashboardActivity />
      </div>
    </PageLayout>
  )
}

// NEVER: Business logic in pages
const BadDashboardPage = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // 50+ lines of data fetching logic
  }, [])
  
  // 200+ lines of rendering logic
  return <div>{/* massive JSX */}</div>
}
```

### Page Organization Rules
1. **Import dependencies** (max 5-8 imports)
2. **Call custom hooks** for data/state (1-3 hooks max)
3. **Return JSX composition** (10-20 lines max)
4. **No business logic** - extract to hooks or services
5. **No inline handlers** - extract to components or hooks

### Data Loading Pattern
```tsx
```tsx
// PERFECT: Data loading in custom hooks
const UserProfilePage = () => {
  const { user, isLoading, error } = useUser()
  
  if (isLoading) return <LoadingSpinner />
  if (error) return <ErrorMessage error={error} />
  
  return (
    <PageLayout>
      <UserHeader user={user} />
      <UserDetails user={user} />
      <UserActivity user={user} />
    </PageLayout>
  )
}
```
```

### Page File Structure
```
src/pages/
├── Index.tsx           # Landing page
├── Dashboard.tsx       # Main dashboard
├── Users/
│   ├── UsersPage.tsx   # Users list page
│   └── UserDetail.tsx  # Single user page
├── Settings/
│   ├── SettingsPage.tsx
│   └── ProfilePage.tsx
└── NotFound.tsx        # 404 page
```
