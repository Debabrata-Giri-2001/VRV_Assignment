import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { mockLogin } from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use navigate hook to navigate after login

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await mockLogin({ email, password });
      localStorage.setItem("authToken", user.token);
      localStorage.setItem("userRole", user.role);
      console.log(user);

      // After successful login, navigate to the homepage or dashboard
      navigate("/dashboard"); // This will navigate to the root ("/") page
    } catch (err) {
      setError(err.message); // Show error if login fails
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-900">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border rounded p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full border rounded p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-slate-600 text-white p-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
