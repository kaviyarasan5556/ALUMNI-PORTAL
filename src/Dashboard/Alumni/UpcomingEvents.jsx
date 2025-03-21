"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Upload, Calendar, MapPin, User, FileText, Image, Check, X } from "lucide-react"

const UpcomingEvents = ({ setEventData }) => {
  const [formData, setFormData] = useState({
    eventVenue: "",
    eventDate: "",
    eventAlumni: "",
    eventDocument: null,
    eventDocumentName: "",
    eventImage: null,
    eventImagePreview: "",
    eventExtraImage: null,
    eventExtraImagePreview: "",
    conferenceVenue: "",
    conferenceDate: "",
    conferenceAlumni: "",
    conferenceDocument: null,
    conferenceDocumentName: "",
    conferenceImage: null,
    conferenceImagePreview: "",
    conferenceExtraImage: null,
    conferenceExtraImagePreview: "",
  })

  const [uploading, setUploading] = useState({
    conference: false,
    event: false,
  })

  const [uploadSuccess, setUploadSuccess] = useState({
    conference: false,
    event: false,
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    if (files.length > 0) {
      if (name.includes("Document")) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: files[0],
          [`${name}Name`]: files[0].name,
        }))
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: files[0],
          [`${name}Preview`]: URL.createObjectURL(files[0]),
        }))
      }
    }
  }

  const handleSubmit = (section) => {
    // Simulate upload process
    setUploading({ ...uploading, [section]: true })

    setTimeout(() => {
      setUploading({ ...uploading, [section]: false })
      setUploadSuccess({ ...uploadSuccess, [section]: true })

      // Reset success message after 3 seconds
      setTimeout(() => {
        setUploadSuccess({ ...uploadSuccess, [section]: false })
      }, 3000)

      setEventData([formData]) // Save data to state
      // navigate("/display"); // Commented out to prevent navigation for demo
    }, 1500)
  }

  // Check if any field in Conference section is filled
  const isConferenceFilled =
    formData.conferenceVenue.trim() !== "" ||
    formData.conferenceDate.trim() !== "" ||
    formData.conferenceAlumni.trim() !== "" ||
    formData.conferenceDocument !== null ||
    formData.conferenceImage !== null ||
    formData.conferenceExtraImage !== null

  // Check if any field in Upcoming Events section is filled
  const isEventFilled =
    formData.eventVenue.trim() !== "" ||
    formData.eventDate.trim() !== "" ||
    formData.eventAlumni.trim() !== "" ||
    formData.eventDocument !== null ||
    formData.eventImage !== null ||
    formData.eventExtraImage !== null

  const renderFileUpload = (type, section) => {
    const isDocument = type === "Document"
    const fieldName = `${section}${type}`
    const previewField = isDocument ? `${fieldName}Name` : `${fieldName}Preview`
    const hasFile = formData[previewField] ? true : false

    return (
      <div className="mb-4">
        <div className="flex items-center mb-2">
          {isDocument ? (
            <FileText size={18} className="mr-2 text-blue-600" />
          ) : (
            <Image size={18} className="mr-2 text-blue-600" />
          )}
          <label className="text-sm font-medium text-gray-700">
            {isDocument ? "Upload Document" : `Upload ${type === "Image" ? "Primary" : "Secondary"} Image`}
          </label>
        </div>

        <div
          className={`border-2 border-dashed rounded-lg p-4 transition-all ${hasFile ? "border-green-400 bg-green-50" : "border-gray-300 hover:border-blue-400"}`}
        >
          <input
            type="file"
            name={fieldName}
            onChange={handleFileChange}
            className="hidden"
            id={fieldName}
            accept={isDocument ? ".pdf,.doc,.docx,.txt" : "image/*"}
          />

          <label htmlFor={fieldName} className="cursor-pointer flex flex-col items-center justify-center">
            {hasFile ? (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <Check size={18} className="text-green-500 mr-2" />
                  <span className="text-sm text-gray-700 truncate max-w-[200px]">
                    {isDocument ? formData[previewField] : "Image uploaded"}
                  </span>
                </div>
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700"
                  onClick={(e) => {
                    e.preventDefault()
                    setFormData({
                      ...formData,
                      [fieldName]: null,
                      [previewField]: "",
                    })
                  }}
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <div className="text-center">
                <Upload className="mx-auto h-10 w-10 text-gray-400" />
                <p className="mt-1 text-sm text-gray-500">Click to upload {isDocument ? "document" : "image"}</p>
                <p className="text-xs text-gray-400">
                  {isDocument ? "PDF, DOC, DOCX, TXT" : "PNG, JPG, GIF up to 10MB"}
                </p>
              </div>
            )}
          </label>
        </div>

        {!isDocument && formData[previewField] && (
          <div className="mt-2 relative rounded-lg overflow-hidden border border-gray-200">
            <img
              src={formData[previewField] || "/placeholder.svg"}
              alt="Preview"
              className="w-full h-40 object-cover"
            />
          </div>
        )}
      </div>
    )
  }

  const renderInputField = (name, placeholder, icon, section) => {
    const fieldName = `${section}${name}`
    return (
      <div className="mb-4">
        <div className="flex items-center mb-2">
          {icon}
          <label htmlFor={fieldName} className="text-sm font-medium text-gray-700 ml-2">
            {placeholder}
          </label>
        </div>
        <input
          type={name === "Date" ? "date" : "text"}
          id={fieldName}
          name={fieldName}
          placeholder={name === "Date" ? "" : placeholder}
          value={formData[fieldName]}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Event Management</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Conference */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="bg-blue-600 p-4">
              <h2 className="text-2xl font-bold text-white text-center">Conference</h2>
            </div>

            <div className="p-6">
              {renderFileUpload("Document", "conference")}
              {renderFileUpload("Image", "conference")}
              {renderFileUpload("ExtraImage", "conference")}

              {renderInputField(
                "Venue",
                "Venue ",
                <MapPin size={18} className="text-blue-600" />,
                "conference",
              )}
              {renderInputField("Date", "Event Date", <Calendar size={18} className="text-blue-600" />, "conference")}
              {renderInputField("Alumni", "Alumni Name", <User size={18} className="text-blue-600" />, "conference")}

              {/* Upload Button for Conference */}
              <div className="mt-6">
                <button
                  onClick={() => handleSubmit("conference")}
                  disabled={!isConferenceFilled || uploading.conference}
                  className={`w-full flex items-center justify-center py-3 px-4 rounded-lg text-white font-medium transition-all ${
                    isConferenceFilled && !uploading.conference
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  {uploading.conference ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Uploading...
                    </>
                  ) : uploadSuccess.conference ? (
                    <>
                      <Check className="mr-2" size={20} />
                      Upload Successful!
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2" size={20} />
                      Upload Conference
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Upcoming Events */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="bg-green-600 p-4">
              <h2 className="text-2xl font-bold text-white text-center">Upcoming Events</h2>
            </div>

            <div className="p-6">
              {renderFileUpload("Document", "event")}
              {renderFileUpload("Image", "event")}
              {renderFileUpload("ExtraImage", "event")}

              {renderInputField("Venue", "Venue ", <MapPin size={18} className="text-green-600" />, "event")}
              {renderInputField("Date", "Event Date", <Calendar size={18} className="text-green-600" />, "event")}
              {renderInputField("Alumni", "Alumni Name", <User size={18} className="text-green-600" />, "event")}

              {/* Upload Button for Upcoming Events */}
              <div className="mt-6">
                <button
                  onClick={() => handleSubmit("event")}
                  disabled={!isEventFilled || uploading.event}
                  className={`w-full flex items-center justify-center py-3 px-4 rounded-lg text-white font-medium transition-all ${
                    isEventFilled && !uploading.event
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  {uploading.event ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Uploading...
                    </>
                  ) : uploadSuccess.event ? (
                    <>
                      <Check className="mr-2" size={20} />
                      Upload Successful!
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2" size={20} />
                      Upload Event
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvents