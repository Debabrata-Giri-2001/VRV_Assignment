const mockUsers = [
  { email: "admin@example.com", password: "admin123", role: "Admin", token: "admin-token" },
  { email: "user@example.com", password: "user123", role: "User", token: "user-token" },
];

const mockRoles = [
  { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
  { id: 2, name: "User", permissions: ["Read"] },
];

// Mock Login function
export const mockLogin = async ({ email, password }) => {
  const user = mockUsers.find((u) => u.email === email && u.password === password);
  if (!user) throw new Error("Invalid email or password");
  return user;
};

// Fetch Users
export const fetchUsers = async () => Promise.resolve(mockUsers);

// Fetch Roles
export const fetchRoles = async () => Promise.resolve(mockRoles);

// Create a new user (Admin Only)
export const createUser = async (user) => {
  const newUser = { id: mockUsers.length + 1, ...user };
  mockUsers.push(newUser);
  return newUser;
};

// Update a user (Admin Only)
export const updateUser = async (id, updatedUser) => {
  const index = mockUsers.findIndex((u) => u.id === id);
  if (index === -1) throw new Error("User not found");
  mockUsers[index] = { ...mockUsers[index], ...updatedUser };
  return mockUsers[index];
};

// Delete a user (Admin Only)
export const deleteUser = async (id) => {
  const index = mockUsers.findIndex((u) => u.id === id);
  if (index === -1) throw new Error("User not found");
  mockUsers.splice(index, 1);
  return { message: "User deleted successfully" };
};
