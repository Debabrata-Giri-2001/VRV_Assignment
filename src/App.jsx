import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import RoleManagement from "./pages/RoleManagement";
import Welcome from "./pages/Welcome";

const PrivateRoute = ({ children, role }) => {
  const authToken = localStorage.getItem("authToken");
  const userRole = localStorage.getItem("userRole");

  if (!authToken && role && userRole !== role) return <Navigate to="/" />;
  if (!authToken) return <Navigate to="/login" />;

  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Welcome />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute><Dashboard /></PrivateRoute>}
        />
        <Route
          path="/user-management"
          element={<PrivateRoute role="Admin"><UserManagement /></PrivateRoute>}
        />
        <Route
          path="/role-management"
          element={<PrivateRoute role="Admin"><RoleManagement /></PrivateRoute>}
        />
        <Route
          path="/"
          element={<PrivateRoute><Dashboard /></PrivateRoute>}
        />
      </Routes>
    </Router>
  );
}

export default App;
