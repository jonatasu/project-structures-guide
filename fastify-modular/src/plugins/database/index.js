// Database Plugin
// Fastify plugin for database connection

const fp = require('fastify-plugin');

async function databasePlugin(fastify, options) {
  // Database plugin that decorates Fastify with DB connection
  // In real app, would connect to PostgreSQL, MongoDB, etc.
  
  const dbConfig = {
    host: options.host || process.env.DB_HOST || 'localhost',
    port: options.port || process.env.DB_PORT || 5432,
    database: options.database || process.env.DB_NAME || 'myapp',
    user: options.user || process.env.DB_USER || 'postgres',
    password: options.password || process.env.DB_PASSWORD,
  };

  // Mock database connection
  const db = {
    // In real implementation, would use pg, mongoose, etc.
    async query(sql, params) {
      fastify.log.info({ sql, params }, 'Executing query');
      return { rows: [] };
    },
    
    async close() {
      fastify.log.info('Closing database connection');
    },
  };

  // Decorate Fastify instance with db
  fastify.decorate('db', db);

  // Close connection when Fastify closes
  fastify.addHook('onClose', async (instance) => {
    await db.close();
  });
}

module.exports = fp(databasePlugin, {
  name: 'database-plugin',
});
