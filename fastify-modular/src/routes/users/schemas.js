// User Route Schemas
// JSON schemas for request/response validation

// Schema for listing users
const listUsers = {
  description: 'List all users',
  tags: ['users'],
  response: {
    200: {
      type: 'object',
      properties: {
        users: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              name: { type: 'string' },
              email: { type: 'string', format: 'email' },
            },
          },
        },
      },
    },
  },
};

// Schema for getting single user
const getUser = {
  description: 'Get user by ID',
  tags: ['users'],
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'integer', minimum: 1 },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        user: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            email: { type: 'string', format: 'email' },
            createdAt: { type: 'string', format: 'date-time' },
          },
        },
      },
    },
    404: {
      type: 'object',
      properties: {
        error: { type: 'string' },
      },
    },
  },
};

// Schema for creating user
const createUser = {
  description: 'Create new user',
  tags: ['users'],
  body: {
    type: 'object',
    required: ['name', 'email', 'password'],
    properties: {
      name: { type: 'string', minLength: 1, maxLength: 100 },
      email: { type: 'string', format: 'email' },
      password: { type: 'string', minLength: 8 },
    },
  },
  response: {
    201: {
      type: 'object',
      properties: {
        user: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            email: { type: 'string' },
          },
        },
      },
    },
  },
};

// Schema for updating user
const updateUser = {
  description: 'Update user',
  tags: ['users'],
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'integer' },
    },
  },
  body: {
    type: 'object',
    properties: {
      name: { type: 'string', minLength: 1, maxLength: 100 },
      email: { type: 'string', format: 'email' },
    },
  },
};

module.exports = {
  listUsers,
  getUser,
  createUser,
  updateUser,
};
