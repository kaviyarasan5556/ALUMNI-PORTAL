import React, { useState, useRef, useEffect } from "react";

const Student = () => {
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
        <div className="flex justify-center space-x-10" ref={dropdownRef}>
          
          {/* 🟦 Study Materials */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("materials")}
              className="relative px-6 py-3 font-semibold text-white bg-blue-900 rounded-md transition-all duration-300 hover:bg-indigo-700"
            >
              Resource ⬇️
            </button>
            {openDropdown === "materials" && (
              <div className="absolute bg-white text-black rounded-lg shadow-lg w-56 mt-2">
                <a href="ViewMaterials" className="block px-4 py-2 hover:bg-blue-200">Documents</a>
                <a href="ViewMaterials" className="block px-4 py-2 hover:bg-blue-200">video</a>
              </div>
            )}
          </div>

          {/* 🟦 Job Opportunities */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("job")}
              className="relative px-6 py-3 font-semibold text-white bg-blue-900 rounded-md transition-all duration-300 hover:bg-indigo-700"
            >
              Job Application⬇️
            </button>
            {openDropdown === "job" && (
              <div className="absolute bg-white text-black rounded-lg shadow-lg w-56 mt-2">
                <a href="JobPosting" className="block px-4 py-2 hover:bg-blue-200">Job Application </a>
                <a href="" className="block px-4 py-2 hover:bg-blue-200">Apply Internship</a>
                <a href="" className="block px-4 py-2 hover:bg-blue-200">Job Portal</a>
                <a href="studentfeedback" className="block px-4 py-2 hover:bg-blue-200">Feedback</a>
              </div>
            )}
          </div>

          {/* 🟦 events and engagement */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("feedback")}
              className="relative px-6 py-3 font-semibold text-white bg-blue-900 rounded-md transition-all duration-300 hover:bg-indigo-700"
            >
              Event Engagement ⬇️
            </button>
            {openDropdown === "feedback" && (
              <div className="absolute bg-white text-black rounded-lg shadow-lg w-56 mt-2">
                <a href="" className="block px-4 py-2 hover:bg-blue-200">View Upcoming Events</a>
                <a href="" className="block px-4 py-2 hover:bg-blue-200 rounded-b-lg">View Conference</a>
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
          📚 Study Resources
        </button>
        <button className="w-60 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition">
          📋 Surveys
        </button>
      </footer>
    </div>
  );
};

export default Student;
