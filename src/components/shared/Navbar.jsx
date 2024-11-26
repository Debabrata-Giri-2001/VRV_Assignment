import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");

    navigate("/login");
  };

  return (
    <nav className="bg-slate-900 p-4 text-white">
      <ul className="flex w-full justify-between">
        <div className="flex space-x-6">
         <li><Link to="/dashboard">Dashboard</Link></li>
        {userRole === "Admin" && (
          <>
            <li><Link to="/user-management">User Management</Link></li>
            <li><Link to="/role-management">Role Management</Link></li>
          </>
        )} 
        </div>
        <div> 
        <li className="ml-64">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white p-2 rounded"
          >
            Logout
          </button>
        </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
