import Navbar from "../components/shared/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen ">
        <div className="container mx-auto p-8">
          <header className="text-center mb-8">
            <h1 className="text-6xl text-slate-800 font-bold">Welcome</h1>
            <p className="text-lg text-gray-800">Manage users, roles, and permissions</p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* User Management Section */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">User Management</h2>
                <ul className="space-y-4">
                  {/* Add data mapping here for a large dataset */}
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">John Doe</span>
                    <button className="text-blue-500 hover:underline">Edit</button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Jane Smith</span>
                    <button className="text-blue-500 hover:underline">Edit</button>
                  </li>
                  {/* Add more list items */}
                </ul>
              </div>
            </div>

            {/* Role Management Section */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Role Management</h2>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Admin</span>
                    <button className="text-blue-500 hover:underline">Edit</button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Editor</span>
                    <button className="text-blue-500 hover:underline">Edit</button>
                  </li>
                  {/* Add more list items */}
                </ul>
              </div>
            </div>

            {/* Permission Management Section */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Permissions</h2>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Read</span>
                    <button className="text-blue-500 hover:underline">Edit</button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Write</span>
                    <button className="text-blue-500 hover:underline">Edit</button>
                  </li>
                  {/* Add more list items */}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
