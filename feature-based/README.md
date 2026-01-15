# Feature-Based Structure 🎯

[← Back to Main Guide](../)

## Overview

The Feature-Based structure organizes code by business features or domain modules rather than technical layers. Each feature contains all the code needed for that specific business functionality, promoting high cohesion and loose coupling.

## 📋 Description

In a feature-based structure, the project is organized around business features or user-facing functionality. Each feature folder contains everything related to that feature: components, hooks, utilities, state management, and API calls. This creates self-contained modules that can be developed, tested, and maintained independently.

**Key Characteristics:**
- Organization by business domain/feature
- High cohesion within features
- Loose coupling between features
- Clear feature boundaries
- Shared code separated from feature-specific code

## ✅ Pros

1. **Business Logic Alignment**: Structure matches business requirements
2. **Feature Independence**: Features can be developed separately
3. **Team Scalability**: Different teams can own different features
4. **Easy Navigation**: Find all code related to a feature in one place
5. **Code Ownership**: Clear responsibility boundaries
6. **Modular Architecture**: Features can be extracted or reused
7. **Parallel Development**: Multiple features can be worked on simultaneously
8. **Reduced Merge Conflicts**: Different features = different files

## ❌ Cons

1. **Code Duplication**: Similar functionality might be duplicated across features
2. **Shared Dependencies**: Managing shared code can be complex
3. **Initial Setup Overhead**: More planning needed upfront
4. **Feature Boundaries**: Sometimes hard to define clear boundaries
5. **Shared State Complexity**: Cross-feature state management is challenging
6. **Learning Curve**: New developers need to understand feature domains

## 📁 Structure Tree

```
feature-based/
├── src/
│   ├── features/                  # All application features
│   │   ├── auth/                  # Authentication feature
│   │   │   ├── components/
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   ├── SignupForm.jsx
│   │   │   │   └── PasswordReset.jsx
│   │   │   ├── hooks/
│   │   │   │   └── useAuth.js
│   │   │   ├── services/
│   │   │   │   └── authService.js
│   │   │   ├── utils/
│   │   │   │   └── validators.js
│   │   │   ├── types/
│   │   │   │   └── auth.types.ts
│   │   │   └── index.js          # Public API of feature
│   │   ├── dashboard/             # Dashboard feature
│   │   │   ├── components/
│   │   │   │   ├── DashboardLayout.jsx
│   │   │   │   ├── StatsCard.jsx
│   │   │   │   └── ActivityFeed.jsx
│   │   │   ├── hooks/
│   │   │   │   └── useDashboardData.js
│   │   │   ├── services/
│   │   │   │   └── dashboardService.js
│   │   │   └── index.js
│   │   └── profile/               # User profile feature
│   │       ├── components/
│   │       │   ├── ProfileCard.jsx
│   │       │   ├── EditProfile.jsx
│   │       │   └── Avatar.jsx
│   │       ├── hooks/
│   │       │   └── useProfile.js
│   │       ├── services/
│   │       │   └── profileService.js
│   │       └── index.js
│   ├── shared/                    # Shared across features
│   │   ├── components/            # Reusable UI components
│   │   │   ├── Button/
│   │   │   ├── Modal/
│   │   │   └── Input/
│   │   ├── hooks/                 # Reusable hooks
│   │   │   ├── useFetch.js
│   │   │   └── useLocalStorage.js
│   │   ├── utils/                 # Shared utilities
│   │   │   ├── format.js
│   │   │   └── validation.js
│   │   ├── services/              # Shared services
│   │   │   └── api.js
│   │   └── constants/
│   │       └── config.js
│   ├── config/                    # App configuration
│   │   ├── routes.js
│   │   └── theme.js
│   ├── App.jsx                    # Root component
│   └── index.js                   # Entry point
├── public/
│   └── index.html
├── package.json
└── README.md
```

## 🌍 Real-World Examples

Here are popular repositories that use feature-based structure:

1. **[Gitlab Frontend](https://github.com/gitlabhq/gitlabhq)**
   - Large-scale application organized by features/domains
   - Clear separation of business logic by area
   - ~23k+ stars

2. **[React Boilerplate](https://github.com/react-boilerplate/react-boilerplate)**
   - Production-ready React app with feature-based structure
   - Demonstrates scalable architecture patterns
   - ~29k+ stars

3. **[Bulletproof React](https://github.com/alan2207/bulletproof-react)**
   - Opinionated React architecture with feature-based organization
   - Best practices for scalable applications
   - ~24k+ stars

## 🎯 When to Use

- **Medium to Large Applications**: More than 20+ components
- **Multiple Business Domains**: Distinct feature areas
- **Team-Based Development**: Different teams own different features
- **Long-Term Projects**: Projects that will grow over time
- **Clear Feature Boundaries**: When features are well-defined
- **Microservices Architecture**: When features might become services
- **Enterprise Applications**: Complex business logic

## 🚀 When to Migrate Away

Consider a hybrid or other approach when:
- Features are too interdependent
- Too much code duplication across features
- Shared state becomes too complex
- Feature boundaries are unclear
- Need more granular component organization

## 💡 Best Practices

1. **Clear Feature Boundaries**: Define what belongs in each feature
2. **Public APIs**: Each feature exports a public API via index.js
3. **Minimize Cross-Feature Imports**: Features should be self-contained
4. **Shared Code**: Extract truly shared code to shared/ folder
5. **Feature Documentation**: Document each feature's purpose and API
6. **Consistent Structure**: All features follow the same internal structure
7. **Feature Flags**: Use feature flags for gradual rollouts
8. **Domain-Driven Design**: Align features with business domains

## 🔄 Feature Module Pattern

Each feature should have a consistent structure:

```
feature-name/
├── components/        # Feature-specific components
├── hooks/            # Feature-specific hooks
├── services/         # API calls for this feature
├── utils/            # Feature-specific utilities
├── types/            # TypeScript types (if using TS)
├── constants/        # Feature-specific constants
├── __tests__/        # Feature tests
└── index.js          # Public API (what the feature exports)
```

## 🔐 Feature Encapsulation

**Good Practice** ✅
```javascript
// Other features import from the public API
import { LoginForm, useAuth } from '@/features/auth';
```

**Bad Practice** ❌
```javascript
// Don't import internal implementation details
import LoginForm from '@/features/auth/components/LoginForm';
```

---

**Next Steps**: For design system needs, consider [Atomic Design](../atomic-design/), or for complex apps, try [Hybrid](../hybrid/) structure.
