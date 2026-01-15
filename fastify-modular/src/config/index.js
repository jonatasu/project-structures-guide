// Application Configuration
// Central configuration management

const env = process.env.NODE_ENV || 'development';

const config = {
  // Server configuration
  server: {
    host: process.env.HOST || '0.0.0.0',
    port: parseInt(process.env.PORT || '3000'),
  },

  // Database configuration
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    name: process.env.DB_NAME || 'myapp',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD,
  },

  // JWT configuration
  jwt: {
    secret: process.env.JWT_SECRET || 'supersecret',
    expiresIn: '1d',
  },

  // CORS configuration
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
  },

  // Logging configuration
  logger: {
    level: process.env.LOG_LEVEL || (env === 'production' ? 'info' : 'debug'),
    prettyPrint: env !== 'production',
  },

  // Environment
  env,
  isDevelopment: env === 'development',
  isProduction: env === 'production',
};

module.exports = config;
