import React from "react";

const GoogleForm = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Google Form</h1>

      {/* Embedded Google Form */}
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfHQAdldWhuSQi6b1cDv7nVnTrBn3lSmtxEd9nTNg8j9XaMLg/viewform?embedded=true" width="640" height="1847" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  );
};

export default GoogleForm;
