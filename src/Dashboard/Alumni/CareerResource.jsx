import React, { useState } from "react";

const CareerResource = () => {
  const [resources, setResources] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    file: null,
    fileType: "",
    youtubeLink: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.startsWith("video") ? "video" : "document";
      setFormData({ ...formData, file, fileType, youtubeLink: "" }); // Clear YouTube link when file is uploaded
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && (formData.file || formData.youtubeLink)) {
      setResources([...resources, formData]);
      setFormData({
        title: "",
        description: "",
        category: "",
        file: null,
        fileType: "",
        youtubeLink: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Career Resource</h2>

        {/* Upload Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          ></textarea>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Category</option>
            <option value="Career Tips">Career Tips</option>
            <option value="Study Materials">Study Materials</option>
            <option value="Interview Guidance">Interview Guidance</option>
          </select>

          {/* File Upload */}
          <div>
  <label className="block text-sm font-medium text-gray-700 mb-4">Upload File</label>
  <div className="relative inline-block">
    <input
      type="file"
      accept=".pdf,.doc,.docx,.ppt,.mp4"
      onChange={handleFileChange}
      className="hidden"
      id="fileUpload"
    />
    <label
      htmlFor="fileUpload"
      className='bg-blue-600 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700 transition'

    >
      Choose
    </label>
  </div>
</div>





          {/* YouTube Video Link Input */}
          <input
            type="url"
            name="youtubeLink"
            placeholder="Paste YouTube video link (optional)"
            value={formData.youtubeLink}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Upload
          </button>
        </form>
      </div>

      {/* Display Uploaded Resources */}
      <div className="max-w-4xl mx-auto mt-8">
        {resources.length > 0 ? (
          <div className="space-y-4">
            {resources.map((res, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-2"
              >
                <h4 className="text-lg font-semibold">{res.title}</h4>
                <p className="text-gray-600">{res.description}</p>
                <p className="text-sm text-blue-500">{res.category}</p>

                {/* Display Uploaded Document */}
                {res.fileType === "document" && res.file && (
                  <a
                    href={URL.createObjectURL(res.file)}
                    download={res.file.name}
                    className="text-blue-600 underline"
                  >
                    Download Document
                  </a>
                )}

                {/* Display Uploaded Video */}
                {res.fileType === "video" && res.file && (
                  <video
                    src={URL.createObjectURL(res.file)}
                    controls
                    className="w-40 h-24 rounded"
                  />
                )}

                {/* Display YouTube Video */}
                {res.youtubeLink && (
                  <iframe
                    className="w-full h-48 rounded"
                    src={`https://www.youtube.com/embed/${new URL(res.youtubeLink).searchParams.get("v")}`}
                    title="YouTube Video"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No resources uploaded yet.</p>
        )}
      </div>
    </div>
    
  );
};

export default CareerResource;

