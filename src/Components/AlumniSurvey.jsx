import React from "react";

const AlumniSurvey = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Alumni Survey</h1>

      {/* Embedded Google Form */}
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSd7wsrfZ3iizkijSy-gghYHNzTFwUN-DXWhbYUpJCU6eVeMLA/viewform?usp=sf_link"
        width="640"
        height="800"
        className="border rounded-lg shadow-lg"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default AlumniSurvey;
