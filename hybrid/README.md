# Hybrid Structure 🔀

[← Back to Main Guide](../)

## Overview

The Hybrid structure combines the best aspects of multiple organizational patterns. It typically merges feature-based organization with atomic design principles or component-based structure, creating a flexible and scalable architecture suitable for complex enterprise applications.

## 📋 Description

A hybrid approach recognizes that no single organizational pattern fits all needs. It strategically combines:
- **Feature-based organization** for business logic and domain-specific code
- **Atomic design or component hierarchy** for shared UI components
- **Layered architecture** for cross-cutting concerns

This creates a structure that's both feature-focused and component-organized.

**Key Characteristics:**
- Combines multiple organizational patterns
- Feature folders for business domains
- Shared component library (often with atomic hierarchy)
- Clear separation between feature-specific and shared code
- Flexible and pragmatic

## ✅ Pros

1. **Best of Both Worlds**: Combines feature isolation with component reusability
2. **Highly Scalable**: Works for very large applications
3. **Clear Boundaries**: Features are isolated, shared code is centralized
4. **Team-Friendly**: Different teams can own features while sharing components
5. **Flexible**: Adapts to project needs
6. **Maintainable**: Clear organization makes code easy to find
7. **Reusability**: Shared component library promotes DRY
8. **Business Alignment**: Features match business domains

## ❌ Cons

1. **Complex Setup**: More folders and structure to understand
2. **Decision Overhead**: Must decide what goes where
3. **Learning Curve**: Team needs to understand multiple patterns
4. **Over-Engineering Risk**: Can be overkill for small projects
5. **Maintenance Overhead**: More structure to maintain
6. **Potential Inconsistency**: Without guidelines, structure can diverge

## 📁 Structure Tree

```
hybrid/
├── src/
│   ├── features/                    # Feature-based organization
│   │   ├── auth/                    # Authentication feature
│   │   │   ├── components/          # Feature-specific components
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   ├── SignupForm.jsx
│   │   │   │   └── PasswordReset.jsx
│   │   │   ├── hooks/
│   │   │   │   └── useAuth.js
│   │   │   ├── services/
│   │   │   │   └── authService.js
│   │   │   ├── utils/
│   │   │   │   └── validators.js
│   │   │   └── index.js             # Public API
│   │   ├── dashboard/               # Dashboard feature
│   │   │   ├── components/
│   │   │   │   ├── DashboardLayout.jsx
│   │   │   │   ├── StatsWidget.jsx
│   │   │   │   └── ActivityFeed.jsx
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   └── index.js
│   │   └── profile/                 # Profile feature
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── services/
│   │       └── index.js
│   ├── shared/                      # Shared across all features
│   │   ├── components/              # Atomic design hierarchy
│   │   │   ├── atoms/               # Basic building blocks
│   │   │   │   ├── Button/
│   │   │   │   ├── Input/
│   │   │   │   ├── Label/
│   │   │   │   └── Icon/
│   │   │   ├── molecules/           # Simple combinations
│   │   │   │   ├── FormField/
│   │   │   │   ├── SearchBar/
│   │   │   │   └── Card/
│   │   │   └── organisms/           # Complex components
│   │   │       ├── Header/
│   │   │       ├── Footer/
│   │   │       └── Sidebar/
│   │   ├── hooks/                   # Shared custom hooks
│   │   │   ├── useFetch.js
│   │   │   ├── useLocalStorage.js
│   │   │   └── useDebounce.js
│   │   ├── utils/                   # Shared utilities
│   │   │   ├── formatters.js
│   │   │   ├── validators.js
│   │   │   └── helpers.js
│   │   ├── services/                # Shared services
│   │   │   ├── api.js
│   │   │   └── storage.js
│   │   ├── constants/               # Global constants
│   │   │   └── config.js
│   │   └── types/                   # TypeScript types (if using TS)
│   │       └── common.types.ts
│   ├── layouts/                     # Page layouts/templates
│   │   ├── MainLayout.jsx
│   │   ├── AuthLayout.jsx
│   │   └── DashboardLayout.jsx
│   ├── routes/                      # Route configuration
│   │   └── index.jsx
│   ├── store/                       # Global state management
│   │   ├── slices/
│   │   └── store.js
│   ├── App.jsx                      # Root component
│   └── index.js                     # Entry point
├── public/
│   └── index.html
├── package.json
└── README.md
```

