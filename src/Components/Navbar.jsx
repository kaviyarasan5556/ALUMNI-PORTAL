import { useState } from "react";
import { Link } from "react-router-dom";
import kiteLogo from "../assets/KiTE Logo with name.png";
// import bannerImage from "../assets/graduation-stock.jpg"; // Ensure the path is correct
import bannerImage from "../assets/gradution-stock.jpg";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const navItems = [
    { name: "ABOUT", path: "/about", hasDropdown: false },
    { name: "ALUMNI DIRECTORY", path: "/alumni-directory", hasDropdown: false },
    { name: "LOGIN", path: "/login", hasDropdown: false }
  ];

  return (
    <div className="w-full">
      {/* Main Container */}
      <div className="w-full bg-blue-900">
        {/* Top Navigation Bar */}
        <nav className="flex items-center w-full">
          {/* Left Section - White Background with Logo */}
          <div className="bg-white px-6 py-2 flex items-center rounded-br-xl">
            <img src={kiteLogo} alt="KiTE Logo" className="h-16" />
          </div>

          {/* Right Section - Blue Background */}
          <div className="flex-1 bg-blue-900 text-white py-2 px-4 flex items-center justify-end overflow-x-auto">
            <div className="flex space-x-4 text-xs font-medium">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && handleDropdownToggle(item.name)}
                  onMouseLeave={() => item.hasDropdown && handleDropdownToggle(null)}
                >
                  <Link to={item.path}>
                    <button 
                      className="px-3 py-1 rounded hover:bg-blue-800 hover:text-orange-400 transition-colors duration-200 flex items-center whitespace-nowrap"
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="h-3 w-3 ml-1" />}
                    </button>
                  </Link>
                  {activeDropdown === item.name && item.hasDropdown && (
                    <div className="absolute left-0 mt-1 w-40 bg-white rounded-md shadow-lg py-1 z-10">
                      <Link to={`${item.path}/submenu1`}>
                        <button className="w-full text-left block px-3 py-1 text-xs text-gray-700 hover:bg-gray-100">
                          Submenu 1
                        </button>
                      </Link>
                      <Link to={`${item.path}/submenu2`}>
                        <button className="w-full text-left block px-3 py-1 text-xs text-gray-700 hover:bg-gray-100">
                          Submenu 2
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Banner Image Under Navbar */}
      <div className="w-full">
        <img src={bannerImage} alt="Graduation" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default Navbar;
