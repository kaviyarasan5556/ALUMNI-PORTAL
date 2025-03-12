import { Link, useLocation } from "react-router-dom";
import kiteLogo from "../assets/KiTE Logo with name.png";

const Navbar = () => {
  const location = useLocation(); // Get current path

  return (
    <div className="w-full bg-blue-900">
      <nav className="flex items-center w-full">
        
        {/* Logo Section */}
        <div className="bg-white px-6 py-2 flex items-center rounded-br-xl">
          <img src={kiteLogo} alt="KiTE Logo" className="h-16" />
        </div>

        {/* Menu Links */}
        <div className="flex-1 bg-blue-900 text-white py-2 px-4 flex items-center justify-end">
          <div className="flex space-x-4 text-xs font-medium">
            <Link to="/" className="px-3 py-1 rounded hover:bg-blue-800 transition">Home</Link>
            <Link to="/about" className="px-3 py-1 rounded hover:bg-blue-800 transition">About</Link>
            <Link to="/alumni-directory" className="px-3 py-1 rounded hover:bg-blue-800 transition">Alumni-Directory</Link>
            
            {/* Hide Login when on Signup Page */}
            {location.pathname !== "/signup" && (
              <Link to="/login" className="px-3 py-1 rounded hover:bg-blue-800 transition">Login</Link>
            )}
            
            <Link to="/signup" className="px-3 py-1 rounded hover:bg-blue-800 transition">Sign Up</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
