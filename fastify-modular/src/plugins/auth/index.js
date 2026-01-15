// Auth Plugin
// Fastify plugin for authentication functionality

const fp = require('fastify-plugin');
const jwt = require('@fastify/jwt');

async function authPlugin(fastify, options) {
  // Register JWT plugin
  // Adds authentication capabilities to Fastify instance
  
  await fastify.register(jwt, {
    secret: options.secret || process.env.JWT_SECRET || 'supersecret',
  });

  // Decorate Fastify instance with authentication utilities
  fastify.decorate('authenticate', async (request, reply) => {
    // Verify JWT token from request
    // Throws error if authentication fails
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });

  // Add preHandler hook for protected routes
  fastify.decorate('requireAuth', async (request, reply) => {
    // Shorthand for routes that require authentication
    await fastify.authenticate(request, reply);
  });
}

// Export as Fastify plugin
// fp() ensures plugin has access to parent scope if needed
module.exports = fp(authPlugin, {
  name: 'auth-plugin',
  dependencies: [],
});
