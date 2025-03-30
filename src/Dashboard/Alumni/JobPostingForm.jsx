import React, { useState } from 'react';
import { Briefcase, Building2, MapPin, DollarSign, Code2, FileText } from 'lucide-react';

const JobPostingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    salary: "",
    skills: "",
    description: "",
    employmentType: "Full-time",
    experience: "Entry Level",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-blue-600 px-6 py-4">
          <h2 className="text-3xl font-bold text-white text-center">Create Job Posting</h2>
          <p className="text-blue-100 text-center mt-2">Fill in the details to post a new job opportunity</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                placeholder="e.g. Senior React Developer"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="e.g. Tech Solutions Inc"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="e.g. New York, NY"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <DollarSign className="w-5 h-5 mr-2 text-blue-600" />
                Salary Range
              </label>
              <input
                type="text"
                name="salary"
                placeholder="e.g.  ₹80,000 -  ₹120,000"
                value={formData.salary}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Employment Type</label>
              <select
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Freelance</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Experience Level</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                <option>Select</option>
                <option>0-3 Years</option>
                <option>3-5 Years</option>
                <option>5-8 Years</option>
                <option>More then 8 Years</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-gray-700 font-medium">
              <Code2 className="w-5 h-5 mr-2 text-blue-600" />
              Required Skills
            </label>
            <input
              type="text"
              name="skills"
              placeholder="e.g. React, Node.js, SQL (comma separated)"
              value={formData.skills}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-gray-700 font-medium">
              <FileText className="w-5 h-5 mr-2 text-blue-600" />
              Job Description
            </label>
            <textarea
              name="description"
              placeholder="Enter detailed job description..."
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent h-32"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobPostingForm;