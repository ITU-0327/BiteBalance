import React, { useRef, useState } from 'react';
import axios from 'axios';
import FrameComponent3 from "../components/FrameComponent3";
import "./CameraScan1.css";

const CameraScan1 = () => {
  const [imageData, setImageData] = useState(''); // To store the base64 image data
  const [imageSelected, setImageSelected] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]); // To keep track of the displayed images
  const fileInputRef = useRef(null);

  const handleDelete = (fileName) => {
    setUploadedFiles(uploadedFiles.filter(file => file.fileName !== fileName));
  };

  const handleCapture = (e) => {
    const file = e.target.files[0];
    if (file && file.type.match('image.*')) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        const base64Image = fileReader.result;
        setImageData(base64Image); // Store the image data in state
        setImageSelected(true);
        
        // Update the uploadedFiles state to show the image immediately
        const newFile = {
          src: base64Image,
          fileName: file.name, // Use the actual file name from the user's computer
          uploadDate: new Date().toLocaleDateString()
        };
        setUploadedFiles([...uploadedFiles, newFile]);
      };
    }
  };

  const handleUpload = async () => {
    if (imageData && imageSelected) {
      try {
        const response = await axios.post('https://bitebalance-chatbot.azurewebsites.net/api/chatbot_function', {
          image: imageData.split('base64,')[1],
        });
        alert('Image uploaded successfully!');
        console.log(response.data);
        setImageSelected(false); // Reset after upload
        
        // You could clear the uploadedFiles if you only want to show images that are not yet uploaded
        // setUploadedFiles([]);
        
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Failed to upload image.');
        // Remove the image from the uploadedFiles if the upload fails
        setUploadedFiles(uploadedFiles.filter(file => file.src !== imageData));
      }
    } else {
      alert('Please select an image first.');
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    handleCapture({ target: { files: event.dataTransfer.files } });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="camera-scan1" onDrop={handleDrop} onDragOver={handleDragOver}>
      <section className="frames-collection">
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept="image/jpeg,image/png"
          capture="environment"
          onChange={handleCapture}
        />
        <button className="input-area" onClick={imageSelected ? handleUpload : handleBrowseClick}>
          <b className="upload-your-pantry1">{imageSelected ? 'Upload your pantry!' : 'Select your pantry image'}</b>
        </button>
        <img
          className="cloud-img-icon"
          loading="eager"
          alt=""
          src="/cloud-img@2x.png"
        />
        <b className="drag-and-drop1">Drag and drop your picture here</b>
        <b className="files-supported-jpg1">Files supported: JPG, PNG</b>
        <b className="or1">or</b>
        <button className="browse-button" onClick={handleBrowseClick}>
          <b className="browse-picture1">Browse picture</b>
        </button>
        <b className="maximum-size1">Maximum size : 5MB</b>
      </section>
      <FrameComponent3 files={uploadedFiles} onDelete={handleDelete} />
    </div>
  );
};

export default CameraScan1;
