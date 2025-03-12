import { Link } from "react-router-dom";
import bannerImage from "../assets/students.webp";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center"
         style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="w-[80%] max-w-4xl">

        {/* Login Boxes Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Student Login */}
          <div className="bg-white bg-opacity-50 backdrop-blur-md p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold text-center text-gray mb-4">Student Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-white">Email</label>
                <input type="email" className="w-full p-3 border border-gray-500 rounded-lg bg-transparent text-white placeholder-gray-400" 
                       placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label className="block text-white">Password</label>
                <input type="password" className="w-full p-3 border border-gray-500 rounded-lg bg-transparent text-white placeholder-gray-400" 
                       placeholder="Enter your password" />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold">
                🔒 Log in
              </button>
            </form>
          </div>

          {/* Alumni Login */}
          <div className="bg-white bg-opacity-50 backdrop-blur-md p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold text-center text-gray mb-4">Alumni Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-white">Email</label>
                <input type="email" className="w-full p-3 border border-gray-500 rounded-lg bg-transparent text-white placeholder-gray-400" 
                       placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label className="block text-white">Password</label>
                <input type="password" className="w-full p-3 border border-gray-500 rounded-lg bg-transparent text-white placeholder-gray-400" 
                       placeholder="Enter your password" />
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold">
                🔒 Log in
              </button>
            </form>
          </div>

        </div>

        {/* Sign-up Link */}
        <p className="text-sm text-center text-white mt-4">
          Don't have an account? <Link to="/signup" className="text-blue-300 font-semibold">Sign up</Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
