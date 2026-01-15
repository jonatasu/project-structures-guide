// User Service
// Business logic layer for user operations

class UserService {
  // User service handles business logic
  // Separates route handlers from data operations
  // In real app, would interact with database
  
  constructor() {
    // Mock in-memory storage
    this.users = [
      { id: 1, name: 'John Doe', email: 'john@example.com', createdAt: new Date() },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', createdAt: new Date() },
    ];
    this.nextId = 3;
  }

  async findAll() {
    // Find all users
    // In real app: SELECT * FROM users
    return this.users;
  }

  async findById(id) {
    // Find user by ID
    // In real app: SELECT * FROM users WHERE id = $1
    return this.users.find(u => u.id === parseInt(id));
  }

  async findByEmail(email) {
    // Find user by email
    // In real app: SELECT * FROM users WHERE email = $1
    return this.users.find(u => u.email === email);
  }

  async create(userData) {
    // Create new user
    // In real app: INSERT INTO users VALUES (...)
    const user = {
      id: this.nextId++,
      ...userData,
      password: undefined, // Don't return password
      createdAt: new Date(),
    };
    this.users.push(user);
    return user;
  }

  async update(id, updates) {
    // Update user
    // In real app: UPDATE users SET ... WHERE id = $1
    const index = this.users.findIndex(u => u.id === parseInt(id));
    if (index === -1) return null;
    
    this.users[index] = { ...this.users[index], ...updates };
    return this.users[index];
  }

  async delete(id) {
    // Delete user
    // In real app: DELETE FROM users WHERE id = $1
    const index = this.users.findIndex(u => u.id === parseInt(id));
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}

module.exports = new UserService();
