import React, { useState, useEffect } from 'react';
import { fetchUsers, createUser, updateUser, deleteUser } from '../services/api';
import Navbar from '../components/shared/Navbar';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ email: '', password: '', role: 'User', status: 'Active' });
  const [editUser, setEditUser] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const userList = await fetchUsers();
        setUsers(userList);
      } catch (err) {
        setError("Failed to fetch users.");
      }
    };

    getUsers();
  }, []);

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const user = await createUser(newUser);
      setUsers([...users, user]);
      setSuccessMessage("User added successfully!");
      setNewUser({ email: '', password: '', role: 'User', status: 'Active' });
    } catch (err) {
      setError("Error adding user.");
    }
  };

  const handleEditUser = async () => {
    try {
      const updatedUser = await updateUser(editUser.id, editUser);
      setUsers(users.map((user) => (user.id === editUser.id ? updatedUser : user)));
      setEditUser(null);
      setSuccessMessage("User updated successfully!");
    } catch (err) {
      setError("Error updating user.");
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
      setSuccessMessage("User deleted successfully!");
    } catch (err) {
      setError("Error deleting user.");
    }
  };

  return (
    <div className="">
      <Navbar />
      <h1 className="text-2xl font-semibold mb-6">User Management</h1>

      {/* Success and Error Messages */}
      {error && <div className="bg-red-500 text-white rounded mx-6 p-6 mb-4">{error}</div>}
      {successMessage && <div className="bg-green-500 text-white mx-6 p-4 rounded mb-4">{successMessage}</div>}

      {/* Add User Form */}
      <form onSubmit={handleAddUser} className="mb-6 bg-white p-6 shadow-lg rounded">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
          <select
            id="role"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add User
        </button>
      </form>

      {/* Edit User Form */}
      {editUser && (
        <div className="bg-white p-6 shadow-lg rounded mb-6">
          <h2 className="text-xl font-semibold mb-4">Edit User</h2>
          <div className="mb-4">
            <label htmlFor="editEmail" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="editEmail"
              value={editUser.email}
              onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="editPassword" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="editPassword"
              value={editUser.password}
              onChange={(e) => setEditUser({ ...editUser, password: e.target.value })}
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            onClick={handleEditUser}
            className="w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Update User
          </button>
        </div>
      )}

      {/* User List Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Role</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">{user.status}</td>
                <td className="p-2">
                  <button
                    onClick={() => setEditUser(user)}
                    className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="ml-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
