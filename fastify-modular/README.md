# Fastify Modular/Plugin-Based Structure 🚀

[← Back to Main Guide](../)

## Overview

The Fastify Modular structure leverages Fastify's plugin system to create a highly modular, encapsulated backend architecture. Each feature or concern is organized as a plugin, promoting loose coupling, testability, and scalability.

## 📋 Description

Fastify's plugin architecture allows you to break your application into self-contained modules. Each plugin can have its own routes, schemas, decorators, and lifecycle hooks. This structure is perfect for building microservices, API gateways, or any Node.js backend that needs to scale.

**Key Characteristics:**
- Plugin-based architecture
- Encapsulated route modules
- Separation of concerns (routes, services, plugins)
- Async/await throughout
- High performance
- Auto-loading capabilities

## ✅ Pros

1. **High Performance**: Fastify is one of the fastest Node.js frameworks
2. **Plugin Encapsulation**: Isolated plugins with their own scope
3. **Auto-loading**: Automatic plugin and route registration
4. **Schema-based Validation**: JSON schema for requests/responses
5. **Testability**: Easy to test isolated plugins
6. **Scalability**: Natural transition to microservices
7. **Type Safety**: Great TypeScript support
8. **Hooks System**: Powerful lifecycle hooks
9. **Decorator Pattern**: Extend functionality cleanly

## ❌ Cons

1. **Learning Curve**: Plugin system requires understanding
2. **Schema Overhead**: Writing JSON schemas can be verbose
3. **Smaller Ecosystem**: Fewer plugins than Express
4. **Breaking Changes**: Framework still evolving
5. **Documentation**: Can be challenging for complex scenarios
6. **Team Familiarity**: Less common than Express

## 📁 Structure Tree

```
fastify-modular/
├── src/
│   ├── plugins/                    # Fastify plugins
│   │   ├── auth/
│   │   │   ├── index.js           # Auth plugin registration
│   │   │   ├── strategies.js      # Auth strategies (JWT, OAuth)
│   │   │   └── decorators.js      # Auth decorators
│   │   ├── database/
│   │   │   ├── index.js           # Database plugin
│   │   │   ├── connection.js      # DB connection setup
│   │   │   └── models.js          # Database models
│   │   ├── swagger/
│   │   │   └── index.js           # API documentation plugin
│   │   └── cors/
│   │       └── index.js           # CORS configuration
│   ├── routes/                     # Route modules
│   │   ├── users/
│   │   │   ├── index.js           # User routes registration
│   │   │   ├── handlers.js        # Route handlers
│   │   │   └── schemas.js         # Request/response schemas
│   │   ├── products/
│   │   │   ├── index.js
│   │   │   ├── handlers.js
│   │   │   └── schemas.js
│   │   └── auth/
│   │       ├── index.js
│   │       ├── handlers.js
│   │       └── schemas.js
│   ├── services/                   # Business logic layer
│   │   ├── userService.js
│   │   ├── productService.js
│   │   └── authService.js
│   ├── utils/                      # Utility functions
│   │   ├── logger.js
│   │   ├── errors.js
│   │   └── validators.js
│   ├── config/                     # Configuration
│   │   ├── index.js               # Main config
│   │   ├── database.js            # DB config
│   │   └── server.js              # Server config
│   ├── app.js                      # Fastify app setup
│   └── server.js                   # Server entry point
├── test/                           # Tests
│   ├── routes/
│   └── plugins/
├── .env                            # Environment variables
├── package.json
└── README.md
```

## 🌍 Real-World Examples

Here are popular repositories using Fastify modular structure:

