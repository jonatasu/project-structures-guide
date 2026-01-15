// User Route Handlers
// Business logic for user endpoints

const userService = require('../../services/userService');

// List all users
async function listUsers(request, reply) {
  // GET /users handler
  // Returns array of users
  
  const users = await userService.findAll();
  return { users };
}

// Get single user
async function getUser(request, reply) {
  // GET /users/:id handler
  // Returns single user or 404
  
  const { id } = request.params;
  const user = await userService.findById(id);
  
  if (!user) {
    return reply.code(404).send({ error: 'User not found' });
  }
  
  return { user };
}

// Create new user
async function createUser(request, reply) {
  // POST /users handler
  // Creates user and returns it
  
  const userData = request.body;
  const user = await userService.create(userData);
  
  return reply.code(201).send({ user });
}

// Update user
async function updateUser(request, reply) {
  // PUT /users/:id handler
  // Updates and returns user
  
  const { id } = request.params;
  const updates = request.body;
  const user = await userService.update(id, updates);
  
  if (!user) {
    return reply.code(404).send({ error: 'User not found' });
  }
  
  return { user };
}

// Delete user
async function deleteUser(request, reply) {
  // DELETE /users/:id handler
  // Deletes user and returns success
  
  const { id } = request.params;
  await userService.delete(id);
  
  return reply.code(204).send();
}

module.exports = {
  listUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
