import React, { useState } from "react";
import AlumniCard from "./AlumniCard";

const alumniData = [
  { name: "Prakash", role:"Software Engineer", joiningYear: 2018, batch: 2021, program: "BE CSE", domain: "Software Engineering", location: "Delhi", company: "Google", designation: "Senior Developer", linkedin: "https://linkedin.com/in/Prakash", image: "src/assets/Alumni-Photos/Prakash.jpg" },
  { name: " Aaditaya Kumar", role: "Data Scientist", joiningYear: 2017, batch: 2020, program: "BE CSE", domain: "Data Science", location: "Mumbai", company: "Amazon", designation: "Data Analyst", linkedin: "https://linkedin.com/in/Aaditaya Kumar", image: "src/assets/Alumni-Photos/Aaditaya Kumar.jpg" },
  { name: "Rajesh Kumar", role: "Cybersecurity Engineer", joiningYear: 2016, batch: 2019, program: "BE CSE", domain: "Cybersecurity", location: "Bangalore", company: "Microsoft", designation: "Security Analyst", linkedin: "https://linkedin.com/in/Rajesh Kumar", image: "src/assets/Alumni-Photos/Rajesh Kumar.jpg" },
  { name: "Neha", role: "AI Researcher", joiningYear: 2019, batch: 2022, program: "BE CSE", domain: "Artificial Intelligence", location: "Hyderabad", company: "OpenAI", designation: "ML Engineer", linkedin: "https://linkedin.com/in/Neha", image: "src/assets/Alumni-Photos/Neha.jpg" },
  { name: "Vikram", role: "Cloud Engineer", joiningYear: 2020, batch: 2023, program: "BE CSE", domain: "Cloud Computing", location: "Pune", company: "IBM", designation: "Cloud Architect", linkedin: "https://linkedin.com/in/Vikram", image: "src/assets/Alumni-Photos/Vikram.jpg" },
  { name: "Shalini", role: "UI/UX Designer", joiningYear: 2015, batch: 2018, program: "BE CSE", domain: "UI/UX Design", location: "Chennai", company: "Adobe", designation: "Senior Designer", linkedin: "https://linkedin.com/in/Shalini", image: "src/assets/Alumni-Photos/Shalini.jpg" },
  { name: "Karan", role: "Backend Developer", joiningYear: 2016, batch: 2019, program: "BE CSE", domain: "Web Development", location: "Kolkata", company: "Netflix", designation: "Software Engineer", linkedin: "https://linkedin.com/in/Karan", image: "src/assets/Alumni-Photos/Karan.jpg" },
  { name: "Priya", role: "DevOps Engineer", joiningYear: 2017, batch: 2020, program: "BE CSE", domain: "DevOps", location: "Delhi", company: "Amazon", designation: "Site Reliability Engineer", linkedin: "https://linkedin.com/in/Priya", image: "src/assets/Alumni-Photos/Priya.jpg" },
  { name: "Anitha", role: "Blockchain Developer", joiningYear: 2018, batch: 2021, program: "BE CSE", domain: "Blockchain", location: "Hyderabad", company: "Coinbase", designation: "Smart Contract Engineer", linkedin: "https://linkedin.com/in/Anitha", image: "src/assets/Alumni-Photos/Anitha.jpg" },
  { name: "Pooja", role: "Game Developer", joiningYear: 2019, batch: 2022, program: "BE CSE", domain: "Game Development", location: "Pune", company: "Ubisoft", designation: "Unity Developer", linkedin: "https://linkedin.com/in/Pooja", image: "src/assets/Alumni-Photos/Pooja.jpeg" },
  { name: "Arjun", role: "Network Engineer", joiningYear: 2016, batch: 2019, program: "BE CSE", domain: "Networking", location: "Bangalore", company: "Cisco", designation: "Network Analyst", linkedin: "https://linkedin.com/in/Arjun", image: "src/assets/Alumni-Photos/Arjun.jpg" },
  { name: "Sanjay", role: "Embedded Systems Engineer", joiningYear: 2017, batch: 2020, program: "BE CSE", domain: "Embedded Systems", location: "Delhi", company: "Intel", designation: "Hardware Engineer", linkedin: "https://linkedin.com/in/Sanjay", image: "src/assets/Alumni-Photos/Sanjay.jpg" },
  { name: "Krishna kumar", role: "Data Engineer", joiningYear: 2018, batch: 2021, program: "BE CSE", domain: "Big Data", location: "Mumbai", company: "Facebook", designation: "Big Data Analyst", linkedin: "https://linkedin.com/in/Krishna Kumar", image: "src/assets/Alumni-Photos/Krishna Kumar.jpg" },
  { name: "Ramesh", role: "Database Administrator", joiningYear: 2019, batch: 2022, program: "BE CSE", domain: "Database Management", location: "Kolkata", company: "Oracle", designation: "DBA Specialist", linkedin: "https://linkedin.com/in/Ramesh", image: "src/assets/Alumni-Photos/Ramesh.jpg" },
  { name: "Suresh", role: "Computer Vision Engineer", joiningYear: 2020, batch: 2023, program: "BE CSE", domain: "Computer Vision", location: "Hyderabad", company: "Tesla", designation: "Vision AI Developer", linkedin: "https://linkedin.com/in/Suresh", image: "src/assets/Alumni-Photos/Suresh.jpg" },
  { name: "Deepak", role: "Full Stack Developer", joiningYear: 2016, batch: 2019, program: "BE CSE", domain: "Full Stack Development", location: "Pune", company: "TCS", designation: "Lead Developer", linkedin: "https://linkedin.com/in/Deepak", image: "src/assets/Alumni-Photos/Deepak.jpg" },
  { name: "Amudha Vanan", role: "Mobile App Developer", joiningYear: 2017, batch: 2020, program: "BE CSE", domain: "Mobile App Development", location: "Chennai", company: "Flipkart", designation: "Android Developer", linkedin: "https://linkedin.com/in/Amudha Vanan", image: "src/assets/Alumni-Photos/Amudha Vanan.jpg" },
  { name: "Naveen", role: "AI Ethics Researcher", joiningYear: 2018, batch: 2021, program: "BE CSE", domain: "AI Ethics", location: "Bangalore", company: "Google DeepMind", designation: "AI Ethics Specialist", linkedin: "https://linkedin.com/in/Naveen", image: "src/assets/Alumni-Photos/Naveen.jpg" },
  { name: "Kavin", role: "Software Quality Engineer", joiningYear: 2019, batch: 2022, program: "BE CSE", domain: "Software Testing", location: "Delhi", company: "Infosys", designation: "QA Engineer", linkedin: "https://linkedin.com/in/Kavin", image: "src/assets/Alumni-Photos/Kavin.jpg" },
  { name: "Kathirvel", role: "AI Ethics Researcher", joiningYear: 2018, batch: 2021, program: "BE CSE", domain: "AI Ethics", location: "Bangalore", company: "Google DeepMind", designation: "AI Ethics Specialist", linkedin: "https://linkedin.com/in/Kathirvel", image: "src/assets/Alumni-Photos/Kathirvel.jpg" },
  { name: "Gokul", role: "Software Quality Engineer", joiningYear: 2019, batch: 2022, program: "BE CSE", domain: "Software Testing", location: "Delhi", company: "Infosys", designation: "QA Engineer", linkedin: "https://linkedin.com/in/Gokul", image: "src/assets/Alumni-Photos/Gokul.jpg" }
];


