import React, { useState, useRef } from 'react';
import '../Styles/UploadVideo.css';

const UploadVideo = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);

  const handleFileInput = (event) => {
    const files = event.target.files;
    setSelectedFiles(files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('file', selectedFiles[i]);
    }

    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
        onUploadProgress: (event) => {
          const progress = Math.round((event.loaded * 100) / event.total);
          setUploadProgress(progress);
        },
      });

      if (response.ok) {
        // Handle successful upload (e.g., display a success message)
        console.log('Files uploaded successfully!');
        setSelectedFiles([]);
        setUploadProgress(0);
      } else {
        // Handle upload errors
        console.error('Upload failed:', response.statusText);
      }
    } catch (error) {
      // Handle network errors or other issues
      console.error('Error uploading files:', error);
    }
  };

  const handleClickBrowse = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="upload-container">
      <h2>Upload</h2>
      <div className="drag-drop-area">
        <p>Drag & drop Recording or <button onClick={handleClickBrowse}>Browse</button></p>
        <p> <br /> <br /> Supported formats: MP3, MP4</p>
        <input
          type="file"
          ref={fileInputRef}
          multiple
          onChange={handleFileInput}
          style={{ display: 'none' }}
        />
      </div>
      
      {selectedFiles.length > 0 && (
        <div className="file-list">
          <h4>Uploading - {selectedFiles.length} files</h4>
          <ul>
            {selectedFiles.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
      {uploadProgress > 0 && (
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${uploadProgress}%` }}>
            {uploadProgress}%
          </div>
        </div>
      )}
      <button className="upload-buttonn" onClick={handleUpload} disabled={selectedFiles.length === 0}>
        UPLOAD RECORDING
      </button>
    </div>
  );
};

export default UploadVideo;