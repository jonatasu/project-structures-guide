// Server Entry Point
// Starts the Fastify server

const buildApp = require('./app');
const config = require('./config');

async function start() {
  // Build and start Fastify application
  
  try {
    // Build app with configuration
    const app = await buildApp();

    // Start listening
    await app.listen({
      port: config.server.port,
      host: config.server.host,
    });

    app.log.info(
      `Server listening on http://${config.server.host}:${config.server.port}`
    );

    // Graceful shutdown
    const signals = ['SIGINT', 'SIGTERM'];
    signals.forEach(signal => {
      process.on(signal, async () => {
        app.log.info(`Received ${signal}, closing server...`);
        await app.close();
        process.exit(0);
      });
    });

  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
}

// Start server if this file is run directly
if (require.main === module) {
  start();
}

module.exports = { start };
