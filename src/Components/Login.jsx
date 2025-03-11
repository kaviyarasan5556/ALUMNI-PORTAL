import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="bg-white bg-opacity-50 backdrop-blur-md p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Log in</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-3 border rounded-lg bg-gray-100" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full p-3 border rounded-lg bg-gray-100" placeholder="Enter your password" />
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg font-semibold flex items-center justify-center">
            🔒 Log in
          </button>
        </form>
        <p className="text-sm text-center text-gray-700 mt-4">
          Don't have an account? <Link to="/signup" className="text-blue-600 font-semibold">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