## 🌍 Real-World Examples

Here are popular repositories using hybrid structures:

1. **[Grafana](https://github.com/grafana/grafana)**
   - Complex monitoring platform
   - Combines feature modules with shared components
   - ~61k+ stars

2. **[Discourse](https://github.com/discourse/discourse)**
   - Forum software with hybrid structure
   - Feature-based with shared component library
   - ~40k+ stars

3. **[VS Code](https://github.com/microsoft/vscode)**
   - Microsoft's editor uses hybrid patterns
   - Feature areas with shared utilities and components
   - ~160k+ stars

## 🎯 When to Use

- **Large Enterprise Applications**: Complex business requirements
- **Design System + Features**: Need both component library and features
- **Multiple Teams**: Different teams working on different areas
- **Long-Term Projects**: Applications that will grow significantly
- **Complex Domain Logic**: Rich business logic with sophisticated UI
- **Shared Component Library**: Reusable components across features
- **Microservices Frontend**: Different features might become separate apps

## 🚀 Migration Path

### From Feature-Based
Add atomic design to shared components:
```
shared/
  components/
    atoms/      # Add this
    molecules/  # Add this
    organisms/  # Add this
```

### From Component-Based
Add feature folders:
```
features/
  auth/         # Add this
  dashboard/    # Add this
  profile/      # Add this
```

## 💡 Best Practices

1. **Clear Guidelines**: Document what goes where
2. **Feature Independence**: Features should be self-contained
3. **Shared Component Review**: Careful what becomes "shared"
4. **Consistent Patterns**: All features follow same structure
5. **Public APIs**: Features export clean public interfaces
6. **Atomic Discipline**: Maintain atomic design hierarchy in shared
7. **Documentation**: Document structure and decisions
8. **Regular Refactoring**: Move code as patterns emerge

## 🔄 Decision Framework

### When to Put Code in Features vs Shared

**Feature-specific** (keep in feature folder):
- Used only by one feature
- Contains feature business logic
- Tightly coupled to feature domain

**Shared** (move to shared folder):
- Used by 3+ features
- No business logic (pure UI or utilities)
- Generic and reusable

### Component Hierarchy Decision

**Atoms**: Can't be broken down further
**Molecules**: 2-3 atoms together
**Organisms**: Complex components with multiple parts

## 📊 Architecture Layers

```
┌─────────────────────────────────────┐
│          Features Layer             │
│   (Business Logic & Domain Code)    │
├─────────────────────────────────────┤
│      Shared Components Layer        │
│    (Reusable UI - Atomic Design)    │
├─────────────────────────────────────┤
│       Shared Services Layer         │
│    (API, Utils, State Management)   │
└─────────────────────────────────────┘
```

## 🎭 Example Use Cases

### E-commerce Platform
- Features: Checkout, ProductCatalog, UserAccount, OrderHistory
- Shared: Button, Card, Modal (atoms/molecules)
- Layouts: ShoppingLayout, CheckoutLayout

### SaaS Dashboard
- Features: Analytics, UserManagement, Billing, Settings
- Shared: DataTable, Chart, Form components
- Layouts: DashboardLayout, AuthLayout

### Social Media App
- Features: Feed, Messaging, Profile, Notifications
- Shared: Avatar, Button, Card, Input
- Layouts: MainLayout, ProfileLayout

---

**Previous**: Learn about [Feature-Based](../feature-based/) and [Atomic Design](../atomic-design/) structures that inspired this hybrid approach.