const filterOptions = {
  "Search by Role": ["Software Engineer", "Data Scientist", "Cybersecurity Engineer", "AI Researcher", "Cloud Engineer", 
"UI/UX Designer", "Backend Developer", "DevOps Engineer", "Blockchain Developer", "Game Developer", 
"Network Engineer", "Embedded Systems Engineer", "Data Engineer", "Database Administrator", 
"Computer Vision Engineer", "Full Stack Developer", "Mobile App Developer", "AI Ethics Researcher", 
"Software Quality Engineer", "Cloud Developer"
],
  "Year of Joining": [2018, 2017, 2016, 2019, 2020, 2015, 2016, 2017, 2018, 2019, 
    2016, 2017, 2018, 2019, 2020, 2016, 2017, 2018, 2019, 2019, 2019
    ],
  "Batch": [2021, 2020, 2019, 2022, 2023, 2018, 2019, 2020, 2021, 2022, 
    2019, 2020, 2021, 2022, 2023, 2019, 2020, 2021, 2022, 2022, 2022
    ],
  "Program Name": ["BE CSE"],
  "Current Location": ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Chennai", "Kolkata", "Delhi", 
"Hyderabad", "Pune", "Bangalore", "Delhi", "Mumbai", "Kolkata", "Hyderabad", "Pune", 
"Chennai", "Bangalore", "Coimbatore", "Bangalore", "Bangalore"
],
  "Company": ["Google", "Amazon", "Microsoft", "OpenAI", "IBM", "Adobe", "Netflix", "Amazon", 
"Coinbase", "Ubisoft", "Cisco", "Intel", "Facebook", "Oracle", "Tesla", "TCS", 
"Flipkart", "Google DeepMind", "Zoho", "Infosys", "Google"
],
  "Designation": ["Senior Developer", "Data Analyst", "Security Analyst", "ML Engineer", "Cloud Architect",  
"Senior Designer", "Software Engineer", "Site Reliability Engineer", "Smart Contract Engineer",  
"Unity Developer", "Network Analyst", "Hardware Engineer", "Big Data Analyst", "DBA Specialist",  
"Vision AI Developer", "Lead Developer", "Android Developer", "AI Ethics Specialist",  
"QA Engineer", "Develop Leader"
],
};

const AlumniDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({});

  const handleFilterChange = (filter, value) => {
    setFilters((prev) => ({ ...prev, [filter]: value }));
  };

  const filterMappings = {
    "Search by Role": "role",
    "Year of Joining": "joiningYear",
    "Batch": "batch",
    "Program Name": "program",
    "Current Location": "location",
    "Company": "company",
    "Designation": "designation",
  };
  
  const filteredAlumni = alumniData.filter((alumni) => {
    return (
      Object.entries(filters).every(([key, value]) => {
        const alumniKey = filterMappings[key]; // Map the filter key to actual alumni property
        return !value || alumni[alumniKey] === value;
      }) &&
      (searchTerm === "" || alumni.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });
  
  return (
    <div className="flex">
      {/* Sidebar Filters - Added White Line on Top */}
      <div className="w-1/4 p-4 bg-gradient-to-b from-blue-900 to-blue-900 text-white min-h-screen relative">
        {/* White Line on Top */}
        <div className="absolute top-0 left-0 w-full h-4 bg-white"></div>

        <h2 className="text-xl font-bold mb-4 mt-4 text-center">Filters</h2>

        {/* Search Bar - White Background & Black Text */}
        <input
          type="text"
          placeholder="Search Alumni..."
          className="w-80 p-2 mb-4 bg-white text-black rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Display all filters */}
        {Object.entries(filterOptions).map(([filter, options]) => (
          <div key={filter} className="mb-3">
            <h3 className="text-md font-semibold mb-2">{filter}</h3>
            <select
  className="w-80 p-2 text-black rounded bg-indigo-500 text-white"
  onChange={(e) => handleFilterChange(filter, e.target.value)}
>
  <option value="" enable selected>
    Select
  </option>
  {options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>

          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">Alumni Directory</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredAlumni.length > 0 ? (
            filteredAlumni.map((alumni, index) => <AlumniCard key={index} {...alumni} />)
          ) : (
            <p className="text-center text-gray-500 col-span-3">No alumni found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlumniDirectory;