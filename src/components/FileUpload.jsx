import React, { useState } from "react";
import { FiUploadCloud, FiX, FiFile } from "react-icons/fi";

export default function FileUpload() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const uploaded = Array.from(e.target.files).map((file) => ({
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(1) + "MB",
    }));

    setFiles([...files, ...uploaded]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className=" mx-auto p-6  ">

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center bg-white">
        <FiUploadCloud className="mx-auto w-10 h-10 text-gray-500" />

        <p className="mt-4 text-lg font-semibold">Upload Site Information</p>
        <p className="text-gray-500 text-sm">
          Drag and drop your CSV or Excel file here, or click to select
        </p>

        <label className="inline-block mt-4 cursor-pointer">
          <input type="file" className="hidden" onChange={handleFileChange} />
          <span className="px-6 py-2 bg-blue-500 text-white rounded-md">
            Select file
          </span>
        </label>

        <p className="mt-3 text-brandBlue cursor-pointer text-sm underline">
          Download CSV Template
        </p>
      </div>

      {files.length > 0 && (
        <div className="mt-6">
          <p className="font-medium text-gray-700 mb-3">Uploaded</p>

          <div className="space-y-3">
            {files.map((file, index) => (
              <div
                key={index}
                className="bg-white shadow-sm rounded-md p-4 flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <FiFile className="text-blue-600 w-6 h-6 mr-2" />
                  <div>
                    <span className="text-gray-900 text-sm mr-2 font-medium">{file.name}</span>
                    <span className="text-blue-600 text-xs cursor-pointer font-medium">
                      Preview
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-gray-500 text-sm">{file.size}</span>

                  <button
                    onClick={() => removeFile(index)}
                    className="text-white bg-blue-600 hover:bg-blue-700 w-6 h-6 rounded-full flex items-center absolute justify-center mb-11 ml-14"
                  >
                    <FiX size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
