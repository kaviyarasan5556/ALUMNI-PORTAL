import React, { useState, useRef, useEffect } from "react";

const AlumniDashboard = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle function for dropdowns
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* 🔹 Top Navbar */}
      <nav className="bg-blue-900 text-white py-4 shadow-lg">
        <div className="flex justify-center space-x-16" ref={dropdownRef}>
          
          {/* 🟦 Alumni Engagement */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("engagement")}
              className="relative px-6 py-3 rounded-md font-semibold text-white bg-blue-900 rounded-md transition-all duration-300 hover:bg-indigo-700"
            >
              Alumni Engagement ⬇️
            </button>
            {openDropdown === "engagement" && (
              <div className="absolute bg-white text-black rounded-lg shadow-lg w-56 mt-2">
                <a href="JobPostingForm" className="block px-4 py-2 hover:bg-blue-200">Job Posting</a>
                <a href="Internship" className="block px-4 py-2 hover:bg-blue-200">Internship</a>
                <a href="CareerResource" className="block px-4 py-2 hover:bg-blue-200 rounded-b-lg">Career Resources</a>
              </div>
            )}
          </div>

          {/* 🟦 Alumni Directory */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("directory")}
              className="relative px-6 py-3  font-semibold text-white bg-blue-900 rounded-md transition-all duration-300 hover:bg-indigo-700"
            >
              Alumni Directory ⬇️
            </button>
            {openDropdown === "directory" && (
              <div className="absolute bg-white text-black rounded-lg shadow-lg w-56 mt-2">
                <a href="SuccessStory" className="block px-4 py-2 hover:bg-blue-200">Alumni Management</a>
                <a href="AlumniProfile" className="block px-4 py-2 hover:bg-blue-200 rounded-b-lg">Alumni Profile</a>
              </div>
            )}
          </div>

          {/* 🟦 Events */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("events")}
              className="relative px-6 py-3  font-semibold text-white bg-blue-900 rounded-md transition-all duration-300 hover:bg-indigo-700"
            >
              Events ⬇️
            </button>
            {openDropdown === "events" && (
              <div className="absolute bg-white text-black rounded-lg shadow-lg w-56 mt-2">
                <a href="UpcomingEvents" className="block px-4 py-2 hover:bg-blue-200">Upcoming Events</a>
                <a href="Conference" className="block px-4 py-2 hover:bg-blue-200 rounded-b-lg">Conference</a>
              </div>
            )}
          </div>

        </div>
      </nav>

      {/* 🔹 Main Content */}
      <div className="flex-grow flex items-center justify-center text-gray-600 text-xl font-semibold">
        Select an option from the menu above to proceed.
      </div>

      {/* 🔹 Fixed Bottom Section */}
      <footer className="w-full bg-gray-200 py-4 flex justify-center space-x-10">
        <button className="w-60 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition">
          💰 Donate
        </button>
        <button
        className="w-60 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition"
        onClick={() => navigate("")}
      >
        ✍️ Feedback
      </button>
      </footer>
    </div>
  );
};

export default AlumniDashboard;
