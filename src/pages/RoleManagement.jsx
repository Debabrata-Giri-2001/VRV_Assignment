import React, { useState } from "react";
import Navbar from "../components/shared/Navbar";

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [roleType,setRoleType] = useState("")
  const handleAddRole = (role) => {
    setRoles([...roles, role]);
    setRoleType("")
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-10 px-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Role Management</h1>
          <p className="text-gray-600 mt-2">
            Manage roles for your application and add new ones.
          </p>
        </header>

        {/* Add Role Section */}
        <div className="mb-10">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Role Type</label>
          <input
            type="text"
            value={roleType}
            onChange={(e) => setRoleType(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            onClick={() => handleAddRole(roleType)}
            className="bg-blue-600 mt-3 text-white px-4 py-2 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Add Moderator Role
          </button>
        </div>

        {/* Roles List */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Current Roles
          </h2>
          {roles.length > 0 ? (
            <ul className="space-y-3">
              {roles.map((role, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-50 p-3 rounded shadow-sm"
                >
                  <span className="text-gray-800">{role}</span>
                  <button
                    onClick={() =>
                      setRoles(roles.filter((r, i) => i !== index))
                    }
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No roles available.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default RoleManagement;
