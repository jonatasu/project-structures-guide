// Fastify Application Setup
// Creates and configures Fastify instance

const fastify = require('fastify');
const autoload = require('@fastify/autoload');
const path = require('path');
const config = require('./config');

async function buildApp(options = {}) {
  // Create Fastify instance with configuration
  const app = fastify({
    logger: config.logger,
    ...options,
  });

  // Register plugins
  // Plugins add functionality like auth, database, cors
  await app.register(autoload, {
    dir: path.join(__dirname, 'plugins'),
    options: {
      ...config,
    },
  });

  // Register routes
  // Auto-load all route modules
  await app.register(autoload, {
    dir: path.join(__dirname, 'routes'),
    options: {
      prefix: '/api', // All routes prefixed with /api
    },
  });

  // Health check endpoint
  app.get('/health', async (request, reply) => {
    return { status: 'ok', timestamp: new Date().toISOString() };
  });

  // Error handler
  app.setErrorHandler((error, request, reply) => {
    app.log.error(error);
    
    reply.status(error.statusCode || 500).send({
      error: error.message || 'Internal Server Error',
      statusCode: error.statusCode || 500,
    });
  });

  // Not found handler
  app.setNotFoundHandler((request, reply) => {
    reply.status(404).send({
      error: 'Not Found',
      statusCode: 404,
      path: request.url,
    });
  });

  return app;
}

module.exports = buildApp;
