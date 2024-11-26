import { useEffect, useState } from "react";
import { fetchUsers } from "../../services/api";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-4">User List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.email} className="mb-2">
            {user.name} - {user.role} - {user.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
