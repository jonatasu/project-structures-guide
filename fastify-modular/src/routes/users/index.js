// User Routes Module
// Defines all user-related HTTP endpoints

const handlers = require('./handlers');
const schemas = require('./schemas');

async function userRoutes(fastify, options) {
  // Route module for user endpoints
  // All routes prefixed with /users (configured in app.js)
  
  // GET /users - List all users
  fastify.get('/', {
    schema: schemas.listUsers,
    handler: handlers.listUsers,
  });

  // GET /users/:id - Get user by ID
  fastify.get('/:id', {
    schema: schemas.getUser,
    handler: handlers.getUser,
  });

  // POST /users - Create new user
  fastify.post('/', {
    schema: schemas.createUser,
    preHandler: fastify.authenticate, // Requires authentication
    handler: handlers.createUser,
  });

  // PUT /users/:id - Update user
  fastify.put('/:id', {
    schema: schemas.updateUser,
    preHandler: fastify.authenticate,
    handler: handlers.updateUser,
  });

  // DELETE /users/:id - Delete user
  fastify.delete('/:id', {
    preHandler: fastify.authenticate,
    handler: handlers.deleteUser,
  });
}

module.exports = userRoutes;
