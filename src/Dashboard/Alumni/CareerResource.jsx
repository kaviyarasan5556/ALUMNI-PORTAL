import React, { useState } from "react";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import {
  BookOpen,
  Upload,
  Youtube,
  FileText,
  Video,
  Trash2,
  Plus,
  FolderOpen,
  Link,
} from "lucide-react";

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

  const categories = [
    { id: "career-tips", label: "Career Tips" },
    { id: "study-materials", label: "Study Materials" },
    { id: "interview-guidance", label: "Interview Guidance" },
    { id: "skill-development", label: "Skill Development" },
    { id: "industry-insights", label: "Industry Insights" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "youtubeLink" && value) {
      // Clear file when a YouTube link is entered
      setFormData((prev) => ({ ...prev, youtubeLink: value, file: null, fileType: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.startsWith("video") ? "video" : "document";
      // Clear YouTube link if a file is selected
      setFormData({ ...formData, file, fileType, youtubeLink: "" });
    }
  };

  const s3 = new S3Client({
    region: "ap-south-1",
    credentials: {
      accessKeyId: "AKIAUUCREI2KUPCBGSPJ", // Replace with your actual access key
      secretAccessKey: "/j87Jkdk+Q12xsrVyZ/YSaLbxqbtT3vraLi227BT", // Replace with your actual secret key
    },
  });

  const uploadFileToS3 = async (file) => {
    const fileName = `uploads/${Date.now()}_${file.name}`;
    const params = {
      Bucket: "alumni12131415",
      Key: fileName,
      Body: file,
      ContentType: file.type,
      ACL: "public-read",
    };

    try {
      const command = new PutObjectCommand(params);
      await s3.send(command);
      return `https://${params.Bucket}.s3.amazonaws.com/${fileName}`;
    } catch (err) {
      console.error("S3 Upload Error:", err);
      throw err;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || (!formData.file && !formData.youtubeLink)) {
      alert("Please provide a title and either a file or YouTube link.");
      return;
    }

    try {
      let fileUrl = "";

      if (formData.file) {
        fileUrl = await uploadFileToS3(formData.file);
      }

      const payload = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        fileUrl,
        fileType: formData.fileType,
        youtubeLink: formData.youtubeLink,
      };

      await fetch("/api/resource", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setResources([...resources, { ...payload, id: Date.now() }]);
      setFormData({
        title: "",
        description: "",
        category: "",
        file: null,
        fileType: "",
        youtubeLink: "",
      });
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  const handleDelete = (id) => {
    setResources(resources.filter((resource) => resource.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            Career Resources
          </h1>
          <p className="mt-2 text-gray-600">
            Share and access valuable career development materials
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Upload className="h-5 w-5 text-blue-600" />
                Upload Resource
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select Category</option>
                    {categories.map((c) => (
                      <option key={c.id} value={c.label}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Upload File
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.ppt,.mp4"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <FolderOpen className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-600">Choose file</span>
                    </label>
                    {formData.file && (
                      <p className="mt-2 text-sm text-gray-500">
                        Selected: {formData.file.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      YouTube Link
                    </label>
                    <div className="relative">
                      <input
                        type="url"
                        name="youtubeLink"
                        value={formData.youtubeLink}
                        onChange={handleChange}
                        placeholder="https://youtube.com/watch?v=..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                      />
                      <Youtube className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700"
                >
                  <Plus className="h-5 w-5" />
                  Add Resource
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Link className="h-5 w-5 text-blue-600" />
                Available Resources
              </h2>

              {resources.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {resources.map((resource) => (
                    <div
                      key={resource.id}
                      className="bg-gray-50 p-4 rounded-lg border hover:border-blue-300"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {resource.title}
                        </h3>
                        <button
                          onClick={() => handleDelete(resource.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">
                        {resource.description}
                      </p>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                        {resource.category}
                      </span>

                      <div className="space-y-2">
                        {resource.fileType === "document" && resource.fileUrl && (
                          <a
                            href={resource.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                          >
                            <FileText className="h-4 w-4" />
                            Download Document
                          </a>
                        )}

                        {resource.fileType === "video" && resource.fileUrl && (
                          <div className="relative pt-[56.25%]">
                            <video
                              src={resource.fileUrl}
                              controls
                              className="absolute top-0 left-0 w-full h-full rounded-lg"
                            />
                          </div>
                        )}

                        {resource.youtubeLink && (
                          <div className="relative pt-[56.25%]">
                            <iframe
                              className="absolute top-0 left-0 w-full h-full rounded-lg"
                              src={`https://www.youtube.com/embed/${new URL(resource.youtubeLink).searchParams.get("v")}`}
                              title="YouTube Video"
                              allowFullScreen
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No resources available yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerResource;
