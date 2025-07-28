---
applyTo: 'src/components/**/*.{tsx,ts}'
---
# Component-Specific Guidelines

## COMPONENT ARCHITECTURE RULES

### UI Components (`src/components/ui/`)
- **READ-ONLY**: Never modify shadcn/ui components directly
- **EXTEND**: Create wrapper components in `src/components/common/`
- **COMPOSE**: Build complex UI by combining multiple ui components

### Common Components (`src/components/common/`)
- **REUSABLE**: Components used across multiple features
- **GENERIC**: Should accept flexible props for different use cases
- **DOCUMENTED**: Include clear prop interfaces and examples

### Feature Components (`src/components/features/`)
- **SPECIFIC**: Components tied to particular business features
- **COMPOSED**: Build from smaller ui and common components
- **SINGLE PURPOSE**: One feature concern per component

## Component Size Limits
```tsx
// GOOD: Focused, single-purpose component (20-80 lines)
const UserCard = ({ user, onEdit }: UserCardProps) => (
  <Card className="p-4">
    <Avatar src={user.avatar} />
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <Button onClick={() => onEdit(user.id)}>Edit</Button>
    </div>
  </Card>
)

// BAD: Monolithic component over 100 lines
const UserManagement = () => {
  // 200+ lines mixing multiple concerns
}
```

## Component Composition Patterns
```tsx
// PERFECT: Composition over monoliths
const DashboardPage = () => (
  <PageLayout>
    <DashboardHeader />
    <DashboardMetrics />
    <DashboardCharts />
    <DashboardActivity />
  </PageLayout>
)

// Each sub-component is 20-80 lines and focused
```
