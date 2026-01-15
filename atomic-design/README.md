# Atomic Design Structure ⚛️

[← Back to Main Guide](../)

## Overview

Atomic Design is a methodology for creating design systems by breaking down interfaces into fundamental building blocks. Inspired by chemistry, it organizes components into five distinct levels: Atoms, Molecules, Organisms, Templates, and Pages.

## 📋 Description

Created by Brad Frost, Atomic Design provides a hierarchical way to think about and build user interfaces. Components are organized from smallest to largest, promoting reusability and consistency across the application.

**Key Characteristics:**
- Hierarchical component organization
- Clear component complexity levels
- Design system foundation
- Promotes component reusability
- Consistent design language

## 🧪 The Five Levels

### 1. **Atoms** 🔴
The smallest building blocks (HTML elements or very simple components)
- Buttons, inputs, labels
- Icons, links
- Cannot be broken down further

### 2. **Molecules** 🔵
Simple groups of atoms functioning together
- Search form (input + button)
- Card header (title + icon)
- Form field (label + input + error)

### 3. **Organisms** 🟢
Complex UI components composed of molecules and/or atoms
- Navigation bar
- Product card
- Comment section

### 4. **Templates** 🟡
Page-level layouts showing content structure
- Wireframe-like layouts
- No real content
- Shows component placement

### 5. **Pages** 🟠
Specific instances of templates with real content
- Actual pages users see
- Real data and content
- Final implementation

## ✅ Pros

1. **Design System Foundation**: Perfect base for design systems
2. **Component Reusability**: Clear hierarchy promotes reuse
3. **Consistency**: Enforces consistent design patterns
4. **Documentation**: Self-documenting component hierarchy
5. **Design-Developer Collaboration**: Common language for both
6. **Scalable**: Works well for large component libraries
7. **Testing**: Easy to test components at each level
8. **Storybook-Friendly**: Natural fit for component documentation

## ❌ Cons

1. **Learning Curve**: Team needs to understand the methodology
2. **Classification Challenges**: Not always clear where components fit
3. **Over-Engineering**: Can be overkill for small projects
4. **Business Logic Unclear**: Doesn't model business domains
5. **Rigid Structure**: May feel restrictive for some teams
6. **Debate-Prone**: Teams can argue about component levels
7. **Not Feature-Focused**: Organized by UI, not business features

## 📁 Structure Tree

```
atomic-design/
├── src/
│   ├── components/
│   │   ├── atoms/                 # Smallest building blocks
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Button.css
│   │   │   │   ├── Button.test.js
│   │   │   │   └── Button.stories.js
│   │   │   ├── Input/
│   │   │   ├── Label/
│   │   │   ├── Icon/
│   │   │   └── Link/
│   │   ├── molecules/             # Simple component groups
│   │   │   ├── FormField/
│   │   │   │   ├── FormField.jsx
│   │   │   │   └── FormField.css
│   │   │   ├── SearchBar/
│   │   │   ├── CardHeader/
│   │   │   └── NavItem/
│   │   ├── organisms/             # Complex components
│   │   │   ├── Header/
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Header.css
│   │   │   ├── ProductCard/
│   │   │   ├── CommentSection/
│   │   │   └── Footer/
│   │   ├── templates/             # Page layouts
│   │   │   ├── MainLayout/
│   │   │   │   ├── MainLayout.jsx
│   │   │   │   └── MainLayout.css
│   │   │   ├── DashboardLayout/
│   │   │   └── AuthLayout/
│   │   └── pages/                 # Actual pages
│   │       ├── HomePage/
│   │       │   ├── HomePage.jsx
│   │       │   └── HomePage.css
│   │       ├── ProfilePage/
│   │       └── SettingsPage/
│   ├── hooks/                     # Custom React hooks
│   │   └── useAuth.js
│   ├── utils/                     # Utility functions
│   │   └── validators.js
│   ├── services/                  # API services
│   │   └── api.js
│   ├── App.jsx                    # Root component
│   └── index.js                   # Entry point
├── public/
│   └── index.html
├── .storybook/                    # Storybook configuration
│   └── main.js
├── package.json
└── README.md
```

## 🌍 Real-World Examples

Here are popular repositories that use Atomic Design principles:

1. **[Pattern Lab](https://github.com/pattern-lab/patternlab-node)**
   - Original implementation of Atomic Design
   - Pattern-driven development tool
   - ~1k+ stars

2. **[Storybook Design System](https://github.com/storybookjs/design-system)**
   - Storybook's own design system
   - Follows atomic principles
   - Component documentation showcase
   - ~1.5k+ stars

3. **[Shopify Polaris](https://github.com/Shopify/polaris)**
   - Shopify's design system
   - Uses atomic-like hierarchy
   - Comprehensive component library
   - ~5.6k+ stars

## 🎯 When to Use

- **Design Systems**: Building component libraries
- **Component Documentation**: When using Storybook
- **Design-Driven Development**: Close design-developer collaboration
- **Large Teams**: Need clear component organization
- **Product Families**: Multiple apps sharing components
- **UI-Heavy Applications**: Focus on interface consistency
- **Component Libraries**: Publishing reusable components

## 🚀 When to Migrate Away

Consider a hybrid or feature-based approach when:
- Need to organize by business features
- Atomic hierarchy causes confusion
- Project is small and doesn't need this structure
- Business logic is more important than UI consistency
- Team doesn't embrace the methodology

## 💡 Best Practices

1. **Start Small**: Begin with atoms and build up
2. **Document Components**: Use Storybook or similar tools
3. **Be Pragmatic**: Don't stress over perfect classification
4. **Share Early**: Get team alignment on component levels
5. **Use Design Tokens**: Centralize design values
6. **Version Components**: Track changes to shared components
7. **Test Each Level**: Unit tests at every level
8. **Create Guidelines**: Document classification rules

## 🔬 Component Classification Guide

### When is it an Atom?
- Can't be broken down further
- Single purpose
- No dependencies on other components
- Examples: Button, Input, Icon, Label

### When is it a Molecule?
- Combines 2-3 atoms
- Single functional unit
- Relatively simple
- Examples: Search bar, Form field, Card title

### When is it an Organism?
- Complex functionality
- Multiple molecules/atoms
- Standalone section
- Examples: Header, Footer, Product card, Form

### When is it a Template?
- Page layout structure
- Placeholder content
- Shows arrangement
- Examples: Dashboard layout, Article layout

### When is it a Page?
- Real content
- Specific instance
- What users see
- Examples: Home page, Profile page

## 📊 Visual Hierarchy

```
Pages (🟠)
  ↓ uses
Templates (🟡)
  ↓ uses
Organisms (🟢)
  ↓ uses
Molecules (🔵)
  ↓ uses
Atoms (🔴)
```

---

**Next Steps**: Combine with [Feature-Based](../feature-based/) structure for [Hybrid](../hybrid/) approach.

## 📚 Learn More

- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/)
- [Pattern Lab](https://patternlab.io/)
- [Storybook Documentation](https://storybook.js.org/)
