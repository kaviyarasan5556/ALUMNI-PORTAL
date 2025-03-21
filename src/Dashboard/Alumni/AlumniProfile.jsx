import React, { useState } from "react";

const AlumniProfile = () => {
  const degrees = ["B.Tech", "M.Tech", "MBA", "B.E", "Ph.D", "Other"];
  const departments = [
    "Information Technology",
    "Computer Science And Engineering",
    "Electronics And Communication Engineering",
    "Civil Engineering",
    "Mechanical Engineering",
    "Artificial Intelligence And Data Science",
    "Computer Science And Business Systems",
  ];
  const years = Array.from({ length: 26 }, (_, i) => 2000 + i); // Generates years from 2000 to 2025

  const [formData, setFormData] = useState({
    fullName: "",
    graduationYear: "",
    degree: "",
    department: "",
    jobTitle: "",
    company: "",
    skills: "",
    linkedin: "",
    profilePhoto: null,
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Profile Photo Upload
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profilePhoto: file });
      setPreviewImage(URL.createObjectURL(file)); // Preview Image
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Profile Submitted Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Alumni Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Profile Photo Upload Box */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Profile Photo</label>
            <div className="border-2 border-dashed border-gray-400 p-4 text-center rounded-md cursor-pointer hover:bg-gray-100">
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
                id="profileUpload"
              />
              <label htmlFor="profileUpload" className="block text-blue-600 font-semibold cursor-pointer">
                Click to Upload or Drag & Drop
              </label>
            </div>
            {previewImage && (
              <img src={previewImage} alt="Profile Preview" className="mt-2 w-24 h-24 rounded-full border mx-auto" />
            )}
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Graduation Year */}
          <div>
            <label className="block text-gray-700 font-medium">Graduation Year</label>
            <select
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Degree */}
          <div>
            <label className="block text-gray-700 font-medium">Degree</label>
            <select
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Degree</option>
              {degrees.map((degree) => (
                <option key={degree} value={degree}>
                  {degree}
                </option>
              ))}
            </select>
          </div>

          {/* Department */}
          <div>
            <label className="block text-gray-700 font-medium">Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Job Title */}
          <div>
            <label className="block text-gray-700 font-medium">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Enter job title"
              value={formData.jobTitle}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-gray-700 font-medium">Company</label>
            <input
              type="text"
              name="company"
              placeholder="Enter company name"
              value={formData.company}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Skills & Expertise */}
          <div>
            <label className="block text-gray-700 font-medium">Skills & Expertise</label>
            <textarea
              name="skills"
              placeholder="Enter your skills"
              value={formData.skills}
              onChange={handleChange}
              required
              rows="3"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* LinkedIn Profile */}
          <div>
            <label className="block text-gray-700 font-medium">LinkedIn Profile</label>
            <input
              type="url"
              name="linkedin"
              placeholder="Enter LinkedIn URL"
              value={formData.linkedin}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AlumniProfile;