1. **[Fastify Examples](https://github.com/fastify/fastify-examples)**
   - Official Fastify examples repository
   - Shows best practices and patterns
   - Various architectural approaches
   - ~600+ stars

2. **[NestJS with Fastify](https://github.com/nestjs/nest)**
   - Enterprise framework that supports Fastify
   - Modular plugin-based architecture
   - ~65k+ stars

3. **[Platformatic](https://github.com/platformatic/platformatic)**
   - Built on Fastify
   - Modular API platform
   - Plugin-based extension system
   - ~1.5k+ stars

## 🎯 When to Use

- **High-Performance APIs**: Need maximum throughput
- **Microservices**: Building distributed systems
- **API Gateways**: Routing and aggregation layer
- **Real-time Applications**: WebSocket support needed
- **TypeScript Projects**: Want excellent type safety
- **Schema-Driven Development**: OpenAPI/JSON Schema focus
- **Modern Node.js**: Latest async/await patterns

## 🚀 Key Concepts

### Plugin System

Plugins are the building blocks:
```javascript
// Simple plugin
async function myPlugin(fastify, options) {
  // Add routes, decorators, hooks
  fastify.get('/my-route', async (request, reply) => {
    return { hello: 'world' }
  })
}

// Register plugin
fastify.register(myPlugin, { options })
```

### Encapsulation

Each plugin has its own scope:
- Routes are isolated
- Decorators are scoped
- Hooks apply within plugin

### Auto-loading

Automatically load plugins and routes:
```javascript
fastify.register(autoload, {
  dir: path.join(__dirname, 'plugins')
})
```

## 💡 Best Practices

1. **Use Autoload**: Leverage `@fastify/autoload` for plugins/routes
2. **Schema Validation**: Always define request/response schemas
3. **Error Handling**: Use Fastify's error handling system
4. **Async/Await**: Use modern async patterns throughout
5. **Decorators**: Extend functionality with decorators
6. **Hooks**: Use lifecycle hooks for cross-cutting concerns
7. **Testing**: Write tests for each plugin independently
8. **Logging**: Use built-in Pino logger
9. **Environment Config**: Use environment variables for configuration
10. **Documentation**: Generate docs with Swagger/OpenAPI

## 🔧 Plugin Types

### Utility Plugins
Add functionality (auth, database, logging)

### Route Plugins
Register route handlers

### Decorator Plugins
Add properties to Fastify instance

### Hook Plugins
Add lifecycle hooks

## 🔄 Request Lifecycle

```
1. onRequest      → Initial request handling
2. preParsing     → Before body parsing
3. preValidation  → Before schema validation
4. preHandler     → Before route handler
5. handler        → Your route logic
6. preSerialization → Before response serialization
7. onSend         → Before sending response
8. onResponse     → After response sent
9. onError        → If error occurs
```

## 📊 Architecture Layers

```
┌────────────────────────────────┐
│       Routes Layer             │
│   (HTTP handlers, schemas)     │
├────────────────────────────────┤
│     Services Layer             │
│   (Business logic)             │
├────────────────────────────────┤
│      Plugins Layer             │
│   (Database, Auth, etc.)       │
├────────────────────────────────┤
│     Fastify Core              │
│   (Framework)                  │
└────────────────────────────────┘
```

## 🎭 Common Patterns

### Route Module Pattern
```javascript
// routes/users/index.js
async function userRoutes(fastify, options) {
  fastify.get('/', handlers.getUsers)
  fastify.post('/', { schema: schemas.createUser }, handlers.createUser)
}
module.exports = userRoutes
```

### Service Pattern
```javascript
// services/userService.js
class UserService {
  async findAll() { /* logic */ }
  async create(data) { /* logic */ }
}
module.exports = new UserService()
```

### Plugin Pattern
```javascript
// plugins/database/index.js
const fp = require('fastify-plugin')

async function databasePlugin(fastify, options) {
  const db = await connectDatabase(options)
  fastify.decorate('db', db)
}

module.exports = fp(databasePlugin)
```

## 🔐 Security Best Practices

1. **Helmet**: Use `@fastify/helmet` for security headers
2. **Rate Limiting**: Use `@fastify/rate-limit`
3. **CORS**: Configure `@fastify/cors` properly
4. **Authentication**: Use `@fastify/jwt` or `@fastify/auth`
5. **Validation**: Always validate with schemas
6. **HTTPS**: Use HTTPS in production
7. **Secrets Management**: Use environment variables

---

**Comparison**: For frontend structures, see [Feature-Based](../feature-based/) or [Hybrid](../hybrid/) approaches.

## 📚 Learn More

- [Fastify Documentation](https://www.fastify.io/)
- [Fastify Plugins](https://www.fastify.io/ecosystem/)
- [Fastify Best Practices](https://www.fastify.io/docs/latest/Guides/Getting-Started/)
