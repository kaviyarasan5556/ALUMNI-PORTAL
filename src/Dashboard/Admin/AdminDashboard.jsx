import React, { useState, useRef, useEffect } from "react";

const AdminDashboard = () => {
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
          
          {/* 🟦 Data Management */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("dataManagement")}
              className="relative px-6 py-3 rounded-md font-semibold text-white bg-blue-900 transition-all duration-300 hover:bg-indigo-700"
            >
              Data Management ⬇️
            </button>
            {openDropdown === "dataManagement" && (
              <div className="absolute bg-white text-black rounded-lg shadow-lg w-56 mt-2">
                <a href="studentdata" className="block px-4 py-2 hover:bg-blue-200">Student Data</a>
                <a href="alumnidata" className="block px-4 py-2 hover:bg-blue-200 rounded-b-lg">Alumni Data</a>
              </div>
            )}
          </div>

          {/* 🟦 Student Engagement */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("studentEngagement")}
              className="relative px-6 py-3 font-semibold text-white bg-blue-900 transition-all duration-300 hover:bg-indigo-700"
            >
              Student Engagement ⬇️
            </button>
            {openDropdown === "studentEngagement" && (
              <div className="absolute bg-white text-black rounded-lg shadow-lg w-56 mt-2">
                <a href="JobPostingForm" className="block px-4 py-2 hover:bg-blue-200">Job Posting</a>
                <a href="CareerResource" className="block px-4 py-2 hover:bg-blue-200 rounded-b-lg">Career Resource</a>
              </div>
            )}
          </div>

          {/* 🟦 Events */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("events")}
              className="relative px-6 py-3 font-semibold text-white bg-blue-900 transition-all duration-300 hover:bg-indigo-700"
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

          {/* 🟦 Donation */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("donation")}
              className="relative px-6 py-3 font-semibold text-white bg-blue-900 transition-all duration-300 hover:bg-indigo-700"
            >
              Donation ⬇️
            </button>
            {openDropdown === "donation" && (
              <div className="absolute bg-white text-black rounded-lg shadow-lg w-56 mt-2">
                <a href="Donation" className="block px-4 py-2 hover:bg-blue-200">Donation</a>
                <a href="CrowdFundingPage" className="block px-4 py-2 hover:bg-blue-200 rounded-b-lg">Financial Campaign</a>
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
      {/* <footer className="w-full bg-gray-200 py-4 flex justify-center space-x-10">
        <button className="w-60 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition">
          💰 Donate
        </button>
        <button className="w-60 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition">
          ✍️ Feedback
        </button>
      </footer> */}
    </div>
  );
};

export default AdminDashboard;
