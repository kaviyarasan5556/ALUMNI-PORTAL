"use client"

import { useState } from "react"
import { Upload, Calendar, MapPin, User, FileText, Image, Check, X } from "lucide-react"

const Conference = ({ setEventData }) => {
  const [formData, setFormData] = useState({
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

  const [uploading, setUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)

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

  const handleSubmit = () => {
    setUploading(true)

    setTimeout(() => {
      setUploading(false)
      setUploadSuccess(true)

      setTimeout(() => {
        setUploadSuccess(false)
      }, 3000)

      setEventData([formData])
    }, 1500)
  }

  const isConferenceFilled =
    formData.conferenceVenue.trim() !== "" ||
    formData.conferenceDate.trim() !== "" ||
    formData.conferenceAlumni.trim() !== "" ||
    formData.conferenceDocument !== null ||
    formData.conferenceImage !== null ||
    formData.conferenceExtraImage !== null

  const renderFileUpload = (type) => {
    const isDocument = type === "Document"
    const fieldName = `conference${type}`
    const previewField = isDocument ? `${fieldName}Name` : `${fieldName}Preview`
    const hasFile = formData[previewField] ? true : false

    return (
      <div className="mb-6">
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
          className={`border-2 border-dashed rounded-lg p-6 transition-all ${
            hasFile ? "border-blue-400 bg-blue-50" : "border-gray-300 hover:border-blue-400"
          }`}
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
          <div className="mt-3 relative rounded-lg overflow-hidden border border-gray-200">
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

  const renderInputField = (name, placeholder, icon) => {
    const fieldName = `conference${name}`
    return (
      <div className="mb-6">
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
          className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>
    )
  }

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-2xl mx-auto mt-16 p-8">
      <div className="bg-blue-600 p-6 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full transform translate-x-16 -translate-y-16 opacity-50"></div>
        <h2 className="text-2xl font-bold text-white text-center relative z-10">Conference</h2>
        <p className="text-blue-100 text-center mt-2 relative z-10">Add a new conference</p>
      </div>

      <div className="p-6">
        {renderFileUpload("Document")}
        {renderFileUpload("Image")}
        {renderFileUpload("ExtraImage")}

        {renderInputField("Venue", "Venue", <MapPin size={18} className="text-blue-600" />)}
        {renderInputField("Date", "Event Date", <Calendar size={18} className="text-blue-600" />)}
        {renderInputField("Alumni", "Alumni Name", <User size={18} className="text-blue-600" />)}

        <div className="mt-6">
          <button
            onClick={handleSubmit}
            disabled={!isConferenceFilled || uploading}
            className={`w-full flex items-center justify-center py-4 px-5 rounded-lg text-white font-medium transition duration-300 transform hover:scale-105 ${
              isConferenceFilled && !uploading ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {uploading ? "Uploading..." : uploadSuccess ? "Upload Successful!" : "Upload Conference"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Conference;
