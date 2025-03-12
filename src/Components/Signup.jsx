import { Link } from "react-router-dom";
import bannerImage from "../assets/students.webp";
const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="bg-white bg-opacity-50 backdrop-blur-md p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Sign up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full p-3 border rounded-lg bg-gray-100" placeholder="Enter your name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-3 border rounded-lg bg-gray-100" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full p-3 border rounded-lg bg-gray-100" placeholder="Enter your password" />
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg font-semibold flex items-center justify-center">
            🔒 Sign up
          </button>
        </form>
        <p className="text-sm text-center text-gray-700 mt-4">
          Already have an account? <Link to="/login" className="text-blue-600 font-semibold">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
